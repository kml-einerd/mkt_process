#!/usr/bin/env python3
"""Extract all ClickUp tasks to CSV, space by space."""

import csv
import json
import os
import sys
import time
import urllib.request

AUTH = "pk_55083676_Y6H71CF45KBOKMW6JJ1UB7AJO8UNCTX4"
BASE = "https://api.clickup.com/api/v2"
OUT_DIR = "/home/agdis/clickup-export"

def api_get(path):
    url = f"{BASE}{path}"
    req = urllib.request.Request(url, headers={"Authorization": AUTH})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read())
    except Exception as e:
        print(f"  ERROR: {url} -> {e}", file=sys.stderr)
        return {}

def get_all_tasks(list_id):
    """Paginate through all tasks in a list."""
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
        time.sleep(0.3)  # rate limit
    return tasks

def extract_task(task, space_name, list_name):
    assignees = ", ".join(a.get("username", "") or a.get("email", "") for a in task.get("assignees", []))
    tags = ", ".join(t.get("name", "") for t in task.get("tags", []))
    watchers = ", ".join(w.get("username", "") or "" for w in task.get("watchers", []))

    created = task.get("date_created", "")
    updated = task.get("date_updated", "")
    due = task.get("due_date", "")
    start = task.get("start_date", "")

    # Convert timestamps to readable dates
    def ts_to_date(ts):
        if not ts:
            return ""
        try:
            return time.strftime("%Y-%m-%d %H:%M", time.localtime(int(ts) / 1000))
        except:
            return ts

    return {
        "space": space_name,
        "list": list_name,
        "folder": task.get("folder", {}).get("name", "") if task.get("folder") else "",
        "task_id": task.get("id", ""),
        "task_name": task.get("name", ""),
        "status": task.get("status", {}).get("status", ""),
        "status_type": task.get("status", {}).get("type", ""),
        "priority": task.get("priority", {}).get("priority", "") if task.get("priority") else "",
        "assignees": assignees,
        "creator": task.get("creator", {}).get("username", ""),
        "tags": tags,
        "created": ts_to_date(created),
        "updated": ts_to_date(updated),
        "due_date": ts_to_date(due),
        "start_date": ts_to_date(start),
        "time_estimate": task.get("time_estimate", ""),
        "points": task.get("points", ""),
        "description": (task.get("description", "") or "")[:500],
        "url": task.get("url", ""),
        "parent": task.get("parent", ""),
    }

FIELDS = [
    "space", "list", "folder", "task_id", "task_name", "status", "status_type",
    "priority", "assignees", "creator", "tags", "created", "updated",
    "due_date", "start_date", "time_estimate", "points", "description", "url", "parent"
]

# Define spaces
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
    """Get all lists (folder + folderless) for a space."""
    lists = []

    # Folderless lists
    data = api_get(f"/space/{space_id}/list")
    for l in data.get("lists", []):
        lists.append((l["id"], l["name"], ""))

    # Folder lists
    data = api_get(f"/space/{space_id}/folder")
    for f in data.get("folders", []):
        for l in f.get("lists", []):
            lists.append((l["id"], l["name"], f["name"]))

    return lists

def extract_space(space_id, space_name):
    """Extract all tasks from a space to CSV."""
    safe_name = space_name.replace("[", "").replace("]", "").replace(" ", "_").replace("/", "-")
    csv_path = os.path.join(OUT_DIR, f"{safe_name}.csv")

    print(f"\n{'='*60}")
    print(f"SPACE: {space_name} (id={space_id})")
    print(f"{'='*60}")

    lists = get_lists_for_space(space_id)
    print(f"  Lists found: {len(lists)}")

    all_rows = []
    for list_id, list_name, folder_name in lists:
        tasks = get_all_tasks(list_id)
        print(f"  [{list_name}] -> {len(tasks)} tasks")
        for t in tasks:
            row = extract_task(t, space_name, list_name)
            if folder_name:
                row["folder"] = folder_name
            all_rows.append(row)
        time.sleep(0.2)

    # Write CSV
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(all_rows)

    print(f"  TOTAL: {len(all_rows)} tasks -> {csv_path}")
    return len(all_rows), csv_path

if __name__ == "__main__":
    # If arg passed, extract only that space index
    if len(sys.argv) > 1:
        idx = int(sys.argv[1])
        space_id, space_name = SPACES[idx]
        count, path = extract_space(space_id, space_name)
        print(f"\nDone: {count} tasks exported to {path}")
    else:
        # Extract all
        total = 0
        paths = []
        for space_id, space_name in SPACES:
            count, path = extract_space(space_id, space_name)
            total += count
            paths.append((space_name, count, path))

        print(f"\n{'='*60}")
        print(f"RESUMO FINAL")
        print(f"{'='*60}")
        for name, count, path in paths:
            print(f"  {name}: {count} tasks")
        print(f"  TOTAL GERAL: {total} tasks")
        print(f"  Arquivos em: {OUT_DIR}/")
