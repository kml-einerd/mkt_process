# Central de Operações (visual) — Petaxxon

App React Flow (xyflow) que desenha os **processos** do vault como fluxogramas com **nós ricos e clicáveis**
(status, dono, links, detalhe → ficha do vault). É o "BPMN" visual da operação.

## Rodar
```bash
cd petaxxon/central
npm install      # 1ª vez
npm run dev      # abre http://localhost:5173
npm run build    # gera dist/ estático (abre por file:// também)
```

## Como mapear um processo novo (data-driven)
1. Copie `src/data/processos/producao-ativos.js` para `src/data/processos/<id>.js` e preencha
   `lanes` (raias/papéis), `nodes` (passos: label, dono, status, ficha, detalhe) e `edges` (fluxo).
2. Registre em `src/data/registry.js` (`PROCESSOS` + categoria). O visual renderiza igual — **não se mexe no código**.

## Estrutura
- `src/data/registry.js` — inventário de todos os processos (catálogo + o que falta).
- `src/data/processos/*.js` — um arquivo por processo (os dados).
- `src/data/shared.js` — paleta, status, geometria das raias.
- `src/components/` — `ProcessNode` (nó rico), `LaneNode` (raia), `Sidebar`, `DetailPanel`.
- `src/App.jsx` — converte os dados em nós/arestas do React Flow.

## Status
Protótipo: **1 processo desenhado** (Produção de Ativos, com raias e nós clicáveis).
Os demais aparecem na barra lateral como "a desenhar" — é o inventário a preencher.
