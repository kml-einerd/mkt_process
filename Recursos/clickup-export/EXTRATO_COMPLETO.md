# Extrato Completo — ClickUp DIS Digital

**Data:** 2026-04-04
**Fonte:** 9.839 tasks + 11.557 comments + 10 spaces
**Periodo:** Abril 2024 a Abril 2026

---

## 1. MAPA DA OPERACAO

### Estrutura Organizacional

```
DIS Digital (Pedro Duarte + Bruno Gabriel)
|
+-- [LC] Lari Colares -------- 7.025 tasks (71%) -- CORE: GPS App + CDV Curso
|   +-- GPS-F01 (6.258)         Funil principal, remessas 1-595+
|   +-- CRM Automacoes (247)    GHL, emails, recovery
|   +-- Teste Criativos (156)   A/B testing ads
|   +-- Testes de Funis (125)   TypeBot V1-V91
|   +-- CDV Semanal (87)        Live semanal terca 20h
|   +-- CDV VSL (40)            Funil evergreen VSL
|   +-- Miles e Points (36)     Produto milhas
|
+-- Gestao -------------------- 1.389 tasks (14%) -- TEMPLATES + PLANEJAMENTO
|   +-- Acao de Vendas (528)    Templates de lancamento
|   +-- Backlog Infoproduto     Pipeline completo de novo produto
|   +-- Perpetuo (203)          Funil evergreen
|   +-- Implantacao MFV (136)   Minimum Viable Funnel
|   +-- Meteorico (58)          Evento rapido WhatsApp
|   +-- Audiovisual (64)        Pipeline de video
|
+-- DIS Equipes --------------- 584 tasks (6%) -- BACK OFFICE
|   +-- Trafego (190)           Contas de ads
|   +-- Contingencia API (115)  Perfis de backup
|   +-- Contingencia Trafego    BMs de reserva
|   +-- 16 listas operacionais  Ferramentas, SaaS, infra
|
+-- [AVT] Avastus ------------ 478 tasks (5%) -- MARCAS SECUNDARIAS
|   +-- MindFlow (340)          Produto mental/mindset
|   +-- PPClear (120)           Produto financeiro
|   +-- Fleyn (18)              Produto lifestyle
|
+-- [EVA] Eva Essence --------- 152 tasks -- BELEZA (100% concluido)
+-- DIS DEV ------------------- 114 tasks -- APP GPS + TRACKING
+-- Creators Club ------------- 60 tasks  -- AFILIADOS (novo, mar/2026)
+-- Trivvo -------------------- 19 tasks  -- CHECKOUT PROPRIO
+-- DIS Academy --------------- 13 tasks  -- BACKLOG ADMIN
+-- Agencia Dis --------------- 5 tasks   -- AGENCIA (embrionario)
```

### Equipe (~20 pessoas ativas)

| Funcao | Pessoas | Volume |
|--------|---------|--------|
| Estrategia/PM | Pedro Duarte (criou 51% das tasks), Thallys Gomes | Planejamento |
| Media Buying Lead | Bruno Gabriel (criou 30% das tasks) | Coordenacao |
| Gestores de Trafego | Lucas Diniz (1.148), Samuel Lira (1.085), Paulo Ricardo (600), Thiago (340), Gabriel Aquino (164) | Execucao ads |
| Editor de Video Principal | Kayke (929 tasks) | Edicao |
| Editor de Video | Marcel Rodrigues (330) | Edicao |
| Copywriters | Fernando Origuela (276), Brian Lira (281) | Copy |
| CRM/Automacao | Henrique Gabriel (345) | GHL + automacoes |
| Infra/Paginas | Lucas Nunes (253) | Paginas + funis |
| Design | Lucas Cesar (165) | Visual |
| Gravacao/Expert | Thays da Costa (228) | Conteudo |
| Estrategia/Copy Chief | Kemuel de Mel Leopoldino (147) | Revisao + playbooks |
| Devs | Pedro Neto (63), Mario Augusto (17), Altieres (PM) | App GPS |

---

## 2. PIPELINES OPERACIONAIS

### Pipeline A: Remessa de Criativos (CORE — 60% do volume)

O motor da operacao. Cada "Remessa" e um batch numerado de criativos (ja na 595+).

```
[1] Atualizar planilha de controle
 |
[2] Criar estrategia de otimizacao
 |
[3] Copy escrever novos ads          <-- BLOCKER CRITICO (copy atrasa tudo)
 |
[4] Gravar novos ads                 <-- Expert grava com roteiro do copy
 |
[5] Editar novos ads                 <-- Editor (Kayke/Marcel) em CapCut
 |
[6] Revisar ads (opcional)           <-- Comite de validacao
 |
[7] Iniciar trafego novos ads        <-- Gestor sobe no Meta/Google
 |
[8] Testar novos ads (3 dias)        <-- Periodo de teste padrao
 |
[9] Gerar relatorio de desempenho    <-- Planilha de resultados
```

**Variantes do mesmo pipeline:**
- Novos Hooks (hooks de atencao) — pula gravacao, vai direto pra edicao
- BTC (Best Take Compilation) — pula copy e gravacao
- Plugar/Substituir Hooks — remix de hooks existentes
- Footprint — remix de ads existentes

### Pipeline B: Email/WhatsApp Marketing

```
Escrever copy --> Programar envio (147x)
```

### Pipeline C: Producao de Curso/Infoproduto (chain mais longa = 11 passos)

```
Roteiro + Estruturacao
 --> Revisao do Roteiro
   --> Briefing de Gravacao
     --> Gravacao das Aulas
       --> Entrega V1 editada
         --> Revisao V1
           --> Entrega Versao Final
             --> Revisao VF
               --> Upload
                 --> Anexar Link
                   --> Criar Produto na plataforma
```

### Pipeline D: Teste e Escala de Criativos

```
Subir no trafego (285x)
 --> Feedback performance (307x)     <-- TASK MAIS FREQUENTE
   --> Validados / Nao validados
     --> Retestar ou Escala 1
       --> Escala 2
         --> Winner
```

---

## 3. TEMPLATES DE PROJETO (5 modelos extraidos)

### Template 1: Remessa de Criativos (PDA)

**Quando usar:** Toda semana/quinzena, producao de novos ads
**Subtasks:** 9 com dependencias sequenciais
**Responsaveis:** Copy + Editor + Gestor de Trafego

```json
{
  "template": "Remessa de Criativos",
  "naming": "[PDA SX-MY] [Projeto] - Remessa NNN",
  "subtasks": [
    {"title": "Atualizar planilha de controle", "role": "gestor_trafego"},
    {"title": "Criar estrategia de otimizacao", "role": "gestor_trafego"},
    {"title": "Copy escrever novos ads", "role": "copywriter", "depends_on": [1]},
    {"title": "Gravar novos ads", "role": "expert_gravacao", "depends_on": [2]},
    {"title": "Editar novos ads", "role": "editor_video", "depends_on": [3]},
    {"title": "Validacao do comite", "role": "copy_chief", "depends_on": [4], "optional": true},
    {"title": "Iniciar trafego novos ads", "role": "gestor_trafego", "depends_on": [5]},
    {"title": "Testar novos ads (3 dias)", "role": "gestor_trafego", "depends_on": [6]},
    {"title": "Gerar relatorio/preencher planilha", "role": "gestor_trafego", "depends_on": [7]}
  ]
}
```

### Template 2: Setup de Aula ao Vivo / Lancamento

**Quando usar:** Lancamento de evento ao vivo (10+ instancias encontradas)
**Subtasks:** 15, sem dependencias rigidas (podem paralelizar)

```json
{
  "template": "Setup Aula ao Vivo",
  "subtasks": [
    {"title": "Slides do Pitch", "role": "estrategista"},
    {"title": "Pagina de Captura e Obrigado", "role": "infra_paginas"},
    {"title": "Pagina de Vendas e Obrigado", "role": "infra_paginas"},
    {"title": "Criar Formulario de pesquisa + Recompensa", "role": "crm"},
    {"title": "Criar grupo de WhatsApp", "role": "crm"},
    {"title": "Criar planilha de links (UTM) e dados", "role": "infra_paginas"},
    {"title": "Criar identidade visual", "role": "designer"},
    {"title": "Configurar Sequencia de E-mails", "role": "crm"},
    {"title": "Criar Produto e Integrar no GHL", "role": "crm"},
    {"title": "Configuracoes da transmissao (YT)", "role": "infra_paginas"},
    {"title": "Planejamento de Trafego", "role": "gestor_trafego"},
    {"title": "Criar Checkout", "role": "infra_paginas"},
    {"title": "Configurar area de membros", "role": "infra_paginas"},
    {"title": "Pasta do projeto", "role": "pm"},
    {"title": "Criar bonus para participantes (PDF)", "role": "designer"}
  ]
}
```

### Template 3: Implantacao MFV / Infoproduto Perpetuo

**Quando usar:** Novo infoproduto do zero (pipeline completo)
**Subtasks:** 30+ organizadas em categorias

```json
{
  "template": "Implantacao Infoproduto",
  "categories": {
    "infraestrutura": [
      "Configurar GHL",
      "Criar tags no GHL",
      "Criar mapa de tags",
      "Criar integracao tags na Trivvo",
      "Configurar checkout Trivvo",
      "Trackeamento",
      "Configurar trackeamento",
      "Criar planilha de links (UTM)",
      "Configuracoes iniciais de trafego",
      "Criar publicos no Facebook",
      "Definir hierarquia de publicos",
      "Definir verba",
      "Programar automacoes (CA, AC, CC, PIX)"
    ],
    "design": [
      "Criar design foto produto 1x1",
      "Criar design do checkout",
      "Criar design banner topo checkout",
      "Artes para WhatsApp",
      "Criar identidade visual"
    ],
    "conteudo": [
      "Criar copy",
      "Editar ads",
      "Editar VSL",
      "E-mail de onboarding"
    ],
    "producao_curso": [
      "Roteiro e estruturacao",
      "Gravacao das aulas",
      "Edicao das aulas",
      "Upload no Drive",
      "Entrega do produto"
    ],
    "copy_completo": [
      "Copy de emails e mensagens",
      "Copy da pagina de vendas e upsell",
      "Copy da VSL de upsell",
      "Copy de X criativos",
      "Copy da VSL principal",
      "Briefing de gravacao e edicao"
    ]
  }
}
```

### Template 4: CDV Semanal (Ciclo de Live)

**Quando usar:** Toda semana — live terca 20h, carrinho 48h
**Subtasks:** 9 fases, 50+ tarefas totais

```json
{
  "template": "CDV Semanal",
  "cycle": "Semanal (terca 20h -> fecha quinta 19h)",
  "product": "Clube de Viagens R$1.997/ano",
  "phases": [
    {"phase": 1, "name": "Definicoes Estrategicas", "tasks": 6,
     "items": ["promessa", "oferta", "narrativa", "design", "ciclo", "termo"]},
    {"phase": 2, "name": "Captacao Pago", "tasks": 7,
     "items": ["pagina", "obrigado", "ads estaticos", "ads video", "typebot", "formmeta", "ctwa"]},
    {"phase": 3, "name": "Captacao Organico + Base", "tasks": 7,
     "items": ["manychat", "conteudo IG", "emails base", "sms", "banners", "1a1 grupo", "1a1 ebook"]},
    {"phase": 4, "name": "ShowUp", "tasks": 6,
     "items": ["WhatsApp auto", "1a1", "email", "ads remarketing", "depoimentos", "countdown"]},
    {"phase": 5, "name": "Producao Live", "tasks": 5,
     "items": ["script", "slides", "guia naturalidade", "hotwebinar", "playbook chat"]},
    {"phase": 6, "name": "Vendas 48h", "tasks": 10,
     "items": ["pagina vendas", "checkout", "3 emails", "WhatsApp 5 msgs", "ads RMKT", "super-interessados", "comercial", "cross-sell"]},
    {"phase": 7, "name": "Pos-Venda", "tasks": 6,
     "items": ["email compra", "onboarding", "engajamento 7d", "NPS", "encerramento", "recuperacao"]},
    {"phase": 8, "name": "Infraestrutura", "tasks": 5,
     "items": ["sendflow", "ghl", "utm", "pixel", "pesquisa segmentacao"]},
    {"phase": 9, "name": "Percepcao de Escala", "tasks": 2,
     "items": ["playbook", "metricas"]}
  ]
}
```

### Template 5: Meteorico (Evento Rapido)

**Quando usar:** Evento flash para base existente (WhatsApp)
**Subtasks:** 10, execucao rapida

```json
{
  "template": "Meteorico",
  "subtasks": [
    "Criar grupo de WhatsApp",
    "Criar conteudos",
    "Criar estrutura Manychat",
    "Gravar Pack de Videos",
    "Criar PDF",
    "Configurar Checkout",
    "Pagina de Captura",
    "Realizar Oferta",
    "Disparo de mensagens API",
    "Realizar convite em grupos antigos"
  ]
}
```

---

## 4. PROCEDIMENTOS / SOPs EXTRAIDOS

### SOP 1: Edicao de ADS (padrao para editores)

```
1. Editar todos os Ads padrao SEM os hooks primeiro, enviar pra revisao
2. Usar recursos nativos CapCut/TikTok/Instagram (parecer conteudo organico)
3. Entregar em 2 versoes: 4x5 (Quadrado) + 9x16 (Vertical)
4. Nomenclatura: [NumAd]-[NumRemessa]-[Projeto]-[Formato]
   Exemplo: AD1-R1-RAP-4x5

Pontos criticos:
- Trilha sonora combinada com momento da fala
- Legenda dinamica estilo nativo (nao lenta)
- Para Hooks: regras especificas por tipo de hook
```

### SOP 2: Producao de Copy VSL

```
1. Seguir checklist "Para o Copy Responsavel Pela Producao da VSL"
2. Verificar: preco, nome do produto, informacoes corretas
3. Inserir link do documento nos comentarios da task
4. Adicionar Copy Chief como responsavel
5. Mudar status para "REVISAO COPY"
6. Copy Chief finaliza (nao o copywriter)
7. Se houver ajustes: corrigir e repetir ciclo de revisao
```

### SOP 3: Ciclo Semanal CDV (Metricas + Escala)

```
METRICAS-CHAVE:
- CPL (custo por lead): meta < R$8
- Taxa de Showup: meta > 35%
- Taxa de Conversao: meta > 8%
- CAC: CPL / taxa de conversao
- NPS: meta > 8.5
- Taxa de renovacao: meta > 70% (12 meses)

REGRA DE ESCALA:
- 4 indicadores no verde por 3 meses consecutivos
- NAO escalar antes disso

CICLO:
- Sexta/Sabado: preparar conteudo da live
- Domingo: Email D-2 (antecipacao)
- Segunda: Email D-1 (prova + promessa) + mensagens 1:1
- Terca: Live 20h (HotWebinar)
- Quarta: Email vendas + WhatsApp vendas
- Quinta: Ultimo dia carrinho (fecha 19h)
```

### SOP 4: Nomenclatura de Ads/Criativos

```
Formato: [tipo]-[versao]-[editor]-[copy]-[funil]-[remessa]-[projeto]-[status]
Exemplo: h5-vr1-Dan-Enrik-F01-R514-GPS-ON

Tipos: h (hook), vr (versao), v (video)
Status: ON (ativo), OFF (pausado)
```

### SOP 5: Contingencia de Contas de Ads

```
- Manter 20+ perfis de backup (PF001-PF020+)
- Status tracking: ativo / bloqueada / cancelado
- Cada perfil com BM (Business Manager) separada
- Gestores de trafego com contas individuais
- Se conta banida: migrar para perfil de contingencia
```

### SOP 6: Template de Resumo de Live

```
DADOS DA SESSAO:
- Data / Horario inicio / Horario encerramento / Duracao
- Plataforma: HotWebinar

PESQUISA AO VIVO:
- Trecho pesquisado / Data do voo / Preco buscadores / Canal CDV / Preco CDV

METRICAS:
- Inscritos / Presentes / Taxa showup / Vendas na live / Conversao
```

---

## 5. CUSTOM FIELDS (Modelo de Dados)

| Campo | Uso | Onde |
|-------|-----|------|
| Progresso (%) | Em 99.8% das tasks | Global |
| Definicao | Tipo/categoria da task | Remessas |
| Setor | Copy, Gravacao, Edicao, Infra, etc. | Pipeline criativos |
| Equipes | Equipe responsavel | Global |
| Segmentacao | Publico/audiencia | Remessas |
| Qtd ads | Numero de ads na remessa | Remessas |
| Assertividade | % de ads que validaram | Teste criativos |
| Orcamento | Verba investida | Teste criativos |
| Login/Senha | Credenciais de ferramentas | DIS Equipes |
| Link Typebot | URL do funil | Teste funis |
| Nome/ID | Identificador do funil (CDV-V5) | Teste funis |
| Link VSL | URL do VTurb player | Teste funis |
| Link Remessa | Google Drive da remessa | Remessas |
| Separacao Processo | Demanda / Bloco / Parte | Pipeline |
| Custo | Custo real da acao | Financeiro |
| Pag. Via | Forma de pagamento (CC, PIX) | DIS Equipes |
| Vencimento | Data de vencimento | DIS Equipes |

---

## 6. STACK TECNOLOGICO

| Categoria | Ferramentas |
|-----------|-------------|
| **Checkout** | Trivvo (proprio) |
| **CRM/Automacao** | GHL (GoHighLevel), ManyChat, SendFlow |
| **Funis** | TypeBot (V1-V91), paginas custom |
| **Trafego Pago** | Meta (Facebook/IG), Google Ads, TikTok |
| **Video** | HotWebinar (lives), VTurb (VSL), CapCut (edicao) |
| **Dev** | Supabase, DigitalOcean, Cloudflare, Vercel, GitHub, Astro |
| **Analytics** | Metabase, Grafana, N8N |
| **Email** | PostMark, SendGrid |
| **IA** | Claude, OpenRouter, Firecrawl |
| **Design** | (tasks mencionam CapCut, recursos nativos) |

---

## 7. INSIGHTS ESTRATEGICOS

### Gargalos Identificados

1. **Copy e o blocker #1** — Bloqueia gravacao que bloqueia edicao que bloqueia trafego. Pipeline inteiro para se copy atrasa.
2. **Concentracao de execucao** — Lucas Diniz + Samuel Lira = 22% de TODAS as tasks. Se um sai, operacao para.
3. **Kayke e single point of failure** — 929 tasks de edicao, sem backup proporcional (Marcel tem 330).
4. **Prioridade nao usada** — 97.2% das tasks sem prioridade. Sem mecanismo de priorizacao.
5. **Pipeline 100% serial** — 9 passos sequenciais, zero paralelismo na remessa individual.

### Oportunidades

1. **Paralelizar edicao + copy** — Se copy entregar roteiro antes da gravacao, editor pode preparar templates
2. **Automacao de relatorios** — "Gerar relatorio" aparece 500+ vezes, automatizavel via API
3. **Templates padronizados** — 5 templates claros que poderiam virar automacao no ClickUp ou PM-OS
4. **Nomenclatura como metadata** — O padrao `h5-vr1-Dan-Enrik-F01-R514-GPS-ON` e parseavel, pode virar campo estruturado
5. **Credenciais no ClickUp** — 96 senhas armazenadas em custom fields. Migrar para vault.

### Numeros-Chave

- **595+ remessas** de criativos produzidas
- **91+ versoes** de funil TypeBot testadas
- **6.141 dependencias** entre tasks
- **86% das tasks sao subtasks** — operacao altamente hierarquica
- **68% concluidas** — operacao madura e produtiva
- **2 anos** de historico operacional
