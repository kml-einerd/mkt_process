import json
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
data=json.loads((ROOT/'operacao-v2/data/operacao.json').read_text())
assert data['meta']['version']=='2.0.0'
assert len(data['levels'])==5
assert len(data['motors'])==5
assert len(data['processes'])==5
assert len(data['fiches'])==5
assert len(data['gates'])==5
assert len(data['cadences'])==4
ids=[]
for collection in ['levels','motors','processes','fiches','gates','cadences']:
    for item in data[collection]:
        assert item['id'] not in ids, f'duplicate id: {item["id"]}'
        ids.append(item['id'])
motors={x['id'] for x in data['motors']}
gates={x['id'] for x in data['gates']}
for p in data['processes']:
    assert p['motor'] in motors, p['id']
    assert p['gate'] in gates, p['id']
    assert p['steps'] and p['dod'], p['id']
html=(ROOT/'operacao-v2/index.html').read_text()
for element in ['kpis','levels','levelsTable','motors','processCards','processFilter','fichesCards','gates','cadences','links']:
    assert f'id="{element}"' in html, element
print(f'PASS: {len(ids)} IDs, {len(data["processes"])} processos, {len(data["motors"])} motores, interface referenciada')
