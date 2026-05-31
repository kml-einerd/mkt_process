# ClickUp Export — Analise de Padroes, Procedimentos e Templates

**Data da analise:** 2026-04-04
**Fonte:** ALL_TASKS_FULL.csv (9.839 tasks) + ALL_COMMENTS.csv (1.057 comments)

---

## Sumario Executivo

A operacao gira ao redor de **producao de criativos para trafego pago** (ads, hooks, BTCs) com um pipeline altamente padronizado. O negocio principal e [LC] Lari Colares (GPS de Emissoes), que concentra 71% de todas as tasks (7.025). A equipe tem ~47 pessoas com papeis bem definidos: gestores de trafego, copywriters, editores de video, designers, e equipe de CRM/automacao.

**Achados-chave:**
- 3 pipelines operacionais dominantes: Remessa de Criativos, Email/WhatsApp Marketing, e Lancamento de Infoproduto
- 86% das tasks (8.448) tem parent — a operacao e fortemente hierarquica
- 6.141 links de dependencia — fluxos sequenciais muito rigidos
- 189 subtask names aparecem em 3+ listas — alto grau de reuso de template
- 68% das tasks estao concluidas (feito/fechado) — operacao madura

---

## 1. Task Name Patterns — Tipos Recorrentes de Trabalho

### Top 30 Tarefas Mais Frequentes (exatas)

| # | Task Name | Ocorrencias | Categoria |
|---|-----------|-------------|-----------|
| 1 | Feedback performance | 307 | Trafego - Analise |
| 2 | Subir no trafego | 285 | Trafego - Subida |
| 3 | Escrever copy | 265 | Copy |
| 4 | Criar copy | 163 | Copy |
| 5 | Programar envio | 147 | CRM/Email |
| 6 | Iniciar trafego novos ads | 101 | Trafego - Subida |
| 7 | Editar novos ads | 98 | Edicao Video |
| 8 | Copy escrever novos ads | 98 | Copy |
| 9 | Editar ads | 91 | Edicao Video |
| 10 | Copy (generica) | 85 | Copy |
| 11 | Gravar novos ads | 84 | Gravacao |
| 12 | Testar novos ads (3 dias) | 80 | Trafego - Teste |
| 13 | Iniciar trafego plugar/substituir hooks | 68 | Trafego - Subida |
| 14 | Editar BTC | 67 | Edicao Video |
| 15 | Editar plugar/substituir hooks | 67 | Edicao Video |
| 16 | Testar plugar/substituir hooks (3 dias) | 65 | Trafego - Teste |
| 17 | Iniciar trafego BTC | 63 | Trafego - Subida |
| 18 | Testar BTC (3 dias) | 54 | Trafego - Teste |
| 19 | Editar novos hooks | 53 | Edicao Video |
| 20 | Iniciar trafego novos hooks | 52 | Trafego - Subida |
| 21 | Gerar relatorio/preencher planilha novos ads | 50 | Trafego - Report |
| 22 | Gerar relatorio/preencher planilha p/s hooks | 46 | Trafego - Report |
| 23 | Gerar relatorio/preencher planilha BTC | 44 | Trafego - Report |
| 24 | Copy escrever novos hooks | 42 | Copy |
| 25 | Validacao do comite | 41 | Revisao/Aprovacao |
| 26 | Escrever copy para expert gravar | 38 | Copy |
| 27 | Efetuar edicao (somente se necessario) | 38 | Edicao Video |
| 28 | Iniciar trafego (generico) | 37 | Trafego - Subida |
| 29 | Gravar novos hooks | 36 | Gravacao |
| 30 | Criar estrategia de otimizacao | 33 | Trafego - Estrategia |

### Categorias Agregadas

| Categoria | Tasks | % do Total |
|-----------|-------|-----------|
| **Trafego Pago** (subir, testar, iniciar, feedback, relatorio) | ~2.800 | 28% |
| **Edicao de Video** (editar ads, hooks, BTC, VSL) | ~1.200 | 12% |
| **Copywriting** (escrever copy, criar copy) | ~900 | 9% |
| **Gravacao** (gravar ads, hooks, aulas) | ~500 | 5% |
| **CRM/Automacao** (programar envio, configurar GHL, automacoes) | ~400 | 4% |
| **Design** (criar design, banner, pagina) | ~350 | 4% |
| **Infra/Paginas** (criar pagina, implementar, checkout) | ~300 | 3% |
| **Gestao** (validacao, comite, planejamento) | ~200 | 2% |

### Keywords Dominantes

As 10 palavras mais frequentes nos nomes de tasks:
1. **novos** (1.147x) — foco constante em renovacao de criativos
2. **copy** (872x) — copywriting e o motor da operacao
3. **remessa** (826x) — batch production de criativos numerados sequencialmente
4. **criar** (754x)
5. **hooks** (734x) — hooks de atencao sao unidade criativa central
6. **trafego** (708x) — gestao de midia paga
7. **editar** (583x)
8. **subir** (511x) — subir campanhas
9. **escrever** (510x)
10. **pagina** (369x)

---

## 2. Parent-Child — Hierarquias e Templates

**85% das tasks tem parent** (8.448 de 9.839). A operacao e organizada em:
- **Remessas** (batches numerados de criativos) como parents com 8-15 subtasks cada
- **Setups** de lancamento como parents com 10-15 subtasks
- **Modelos semanais** como parents com fases

### Top Parents (mais subtasks)

| Parent Task | Subtasks | Space | Tipo |
|-------------|----------|-------|------|
| Rotina de trafego - Meta | 75 | LC | Escala diaria de trafego |
| PDA S1-M4 GPS - Remessas 593+ | 31 | LC | Batch de criativos |
| Criar as automacoes no GHL | 24 | LC | CRM setup |
| PDA S1-M7 GPS - Remessas 255-286 | 23 | LC | Batch de criativos |
| PDA S3-M5 GPS - Remessas 175-204 | 20 | LC | Batch de criativos |
| Atualizacao do funil - GPS | 16 | LC | Infra de funil |
| CDV - Modelo Semanal ON | 14 | LC | Lancamento semanal |
| Template Aula ao Vivo 3.0 | 12 | Gestao | Template de evento |
| 1 - Setup (recorrente, 10+ instancias) | 10-15 | Varios | Template de lancamento |

### Template "1 - Setup" (Aula ao Vivo / Lancamento)

Aparece em 10+ instancias com subtasks consistentes:

```
1 - Setup
  - Slides do Pitch
  - Pagina de Captura e Obrigado
  - Pagina de Vendas e Obrigado
  - Criar Formulario de pesquisa + Recompensa
  - Criar grupo de WhatsApp
  - Criar planilha de links (UTM) e dados
  - Criar identidade visual
  - Configurar Sequencia de E-mails
  - Criar Produto e Integrar no GHL
  - Configuracoes da transmissao (YT)
  - Planejamento de Trafego
  - Criar Checkout
  - Configurar area de membros
  - Pasta do projeto
  - Criar bonus para participantes (PDF)
```

### Template "Backlog de Infoproduto" (Pipeline Completo)

```
Configuracao da Infraestrutura do Funil
  - Configuracao do GHL
  - Configuracao da Pagina
  - Configuracao do Drive
  - Configuracao do Gateway de Pagamentos (Trivvo)
  - Preenchimento da Tarefa com Informacoes do TAP

Producao dos Materiais de Marketing
  - Desenvolver ID Visual e Paginas
  - Definicoes de Gravacao
  - Edicao dos Materiais de Marketing (Criativos, VSL Principal e VSL de Upsell)
  - Gravacao dos Materiais de Marketing
  - Producao de Copies (Criativos, VSL Principal e VSL de Upsell)

Producao de Copies (sub-hierarquia)
  - Criacao da Copy de E-mails e Mensagens
  - Criacao da Copy da Pagina de Vendas e Upsell
  - Criacao da Copy da VSL de Upsell
  - Criacao da Copy de X Criativos
  - Criacao da Copy da VSL Principal
  - Produzir Briefing de Gravacao e Edicao

Producao do Curso Principal
  - Criacao do Roteiro e Estruturacao do Curso
  - Gravacao das Aulas
  - Edicao das Aulas
  - Upload no Drive
  - Entrega do Produto
```

---

## 3. Dependency Chains — Fluxos Operacionais

**6.141 links de dependencia** revelam 3 pipelines dominantes.

### Pipeline A: Remessa de Criativos (Novos Ads)

Cadeia de 9 passos com 60-150 ocorrencias cada link:

```
Atualizar planilha (64x)
  --> Criar estrategia de otimizacao (132x)
    --> Copy escrever novos ads (154x)
      --> Gravar novos ads (138x)
        --> Editar novos ads (136x)
          --> [Revisar ads] (opcional)
            --> Iniciar Trafego novos ads (160x)
              --> Testar novos ads (3 dias) (100x)
                --> Gerar relatorio de desempenho
```

### Pipeline B: Hooks (Plugar/Substituir)

```
Criar estrategia de otimizacao (78x)
  --> Editar plugar/substituir hooks (110x)
    --> Iniciar trafego plugar/substituir hooks (130x)
      --> Testar plugar/substituir hooks (3 dias) (92x)
        --> Gerar relatorio/preencher planilha
```

### Pipeline C: BTC (Best Take Compilation)

```
Criar estrategia de otimizacao (84x)
  --> Editar BTC (108x)
    --> Iniciar trafego BTC (104x)
      --> Testar BTC (3 dias) (88x)
        --> Gerar relatorio/preencher planilha
```

### Pipeline D: Email/WhatsApp Marketing

```
Escrever copy (182x)
  --> Programar envio
```

```
Editar novos ads (88x)
  --> Subir no trafego (434x)
    --> Feedback performance
```

### Pipeline E: Producao de Curso/Infoproduto (chain mais longa = 11 passos)

```
Criacao do Roteiro e Estruturacao do Curso
  --> Revisao e Validacao do Roteiro
    --> Levantamento do Briefing de Gravacao
      --> Gravacao das Aulas
        --> Entrega da V1 das Aulas Editadas
          --> Revisao da V1
            --> Entrega da VF (versao final)
              --> Revisao da VF
                --> Upload das Aulas
                  --> Anexar Link da Pasta
                    --> Realizar a Criacao do Produto
```

### Top 5 Dependencias Mais Frequentes

| Blocker | Blocked | Ocorrencias |
|---------|---------|-------------|
| Subir no trafego | Feedback performance | 434 |
| Escrever copy | Programar envio | 182 |
| Iniciar trafego novos ads | Testar novos ads (3 dias) | 160 |
| Copy escrever novos ads | Gravar novos ads | 154 |
| Gravar novos ads | Editar novos ads | 138 |

---

## 4. Procedures from Descriptions — SOPs Encontrados

**715 tasks** com descricao > 200 chars. **187** contem conteudo procedural.

### SOP 1: Instrucoes de Edicao de ADS

Aparece em **15+ tasks** (template padrao para editores). Conteudo:

```
1. Editar todos os Ads padrao sem os hooks primeiramente e enviar pra
   revisao. Ja validar enquanto edita os outros ads.

2. Utilizar recursos nativos de CapCut, TikTok e Instagram, para que
   os ads parecam conteudo (aumentar clicks).

3. Entregar nas versoes 4x5 (Quadrado) e 9x16 (Vertical) de todos
   os ads da Remessa.

4. Renomear os ads seguindo pela copy com o padrao:
   [Numero do Ad]-[Numero da Remessa]-[Nome do Projeto]-[Formato]
   Ex: AD1-R1-RAP-4x5

Pontos criticos:
- Observar o momento da fala para escolher a trilha sonora
  (oportunidade = musica leve que de vontade de clicar)
- Legenda com dinamica, nao lenta. Usar estilo nativo CapCut/TikTok
- Para edicao de Hooks: [regras especificas por tipo]
```

### SOP 2: Producao de Copy da VSL Principal

```
Orientacoes:
1. Seguir o checklist "Para o Copy Responsavel Pela Producao da VSL"
2. Garantir que nao tem informacao errada (preco, nome de produto)
3. Ao finalizar: inserir link do doc nos comentarios
4. Colocar o Copy Chief responsavel na tarefa
5. Mudar status para "REVISAO COPY"
6. Copy Chief da a tarefa como finalizada (nao o Copy)
7. Se houver ajustes: fazer e repetir o processo
```

### SOP 3: Producao de Copy de Criativos

Mesmo fluxo da VSL, adaptado para criativos (mesma estrutura de revisao).

### SOP 4: Producao de Copy da VSL de Upsell

Mesmo fluxo da VSL Principal, adaptado para upsell.

### SOP 5: CDV Modelo Semanal (9 Fases)

```
CDV — Hackeando Passagens
Live toda terca 20h (HotWebinar) | Carrinho 48h (fecha quinta 19h)
Oferta: Clube de Viagens R$1.997/ano, 10 fichas
Grupo WhatsApp permanente (SendFlow)

9 FASES:
1. Definicoes Estrategicas (6 tarefas) — promessa, oferta, narrativa,
   design, ciclo, termo
2. Captacao Pago (7 tarefas) — pagina, obrigado, ads estaticos, ads
   video, typebot, formmeta, ctwa
3. Captacao Organico + Base (7 tarefas) — manychat, conteudo IG,
   emails base, sms, banners, 1a1 grupo, 1a1 ebook
4. ShowUp (6 tarefas) — WhatsApp automatico, 1a1, email, ads
   remarketing, depoimentos, countdown
5. Producao Live (5 tarefas) — script, slides, guia naturalidade,
   hotwebinar, playbook chat
6. Vendas 48h (10 tarefas) — pagina vendas, checkout, 3 emails,
   WhatsApp 5 msgs, ads RMKT, super-interessados, comercial, cross-sell
7. Pos-Venda (6 tarefas) — email compra, onboarding, engajamento 7d,
   NPS, encerramento, recuperacao
8. Infraestrutura (5 tarefas) — sendflow, ghl, utm, pixel, pesquisa
   segmentacao
9. Percepcao de Escala (2 tarefas) — playbook, metricas
```

---

## 5. Procedures from Comments — Conhecimento Operacional

**1.057 comments** no total. **133** com conteudo procedural (>150 chars com steps).

### Autor dominante: Kemuel de Mel Leopoldino (PM-OS outputs)

Os comments mais detalhados sao todos de Kemuel, entregando documentos operacionais via PM-OS para o projeto CDV:

#### Playbook de Escala CDV (6+ versoes iteradas nos comments)

```
METRICAS-CHAVE:
- CPL: investimento trafego / inscritos na live. Meta: < R$8
- Taxa de Showup: inscritos que assistem ao vivo. Meta: > 35%
- Taxa de Conversao: quem assistiu vs comprou. Meta: > 8%
- CAC: CPL / taxa de conversao
- NPS: Meta > 8.5
- Taxa de renovacao: Meta > 70% (aniversario 12 meses)

QUANDO ESCALAR:
- 4 indicadores no verde por 3 meses consecutivos
- Nao escalar antes disso

CICLO SEMANAL:
- Sexta/Sabado: preparacao conteudo da live
- Domingo: Email D-2 (antecipacao)
- Segunda: Email D-1 (prova + promessa), mensagens 1:1
- Terca: Live 20h
- Quarta: Email vendas, WhatsApp vendas
- Quinta: Ultimo dia carrinho (fecha 19h)
```

#### Template Resumo de Live

```
DADOS DA SESSAO:
- Data / Horario inicio / Horario encerramento / Duracao
- Plataforma: HotWebinar

PESQUISA AO VIVO:
- Trecho pesquisado / Data do voo / Preco buscadores / Canal CDV / Preco CDV

METRICAS:
- Inscritos / Presentes / Taxa showup / Vendas na live / Conversao
```

#### Briefings de Criativos Estaticos (4 partes)

Briefings completos com especificacoes de design:
- Dimensoes, cores hex, angulo, formato, audiencia
- Descricao visual detalhada para cada criativo
- 7+ criativos documentados (Feed, Stories, Remarketing, etc.)

### Top 5 Tasks Mais Comentadas

| Task | Comments | Space/List |
|------|----------|-----------|
| GPS Teste de Banner (Kayke) | 25 | LC / GPS-F01 |
| Remessa 04 - Novos ads Video (Fernando) | 18 | AVT / PPClear |
| Criativos em IMG -> Google -> GPS | 13 | LC / GPS Teste criativos |
| Remessa 496 - Novos ads com i.a (Kayke) | 13 | LC / GPS Teste criativos |
| Criar Site Institucional | 12 | DIS DEV / Aplicativo GPS |

---

## 6. Assignee Workload Patterns — Quem Faz O Que

### Mapa de Funcoes

| Funcao | Pessoas | Tasks/pessoa (media) |
|--------|---------|---------------------|
| **Gestores de Trafego** | Lucas Diniz, Samuel Lira, Paulo Ricardo, Thiago Martins, Gabriel Aquino | 500-1.100 |
| **Editores de Video** | Kayke, Marcel Rodrigues | 330-930 |
| **Copywriters** | Fernando Origuela, Brian Lira | 140-280 |
| **CRM/Automacao** | Henrique Gabriel | 345 |
| **Gravacao/Apresentacao** | Thays da Costa | 228 |
| **Infra/Paginas** | Lucas Nunes | 253 |
| **Design** | Lucas Cesar | 165 |
| **Gestao/Validacao** | Bruno Gabriel Aguiar Silva | 191 |
| **Estrategia/Copy Chief** | Kemuel de Mel Leopoldino | 147 |

### Top 5 — Detalhamento

**Lucas Diniz Cordeiro (1.148 tasks)** — Gestor de Trafego Principal
- 86% no space LC/Lari Colares
- Foco: Iniciar trafego (296x), gerar relatorios (275x), testar ads (144x)

**Samuel Lira (1.085 tasks)** — Gestor de Trafego
- Perfil quase identico ao Lucas Diniz (mesmas tasks, mesma distribuicao)
- Provavel par de gestores dividindo mesma operacao

**Kayke (929 tasks)** — Editor de Video Principal
- Foco: Editar novos ads/hooks/BTC (500+ tasks de edicao)
- Responsavel pela maior parte do volume audiovisual

**Paulo Ricardo (600 tasks)** — Gestor de Trafego
- Similar a Lucas/Samuel mas com menos volume

**Fernando Origuela (276 tasks)** — Copywriter Principal
- 156x "escrever copy" — maior produtor de copy da operacao
- Quase exclusivo no space LC (265 de 276)

---

## 7. Project Templates — Estruturas Reutilizaveis

### Template 1: Remessa de Criativos (PDA)

O padrao mais frequente. Cada "Remessa" e um batch de criativos numerados.

```
[PDA SX-MY] [Projeto] - Remessa NNN a NNN
  Remessa NNN - Novos ads (Responsavel)         [Copy -> Gravar -> Editar]
  Remessa NNN - BTC (Responsavel)               [Editar]
  Remessa NNN - Plugar/Substituir hooks         [Editar]
  Remessa NNN - Novos hooks (Responsavel)       [Copy -> Gravar -> Editar]
  Remessa NNN - Footprint                       [Editar]
  ...
```

Cada Remessa individual segue o pipeline de 9 passos (ver Secao 3, Pipeline A).

### Template 2: Setup de Aula ao Vivo / Lancamento

10-15 subtasks padrao:

```
1 - Setup
  - Slides do Pitch
  - Pagina de Captura e Obrigado
  - Pagina de Vendas e Obrigado
  - Criar Formulario de pesquisa + Recompensa
  - Criar grupo de WhatsApp
  - Criar planilha de links (UTM) e dados
  - Criar identidade visual
  - Configurar Sequencia de E-mails
  - Criar Produto e Integrar no GHL
  - Configuracoes da transmissao (YT)
  - Planejamento de Trafego
  - Criar Checkout
  - Configurar area de membros
  - Pasta do projeto
  - Criar bonus para participantes (PDF)
```

### Template 3: Implantacao MFV / Infoproduto Perpetuo

Subtasks que aparecem consistentemente em 5-6 listas (Acao de Vendas, Implantacao MFV, Perpetuo, Lavanda, Olibano):

```
Infraestrutura:
  - Criar planilha de links (UTM) e dados
  - Configurar GHL
  - Criar tags no GHL
  - Criar mapa de tags
  - Criar integracao atraves das tags na Trivvo
  - Configurar o checkout Trivvo
  - Trackeamento
  - Configurar trackeamento
  - Configuracoes iniciais de trafego
  - Analisar rastreio dos leads por UTM
  - Criar todos os publicos na plataforma do Facebook
  - Definir e planejar hierarquia de publicos das campanhas
  - Definir a verba da acao
  - Gerar relatorios
  - Programar automacoes dos eventos (CA, AC, CC, PIX)

Design:
  - Criar design da foto do produto 1x1
  - Criar design do checkout
  - Criar design do banner do topo do checkout
  - Artes para capa e imagem para WhatsApp
  - Criar identidade visual

Conteudo:
  - Criar copy
  - Editar ads
  - Editar VSL
  - E-mail de onboarding
```

### Template 4: CDV Semanal (Clube de Viagens)

```
CDV - Modelo Semanal
  Fase 01 — Definicoes Estrategicas
  Fase 02 — Captacao Pago
  Fase 03 — Captacao
  Fase 05 — Producao Live
  Fase 06 — Vendas 48h
  07 — Pos-Venda
  08 — Infraestrutura Tecnica
  09 — Percepcao de Escala + Playbook Semanal
```

### Template 5: Meteórico (Evento Rapido)

```
Meteorico XX - [Tema]
  - Criar grupo de WhatsApp
  - Criar conteudos
  - Criar estrutura Manychat
  - Gravar Pack de Videos
  - Criar PDF
  - Configurar Checkout
  - Pagina de Captura
  - Realizar Oferta
  - Disparo de mensagens API
  - Realizar convite em grupos antigos
```

### Subtasks Cross-Template (aparecem em 5+ listas diferentes)

| Subtask | Listas | Tipo |
|---------|--------|------|
| Criar copy | 11 | Copy |
| Editar ads | 9 | Video |
| Programar automacoes dos eventos (CA, AC, CC, PIX) | 6 | CRM |
| Criar tags no GHL | 6 | CRM |
| Criar mapa de tags | 6 | CRM |
| Criar integracao atraves das tags na Trivvo | 6 | Integracao |
| Criar planilha de links (UTM) e dados | 6 | Infra |
| Editar VSL | 6 | Video |
| Copy escrever novos ads | 6 | Copy |
| Criar design da foto do produto 1x1 | 6 | Design |
| Criar design do checkout | 6 | Design |
| Criar design do banner do topo do checkout | 6 | Design |

---

## 8. Space/List Overview

### Distribuicao por Space

| Space | Tasks | % |
|-------|-------|---|
| [LC] Lari Colares | 7.025 | 71.4% |
| Gestao | 1.389 | 14.1% |
| DIS - Equipes | 584 | 5.9% |
| [AVT] Avastus | 478 | 4.9% |
| [EVA] Eva Essence | 152 | 1.5% |
| DIS DEV | 114 | 1.2% |
| Creators Club | 60 | 0.6% |
| Trivvo | 19 | 0.2% |
| DIS ACADEMY | 13 | 0.1% |

### Top 10 Lists

| List | Tasks | Contexto |
|------|-------|----------|
| [LC] GPS-F01 | 6.258 | Funil principal GPS |
| Acao de Vendas | 528 | Templates de lancamento |
| [MDFW] MindFlow | 340 | Projeto Avastus |
| [GPS] CRM (Automacoes) | 247 | Automacoes GHL |
| Backlog de Infoproduto (copia) | 228 | Template infoproduto |
| Perpetuo | 203 | Funil perpetuo |
| Trafego | 190 | Gestao de trafego geral |
| Backlog de Infoproduto | 157 | Template infoproduto |
| [GPS] Teste criativos | 156 | Testes A/B de criativos |
| Implantacao MFV | 136 | Setup MFV |

### Status

| Status | Tasks | % |
|--------|-------|---|
| Feito | 6.664 | 67.7% |
| A fazer | 1.043 | 10.6% |
| Fechado | 465 | 4.7% |
| Nao executar | 440 | 4.5% |
| Pendente | 284 | 2.9% |
| Em execucao | 93 | 0.9% |

---

## 9. Ferramentas e Plataformas Identificadas

A partir dos nomes de tasks e descricoes:

| Ferramenta | Uso | Frequencia |
|-----------|------|-----------|
| **GHL (GoHighLevel)** | CRM, automacoes, emails, pipeline | Muito Alta |
| **Trivvo** | Checkout, gateway de pagamento | Alta |
| **CapCut** | Edicao de video | Alta |
| **Meta/Facebook** | Trafego pago | Muito Alta |
| **Google Ads** | Trafego pago | Alta |
| **TikTok** | Trafego pago + formato nativo | Media |
| **HotWebinar** | Lives semanais | Media |
| **Manychat** | Automacao Instagram | Media |
| **SendFlow** | WhatsApp API | Media |
| **VTurb** | Player de video/VSL | Media |
| **Typebot** | Pre-sell / quiz funnels | Media |
| **YouTube** | Transmissao de lives | Media |

---

## 10. Conclusoes e Recomendacoes

### Padroes Fortes

1. **Pipeline de criativos e o core**: 9 passos sequenciais, altamente padronizado, e o que mais consome horas da equipe
2. **"Remessa" e a unidade de trabalho**: batches numerados de criativos, gerenciados em PDA (Plano de Acao)
3. **Setup de lancamento e replicavel**: template consistente com 10-15 itens
4. **CDV opera em ciclo semanal**: live terca -> carrinho 48h -> fecha quinta
5. **Equipe de trafego e a maior**: 5 pessoas com 500-1.100 tasks cada

### Templates Extraiveis para Automacao

1. **Template Remessa de Criativos** — 9 subtasks com dependencias
2. **Template Setup Aula ao Vivo** — 15 subtasks
3. **Template Implantacao MFV** — 30+ subtasks em categorias
4. **Template CDV Semanal** — 9 fases, 50+ tarefas
5. **Template Meteorico** — 10 subtasks rapidos

### Gargalos Potenciais

- **Dependencia serial**: a chain de 9 passos para criativos impede paralelismo
- **Concentracao**: Lucas Diniz e Samuel Lira juntos tem 22% de todas as tasks
- **Copy como blocker**: copy bloqueia gravacao que bloqueia edicao que bloqueia trafego — copy e o ponto critico do pipeline
