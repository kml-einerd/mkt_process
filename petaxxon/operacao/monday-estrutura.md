# Modelo de Estrutura no Monday — Petaxxon

> **O que é:** como organizar o Monday (ferramenta de gestão) espelhando o modelo Petaxxon.
> Simples de ajustar: 1 workspace, 6 boards conectados + 1 dashboard. As mesmas palavras do
> modelo (rotas A/B, status roda/testar/desenhar, esteira, 3 camadas) viram colunas e labels.

## Princípio
O Monday é o **espelho operacional** do `mapa/index.html`. O HTML é o mapa (o "porquê" e o "como");
o Monday é o **trabalho rodando** (o "quem/quando/em que status"). Um item no Monday sempre aponta
para sua ficha em `petaxxon/funis|setups|campanhas/`.

## Modelo decidido (canônico — lê isto primeiro)
**Eixo organizador:** quadros por **função**, não por funil. O **funil é etiqueta + visão** dentro dos
quadros (no Monday: coluna "Funil" + visão agrupada/filtrada) — **não** um quadro por funil. Exceção: uma
operação **diária e pesada** (o webinário) pode ganhar quadro próprio.

**Ciclo de vida do funil — 2 fases (a regra que organiza o trabalho):**
- **① SETUP — "checklist zero de start":** subir o funil (páginas, VSL, checkout+esteira, tracking, CRM,
  nomenclatura). É **projeto finito** → tem status até 100% e **arquiva** quando o funil entra no ar.
- **② OTIMIZAÇÃO — "o resto":** contínua = **remessas** (alimentar com criativos) + **ajustes de
  performance** (escalar/iterar/matar). É **operação** → roda pra sempre, nunca "conclui".
- *Por que separar:* misturar o checklist finito de start com a otimização infinita na mesma lista é o que
  faz tarefa se perder. Separados, nada se perde.

**Quadros finais (5 + 1 opcional)** — detalhe de colunas mais abaixo:
1. **Portfólio & Produtos** — 1 item por produto (estágio, esteira, preço). *[novo]*
2. **Funis & Campanhas** — 1 item por funil/campanha; coluna **Fase** (Setup/Otimização); o **checklist de
   Setup** vive aqui como subitens; link p/ ficha. *[novo]*
3. **Produção de Ativos** — **fila ÚNICA** de remessas (pipeline Copy→…→Subir) com coluna **Funil** +
   visão agrupada por funil. *[reusa o grupo REMESSAS atual, promovido a quadro]*
4. **Otimização** — log de performance (sinal→escalar/iterar/matar), coluna Funil; cadência diária/semanal.
   *(é o board da seção 7 abaixo)* *[novo]*
5. **Setups & Backlog** — 6 setups + fila de gaps (recebe o grupo CENTRAL atual). *[novo]*
6. **(opcional) Webinar diário** — quadro próprio só se a operação diária justificar.

**Dashboard/Comando:** visão de **status** (o que roda/parou/em produção — não metas financeiras) puxando dos 5 quadros.

> As definições de coluna abaixo ("Os boards") seguem válidas; este resumo é o que manda em caso de dúvida.
> Prompts prontos para a IA do Monday criar tudo isto: ver **`monday-prompts.md`**.

## Workspace
**`Petaxxon · Marketing & Monetização`** — um workspace. (Ao replicar p/ outra operação do grupo via
DarkPixel: duplicar o workspace inteiro — é o pacote clonável.)

## Os boards (detalhe de colunas)

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
- **Foto atual:** **1 board só** ("🖥️ CYBERCLASS") com 9 grupos misturando produto + produção + referência (ver "Foto atual — board real" abaixo). Forte na produção (pipeline de remessas com subitens maduro); fraco na separação (tudo num board) e nos labels (duplicados). Checkout = **Hotmart**.
- **Gaps:** separar em boards por responsabilidade; padronizar labels; conectar item↔ficha; ver "Migração" abaixo.

---

## Foto atual — board real (export 2026-05-31)

> Lido de `Recursos/monday-export/` (board "🖥️ CYBERCLASS"). Serve de ponto de partida da migração.

**Estrutura:** 1 board, 9 grupos:
`CENTRAL` (referências e tarefas soltas) · `REMESSAS DE ANÚNCIOS` (pipeline de criativos) · `WEBINAR FÓRMULA` · `FÓRMULA DE YOUTUBE` · `VVSA R$14 > FÓRMULA R$397 > CYBER R$197` · `PLAY SQUAD` · `ANÁLISE DE CANAL (RAIO-X DO YOUTUBE)` · `DESENHANDO ANIMES` · `ENGLISH PLAN`.

**O que já é bom (manter):**
- O grupo **REMESSAS DE ANÚNCIOS** tem um pipeline de subitens maduro: `Copy → Revisão copy → Produção de imagens/Gravação → Revisão gravação → Edição 9x16 (stories) → Edição 16x9 (feed/YouTube) → Revisão vídeos → Subir anúncios`. É praticamente o board "Produção de Ativos" do modelo, já funcionando.
- Nomenclatura de criativo já em uso e alinhada ao modelo: ex. `H3-C1-KML-ROD-F01-R1-FY26-9X16`.
- Itens com Owner, Última atualização e Item ID.

**O que está confuso (corrigir na migração):**
- **Tudo num board só** — portfólio, produção, webinar, referência e vários produtos convivem; não escala.
- **Produtos viram grupos** — some quando o portfólio cresce; melhor 1 board de Portfólio com 1 item por produto.
- **Labels de status duplicados/inconsistentes:** `ADS RODANDO` **e** `RODANDO ADS` (mesmo estado, dois nomes), além de FEITO/PARA FAZER/REVISAR/PAUSADO/EM ANDAMENTO/GRAVAR/EDITAR/NÃO EXECUTADO. Padronizar.
- **Sem boards de Funis, Setups, Campanhas e Dados** — funis/ofertas aparecem como subitens soltos.

**Fatos reais capturados (atualizam o que estava `[a confirmar]`):**
- **Checkout:** Hotmart.
- **Esteira VVSA (real, hoje):** `VVSA R$14 → Fórmula R$397 → Cyber R$197`. O upsell **PlaySquad** entra **após o lançamento** (hoje o upsell do Fórmula é "+1 Fórmula R$97 / Cyber R$197"). Ver discrepância na nota do `GAPS.md`.
- **Portfólio real é maior** que o modelado: além de Fórmula/VVSA/PlaySquad/YouTube Dark, há **Análise de Canal (Raio-X do YouTube)**, **Desenhando Animes**, **English Plan**, **Lucre com YouTube** (gravando) e recorrência **TubeClub** [a confirmar].
- **Funil PlaySquad** já mapeado em subitens (Q1 página · Q2 mini-VSL · Q3 checkout/orderbumps) — bate com `funis/saas-playsquad-trial.md`.
- **Recuperação** já prevista: "Recuperação de vendas — E-mail" e "— Remarketing".

## Migração do board atual → modelo (simples, em 4 passos)
1. **Padronizar labels** primeiro (rápido e alto impacto): unificar `RODANDO ADS`=`ADS RODANDO`; adotar o conjunto único de status do modelo.
2. **Extrair o Portfólio:** criar o board **Portfólio & Esteira** com 1 item por produto (Fórmula, VVSA, Cyber, PlaySquad, Raio-X, Desenhando Animes, English Plan, Lucre com YouTube, TubeClub), cada um com preço, papel na esteira e status. Aposenta os grupos-por-produto.
3. **Promover a produção:** renomear `REMESSAS DE ANÚNCIOS` → board **Produção de Ativos** (já está pronto) e criar os boards **Funis**, **Campanhas** (Webinar Fórmula entra aqui), **Setups** e **Dados**.
4. **Conectar e mover o CENTRAL:** tarefas soltas do CENTRAL viram itens em **Backlog/Gaps**; cada item de Funil/Campanha/Setup ganha link para sua ficha em `petaxxon/`. Manter o Dashboard como tela do ritual semanal.

> **Princípio da migração:** não recomeçar do zero — o board atual já tem o motor de produção. A migração é **separar responsabilidades em boards** e **padronizar labels**, não refazer.

---

## Modo A · Agência de Funil — mapeamento no Monday
O Modo B (acima) é produto próprio. O **Modo A** (construir funis de VSL para clientes) é **por cliente/projeto**
e usa o schema canônico `Entregável · Checklist · Setor · POP · Responsável` (ver app `central/`):

| Schema | No Monday |
|---|---|
| Setor | coluna (status/pessoas) |
| Entregável | **item** (ou subitem do funil) |
| Checklist | **subitens** / checklist do item |
| POP | **link** no item |
| Responsável | coluna pessoas |

**Quadros do Modo A (somam-se aos 5 do Modo B):**
1. **Clientes & Projetos** (Onboard) — 1 item por cliente. Colunas: Modelo comercial (Afiliado/Produtor),
   Status do onboard, links (ATA · Central do cliente · Planilha de margem). É a porta de entrada.
2. **Funis em Construção** — 1 item por funil-cliente. Coluna **Fase**: `Onboard · Escrita · Produção ·
   Edição · Infra · Start`. Os **entregáveis** de cada fase entram como subitens (espelham os processos do
   app: Escrita de VSL, Produção & Gravação, Edição, Infra). Coluna Setor + Responsável + link do POP.
3. Reusa os quadros **Otimização** e cria a **Régua de recuperação** como visão/itens recorrentes após o Start.

**Regra:** um funil "nasce" em *Clientes & Projetos* (Onboard) → vira item em *Funis em Construção* percorrendo
as Fases → ao dar **Start**, passa a alimentar *Produção de Ativos* (remessas) e *Otimização* (igual ao Modo B).
Assim os dois modos convergem na operação contínua.
