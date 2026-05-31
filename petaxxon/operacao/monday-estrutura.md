# Modelo de Estrutura no Monday — Petaxxon

> **O que é:** como organizar o Monday (ferramenta de gestão) espelhando o modelo Petaxxon.
> Simples de ajustar: 1 workspace, 6 boards conectados + 1 dashboard. As mesmas palavras do
> modelo (rotas A/B, status roda/testar/desenhar, esteira, 3 camadas) viram colunas e labels.

## Princípio
O Monday é o **espelho operacional** do `mapa/index.html`. O HTML é o mapa (o "porquê" e o "como");
o Monday é o **trabalho rodando** (o "quem/quando/em que status"). Um item no Monday sempre aponta
para sua ficha em `petaxxon/funis|setups|campanhas/`.

## Workspace
**`Petaxxon · Marketing & Monetização`** — um workspace. (Ao replicar p/ outra operação do grupo via
DarkPixel: duplicar o workspace inteiro — é o pacote clonável.)

## Os 6 boards

### 1. Portfólio & Esteira
Item = produto. Reflete a Aba 02.
| Coluna | Tipo | Valores |
|---|---|---|
| Papel | Status | Front-end · Upsell · Order bump · Combo |
| Esteira (continuação) | Texto | ex.: "→ PlaySquad → YouTube Dark" |
| Order bumps | Número | meta 5 |
| Status | Status | 🟢 roda · 🟡 a testar · 🔴 a desenhar |
| Dono | Pessoa | |
| Ficha | Link | p/ `petaxxon/...` |

### 2. Funis
Item = funil (os 8 tipos). Reflete a Aba 03.
| Coluna | Tipo | Valores |
|---|---|---|
| Tipo | Status | VSL · Typebot · Webinário · Captura · Recuperação · SaaS-trial · Orgânico |
| Rota | Status | A (captura) · B (venda direta) |
| Produto | Connect → board 1 | |
| Status | Status | 🟢/🟡/🔴 |
| Métrica-chave | Texto | ex.: CVR checkout |
| Dono / Aprovador | Pessoa | (quem produz ≠ quem aprova) |
| Ficha | Link | |

### 3. Campanhas
Item = campanha. Reflete a Aba 04. (Onde o dia a dia acontece.)
| Coluna | Tipo | Valores |
|---|---|---|
| Objetivo | Status | Capturar · Vender direto |
| Público | Status | Interno/base · Externo/frio |
| Temperatura | Status | Quente · Frio |
| Canal | Status | Orgânico · Pago |
| Funil | Connect → board 2 | |
| Oferta | Connect → board 1 | |
| Cronograma | Timeline | |
| Dono | Pessoa | |
| Status | Status | A fazer · Executando · Revisão · Concluído |
| Resultado | Texto/Número | pass/fail + número |

### 4. Produção de Ativos (esteira de execução)
Item = ativo de monetização (spot, vídeo temático, conteúdo+pitch, criativo). É o motor de produção.
| Coluna | Tipo | Valores |
|---|---|---|
| Tipo de ativo | Status | Spot · Vídeo temático · Conteúdo+pitch · Criativo pago |
| Campanha | Connect → board 3 | |
| Copy | Status | A fazer · Escrevendo · Revisão copy · Aprovada |
| Edição | Status | A fazer · Editando · Revisão · Aprovado |
| Dono / Aprovador | Pessoa | (separação produtor/aprovador) |
| DoD | Checkbox | tem assignee · output linkado · revisado · renomeado |
| Entregável | Link | |

> **Regra de ouro (igual ao modelo):** quem PRODUZ não conclui; quem APROVA conclui.

### 5. Setups
Item = um dos 6 setups. Reflete a Aba 01.
| Coluna | Tipo | Valores |
|---|---|---|
| Checklist | Progress / % | |
| Ferramenta | Texto | |
| Dono | Pessoa | |
| Status | Status | 🟢/🟡/🔴 |
| Checklist | Link | p/ `petaxxon/setups/...` |

### 6. Backlog / Gaps
Item = um gap (de `GAPS.md`). É a fila de melhoria contínua.
| Coluna | Tipo | Valores |
|---|---|---|
| Prioridade | Status | Alta · Média · Baixa |
| Aba/Fase | Texto | |
| Status | Status | 🔴 a desenhar · 🟡 a testar · 🟢 pronto |
| Dono | Pessoa | |
| Bloqueado por | Connect → board 6 | (dependências, ex.: CRM antes de captura) |

## Dashboard (visão de decisão — espelha a Aba 06)
Widgets: nº de funis por status · campanhas executando vs. concluídas · resultado pass/fail por funil ·
progresso dos setups (%) · gaps abertos por prioridade. É a tela do ritual semanal.

## Convenções (iguais em todo board)
- **Labels de status** sempre: 🟢 roda · 🟡 a testar · 🔴 a desenhar (não inventar variações).
- **Nomenclatura de item** segue o padrão de Setup 04 (Nomenclatura) — definir lá e reusar aqui.
- **Toda automação** (mudar status → notificar dono/aprovador) documentada em Setup 03 (CRM/Automação) e no POP do ciclo semanal.

## As 3 camadas
- **Ideal:** 1 workspace, 6 boards conectados + dashboard; item ↔ ficha sempre linkados; labels padronizados.
- **Foto atual:** a confirmar com o time qual ferramenta de gestão está em uso hoje e o que migra. `[a confirmar]`
- **Gaps:** criar os boards e popular a partir de `GAPS.md`; definir automações; treinar o time. (Fase 2-4)
