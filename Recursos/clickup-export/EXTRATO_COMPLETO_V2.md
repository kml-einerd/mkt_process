# Extrato Completo V2 — ClickUp DIS Digital (Verificado Space-by-Space)

**Data:** 2026-04-04
**Fonte:** 9.839 tasks + 11.557 comments + 10 spaces
**Periodo:** Abril 2024 a Abril 2026
**Metodo:** Leitura direta dos CSVs, sem resumos intermediarios

---

## SPACE 1: [LC] Lari Colares — 7.025 tasks (71%)

O core da operacao. Marketing de performance para GPS App (sistema de milhas) e CDV (Clube de Viagens).

### Listas

| Lista | Tasks | O que e |
|-------|-------|---------|
| GPS-F01 | 6.258 | Funil principal. 346 parents, 5.912 subtasks. Pipeline de remessas (R1-R595+) |
| CRM Automacoes | 247 | 61 projetos de automacao GHL: emails, recovery, WhatsApp API, ManyChat, Sendflow |
| Teste Criativos | 156 | Ads sendo testados. Nomenclatura: `vr3-Kayke-Kelvin-F03-R563-IMG-GPS-ON` |
| Testes de Funis | 125 | TypeBot V1 a V91 + variantes TBA/TBA2. **51 versoes unicas.** |
| CDV Semanal | 87 | Modelo semanal: 9 fases, live terca 20h |
| CDV VSL | 40 | Funil evergreen VSL do CDV. Remessas, TypeBot, Crisp chat |
| Miles e Points | 36 | Produto "Milhas e Pontos" — checkout, paginas, trafego |
| Teste Trafego | 27 | Campanhas de escala e testes de bid |
| Teste Ticket Medio | 20 | Testes de preco: R$297, R$397, R$497. Maioria validou R$397 |
| Pools Ads | 15 | Pool de winners com naming padrao. Status: `controle ads` |
| CDV subvariantes | 14 | Testes CDV semanal + VSL |

### Workflow real do GPS-F01

```
🔒 nao exec|bklg (141) → 🔓 pendente (87) → ⚡em execucao (85)
  → 🔍 checagem (9) → em teste (80) → 🏆feito (6.061)
```

Branch de validacao de ads:
```
ready to go → controle ads → validados / nao validados → retestar
  → escala 1 → escala 2 → winner
```

### Keywords em GPS-F01

hook: 693 | copy: 686 | remessa: 613 | editar: 533 | btc: 402 | subir: 346 | iniciar: 302 | feedback: 289 | testar: 274 | gravar: 252

### Top Assignees LC

Kayke (583), Fernando Origuela (227), trio Lucas/Samuel/Paulo (153 juntos), Henrique Gabriel (140), Lucas Nunes (133)

### CRM Automacoes — 61 projetos distintos

Todos fechados. Inclui:
- Migracao Active Campaign → GHL
- Integracoes tags checkout ↔ GHL
- Recuperacao de vendas WhatsApp API
- Agente IA N8N para atendimento
- SendFlow (WhatsApp oficial)
- Manychat Instagram
- Sequencias de email (15+ fluxos)
- Migracao de sites para React

---

## SPACE 2: Gestao — 1.389 tasks (14%)

**99.9% inerte.** Templates e planejamento. 1 task concluida de 1.389.

| Lista | Tasks | Tipo |
|-------|-------|------|
| Acao de Vendas | 528 | 3 templates: Aula ao Vivo 3.0 (12 filhos), 4.0 (6), Imersao (6) |
| Backlog Infoproduto (copia) | 228 | Template V2: Infra + Marketing + Copy + Trafego |
| Perpetuo | 203 | Funil evergreen: area de membros, remessas com/sem gravacao |
| Backlog Infoproduto | 157 | Template V1: Config infra + Materiais + Entrega + Suporte |
| Implantacao MFV | 136 | 1 template MFV com 7 subtasks. Escala phase |
| Audiovisual | 64 | 2 templates: Modelo Completo (7 filhos), Funil Template (7 filhos) |
| Meteorico | 58 | 2 instancias: Modelo (9 filhos), Viagem Internacional (13 filhos) |
| Encapsulado | 8 | Produto fisico: formula, rotulo, embalagem, CNPJ |
| Tarefas GP | 7 | Ad-hoc do PM: investigar haters, testar PandaVideo, organizar tools |

### Templates reais extraidos (com subtasks verificadas)

**Template: Aula ao Vivo 3.0** (12 subtasks)
```
Template Aula ao Vivo 3.0
  ├── Slides do Pitch
  ├── Pagina de Captura e Obrigado
  ├── Pagina de Vendas e Obrigado
  ├── Criar Formulario de pesquisa + Recompensa
  ├── Criar grupo de WhatsApp
  ├── Criar planilha de links (UTM) e dados
  ├── Criar identidade visual
  ├── Configurar Sequencia de E-mails
  ├── Criar Produto e Integrar no GHL
  ├── Configuracoes da transmissao (YT)
  ├── Planejamento de Trafego
  └── Criar Checkout
```

**Template: Backlog Infoproduto V2** (5 categorias, 13 parents)
```
⚙️ Configuracao da Infraestrutura do Funil (aparece 2x, total 9 subtasks)
👨‍💻 Producao dos Materiais de Marketing (2x, 10 subtasks)
📦 Estruturacao da Entrega do Produto (2x, 6 subtasks)
📞 Alinhamento com o Suporte e CS (2x, 2 subtasks)
🚦 Gestao de Trafego (2x, 4 subtasks)
🚀[PDA] Remessa de ads (1x, 6 subtasks)
Paginas aberta e ads de venda direta (2x, 4 subtasks)
Teste ads / Retestar remessa (2x, 5 subtasks)
```

**Template: Meteorico** (9-13 subtasks)
```
Meteorico 00 - Modelos
  ├── Criar grupo de WhatsApp
  ├── Criar conteudos
  ├── Criar estrutura Manychat
  ├── Gravar Pack de Videos
  ├── Criar PDF
  ├── Configurar Checkout
  ├── Pagina de Captura
  ├── Realizar Oferta
  └── Disparo de mensagens API
```

**Template: Audiovisual Completo** (7 subtasks)
```
Modelo Audiovisual Completo
  ├── Download
  ├── Decupagem
  ├── Trilha
  ├── SFX
  ├── Inserts
  ├── Revisao
  └── Ajustes + Finalizado
```

**Template: Perpetuo — Remessa de Ads** (2 variantes)
```
[PDA] Remessa de ads (Com Gravacao) — 7 subtasks
[PDA] Remessa de ads (Sem Gravacao) — 5 subtasks (pula gravar)
```

---

## SPACE 3: DIS - Equipes — 584 tasks (6%)

Back-office da operacao. 16 listas.

### Inventario de Contas de Ads

| Lista | Tasks | Status |
|-------|-------|--------|
| Contingencia (API) | 115 | Perfis PF001-PF021+. Status: ativo/bloqueada/read to go |
| Contingencia (Trafego) | 65 | BMs de reserva. 55 bloqueadas. Verificacao manual |
| Trafego | 190 | Ad accounts (AC1-AC7 + AC Fleyn), campanhas de escala |

**Red flag:** 55 BMs bloqueadas em Contingencia Trafego. Alta taxa de ban.

### Inventario SaaS (Folder Ferramentas/Cursos — 110 tasks)

**78 ativas, 29 canceladas.** Categorias:

| Categoria | Ativas | Ferramentas |
|-----------|--------|-------------|
| Funil/Infra | 5 | Metabase, N8N, Miro, Bunny CDN, VTurb |
| Trivvo (infra) | 6 | Cloudflare, AWS, SendGrid, Vercel, Crisp, Comtele |
| Audiovisual | 7 | HotWebinar, OpenRouter, CapCut, Adobe x2, ElevenLabs, Figma |
| Social Media | 22 | Instagram/TikTok/Facebook por marca + ManyChat x3 + CapCut |
| Automacao | 5 | BRDid, Windsor.ai, Wazzap, SendFlow GPS, GHL Marketplace, Ligue Leads |
| IA/Drive | 14 | Claude x2, ChatGPT, Firecrawl, Manus x2, Zoom, Kalodata, Clickup + Drives |
| Trafego | 4 | Commentguard, UTMify, Minera ROI, Lauth/Multilogin |
| Dev | 8 | Searchapi, Seats.Aero, PostMark, DigitalOcean, Supabase, Make, Strategysta, Interserv |

### Outras listas operacionais

- **Comercial (19):** Pipelines GHL, templates WhatsApp, follow-up, onboarding
- **Social Media (45):** Cronogramas mensais por expert, estrategias
- **Web/Design (8):** Paginas, favicon, LP Trivvo, scripts
- **Gestao (25):** Ideias de novos projetos (Ingles, Investimento, Oleos)
- **Infra (36):** Trackeamento, treinamentos, area de membros
- **IA/Drive (17):** Ferramentas IA + Drives por marca

---

## SPACE 4: [AVT] Avastus — 478 tasks (5%)

Marcas secundarias usando o mesmo pipeline da LC.

### MindFlow (340 tasks, 55 top-level)
- Produto de mindset/desenvolvimento pessoal
- PDA Remessas: S1-S5 x M1-M12 (sprints semanais x meses) ate Remessa 15
- TypeBot com variacoes (V2, V3)
- Campanhas CTWA (Click-to-WhatsApp)
- 88% concluido

### PPClear (120 tasks, 40 top-level)
- Produto financeiro "limpar nome"/credito
- PDA Remessas ate 07
- Renomeado de PPKare → PPClear
- TypeBot V1-V4
- Pagina V1, V2, V3 (com otimizacao documentada)
- 90% concluido

### Fleyn (18 tasks, 4 top-level)
- Marca lifestyle, 100% em backlog (nao executar)
- VSL, remessa, checkout, pagina — tudo planejado, nada executado
- Usa AC Fleyn como conta de contingencia para GPS

---

## SPACE 5: [EVA] Eva Essence — 152 tasks (2%)

Marca de oleos essenciais/beleza. **100% concluida.**

- **Olibano (77):** 5 parents. 3 remessas de ads. Demodex/fungos como angulo de venda
- **Lavanda (61):** 2 parents. Produto de insonia/relaxamento
- **Ecommerce EVA (14):** Artes sociais, campanha remarketing Google Display + Meta
- Mesmo pipeline: copy → gravar → editar → trafego
- **Thallys Gomes** como executor principal (20 tasks)

---

## SPACE 6: DIS DEV — 114 tasks (1%)

Desenvolvimento do App GPS + infraestrutura de tracking.

### Aplicativo GPS (97 tasks, 89 top-level)
Features implementadas (Closed: 75):
- Busca por cidade (alem de IATA)
- Filtro de ofertas, alertas de voo
- Quiz primeiro acesso
- Materiais de apoio, cursos
- Area de favoritos
- Emissao com milhas e com dinheiro
- Integracao Crisp, WhatsApp
- Banner dinamico
- Secao "Ultimas Ofertas"
- Apple Pay (em progresso na Trivvo)

Pendentes (15):
- App nas stores (Play + Apple)
- Envio WhatsApp pos-compra
- Melhor experiencia de aulas
- Relatorio quiz
- Limitar acessos simultaneos

**Equipe:** Pedro Neto (dev principal, 63 tasks), Mario Augusto (secundario), Altieres (PM)

### Trackeamento (17 tasks, 15 top-level)
- Radar Viral (dashboard de ads)
- Instalacao API de tracking em sites
- 10 tasks em "nao executar" — backlog congelado

---

## SPACE 7: Creators Club — 60 tasks (1%)

Programa de afiliados. **Lancado marco 2026, em construcao ativa.**

- Afiliada principal: Andressa
- Produto: low ticket "2K Seguidores"
- Plataforma: Radar Viral (dashboard para afiliados)
- TypeBot V1 em teste
- Remessa 01 de ads em teste
- Integracoes: Discord (bot nao funciona), pixel, tracking personalizado (com bug)
- **Red flag:** `Trackeamento Personalizado Nao Esta Funcionando` com 777 chars de descricao

---

## SPACE 8: Trivvo — 19 tasks (<1%)

Checkout/plataforma propria. Desenvolvimento feature-driven.

**Concluidos:** Monitoramento Grafana, relatorios vendas/faturamento, relatorio alunos, reprocessamento eventos, N8N
**Em progresso:** GetNet, Apple Pay, site institucional IA
**A fazer:** Gestao grupos (substituir SendFlow), afiliados, vendas area membros, email PostMaker
**Descricoes longas** em 7 tasks (relatorios, integracao Grafana, reprocessamento) — especificacoes tecnicas reais

---

## SPACE 9: DIS Academy — 13 tasks

**100% "to do", zero assignees.** Backlog morto.
- Dashboard de funil, upload conteudo, RH (ajuste salario), SearchAPI, TIM, INPI (marcas Myles e Elysium), Crisp, inventario financeiro

---

## SPACE 10: Agencia Dis — 5 tasks

**Embrionario.** Logo + INPI, Instagram, ads recrutamento, TypeBot contratacao, estrutura societaria.

---

## SOPs VERIFICADOS (extraidos de descriptions reais)

### SOP 1: Edicao de ADS (aparece 5+ vezes identico no Gestao)

```
1. Editar todos os Ads padrao SEM hooks primeiro → enviar pra revisao
2. Usar recursos nativos CapCut/TikTok/Instagram (parecer organico)
3. Entregar em 4x5 (Quadrado) + 9x16 (Vertical)
4. Nomenclatura: [NumAd]-[NumRemessa]-[Projeto]-[Formato]
   Ex: AD1-R1-RAP-4x5

Pontos criticos:
- Trilha: musica leve em momentos de oportunidade
- Legenda: dinamica, estilo nativo, NAO lenta
- Hooks: regras especificas por tipo
```

### SOP 2: Edicao de VSL/Upsell (aparece 3+ vezes)

```
1. Acelerar fala entre 20-30% (trilha mantem velocidade original)
2. Versao acelerada e a unica que vai ao ar
3. Inserts/GCs em momentos de ofertas e precos
4. Trilha escolhida pelo momento emocional da fala
5. Legenda com dinamica nativa
```

### SOP 3: Edicao de Aulas (1 template)

```
Toda aula precisa: trilha + dinamicas + inserts
1. Trilha acompanha momento emocional do expert
2. Identidade visual: letras, GCs, inserts alinhados
3. Manter padrao visual do projeto
```

### SOP 4: Producao de Copy VSL Principal

```
1. Seguir checklist "Para o Copy Responsavel"
2. Garantir info correta (preco, nome produto)
3. Inserir link do doc nos comentarios
4. Adicionar Copy Chief como responsavel
5. Status → "REVISAO COPY"
6. Copy Chief finaliza (NAO o copywriter)
7. Ajustes → repetir ciclo
```

### SOP 5: Producao de Copy Criativos
(Mesmo fluxo do SOP 4, adaptado para criativos)

### SOP 6: Entrega V1 da VSL

```
1. Doc da copy deve ter link de referencia para edicao
2. Se nao tiver, cobrar no Discord o GP e Copy responsavel
3. Em revisao → mudar status + colocar head de edicao como responsavel
4. Aprovado pelo head → concluir tarefa
5. Alteracoes necessarias → outra tarefa separada
```

### SOP 7: CDV Ciclo Semanal (extraido de comments do Kemuel)

```
METRICAS:
- CPL meta < R$8
- Showup meta > 35%
- Conversao meta > 8%
- NPS meta > 8.5
- Renovacao meta > 70%

REGRA: 4 indicadores verdes por 3 meses → escalar

CICLO:
Sex/Sab: prep conteudo
Dom: Email D-2 (antecipacao)
Seg: Email D-1 + msgs 1:1
Ter: Live 20h (HotWebinar)
Qua: Email + WhatsApp vendas
Qui: Ultimo dia (fecha 19h)
```

### SOP 8: Nomenclatura de Ads Winner

```
Formato: [tipo][num]-[versao]-[editor]-[copy]-[funil]-[remessa]-[projeto]-[status]
Ex: h5-vr1-Dan-Enrik-F01-R514-GPS-ON
    G1H1-vr3-Kayke-Jorge-F01-R544-GPS-ON

h = hook | vr = versao | G = grupo
F01 = funil 01
R514 = remessa 514
ON/OFF = status de campanha
```

---

## RED FLAGS (KEEL VERIFIED)

### 1. TypeBot: 51 versoes, ZERO rollback

- 51 versoes unicas de TypeBot (TB-V1 a TB-V91, com gaps + variantes TBA/TBA2)
- 233 tasks referenciando TypeBot
- **ZERO** mentions de "rollback", "revert" ou "fallback" nos nomes de tasks
- **ZERO** mentions nas descriptions (exceto 3 tasks de config nao relacionadas)
- **2 mentions** em comments — ambas sobre design/copy, nao sobre funil
- 7 tasks "Desligar" — desligam versao mas nao documentam para qual voltar
- **Nenhum registro de qual versao e a "producao atual"**
- Se V91 quebrar, nao ha processo para voltar para V90

### 2. Credenciais expostas

- **96 tasks com senhas em custom field** (Login + Senha como campos)
- Senhas em plaintext: `j9K2npH6800#`, `5x4PY~M'"!i6f?E`, `Sucesso2024!`
- Logins incluem: admin@disdigital.com.br, contas de ferramentas
- Qualquer pessoa com acesso ao ClickUp ve tudo

### 3. 53% das tasks sem assignee

- 5.167 tasks sem responsavel atribuido
- Gestao: 1.303 sem assignee (94% do space)
- LC: 3.110 sem assignee (44%)
- DIS Equipes: 359 sem assignee (61%)

### 4. 458 tasks stale (ativas mas paradas >30 dias)

- Gestao: 384 (templates nunca usados)
- DIS DEV: 30 (features pendentes ha meses)
- LC: 27 (ads/funis em teste esquecidos)

### 5. Gestao: 99.9% inerte

- 1.389 tasks, **1 concluida**
- 1.004 "a fazer" + 222 "nao executar" + 162 "pendente"
- Templates existem mas quase nunca sao instanciados como tasks reais
- O trabalho real acontece no GPS-F01, nao nos templates

### 6. Pipeline 100% serial

- Chain de 9 passos sem nenhum paralelismo
- Copy bloqueia TUDO (686 tasks na chain)
- Se copywriter atrasa 1 dia, toda remessa atrasa 1 dia

### 7. Concentracao de pessoa-chave

- Kayke: 929 tasks de edicao, backup Marcel com 330 (35% da capacidade)
- Lucas Diniz + Samuel Lira: 2.233 tasks juntos = 22% de TODA operacao
- Pedro Duarte criou 51% das tasks — se sair, o planejamento para

### 8. 55 BMs bloqueadas

- Em "Contingencia (Trafego)": 55 Business Managers com status `bloqueada`
- Operacao depende de manter dezenas de contas reserva para Meta

### 9. DIS Academy e Agencia Dis = dead weight

- 18 tasks entre os dois, zero concluidas
- Nenhum assignee
- Ideias que nunca viraram projeto

---

## NUMEROS FINAIS VERIFICADOS

| Metrica | Valor |
|---------|-------|
| Tasks totais | 9.839 |
| Concluidas | 6.664 (68%) |
| Subtasks | 8.448 (86%) |
| Sem assignee | 5.167 (53%) |
| Dependencias | 6.141 links |
| Remessas de criativos | 595+ |
| Versoes TypeBot | 51 unicas (V1-V91) |
| Versoes VSL | 20+ (VSL1-VSL20) |
| Ad accounts | AC1-AC7 + AC Fleyn = 8 |
| BMs contingencia | 115 perfis API + 65 trafego |
| BMs bloqueadas | 55+ |
| Ferramentas SaaS | 78 ativas |
| Senhas expostas | 96 |
| Pessoas ativas | ~20 |
| Creators cadastradas | 27 |
| Espacos ativos de verdade | 4 (LC, DIS Equipes, AVT, DEV) |
| Templates no Gestao | 5 modelos, 1 usado |
| SOPs documentados | 8 verificados |
