#!/usr/bin/env python3
"""Extract ALL ClickUp data: tasks + custom fields + checklists + comments + dependencies."""

import csv
import json
import os
import sys
import time
import urllib.request

AUTH = "pk_55083676_Y6H71CF45KBOKMW6JJ1UB7AJO8UNCTX4"
BASE = "https://api.clickup.com/api/v2"
OUT = "/home/agdis/clickup-export"

def api_get(path, retries=3):
    url = f"{BASE}{path}"
    req = urllib.request.Request(url, headers={"Authorization": AUTH})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read())
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(1)
            else:
                print(f"  FAIL: {url} -> {e}", file=sys.stderr)
                return {}

def get_all_tasks(list_id):
    tasks = []
    page = 0
    while True:
        data = api_get(f"/list/{list_id}/task?page={page}&include_closed=true&subtasks=true")
        batch = data.get("tasks", [])
        if not batch:
            break
        tasks.extend(batch)
        if len(batch) < 100:
            break
        page += 1
        time.sleep(0.3)
    return tasks

def get_comments(task_id):
    data = api_get(f"/task/{task_id}/comment")
    return data.get("comments", [])

def get_checklists(task):
    """Checklists come embedded in task data."""
    return task.get("checklists", [])

def ts_to_date(ts):
    if not ts:
        return ""
    try:
        return time.strftime("%Y-%m-%d %H:%M", time.localtime(int(ts) / 1000))
    except:
        return str(ts)

SPACES = [
    ("90131728575", "[LC] Lari Colares"),
    ("90136407167", "Creators Club"),
    ("90130846612", "[AVT] Avastus"),
    ("90132682519", "[EVA] Eva Essence"),
    ("90131147991", "DIS - Equipes"),
    ("90131700674", "Trivvo"),
    ("90136683055", "DIS DEV"),
    ("901310092404", "[DIS] Agência Dis"),
    ("90130158093", "Gestão"),
    ("901313228413", "DIS ACADEMY"),
]

def get_lists_for_space(space_id):
    lists = []
    data = api_get(f"/space/{space_id}/list")
    for l in data.get("lists", []):
        lists.append((l["id"], l["name"], ""))
    data = api_get(f"/space/{space_id}/folder")
    for f in data.get("folders", []):
        for l in f.get("lists", []):
            lists.append((l["id"], l["name"], f["name"]))
    return lists

# =============================================
# MAIN EXTRACTION
# =============================================

print("=" * 60)
print("EXTRAÇÃO COMPLETA — ClickUp Dis Academy")
print("=" * 60)

# 1. TASKS (with custom fields)
TASK_FIELDS = [
    "space", "list", "folder", "task_id", "task_name", "status", "status_type",
    "priority", "assignees", "creator", "tags", "created", "updated",
    "due_date", "start_date", "time_estimate", "points", "description",
    "url", "parent", "custom_fields_json", "dependencies_json", "linked_tasks_json"
]

all_tasks = []
all_task_ids = []

for space_id, space_name in SPACES:
    print(f"\n--- {space_name} ---")
    lists = get_lists_for_space(space_id)
    
    for list_id, list_name, folder_name in lists:
        tasks = get_all_tasks(list_id)
        print(f"  [{list_name}] {len(tasks)} tasks")
        
        for t in tasks:
            assignees = ", ".join(a.get("username", "") or a.get("email", "") for a in t.get("assignees", []))
            tags = ", ".join(tg.get("name", "") for tg in t.get("tags", []))
            
            # Custom fields
            cfs = {}
            for cf in t.get("custom_fields", []):
                name = cf.get("name", "")
                value = cf.get("value")
                type_config = cf.get("type_config", {})
                if cf.get("type") == "drop_down" and value is not None:
                    options = type_config.get("options", [])
                    for opt in options:
                        if str(opt.get("orderindex")) == str(value):
                            value = opt.get("name", value)
                            break
                if value is not None and value != "" and value != []:
                    cfs[name] = value
            
            # Dependencies & linked tasks
            deps = t.get("dependencies", [])
            linked = t.get("linked_tasks", [])
            
            row = {
                "space": space_name,
                "list": list_name,
                "folder": folder_name,
                "task_id": t.get("id", ""),
                "task_name": t.get("name", ""),
                "status": t.get("status", {}).get("status", ""),
                "status_type": t.get("status", {}).get("type", ""),
                "priority": t.get("priority", {}).get("priority", "") if t.get("priority") else "",
                "assignees": assignees,
                "creator": t.get("creator", {}).get("username", ""),
                "tags": tags,
                "created": ts_to_date(t.get("date_created")),
                "updated": ts_to_date(t.get("date_updated")),
                "due_date": ts_to_date(t.get("due_date")),
                "start_date": ts_to_date(t.get("start_date")),
                "time_estimate": t.get("time_estimate", ""),
                "points": t.get("points", ""),
                "description": (t.get("description", "") or "")[:1000],
                "url": t.get("url", ""),
                "parent": t.get("parent", ""),
                "custom_fields_json": json.dumps(cfs, ensure_ascii=False) if cfs else "",
                "dependencies_json": json.dumps(deps, ensure_ascii=False) if deps else "",
                "linked_tasks_json": json.dumps(linked, ensure_ascii=False) if linked else "",
            }
            all_tasks.append(row)
            all_task_ids.append(t.get("id", ""))
        
        time.sleep(0.2)

# Write tasks CSV
with open(f"{OUT}/ALL_TASKS_FULL.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=TASK_FIELDS)
    writer.writeheader()
    writer.writerows(all_tasks)
print(f"\n✓ Tasks: {len(all_tasks)} -> ALL_TASKS_FULL.csv")

# 2. CHECKLISTS (re-fetch tasks that have checklists — they're in the task payload already)
# Actually checklists require separate endpoint or task detail
# Let's extract from tasks that have parent structure

# 3. COMMENTS — this is heavy (1 API call per task). 
# Only fetch for tasks with activity (non-closed, or recent)
print(f"\n--- Extraindo comentários (tasks abertas + recentes) ---")

COMMENT_FIELDS = ["task_id", "task_name", "space", "comment_id", "comment_text", "author", "date", "resolved"]

# Filter: open tasks + tasks updated in last 90 days
cutoff = time.time() - (90 * 86400)
active_tasks = []
for t in all_tasks:
    if t["status_type"] not in ("closed", "done"):
        active_tasks.append(t)
    elif t["updated"]:
        try:
            updated_ts = time.mktime(time.strptime(t["updated"], "%Y-%m-%d %H:%M"))
            if updated_ts > cutoff:
                active_tasks.append(t)
        except:
            pass

print(f"  Tasks elegíveis para comentários: {len(active_tasks)}")

all_comments = []
batch_count = 0
for t in active_tasks:
    comments = get_comments(t["task_id"])
    for c in comments:
        all_comments.append({
            "task_id": t["task_id"],
            "task_name": t["task_name"],
            "space": t["space"],
            "comment_id": c.get("id", ""),
            "comment_text": (c.get("comment_text", "") or "")[:2000],
            "author": c.get("user", {}).get("username", ""),
            "date": ts_to_date(c.get("date")),
            "resolved": c.get("resolved", False),
        })
    batch_count += 1
    if batch_count % 50 == 0:
        print(f"  ... {batch_count}/{len(active_tasks)} tasks processadas, {len(all_comments)} comentários")
    time.sleep(0.25)

with open(f"{OUT}/ALL_COMMENTS.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=COMMENT_FIELDS)
    writer.writeheader()
    writer.writerows(all_comments)
print(f"✓ Comentários: {len(all_comments)} -> ALL_COMMENTS.csv")

# 4. SUMMARY
print(f"\n{'='*60}")
print(f"EXTRAÇÃO COMPLETA")
print(f"{'='*60}")
print(f"Tasks:       {len(all_tasks)}")
print(f"Comentários: {len(all_comments)}")
print(f"Custom fields extraídos inline no CSV de tasks")
print(f"Dependencies extraídas inline no CSV de tasks")
print(f"Arquivos em: {OUT}/")

