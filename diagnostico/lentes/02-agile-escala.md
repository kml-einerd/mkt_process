# Lente Ágil + Escalabilidade

> Diagnóstico do processo da DIS Digital sob a ótica de fluxo, WIP e escala.
> Base: 9.839 tasks ClickUp, ~20 pessoas, abr/2024–abr/2026.

---

## Quem analisa

Esta lente é conduzida por uma mesa de três autoridades, escolhidas porque a operação
da DIS já roda — informalmente — um sistema de fluxo. Não estamos diante de uma equipe
que precisa "adotar ágil do zero"; estamos diante de uma equipe que **já tem um Kanban
implícito** e sofre por não tê-lo explicitado.

**1. David J. Anderson — criador do Kanban Method.**
Anderson não acredita em revolução de processo. Sua tese central — *"start with what you do
now, agree to pursue evolutionary change"* — é cirúrgica para a DIS: a operação produziu
595+ remessas com um pipeline serial de 9 passos. Esse pipeline **funciona**. O problema não
é o método, é a falta de explicitação das políticas (WIP limits, classes de serviço,
definição de pronto). Anderson olha para os 30 status do space LC e enxerga colunas de um
quadro que ninguém desenhou, e para as 6.141 dependências como o mapa de fluxo já existente.

**2. Visão Scrum enxuto / "Shape Up" (Basecamp / Ryan Singer).**
Shape Up entra como contraponto provocador. Onde o Kanban evolui o que existe, Shape Up
questiona a própria existência do backlog. Seus princípios — **apetite fixo** (decidir quanto
tempo algo *merece* antes de quanto *custa*), **ciclos de 6 semanas**, **autonomia de squad**,
**zero backlog acumulado** — atacam diretamente as 458 tasks stale e os 1.004 "a fazer" mortos
do space Gestão. Shape Up pergunta: por que vocês têm 9.839 tasks se 68% já fecharam e o resto
em grande parte é entulho?

**3. Perspectiva de escala (3 → 30 pessoas).**
A terceira voz não é uma pessoa, é uma pergunta: *o mesmo processo serve um time de 3 e um time
de 30 sem virar burocracia?* A DIS hoje tem ~20 pessoas no core (LC) mas roda o **mesmo pipeline**
em marcas de 18 tasks (Fleyn) e em marcas de 340 (MindFlow). Isso é, na prática, o teste de
escala acontecendo ao vivo — e revelando onde o processo aguenta e onde quebra.

**Por que esta lente importa para a DIS:** o requisito do usuário é *agilidade + simplicidade,
servindo time grande e pequeno*. Nenhuma outra lente disciplinar (Lean/TOC olha o gargalo,
BPM olha padronização, SRE olha rollback) responde a pergunta "como o time se organiza para
fluir trabalho sem fricção". Esta sim.

---

## Diagnóstico pela lente

### Sistema de fluxo atual (o que o ClickUp revela)

**A DIS já opera um Kanban — só não sabe.** Os sinais são inequívocos nos dados:

- **Status = colunas.** O workflow de produção do LC é literalmente um quadro Kanban:
  `🔒 não exec/bklg → 🔓 pendente → ⚡ em execução → 🔍 checagem → 🏆 feito`. São cinco
  colunas clássicas: backlog → ready → doing → review → done. Existe inclusive uma raia
  paralela de validação de ads: `ready to go → controle ads → validados/não validados →
  retestar → escala 1 → escala 2 → winner`. Isso é um *pipeline de classes de serviço* que
  Anderson reconheceria de imediato.
- **Remessa = card.** A "Remessa NNN" (R1–R595+) é a unidade de trabalho perfeita para um card
  Kanban: tem entrada (planilha), saída (relatório), e atravessa colunas. O maior parent tem 31
  subtasks (Remessa 593+); a média de uma remessa "Novos Ads Completa" tem 6 subtasks fixas.
  **A granularidade do card já está resolvida** — a remessa é a unidade natural.
- **Dependências = fluxo mapeado.** As 6.141 dependências não são ruído: são o *value stream*
  documentado. As cinco mais frequentes (`Subir trafego → Feedback` 434x, `Copy → Gravar` 154x,
  `Gravar → Editar` 138x, `Iniciar trafego → Testar 3d` 160x) desenham exatamente o pipeline
  de 9 passos. O sistema de fluxo **existe e está medido** — sem que ninguém o tenha desenhado
  conscientemente.
- **Cadência de teste = pull explícito.** O "Testar 3 dias" é uma política de fluxo real e
  saudável: define quando um card avança da coluna "em teste" para "validado/descartado".
  É uma das poucas políticas explícitas que a operação tem — e funciona.

**Conclusão de Anderson:** *vocês não precisam de um novo sistema. Precisam tornar visível e
explícito o sistema que já têm, e adicionar as duas peças que faltam: limites de WIP e dono
por card.*

### O que está quebrado

Quatro defeitos atacam diretamente a saúde do fluxo:

**1. Proliferação de status (30 no LC) — colunas sem política.**
Trinta status num único space é o sintoma clássico de *board sprawl*. Pior: há duplicatas por
erro de digitação — `"em teste"` vs `"em teste "` (com espaço), `"ready to go"` vs `"read to go"`.
Para o Kanban, cada coluna deveria ter uma **política de entrada/saída** explícita (o que faz
um card sair de "checagem" para "feito"?). Trinta colunas significam que ninguém sabe as
políticas — o card "flutua" entre status conforme o humor de quem mexe. Os typos provam que não
há um conjunto canônico de status; cada pessoa cria o seu.

**2. 53% das tasks sem dono — fluxo sem accountability.**
5.167 tasks sem assignee. Por space, o padrão é revelador: Gestão 94% (1.303), Trivvo 89% (17),
LC 44% (3.110), AVT 46% (219). No Kanban, um card sem dono é um card que **ninguém puxou** —
ele está parado num limbo. Anderson diria que isso quebra o princípio de *pull*: trabalho deve
ser puxado por quem tem capacidade, e o ato de puxar cria responsabilidade. Sem assignee, não há
pull — há empurra (push), e push gera fila e stale.

**3. Zero WIP limit — a causa raiz do gargalo.**
Não há nenhum limite de trabalho em progresso em lugar nenhum. Combinado com o pipeline 100%
serial (red-flag #6: copy bloqueia gravação 154x → edição 138x → tráfego 160x), isso significa
que múltiplas remessas entram em "em execução" ao mesmo tempo, todas competindo pelo mesmo
gargalo (Copy — Fernando Origuela, 276 tasks; Brian Lira, 281). Sem WIP limit, o sistema
**não revela o gargalo** — ele só acumula fila silenciosa. As 27 tasks stale do Lok ("ads/funis
em teste esquecidos") são WIP abandonado que um limite teria impedido de existir.

**4. 97% sem prioridade — sem classes de serviço.**
Praticamente nenhuma task tem prioridade definida. Para o Kanban, isso elimina a possibilidade
de **classes de serviço** (expedite / fixed-date / standard / intangible). Numa operação de
tráfego pago, isso é grave: um "winner caindo" (urgente, expedite) e um "novo ângulo de teste"
(standard) recebem o mesmo tratamento de fila. A operação compensa isso na cabeça do Pedro
Duarte e do Bruno (que juntos criam 81% das tasks) — ou seja, a priorização existe mas é
**tácita e centralizada**, não uma política do sistema.

**Sintoma adjacente — sistema de tags abandonado.** 22 tags únicas, só 203 atribuições. Tags
seriam o mecanismo natural para marcar classe de serviço, marca, ou tipo de criativo. Foram
criadas e abandonadas — confirmando que a operação **tenta** instituir políticas de fluxo mas
não as sustenta.

### Cerimônia vs overhead

**Veredito: a DIS tem cerimônia de MENOS, não de mais — mas overhead de ferramenta de MAIS.**

Os dados não mostram nenhum sinal de excesso de cerimônia ágil. Não há vestígio de sprint
planning ritualizado, de retrospectivas pesadas, de daily standup burocrático. O que há é o
oposto: **um sistema de fluxo informal sem nenhum ritual de calibração**. As evidências:

- **458 tasks stale (paradas >30d)** existem porque *ninguém revisa o quadro*. Uma cadência
  mínima de revisão de fluxo (o equivalente Kanban a um "replenishment meeting") teria varrido
  essas tasks. A falta de cerimônia, não o excesso, causa o entulho.
- **Gestão com 1.389 tasks e 1 concluída** (99,9% inerte) é planejamento que nunca virou
  cadência de execução. São templates copiados manualmente que nunca foram "puxados" para um
  ciclo. Shape Up chamaria isso de *backlog que apodrece* — exatamente o que ele propõe abolir.
- **Por outro lado, há overhead de ferramenta:** 44 variantes cosméticas de 5 estruturas reais
  de template, 30 status no LC, 51 versões de TypeBot sem registro de qual é produção. Isso não
  é cerimônia (ritual humano) — é *complexidade acidental na ferramenta*. O ClickUp virou um
  depósito, não um quadro de fluxo.

A receita ágil aqui é contraintuitiva: **adicionar um ritual mínimo de calibração** (revisão de
fluxo semanal de 15 min) e simultaneamente **reduzir a complexidade da ferramenta** (de 30 para
~6 status canônicos). Mais disciplina de fluxo, menos peso de configuração.

---

## Como o MESMO processo serve TIME PEQUENO e GRANDE

O princípio que une as duas escalas: **o quadro é o mesmo, o que muda são os parâmetros (WIP,
papéis, cadência)**. Um time de 3 e um de 30 usam as mesmas colunas; ajustam só os números e
quem ocupa cada papel.

| Dimensão | Time pequeno (3–6) | Time grande (15–30) |
|---|---|---|
| **WIP limit (coluna "em execução")** | 1 remessa por pessoa, máx. 3 no quadro inteiro. Limite na pessoa. | Limite por etapa do pipeline: Copy=2, Edição=3, Tráfego=4 (espelha capacidade real: 2 copywriters, ~3 editores, 5 gestores). Limite na coluna, não na pessoa. |
| **Papéis** | Acumulados: 1 pessoa faz copy+gravação; 1 faz edição+tráfego; 1 coordena. Sem especialização rígida. | Especializados e *parametrizados*: Copy (Fernando/Brian), Edição (Kayke/Marcel), Tráfego (Lucas/Samuel/Paulo/Thiago/Gabriel), CRM (Henrique), Infra (Lucas Nunes). Cada papel é uma raia. |
| **Quem cria/prioriza** | Todos podem criar e puxar cards (priorização emergente). | Replenishment formal: um "gestor de fluxo" alimenta o ready (hoje é o Pedro Duarte, 51% — mas distribuído em 2–3 pessoas para matar o bus factor). |
| **Cadência de review** | Async/contínua. Conversa de 5 min ao concluir cada remessa. | Replenishment semanal (15 min) + revisão de stale quinzenal. Por marca/squad, não global. |
| **Granularidade da task** | Remessa = 1 card único com checklist interno (não 6 subtasks). Menos overhead. | Remessa = parent com 4–6 subtasks (modelo A1/A2). Cada subtask é puxada por um papel diferente. |
| **Classes de serviço** | 2 classes: "urgente" (winner caindo) e "normal". | 4 classes: expedite / data-fixa (lançamento CDV terça 20h) / padrão / intangível (testes de ângulo). |
| **Status (colunas)** | 4: A fazer → Fazendo → Revisão → Feito. | 6: Backlog → Pronto p/ puxar → Em execução → Em teste (3d) → Validação → Feito. + raia de escala. |
| **Multi-marca** | Um quadro só, marca vira tag/swimlane. | Um quadro por marca ativa (LC, MindFlow, PPClear), template idêntico. Fleyn/Eva (baixo volume) ficam como swimlane no quadro vizinho. |

**O insight de escala:** a DIS já faz isso parcialmente sem nomear. MindFlow (340 tasks) roda o
mesmo pipeline que Eva Essence (152, 100% concluída) e Fleyn (18, congelada). A prova de que o
processo escala para baixo está nos dados: **Eva Essence fechou 100% das tasks com o mesmo
pipeline** — o processo serve um time pequeno. O que falta é parametrizar conscientemente (definir
os WIP e papéis por tamanho) em vez de deixar acontecer por acaso.

---

## Onde as autoridades CONCORDAM

1. **O processo de produção em si é bom.** Anderson e Shape Up concordam: o pipeline de 9 passos
   produziu 595+ remessas e 68% de conclusão. Ninguém quer jogar fora o *método de fazer
   criativo*. O problema é organizacional/de fluxo, não de método de produção.

2. **Falta limitar o trabalho em progresso.** WIP descontrolado é o vilão consensual. Anderson
   via WIP limit; Shape Up via apetite fixo + um projeto por squad por ciclo. Ambos chegam ao
   mesmo lugar: *fazer menos coisas ao mesmo tempo faz tudo fluir mais rápido*. Os 458 stale e o
   gargalo serial são o mesmo problema visto por dois ângulos.

3. **Tornar o trabalho visível e com dono.** As 5.167 tasks sem dono violam o princípio comum de
   ambos: trabalho invisível ou órfão não flui. Card sem dono = trabalho que ninguém puxou.

4. **Matar o backlog morto.** A Gestão com 1.389 tasks/1 concluída e as 384 stale ali ofendem
   tanto o Kanban (fila que não flui) quanto o Shape Up (backlog que apodrece). Consenso: arquivar.

## Onde DIVERGEM

A tensão é real e produtiva — não é cosmética:

**1. Evoluir vs. recomeçar.**
- **Anderson (Kanban):** *"Comece com o que você faz hoje."* Mantenha as remessas, mantenha os
  status (consolidados), só adicione WIP limits e donos. Mudança evolucionária, baixo risco,
  zero ruptura. A operação não para para se reorganizar.
- **Shape Up:** *jogue o backlog fora.* Aquelas 1.004 tasks "a fazer" da Gestão não deveriam ser
  reorganizadas — deveriam ser **deletadas**. Em vez de uma fila perpétua de remessas, defina um
  *apetite* ("este ciclo de 6 semanas vale 8 remessas de teste para o ângulo X") e quando o tempo
  acabar, acabou. Sem arrastar pendências.

**Por que isso importa para a DIS:** a operação tem perfil de *fluxo contínuo* (tráfego pago é
demanda perene, não projeto com fim). Isso favorece Anderson. **Mas** os lançamentos CDV
(evento semanal, terça 20h) e os lançamentos de infoproduto (templates da Gestão) têm cara de
projeto com data fixa e apetite — favorecem Shape Up. A divergência se resolve por **tipo de
trabalho**: produção de criativo recorrente = Kanban contínuo; lançamento/CDV = ciclo Shape Up
com apetite.

**2. Cadência: contínua vs. fixa.**
- **Anderson:** sem timeboxes. Cards fluem; você mede lead time e melhora. Replenishment quando
  o ready esvazia.
- **Shape Up:** ciclos rígidos de 6 semanas + 2 de "cooldown". A rigidez é a feature: dá foco e
  impede o escopo de inchar.

A DIS hoje não tem nenhum dos dois — tem fluxo contínuo *sem medição* (o pior dos mundos:
nem a disciplina do timebox, nem o aprendizado do lead time).

**3. Autonomia de squad vs. coordenação central.**
- **Shape Up:** dá o problema e o apetite ao squad e *sai do caminho*. Autonomia total.
- **Kanban:** mantém o sistema de pull coordenado, com políticas explícitas e replenishment
  centralizado.

A DIS está no extremo oposto de ambos: **centralização radical** (Pedro Duarte cria 51% de tudo;
Pedro+Bruno = 81%). Shape Up empurraria fortemente para distribuir autonomia; Kanban distribuiria
de forma mais gradual via políticas. Ambos concordam que 51% num só criador é insustentável — só
discordam da velocidade da descentralização.

---

## Recomendações

### Para TIME PEQUENO (3–6)

1. **Um quadro único, 4 colunas:** A fazer → Fazendo → Revisão → Feito. Esqueça os 30 status.
2. **WIP = 1 por pessoa.** Cada um termina sua remessa antes de puxar a próxima. Isso sozinho
   mata o gargalo serial — não adianta acumular 5 remessas em copy se só há 1 copywriter.
3. **Remessa = 1 card com checklist**, não 6 subtasks. Menos cliques, menos overhead. Os 9 passos
   viram itens de checklist dentro do card.
4. **Toda task tem dono no ato de criar.** Regra simples: card sem assignee não entra no quadro.
5. **2 classes de serviço:** urgente (winner caindo) fura a fila; resto é FIFO.
6. **Revisão async ao concluir:** 5 min de conversa quando uma remessa fecha. Sem ritual fixo.

### Para TIME GRANDE (15–30)

1. **Um quadro por marca ativa** (LC, MindFlow, PPClear), template idêntico de 6 colunas.
   Marcas pequenas (Fleyn, Eva) viram swimlane no quadro vizinho.
2. **WIP por etapa, espelhando capacidade real:** Copy=2, Gravação=2, Edição=3, Tráfego=4.
   Quando uma coluna enche, ninguém empurra mais para ela — força a desafogar o gargalo.
3. **Replenishment semanal (15 min)** por squad: 2–3 pessoas (não só o Pedro) alimentam o "Pronto
   para puxar". Distribuir a criação de tasks ataca o bus factor de 51%.
4. **4 classes de serviço:** expedite / data-fixa (CDV terça 20h) / padrão / intangível.
   Usar prioridade do ClickUp (hoje 97% vazia) ou tags (hoje abandonadas) para marcar.
5. **Revisão de stale quinzenal:** qualquer card parado >14 dias é discutido ou arquivado.
   Isso teria evitado as 458 tasks stale.
6. **Lançamentos (CDV, infoproduto) saem do Kanban contínuo** e viram **ciclos Shape Up**: apetite
   fixo, squad dedicado, cooldown. Não misturar fluxo perene com projeto datado no mesmo quadro.

### Quadro Kanban mínimo proposto (colunas + WIP)

```
┌─────────┬──────────────┬──────────────┬─────────────┬──────────────┬────────┐
│ BACKLOG │ PRONTO P/    │ EM EXECUÇÃO  │ EM TESTE    │ VALIDAÇÃO    │ FEITO  │
│         │ PUXAR        │ (Copy→Edição │ (3 dias)    │ (comitê)     │        │
│ (sem    │ (priorizado, │  →Tráfego)   │             │              │        │
│  limite)│  com dono)   │              │             │              │        │
├─────────┼──────────────┼──────────────┼─────────────┼──────────────┼────────┤
│   ∞     │ WIP ≤ 5      │ WIP ≤ 9      │ WIP ≤ 6     │ WIP ≤ 4      │   ∞    │
│         │              │ (C2/G3/T4)*  │             │              │        │
└─────────┴──────────────┴──────────────┴─────────────┴──────────────┴────────┘
        ╔═══════════════════════════════════════════════════════════════╗
RAIA    ║ ESCALA:  Validado → Escala 1 → Escala 2 → Winner (Pools Ads)   ║
ADS     ╚═══════════════════════════════════════════════════════════════╝

* WIP "Em execução" = soma dos sub-limites por papel: Copy=2, Gravação=2,
  Edição=3, Tráfego=4 (parametrizável por tamanho de time).
  Time pequeno: substituir tudo por "WIP ≤ 3 no quadro inteiro".

Políticas explícitas:
- Entrada em "Pronto p/ puxar": tem dono + tem prioridade/classe.
- Saída de "Em teste": 3 dias completos + planilha de resultado preenchida.
- Card sem dono NÃO entra. Card parado >14d vai para revisão de stale.
- Status canônicos: 6 colunas. Proibido criar status novo sem aprovação.
```

Este quadro tem **6 colunas (vs. 30 hoje)**, mapeia 1:1 o pipeline já existente, e adiciona as
três peças que faltam: WIP limit, dono obrigatório, classe de serviço.

---

## Métricas dessa lente

A DIS hoje **não mede nenhuma destas** — embora os dados para calculá-las já existam no ClickUp
(timestamps de mudança de status). Implementá-las é a maior alavanca de melhoria contínua.

| Métrica | O que mede | Estado atual na DIS | Meta sugerida |
|---|---|---|---|
| **Lead time** | Da criação ao "feito" (visão do cliente interno) | Não medido; remessa média atravessa 9 passos seriais | Estabelecer baseline; reduzir 20% via paralelismo copy/edição |
| **Cycle time** | De "em execução" ao "feito" (tempo de trabalho ativo) | Não medido | Medir por etapa para localizar o gargalo (provável: Copy) |
| **WIP** | Cards simultâneos em progresso | Sem limite; provavelmente alto e invisível | Limitar conforme quadro (≤9 em execução no time grande) |
| **Throughput** | Remessas concluídas por semana | Calculável (595+ em ~22 meses ≈ 6–7/semana) mas não monitorado | Dashboard semanal por marca |
| **Flow efficiency** | % do lead time em trabalho ativo vs. em fila | Não medido; pipeline serial sugere baixíssima (muito tempo em fila esperando o gargalo) | Medir; alvo realista 40% (criativo raramente passa de 25–40%) |
| **Blocked time** | Tempo em que cards ficam bloqueados | Não medido; 6.141 dependências = muito potencial de bloqueio | Marcar cards bloqueados; o gargalo Copy deve dominar |
| **Stale count** | Cards parados >X dias | **458 hoje** (medido neste diagnóstico) | < 20, via revisão quinzenal |
| **% sem dono** | Cards órfãos | **53% (5.167)** | < 5% em cards ativos (regra de entrada) |

A métrica de maior retorno imediato é **flow efficiency**: ela quantifica exatamente o dano do
pipeline serial. Se uma remessa leva 10 dias de lead time mas só 2 de trabalho ativo, a eficiência
é 20% — e os 8 dias em fila são o argumento numérico para paralelizar copy/edição e impor WIP.

---

## Veredito em 1 frase

A DIS já roda um Kanban inconsciente que produziu 595 remessas — basta torná-lo explícito com
6 colunas canônicas (vs. 30), dono obrigatório por card (vs. 53% órfãos) e WIP limits por etapa,
mantendo o mesmo quadro para times de 3 ou 30 e tratando lançamentos como ciclos Shape Up de
apetite fixo, não como backlog perpétuo.
