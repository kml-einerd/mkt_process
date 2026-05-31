# Petaxxon Fase 0 — Fonte + Molde + Macro · Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Adaptação de domínio:** este projeto entrega **documentos markdown + HTML**, não software com testes. Onde a skill pede "teste que falha → implementação → teste passa", usamos **"Checklist de Pronto (DoD) → construir → verificar contra o checklist"**. Para o HTML, use a skill `frontend-design` na execução.

**Goal:** Criar o meta-sistema do modelo Petaxxon — a estrutura de pastas, os 4 templates reutilizáveis (o "molde"), e o esqueleto HTML navegável das 8 abas com a aba Macro preenchida.

**Architecture:** Uma pasta `petaxxon/` separada de `diagnostico/` (DIS) e `Recursos/` (fonte). Os templates em `_templates/` são o molde que torna todo funil/setup/POP plugável. O HTML em `mapa/index.html` reusa a estética editorial do `diagnostico/index.html` (variáveis CSS paper/ink/accent, zero dependências) com navegação por abas em JS puro; cada aba traz o componente das 3 camadas (Ideal/Foto/Gaps) e a legenda de status (roda/testar/desenhar).

**Tech Stack:** Markdown; HTML/CSS/JS vanilla (sem build, sem CDN obrigatório); estética herdada de `diagnostico/index.html`.

---

## Estrutura de arquivos (decisões de decomposição)

```
petaxxon/
├── README.md              # o que é o modelo + como usar os templates
├── _templates/
│   ├── funil-template.md      # ficha de cada tipo de funil
│   ├── setup-template.md      # checklist de fundação
│   ├── pop-template.md        # procedimento operacional padrão
│   └── campanha-template.md   # rota/playbook de campanha
└── mapa/
    └── index.html         # HTML navegável das 8 abas (Macro preenchida; 01-07 stub)
```

Cada arquivo tem uma responsabilidade única. Os templates são curtos e independentes. O HTML é um único arquivo auto-contido (como o `diagnostico/index.html` atual).

---

### Task 1: Scaffold da pasta + README

**Files:**
- Create: `petaxxon/README.md`

- [ ] **Step 1: DoD desta task**
  - [ ] Pasta `petaxxon/` existe com subpastas `_templates/` e `mapa/`.
  - [ ] `README.md` explica o que é o modelo, os 3 pilares, as 3 camadas e como usar os templates.

- [ ] **Step 2: Criar pastas**

Run:
```bash
cd "/Volumes/HD 4TB/MKT/process_mkt-digital" && mkdir -p petaxxon/_templates petaxxon/mapa && ls -R petaxxon
```
Expected: lista `_templates` e `mapa`.

- [ ] **Step 3: Escrever `petaxxon/README.md`**

```markdown
# Petaxxon — Modelo Operacional de Marketing & Monetização

Modelo neutro e reutilizável para **monetizar a base** de um grupo de mídia creator-led.
Simples por fora (8 abas), completo por dentro (macro→micro). Plugável: muda o front-end,
a esteira permanece.

## Como navegar
Abra `mapa/index.html` no navegador. As 8 abas vão do macro ao micro:
00 Visão Macro · 01 Setups · 02 Produtos & Esteira · 03 Biblioteca de Funis ·
04 Rotas de Campanha · 05 Operação & Cadência · 06 Dados & Decisão · 07 Replicação/DarkPixel.

## As 3 camadas (em toda aba)
- **Ideal** — como deveria ser (o padrão a seguir)
- **Foto atual** — como está hoje (roda / a testar / a desenhar)
- **Gaps** — o que falta produzir (backlog)

## Como usar os templates (`_templates/`)
- `funil-template.md` — para documentar um novo tipo de funil
- `setup-template.md` — para documentar uma fundação
- `pop-template.md` — para um procedimento passo a passo
- `campanha-template.md` — para uma rota/playbook de campanha

Copie o template, preencha, e linke a partir da aba correspondente no HTML.

## Fonte
Baseado em padrões extraídos da operação DIS (`../Recursos/clickup-export/`, `../diagnostico/`),
porém **neutralizado**: este modelo não documenta a DIS.
```

- [ ] **Step 4: Verificar**

Run: `cat petaxxon/README.md | head -5 && ls petaxxon/_templates petaxxon/mapa`
Expected: cabeçalho do README + pastas vazias listadas.

- [ ] **Step 5: Commit**

```bash
git add petaxxon/README.md && git commit -m "feat(petaxxon): scaffold da pasta do modelo + README"
```

---

### Task 2: Template — Ficha de Funil

**Files:**
- Create: `petaxxon/_templates/funil-template.md`

- [ ] **Step 1: DoD desta task**
  - [ ] Template cobre: o que é/quando usar, estrutura em blocos, checklist de componentes obrigatórios, esteira plugada, setups exigidos, métricas/pass-fail, dono/DoD, 3 camadas.

- [ ] **Step 2: Escrever `petaxxon/_templates/funil-template.md`**

```markdown
# Funil: [NOME DO FUNIL] — [tipo: VSL | Typebot | Webinário | Captura | Recuperação | SaaS-trial | Orgânico]

> **Status:** roda | a testar | a desenhar  ·  **Rota:** A (captura→nutrir→vender) | B (venda direta)
> **Produto(s):** [...]  ·  **Dono:** [papel]

## 1. O que é & quando usar
[1-3 frases. Qual problema de aquisição/venda este funil resolve e em que cenário escolher ele.]

## 2. Estrutura (blocos) — o caminho do lead
[Diagrama de blocos, entrada → conversão. Ex.:]
```
Anúncio/Conteúdo → Página/Bot → VSL → Checkout → [Esteira]
```

## 3. O que TEM que ter dentro (checklist de componentes obrigatórios)
- [ ] [componente 1 — ex.: VSL com X minutos / oferta clara]
- [ ] [componente 2 — ex.: página com prova social + garantia]
- [ ] [componente 3 — ex.: checkout com 5 order bumps]
- [ ] [tracking: UTM + pixel + evento de conversão]

## 4. Esteira plugada (mecânica padrão)
```
[front-end] → 5 ORDER BUMPS → UPSELL 1: PlaySquad → continuação: [...]
```

## 5. Setups exigidos (links p/ Aba 01)
- [ ] Infra & Contas: [...]
- [ ] Tracking & Dados: [...]
- [ ] CRM & Listas: [...]
- [ ] Nomenclatura: [...]
- [ ] Biblioteca de Ativos: [...]

## 6. Métricas & critério pass/fail
| Métrica | Meta | Ação se abaixo |
|---|---|---|
| [CPA / conversão / ROAS] | [meta] | [reteste/descarte] |

## 7. Dono & Definition of Done
Quem PRODUZ não conclui; quem APROVA conclui. DoD: [...]

## 8. As 3 camadas
- **Ideal:** [...]
- **Foto atual:** [roda/testar/desenhar + o que existe hoje]
- **Gaps:** [o que falta produzir]
```

- [ ] **Step 3: Verificar contra DoD**

Run: `grep -c "^## " petaxxon/_templates/funil-template.md`
Expected: `8` (oito seções).

- [ ] **Step 4: Commit**

```bash
git add petaxxon/_templates/funil-template.md && git commit -m "feat(petaxxon): template de ficha de funil"
```

---

### Task 3: Template — Setup (fundação)

**Files:**
- Create: `petaxxon/_templates/setup-template.md`

- [ ] **Step 1: DoD desta task**
  - [ ] Template cobre: objetivo, checklist do que precisa existir, dono/ferramenta, padrão/convenção, 3 camadas.

- [ ] **Step 2: Escrever `petaxxon/_templates/setup-template.md`**

```markdown
# Setup: [NOME — ex.: Tracking & Dados]

> **Dono:** [papel]  ·  **Ferramenta(s):** [...]

## Objetivo
[Por que este setup existe e o que ele garante para QUALQUER funil/campanha.]

## Checklist do que precisa existir (antes de rodar qualquer funil)
- [ ] [item 1]
- [ ] [item 2]
- [ ] [item 3]

## Padrão / convenção
[O padrão fixo — ex.: nomenclatura, estrutura de pastas, regra de tags.]

## Definition of Done
[Como saber que o setup está pronto e correto.]

## As 3 camadas
- **Ideal:** [...]
- **Foto atual:** [...]
- **Gaps:** [...]
```

- [ ] **Step 3: Verificar**

Run: `grep -c "^## " petaxxon/_templates/setup-template.md`
Expected: `5`.

- [ ] **Step 4: Commit**

```bash
git add petaxxon/_templates/setup-template.md && git commit -m "feat(petaxxon): template de setup"
```

---

### Task 4: Template — POP

**Files:**
- Create: `petaxxon/_templates/pop-template.md`

- [ ] **Step 1: DoD desta task**
  - [ ] Template cobre: quando usar/dono/duração, objetivo, papéis, fluxo (tabela #/etapa/responsável/input/output/DoD/paraleliza?), exceções, DoD final. Herda a estrutura dos POPs em `diagnostico/pops/`, neutralizada.

- [ ] **Step 2: Escrever `petaxxon/_templates/pop-template.md`**

```markdown
# POP-XX: [Nome do Procedimento]

> **Quando usar:** [gatilho]  ·  **Dono do processo:** [papel]  ·  **Duração típica:** [...]

## Objetivo
[O que este procedimento produz e por quê.]

## Papéis envolvidos
| Papel | Responsabilidade | Time pequeno (acumula) | Time grande (dedicado) |
|---|---|---|---|
| [papel] | [...] | [...] | [...] |

## Fluxo
| # | Etapa | Responsável | Input (pra começar) | Output (entregável) | Critério de Pronto (DoD) | Paraleliza? |
|---|---|---|---|---|---|---|
| 1 | [...] | [...] | [...] | [...] | [...] | sim/não |

## Onde paralelizar
- **Serial obrigatório:** [...]
- **Pode rodar junto:** [...]

## Exceções e o que fazer
| Situação | Ação |
|---|---|
| [...] | [...] |

## Critério de Pronto FINAL
[Quando o procedimento inteiro está "feito".]
```

- [ ] **Step 3: Verificar**

Run: `grep -c "^## " petaxxon/_templates/pop-template.md`
Expected: `6`.

- [ ] **Step 4: Commit**

```bash
git add petaxxon/_templates/pop-template.md && git commit -m "feat(petaxxon): template de POP"
```

---

### Task 5: Template — Campanha (rota/playbook)

**Files:**
- Create: `petaxxon/_templates/campanha-template.md`

- [ ] **Step 1: DoD desta task**
  - [ ] Template cobre as 4 dimensões (objetivo/público/temperatura/canal), rota+funil+oferta, ativos de monetização, setups exigidos, cronograma, métricas, 3 camadas.

- [ ] **Step 2: Escrever `petaxxon/_templates/campanha-template.md`**

```markdown
# Campanha: [NOME]

> **Objetivo:** capturar | vender direto  ·  **Público:** interno/base | externo/frio
> **Temperatura:** quente | frio  ·  **Canal:** orgânico | pago

## Montagem (a fórmula plugável)
- **Rota:** A | B
- **Funil escolhido:** [link p/ ficha na Aba 03]
- **Oferta plugada:** [produto/esteira da Aba 02]

## Ativos de monetização necessários
- [ ] [spot / vídeo temático / conteúdo+pitch / criativo pago]

## Setups exigidos
- [ ] [links p/ Aba 01]

## Cronograma
| Dia | Ação | Dono |
|---|---|---|
| [...] | [...] | [...] |

## Métricas & meta
| Métrica | Meta |
|---|---|

## As 3 camadas
- **Ideal:** [...]
- **Foto atual:** [...]
- **Gaps:** [...]
```

- [ ] **Step 3: Verificar**

Run: `grep -c "^## " petaxxon/_templates/campanha-template.md`
Expected: `6`.

- [ ] **Step 4: Commit**

```bash
git add petaxxon/_templates/campanha-template.md && git commit -m "feat(petaxxon): template de campanha"
```

---

### Task 6: HTML — esqueleto navegável das 8 abas (tema + nav + tab-switch + componentes)

**Files:**
- Create: `petaxxon/mapa/index.html`
- Reference (estética): `diagnostico/index.html:7-130` (variáveis CSS e cards)

> **Use a skill `frontend-design` ao executar esta task.**

- [ ] **Step 1: DoD desta task**
  - [ ] Header com título + 8 botões de aba que trocam o conteúdo via JS (sem recarregar).
  - [ ] Reusa as variáveis CSS do `diagnostico/index.html` (paper/ink/accent, serif/mono).
  - [ ] Componente reutilizável "3 camadas" (Ideal/Foto/Gaps) e legenda de status (roda/testar/desenhar) definidos via CSS.
  - [ ] As 8 seções existem; 00 preenchida na Task 7; 01-07 com stub das 3 camadas (Task 8).
  - [ ] Abre no navegador sem erro de console; navegação funciona; responsivo até ~768px.

- [ ] **Step 2: Construir o esqueleto HTML**

Estrutura mínima (preencher estética com `frontend-design`, reusando o tema do `diagnostico/index.html`):

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Petaxxon · Modelo Operacional</title>
<style>
  :root{ --ink:#16140f; --paper:#f4f0e6; --card:#fbf9f2; --line:#d8d0bd;
    --accent:#b5462b; --blue:#2a5a86; --green:#2e6b4a; --gold:#a9842f;
    --serif:'Iowan Old Style',Georgia,serif; --mono:ui-monospace,Menlo,monospace;
    --sans:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif; }
  *{box-sizing:border-box} body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans)}
  header{background:var(--ink);color:#f4f0e6;padding:22px 28px;border-bottom:3px solid var(--accent)}
  header h1{font-family:var(--serif);margin:0;font-size:22px}
  nav.tabs{display:flex;gap:4px;flex-wrap:wrap;background:#1c1810;padding:8px 28px}
  nav.tabs button{background:#2c2719;color:#cbc3ad;border:1px solid #3a3322;border-bottom:none;
    border-radius:7px 7px 0 0;padding:8px 12px;font-size:12px;cursor:pointer}
  nav.tabs button.act{background:var(--paper);color:var(--ink);font-weight:600}
  nav.tabs button .nm{font-family:var(--mono);font-size:9px;color:var(--accent);display:block}
  main{max-width:1100px;margin:0 auto;padding:32px 28px 120px}
  section.tab-panel{display:none} section.tab-panel.act{display:block}
  /* componente: 3 camadas */
  .layers{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}
  .layer{border-radius:8px;padding:12px 14px;font-size:13px}
  .layer.ideal{background:#dcebe1;border:1px solid #a9d3c0}
  .layer.foto{background:#eef3f7;border:1px solid #bcd0e0}
  .layer.gaps{background:#f7e3df;border:1px solid #e5b8ae}
  .layer b{display:block;margin-bottom:4px}
  /* legenda de status */
  .status{font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px}
  .s-on{background:#dcebe1;color:var(--green)} .s-test{background:#f3e9cf;color:#7d5f17}
  .s-design{background:#f7e3df;color:#a3271d}
  @media(max-width:768px){.layers{grid-template-columns:1fr}}
</style>
</head>
<body>
<header><h1>Petaxxon · Modelo Operacional de Marketing &amp; Monetização</h1></header>
<nav class="tabs" id="tabs">
  <button class="act" data-tab="t00"><span class="nm">00</span>Visão Macro</button>
  <button data-tab="t01"><span class="nm">01</span>Setups</button>
  <button data-tab="t02"><span class="nm">02</span>Produtos &amp; Esteira</button>
  <button data-tab="t03"><span class="nm">03</span>Biblioteca de Funis</button>
  <button data-tab="t04"><span class="nm">04</span>Rotas de Campanha</button>
  <button data-tab="t05"><span class="nm">05</span>Operação &amp; Cadência</button>
  <button data-tab="t06"><span class="nm">06</span>Dados &amp; Decisão</button>
  <button data-tab="t07"><span class="nm">07</span>Replicação/DarkPixel</button>
</nav>
<main>
  <section class="tab-panel act" id="t00"><!-- Task 7 preenche --></section>
  <section class="tab-panel" id="t01"><!-- Task 8 stub --></section>
  <section class="tab-panel" id="t02"></section>
  <section class="tab-panel" id="t03"></section>
  <section class="tab-panel" id="t04"></section>
  <section class="tab-panel" id="t05"></section>
  <section class="tab-panel" id="t06"></section>
  <section class="tab-panel" id="t07"></section>
</main>
<script>
  const tabs=document.getElementById('tabs');
  tabs.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(!b)return;
    document.querySelectorAll('#tabs button').forEach(x=>x.classList.remove('act'));
    document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('act'));
    b.classList.add('act');
    document.getElementById(b.dataset.tab).classList.add('act');
    window.scrollTo(0,0);
  });
</script>
</body>
</html>
```

- [ ] **Step 3: Verificar no navegador**

Run: `open "petaxxon/mapa/index.html"` (macOS)
Expected: abre; clicar nas abas troca o painel; sem erro no console.

- [ ] **Step 4: Verificar estrutura**

Run: `grep -c 'class="tab-panel"' petaxxon/mapa/index.html`
Expected: `8`.

- [ ] **Step 5: Commit**

```bash
git add petaxxon/mapa/index.html && git commit -m "feat(petaxxon): esqueleto HTML das 8 abas com nav e componentes"
```

---

### Task 7: HTML — preencher a Aba 00 (Visão Macro)

**Files:**
- Modify: `petaxxon/mapa/index.html` (conteúdo de `<section id="t00">`)
- Reference: `.superpowers/brainstorm/72282-1780189382/content/macro-monetizacao.html` (o macro já validado)

> **Use a skill `frontend-design`. Reaproveite o markup do fragmento `macro-monetizacao.html` já validado no brainstorming.**

- [ ] **Step 1: DoD desta task**
  - [ ] Aba 00 mostra: insumo dado (base/conteúdo), os 6 blocos da cadeia (Ativos → Rota A/B → Funil → Oferta → Venda → Pós), a fundação de Setups, a governança, e a legenda das 3 camadas.
  - [ ] Visual coerente com o tema (paleta/serif/mono).

- [ ] **Step 2: Inserir o conteúdo do macro**

Portar o conteúdo de `macro-monetizacao.html` para dentro de `<section class="tab-panel act" id="t00">`, ajustando classes ao tema do HTML (usar variáveis CSS já definidas). Conteúdo: bloco "insumo dado" (cinza/dashed) → cadeia de 6 passos → 2 rotas → setups (6 chips) → governança (4 lanes) → legenda 3 camadas.

- [ ] **Step 3: Verificar no navegador**

Run: `open "petaxxon/mapa/index.html"`
Expected: aba 00 (default) mostra o mapa macro completo e legível.

- [ ] **Step 4: Commit**

```bash
git add petaxxon/mapa/index.html && git commit -m "feat(petaxxon): aba 00 Visão Macro preenchida"
```

---

### Task 8: HTML — stub das Abas 01-07 (3 camadas + status + ponteiro de conteúdo futuro)

**Files:**
- Modify: `petaxxon/mapa/index.html` (conteúdo de `<section id="t01">` a `id="t07">`)

- [ ] **Step 1: DoD desta task**
  - [ ] Cada aba 01-07 tem: título, 1 frase do que ela cobre, o componente das 3 camadas (Ideal preenchido com o resumo da spec; Foto/Gaps marcados "a preencher na Fase X"), e a legenda de status onde fizer sentido.
  - [ ] Aba 02 (Produtos & Esteira) inclui a tabela da esteira padrão (já validada) mesmo em stub — é o conteúdo mais estável.

- [ ] **Step 2: Preencher cada seção**

Para cada aba, inserir (exemplo da aba 01):
```html
<section class="tab-panel" id="t01">
  <h2 style="font-family:var(--serif)">01 · Setups (Fundação)</h2>
  <p>As 6 fundações que todo funil/campanha reusa: Infra &amp; Contas, Tracking &amp; Dados,
     CRM &amp; Listas, Nomenclatura, Biblioteca de Ativos, Papéis &amp; DoD.</p>
  <div class="layers">
    <div class="layer ideal"><b>Ideal</b>Cada setup com checklist do que precisa existir antes de rodar.</div>
    <div class="layer foto"><b>Foto atual</b>A preencher (Fase 2).</div>
    <div class="layer gaps"><b>Gaps</b>Tracking; cofre de senhas. (Fase 2)</div>
  </div>
</section>
```
Repetir o padrão para 02-07 com o resumo de cada aba (conforme seções 5-11 da spec). Na **aba 02**, incluir também a tabela da esteira padrão (front-end → 5 bumps → PlaySquad U1 → continuação).

- [ ] **Step 3: Verificar no navegador**

Run: `open "petaxxon/mapa/index.html"`
Expected: todas as 8 abas trocam e mostram conteúdo (00 completa; 01-07 com 3 camadas).

- [ ] **Step 4: Verificar 3 camadas presentes**

Run: `grep -c 'class="layers"' petaxxon/mapa/index.html`
Expected: `>= 7` (uma por aba 01-07, e possivelmente na 00).

- [ ] **Step 5: Commit**

```bash
git add petaxxon/mapa/index.html && git commit -m "feat(petaxxon): stub das abas 01-07 com 3 camadas e esteira"
```

---

### Task 9: Verificação final da Fase 0

- [ ] **Step 1: Checklist de Pronto da Fase 0**
  - [ ] `petaxxon/` tem README + 4 templates + `mapa/index.html`.
  - [ ] HTML abre, navega entre as 8 abas, aba 00 completa, 01-07 com 3 camadas.
  - [ ] Os 4 templates têm todas as seções (verificado nas Tasks 2-5).
  - [ ] Nada vaza contexto "DIS/GPS" no conteúdo neutro (só em referências de fonte).

- [ ] **Step 2: Rodar verificações**

Run:
```bash
cd "/Volumes/HD 4TB/MKT/process_mkt-digital"
ls petaxxon petaxxon/_templates petaxxon/mapa
grep -ci "GPS\|DIS\|Lari\|Kayke\|Pedro Duarte" petaxxon/mapa/index.html petaxxon/_templates/*.md
```
Expected: estrutura completa; segundo comando retorna `0` em cada arquivo (sem vazamento de contexto DIS).

- [ ] **Step 3: Commit final (se houver ajustes)**

```bash
git add petaxxon && git commit -m "chore(petaxxon): verificação final Fase 0"
```

---

## Self-Review (preenchido)

**1. Cobertura da spec:** Fase 0 da spec = "Fonte + Molde + Macro". Coberto: estrutura de pastas (Task 1), molde = 4 templates (Tasks 2-5), esqueleto HTML 8 abas (Task 6), aba Macro (Task 7), stubs com 3 camadas (Task 8), verificação (Task 9). As Fases 1-5 ficam para planos próprios (fora deste plano, por design).

**2. Placeholders:** os `[...]` dentro dos *templates* são intencionais (é o molde a ser preenchido pelo usuário), não placeholders do plano. Todo passo do plano tem comando/conteúdo concreto.

**3. Consistência de tipos:** ids das abas (`t00`-`t07`) e classes (`tab-panel`, `layers`, `layer ideal/foto/gaps`, `status s-on/s-test/s-design`) são usados de forma idêntica nas Tasks 6, 7 e 8.
