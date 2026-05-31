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
Item = funil (os 9 tipos). Reflete a Aba 03.
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

---

## 7. Board: Rotina de Otimização

> Registra as decisões diárias e semanais de escalar / iterar / matar por funil.
> Alimentado no ciclo diário (webinário e tráfego) e no ritual semanal (POP-01).
> Referência de critérios: `dados/pass-fail-por-funil.md` e `petaxxon/operacao/rotina-otimizacao.md`.

### Cadência
- **Diária:** Gestor de Tráfego + Dono do Funil 3 (webinário) registram métricas do dia anterior e decisões imediatas.
- **Semanal:** Gestor de Operações fecha o ciclo com decisões por funil após o ritual.

### Colunas do board
| Coluna | Tipo | Valores / Descrição |
|---|---|---|
| Funil | Status | VSL · Typebot · Webinário · Captura · Recuperação · Shorts · PlaySquad · Base/Recompra |
| Data da avaliação | Data | |
| Métrica avaliada | Texto | ex.: Taxa de presença · CPA · CTR |
| Valor real | Número/Texto | valor medido no período |
| Meta (PASS) | Texto | conforme `dados/pass-fail-por-funil.md` |
| Sinal | Status | ✅ PASS · ❌ FAIL · ⏳ Aguardar amostra |
| Decisão | Status | Escalar · Iterar · Matar · Aguardar |
| Ação específica | Texto | ex.: "Aumentar budget 20 %" · "Testar novo criativo" |
| Dono da ação | Pessoa | quem executa |
| Prazo | Data | |
| Status da ação | Status | A fazer · Em andamento · Concluído |

### Regra de uso
1. Nenhuma decisão de escalar/matar é tomada sem um item neste board.
2. O Gestor de Operações é o único que marca "Concluído" nas decisões (não o executor).
3. Itens com sinal "Aguardar amostra" não geram ação — ficam abertos até o volume mínimo ser atingido.

---

## 8. Checklist: Setup de Funil (subir um funil novo)

> Sequência para ativar um funil novo na operação, garantindo que todos os setups estão conectados
> e a esteira está configurada corretamente.

### Como usar
Criar um item neste checklist para cada funil novo. Marcar cada passo conforme concluído.
O funil só vai ao ar após todos os itens marcados.

### Passos
| # | Passo | Setup de referência | Responsável | DoD do passo |
|---|---|---|---|---|
| 1 | Definir o produto/oferta e posição na esteira (front-end, upsell, bump) | Setup 01 · Portfólio & Esteira | [a confirmar] | Produto cadastrado no checkout; posição na esteira documentada |
| 2 | Criar e verificar domínio/subdomínio do funil | Setup 01 · Infra & Contas | Infra | SSL ativo; DNS propagado; redirecionamentos testados |
| 3 | Configurar 5 order bumps e Upsell 1 PlaySquad no checkout | Setup 01 | Infra + CRM | Bumps e upsell ativos; testados com compra de teste |
| 4 | Instalar tracking: pixel, UTMs e evento Purchase | Setup 02 · Tracking & Dados | Infra + Gestor de Tráfego | Compra de teste dispara PageView + InitiateCheckout + Purchase com valor correto |
| 5 | Configurar CRM: lista, tags, automações de confirmação e recuperação | Setup 03 · CRM & Listas | CRM | Fluxo testado; opt-out funcionando; lead de teste percorre o fluxo completo |
| 6 | Nomear todos os ativos conforme Setup 04 (Nomenclatura) | Setup 04 · Nomenclatura | Gestor de Operações | Nenhum ativo com nome fora do padrão |
| 7 | Subir os ativos na Biblioteca (Setup 05) | Setup 05 · Biblioteca de Ativos | [a confirmar] | Ativos indexados e acessíveis pelo time |
| 8 | Definir Produtor e Aprovador de cada ativo do funil | Setup 06 · Papéis & DoD | Gestor de Operações | Toda tarefa no Monday com Produtor ≠ Aprovador |
| 9 | Preencher a tabela de metas do funil em `dados/pass-fail-por-funil.md` | Rotina de Otimização | Gestor de Operações | Metas definidas e aprovadas; `[a confirmar]` substituído por número real |
| 10 | Criar o item do funil no board "Funis" do Monday e linkar a ficha | — | Gestor de Operações | Item criado com Tipo, Produto, Dono/Aprovador e Ficha preenchidos |
| 11 | Validar ponta a ponta: percurso completo do funil com compra de teste | Setup 01 + 02 + 03 | Gestor de Operações (aprova) + Infra (executa) | Compra de teste concluída; todos os eventos disparados; funil no ar com status 🟡 a testar |

### Colunas do checklist no Monday
| Coluna | Tipo |
|---|---|
| Funil | Texto |
| Passo (1–11) | Status / Número |
| Setup de referência | Texto |
| Responsável | Pessoa |
| Status | Status (A fazer · Em andamento · Concluído) |
| Observação | Texto |

---

## As 3 camadas
- **Ideal:** 1 workspace, 6 boards conectados + dashboard + board de Rotina de Otimização + checklist de Setup de Funil; item ↔ ficha sempre linkados; labels padronizados.
- **Foto atual:** a confirmar com o time qual ferramenta de gestão está em uso hoje e o que migra. `[a confirmar]`
- **Gaps:** criar os boards e popular a partir de `GAPS.md`; definir automações; treinar o time. (Fase 2-4)
