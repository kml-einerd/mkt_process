# ClickUp Spaces Analysis Report

Date: 2026-04-04
Source: Individual space CSV exports from ClickUp

---

## Overview

The ClickUp workspace contains 10 spaces representing distinct business units or operational areas. The organization (DIS) operates primarily in the **infoproducts, digital marketing, and travel/miles** space, with multiple product brands, a dev team, a content production pipeline, and a proprietary checkout platform (Trivvo).

| Space | Tasks | Active Period | Primary Focus |
|-------|-------|--------------|---------------|
| LC Lari Colares | 7,024 | Jun 2024 - Apr 2026 | Flagship product marketing & ads |
| Gestao | 1,389 | Apr 2024 - Dec 2025 | Project management templates & operations |
| DIS - Equipes | 584 | Jul 2024 - Apr 2026 | Team tools, accounts & contingency |
| AVT Avastus | 478 | Mar 2025 - Apr 2026 | Secondary product brands (Fleyn, MindFlow, PPClear) |
| DIS DEV | 114 | Jun 2025 - Apr 2026 | Software development (GPS App, tracking) |
| EVA Eva Essence | 152 | Mar 2025 - Sep 2025 | Essential oils / beauty product brand |
| Creators Club | 60 | Mar 2026 - Apr 2026 | Affiliate/creator program (new) |
| Trivvo | 19 | Oct 2024 - Dec 2025 | Proprietary checkout/platform development |
| DIS ACADEMY | 13 | Feb 2026 | Internal admin & miscellaneous tasks |
| DIS Agencia Dis | 5 | Sep 2025 - Apr 2026 | Agency branding & recruitment |

---

## 1. LC Lari Colares (7,024 tasks)

### What is this space?
The largest space by far. This is the **core marketing operation** for the flagship product lines tied to the expert "Lari Colares." It manages the full lifecycle of digital ad campaigns: creative production, funnel testing, traffic management, CRM automations, and ticket price testing. The primary products are **GPS (Sistema GPS)** -- a miles/travel app -- and **CDV (Curso de Vendas / sales course)** sold via weekly live launches (semanal) and VSL (Video Sales Letter) funnels.

### Lists/Folders
All tasks sit under `hidden` folder (ClickUp default). 14 lists organized by product + function:

- **[GPS] Pools Ads** -- Ad creative pool with structured naming (e.g., `vr3-Kayke-Kelvin-F01-R554-GPS-ON`)
- **[GPS] Teste criativos** -- Creative testing with remessa (batch) numbering up to 595+
- **[GPS] Testes de funis** -- Funnel A/B testing (TypeBot versions up to V91)
- **[GPS] Teste ticket medio** -- Price point testing (R$297, R$397, R$497)
- **[GPS] CRM (Automacoes)** -- Email sequences, API automations, recovery flows
- **[CDV-F01-Semanal] Teste de criativo / Testes de funis** -- Weekly launch funnel tests
- **[CDV-F02-VSL] Teste criativos / Testes de funis** -- VSL funnel tests
- **[LC] GPS-F01** -- GPS funnel infrastructure (pages, checkout, upsells)
- **[LC] CDV VSL / CDV Semanal** -- CDV product infrastructure
- **[LC] Miles e Points** -- Miles & points product (pages, GHL config)
- **Teste Trafego** -- General traffic testing, scaling campaigns

### Workflow (Statuses)
Production pipeline: `nao exec|bklg` -> `pendente` -> `em execucao` -> `checagem` -> `em teste` -> `feito`

With ad-specific branches: `ready to go` -> `controle ads` -> `validados` / `nao validados` -> `retestar` -> `escala 1` -> `escala 2` -> `winner`

86% of tasks are closed/done (6,061 "feito" + 274 "fechado").

### Key People
- **Pedro Duarte** -- Primary creator (3,046 tasks, 43%). Likely the project manager / strategist.
- **Bruno Gabriel Aguiar Silva** -- Second creator (2,709 tasks, 39%). Likely the media buyer / ads lead.
- **Lucas Diniz Cordeiro** -- Top assignee (983). Operations/execution lead.
- **Samuel Lira** (967), **Kayke** (837), **Paulo Ricardo** (561) -- Core execution team (editors, copywriters, traffic).
- **ClickBot** (326 created) -- Automation creating tasks.

### Work Type
**Performance marketing at scale.** The team runs hundreds of ad "remessas" (creative batches), tests dozens of TypeBot funnel versions, manages multiple ad accounts, and optimizes ticket prices. This is a high-volume direct-response operation.

### Tags
`hm - ads`, `gps - ads`, `hm - funil`, `gps - funil`, `escala 1/2`, traffic light emojis for status.

---

## 2. Gestao (1,389 tasks)

### What is this space?
**Operational management and project templates.** Contains the master templates for launching infoproducts (MFV = Minimum Viable Funnel), backlog of product ideas, sales actions, and audiovisual production workflows.

### Lists/Folders
3 folders: `Templates` (1,057 tasks -- the bulk), `BKP` (168), `hidden` (164).

- **Backlog de Infoproduto** -- Product launch templates (copy, editing, traffic, remessa batches)
- **Backlog de Infoproduto (copia)** -- V2 templates with structured checklists (GHL config, drive setup, gateway, testing)
- **Tarefas GP** -- Project manager ad-hoc tasks
- **Meteorico** -- "Meteoric" launch campaign (design, content, triggers)
- **Acao de Vendas** -- Sales action events (automation, design, onboarding)
- **Encapsulado** -- Physical product development (formula, label, packaging, CNPJ)
- **Perpetuo** -- Evergreen course platform (uploading lessons, member area design)
- **Implantacao MFV** -- MFV deployment pipeline (scale phase, traffic, reporting)
- **Audiovisual** -- Video production pipeline (download, decoupage, track, SFX, inserts, review, adjustments, finalized)

### Workflow (Statuses)
Mostly simple: `a fazer` (1,004) -> `pendente` (162) -> `feito` (1). Also `nao executar` (222) for backlogged/cancelled items. 72% remain "a fazer" -- these are templates, not active work.

### Key People
- **Pedro Duarte** -- Created 94% of tasks. This is Pedro's planning/management space.
- **Pablo Souza** (66 created), **Thallys Gomes** (16 created) -- Contributing managers.
- Assignees spread thinly: Lucas Diniz (32), Thiago/Samuel (29 each).

### Work Type
**Strategic planning, templates, and operations management.** This is where launches are planned before tasks flow into execution spaces. Contains the organizational playbooks.

---

## 3. DIS - Equipes (584 tasks)

### What is this space?
**Team operations, tool management, and ad account contingency.** This space manages the organization's operational infrastructure: ad accounts (BMs/business managers), SaaS tool subscriptions, team training, and cross-functional project tracking.

### Lists/Folders
2 folders: `hidden` (474), `Ferramentas/Cursos` (110 -- tool/course subscriptions).

- **Contingencia (API)** -- API-connected ad accounts/profiles with naming like "Person - PF0XX"
- **Contingencia (Trafego)** -- Traffic team BM (Business Manager) accounts, verification status
- **Funil/Infra** -- Infrastructure tools (Metabase, N8N, Miro, Siteground, Inlead, Bunny CDN)
- **Trivvo** -- Trivvo platform tools (Cloudflare, GitHub, AWS, SendGrid, Vercel, Crisp)
- **Dev** -- Dev tools (Searchapi, Supabase, DigitalOcean, PostMark, Make)
- **IA/Drive** -- AI tools and storage (Firecrawl, Claude, Google Drive per brand)
- **Automacao** -- Automation tools (BRDid, SendFlow, Short.io, Wazzap)
- **Audiovisual** -- AV tools (Hotwebinar, Adobe, OpenRouter)
- **Web/Design** -- Design tasks and page implementations
- **Comercial** -- Sales ops (GHL automations, WhatsApp templates, onboarding)
- **Social Media** -- Social media calendars and strategy
- **Gestao** -- Internal management (page migration, new projects)
- **Trafego** -- Traffic team ad account management
- **Projetos** -- Cross-team project coordination

### Workflow (Statuses)
Mixed across lists: `ativo/fechado` for accounts, `to do/in progress/complete` for tasks, `perfis` for profile tracking, `cancelado/sem custo` for deactivated tools.

### Key People
- **Lucas Diniz Cordeiro** -- Created 330 tasks (56%) and top assignee (67). Operational lead managing tools and accounts.
- **Pedro Duarte** -- 127 tasks created.
- **Cesar Ribeiro, Paulo Ricardo, Adrieli Diniz, Gabriel Lucas** -- Team leads in their areas.

### Work Type
**IT operations, account management, and tool governance.** This is the "back office" that keeps the marketing machine running: managing 20+ SaaS subscriptions, dozens of ad accounts/profiles, contingency plans for banned accounts, and team training materials.

---

## 4. AVT Avastus (478 tasks)

### What is this space?
**Secondary product brands** under the Avastus umbrella. Three distinct products each with their own funnel/ad pipeline, following the same production methodology as LC Lari Colares but at smaller scale.

### Lists/Folders
3 lists, all under `hidden`:

- **[DIS] Fleyn** -- A product brand (VSL creation, ads, funnel implementation). Tasks: "Gravar VSL", "Editar ads", "Implementar na pagina", "Validacao comite"
- **[MDFW] MindFlow** -- Mental/mindset product. Heavy PDA (production) remessas up to 10+, organized by sprints (S1-S4) and months (M1-M2)
- **[PPC] PPClear** -- Another product. TypeBot funnel versions, PDA remessas, structured production batches

### Workflow (Statuses)
Simple: `nao exec|bklg` -> `pendente` -> `em execucao` -> `feito`. 88% done (420 "feito"). Very clean completion rate.

### Key People
- **Pedro Duarte** (284 created), **Bruno Gabriel Aguiar Silva** (179 created) -- Same leadership as LC space.
- Assignees: Lucas Diniz (58), Kayke (55), Samuel Lira (50) -- Same execution team.

### Work Type
**Infoproduct marketing (ads + funnels)** for secondary brands. Same methodology as the main LC operation: creative batches (remessas), TypeBot funnels, committee validation, VSL production. Smaller scale, possibly testing new niches.

---

## 5. DIS DEV (114 tasks)

### What is this space?
**Software development** for the organization's tech products, primarily the **GPS App** (the miles/travel application) and **tracking infrastructure**.

### Lists/Folders
2 lists under `hidden`:

- **Aplicativo GPS** -- The GPS miles/travel app. Tasks include UX fixes, onboarding improvements, offer display changes, WhatsApp integration, new sections, button renaming, payment updates
- **Trackeamento** -- Tracking/analytics infrastructure (page view, VSL play, button click events)

### Workflow (Statuses)
`nao executar` -> `pendente` -> `em progresso` -> `revisar` -> `Closed`. 66% closed. 14% pending, 14% not-to-execute.

### Key People
- **Altieres** -- Primary creator (71 tasks, 62%). Product manager or tech lead who defines the work.
- **Pedro Duarte** -- 40 tasks created (strategic requests).
- **Pedro Neto** -- Top assignee (63 tasks, 55%). Primary developer.
- **Mario Augusto Mania** (17), **Altieres** (16) -- Secondary developers.

### Work Type
**Product development and bug fixing** for the GPS App. Tasks are specific feature requests and UX improvements: changing offer displays, adding sections, adjusting timers, integrating payments (Apple Pay), WhatsApp notifications, tracking pixels. This is a small dev team (3-4 people) maintaining a consumer-facing app.

---

## 6. EVA Eva Essence (152 tasks)

### What is this space?
**Essential oils / beauty product brands.** Three product lines under the Eva Essence umbrella, each with marketing funnels.

### Lists/Folders
3 lists under `hidden`:

- **[E-EVA] Ecommerce EVA** -- The main Eva ecommerce brand
- **[LVND] Lavanda** -- Lavender-based product line. Funnel setup, ad production, lead capture
- **[OEO] Olibano** -- Frankincense (olibano) product line

### Workflow (Statuses)
100% "feito" (done). This space is fully completed -- all 152 tasks closed.

### Key People
- **Pedro Duarte** -- Created 98% of tasks.
- **Thallys Gomes** (20 assigned) -- Lead executor for this brand.
- **Kayke, Lucas Diniz, Samuel Lira, Thiago Martins** -- Supporting execution team.

### Work Type
**Product launch marketing** for a beauty/wellness brand. Tasks follow the standard pipeline: copy writing, ad editing, review, traffic launch, page updates, Trivvo checkout configuration, funnel verification checklists. The space being 100% complete suggests these products were launched and the active work moved elsewhere or concluded.

---

## 7. Creators Club (60 tasks)

### What is this space?
**A new affiliate/creator program** (launched March 2026). Tasks involve setting up funnels and ads for affiliate promotion, with a focus on the affiliate "Andressa."

### Lists/Folders
3 lists under `hidden`:

- **[CC] Afiliado - Andressa** -- Affiliate-specific setup (adjusting ads with Andressa's image, VSL pages)
- **[CC] Teste de Criativos** -- Creative testing for the CC program
- **[CC] Testes de funis** -- Funnel testing (TypeBot versions, low-ticket offers)

### Workflow (Statuses)
52% done, 22% pending, 10% in backlog, 8% in execution. Still actively being built.

### Key People
- **Bruno Gabriel Aguiar Silva** -- Primary creator (41 tasks, 68%). Leading this initiative.
- **Altieres** -- 12 tasks created.
- **Kayke** (9 assigned), **Bruno** (6), **Felipe** (5), **Altieres** (5) -- Execution team.

### Work Type
**Affiliate program launch.** Setting up ad creatives, funnel pages, upsell flows, WhatsApp automations, and low-ticket offers (2K followers product). The newest initiative in the organization, actively under construction.

---

## 8. Trivvo (19 tasks)

### What is this space?
**The proprietary checkout/platform product** (Trivvo). This space tracks development features and infrastructure for the platform that the other brands use for payments.

### Lists/Folders
2 lists under `hidden`:

- **Trivvo - V1** -- First version features
- **Trivvo - V2** -- Second version features

### Workflow (Statuses)
Mixed: 42% closed, 26% to-do, 16% in progress. Active development.

### Key People
- **Pedro Duarte** (11 created), **Simone Faquineli** (8 created) -- Product owners.
- Very few assignees (Pedro Souza, Lucas Cesar with 1 each). Work likely happens outside ClickUp (in GitHub/dev tools).

### Work Type
**Platform/SaaS product development.** Key features: Astro-based site, member area sales, group management (replacing SendFlow), affiliate system updates, GetNet payment integration, Apple Pay, PostMaker email migration, N8N analysis, Grafana monitoring, sales/revenue reporting. This is the tech backbone of the business.

---

## 9. DIS ACADEMY (13 tasks)

### What is this space?
**Internal admin and miscellaneous operational tasks.** Despite the name suggesting an academy/training product, the actual tasks are administrative.

### Lists/Folders
1 list: `DIS`

### Workflow (Statuses)
100% "to do" -- nothing has been started. This appears to be a backlog/dump space.

### Key People
- **Pedro Duarte** -- Sole creator of all 13 tasks. No assignees.

### Work Type
**Administrative backlog:** creating a funnel dashboard, uploading content, HR tasks (salary adjustment), tool procurement (SearchAPI, TIM telecom), office logistics (dismantling studio furniture), INPI trademark registration (Myles and Elysium brands), Crisp chat setup, financial tool inventory. A catch-all for org-level to-dos.

---

## 10. DIS Agencia Dis (5 tasks)

### What is this space?
**An agency/brand identity initiative** -- setting up DIS as an external-facing agency (not just internal operations).

### Lists/Folders
1 list: `Agencia Dis`

### Workflow (Statuses)
60% backlog, 20% in execution, 20% pending. Barely started.

### Key People
- **Pedro Duarte** -- Sole creator. Lucas Cesar and Altieres assigned to 1 task each.

### Work Type
**Brand/agency setup:** logo design and INPI registration, Instagram presence, recruitment ads (5 static versions), Typebot hiring form, corporate structure planning. This is an early-stage initiative to formalize the operation as an agency brand.

---

## Cross-Space Patterns

### Organization Structure
The DIS organization runs a **digital marketing operation** centered on infoproducts in the **travel/miles niche** (GPS App, CDV course) with expansion into **beauty/wellness** (Eva Essence) and **affiliate marketing** (Creators Club). The operation is led by **Pedro Duarte** (strategist/PM) and **Bruno Gabriel Aguiar Silva** (media buying lead).

### Team Size
Approximately **15-20 active team members** across all spaces:
- **Strategists/PMs:** Pedro Duarte, Altieres, Thallys Gomes
- **Traffic/Ads:** Bruno Gabriel, Samuel Lira, Kayke, Paulo Ricardo
- **Operations:** Lucas Diniz Cordeiro (most cross-functional, appears in every space)
- **Content/AV:** Thiago Martins, Henrique Gabriel, Marcel Rodrigues, Fernando Origuela
- **Dev:** Pedro Neto, Mario Augusto Mania
- **Design/Copy:** Brian Lira, Lucas Nunes, Lucas Cesar, Jaqueline Fortuna
- **Commercial:** Cesar Ribeiro, Thays da Costa
- **Platform:** Simone Faquineli (Trivvo)

### Methodology
The operation follows a **high-volume performance marketing methodology**:
1. Copy is written -> Ads are edited -> Committee validates -> Traffic starts
2. Creatives are organized in numbered "remessas" (batches, 500+)
3. Funnels use TypeBot with versioned testing (V1-V91)
4. Winners scale through escala 1 -> escala 2
5. Multiple ad accounts managed for contingency

### Technology Stack
- **Checkout:** Trivvo (proprietary)
- **CRM/Automation:** GHL (GoHighLevel), ManyChat, SendFlow
- **Funnels:** TypeBot, custom pages
- **Ads:** Meta (Facebook/Instagram) with multiple Business Managers
- **Video:** Hotwebinar, PandaVideo
- **Dev:** Supabase, DigitalOcean, Cloudflare, Vercel, GitHub, Astro
- **Analytics:** Metabase, Grafana, N8N
- **AI:** Claude, OpenRouter, Firecrawl
- **Email:** PostMark, SendGrid
