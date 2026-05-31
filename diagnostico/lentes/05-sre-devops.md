# Lente SRE + DevOps (Confiabilidade e Reversibilidade)

> "Hope is not a strategy." — Google SRE Book
>
> Tradução para esta operação: rezar para que a V91 do TypeBot não quebre **não é** um plano de rollback.

---

## Quem analisa

Uma mesa de três autoridades em confiabilidade de sistemas. Cada uma olha esta operação de marketing de performance e enxerga, embaixo da linguagem de "criativo", "funil" e "BM", a mesma coisa que vê num data center:

1. **Google SRE (Beyer, Jones, Murphy & Petoff)** — a disciplina que transformou "ficar de plantão apagando incêndio" em engenharia: runbooks, postmortems sem culpa, error budgets, redução de toil, gerenciamento estruturado de incidente. O lema operacional: *você só pode operar de forma confiável aquilo que mede, versiona e sabe reverter.*

2. **Gene Kim ("The Phoenix Project", DORA / "Accelerate")** — os Três Caminhos: **Fluxo** (esquerda→direita rápido), **Feedback** (direita→esquerda rápido) e **Experimentação contínua**. As 4 métricas DORA: lead time, deploy frequency, change failure rate, MTTR. A tese central: *deploys pequenos, frequentes e reversíveis são mais seguros que deploys raros e grandes.*

3. **Charity Majors (observabilidade, Honeycomb)** — a frase que define tudo: *"você não controla o que não consegue observar"*. Distingue **monitoramento** (perguntas que você já sabe que vai fazer) de **observabilidade** (capacidade de fazer perguntas novas sobre o sistema em produção, sem fazer deploy). E o corolário cruel: *se a métrica vive numa planilha que alguém preenche à mão, ela já está errada quando você lê.*

### A analogia: por que funis/contas/pipeline SÃO sistemas de produção

Esta operação não escreve software, mas opera infraestrutura de produção de fato. Mapeando 1:1:

| Conceito SRE/DevOps | Equivalente nesta operação de marketing |
|---|---|
| Aplicação em produção | **Funil TypeBot/VSL** que está recebendo tráfego pago agora |
| Versão deployada / release | **Versão do funil** (V1…V91, TBA, TBA2) |
| Rollback / revert | Voltar da V91 para a V90 quando a nova quebra a conversão |
| Infra/servidores | **Business Managers (BMs)** e perfis de anúncio — onde o tráfego "roda" |
| Incidente de produção | **Conta bloqueada pelo Meta** (perda total de capacidade de tráfego) |
| Incident response / on-call | A **rotação de contas** na "Contingência Tráfego" |
| Canary deploy | O **"Testar (3 dias)"** de cada criativo |
| Observabilidade / dashboards | Métricas de funil/criativo (hoje: **planilha manual**) |
| Toil | "Gerar relatório / preencher planilha" repetido em ~140 tasks |

O ponto não é virar uma empresa de software. É reconhecer que **a operação já tem produção, já tem incidentes, já tem deploys** — só que sem nenhuma das disciplinas que tornam isso sustentável. Eles fazem SRE acidental, no modo herói, sem rede.

---

## Diagnóstico pela lente

### Funis sem versionamento nem rollback (o pior risco)

Os números, secos:

- **51 versões únicas** de funil TypeBot (V1→V91, com gaps na numeração + variantes TBA/TBA2).
- **233 tasks** referenciam TypeBot — ou seja, é o sistema mais central da operação.
- **ZERO** menções a "rollback", "revert" ou "fallback" em qualquer task ou comentário.
- **Nenhum** registro de qual versão é a "produção atual".
- 7 tasks "Desligar" pausam uma versão mas **não documentam o que entra no lugar**.
- VSL na mesma situação: 20+ versões, mesma ausência de reversibilidade.

O que isso significa em linguagem SRE: a operação faz **deploy direto em produção sem deploy reversível e sem registro de release**. Cada "V91" é um `git push --force` na main de um repositório sem histórico, sem tag, sem branch e sem ninguém sabendo qual commit está rodando.

Charity Majors mataria por isso: **não dá nem para responder a pergunta "qual versão está no ar agora?"** — que é a primeira pergunta de qualquer incidente. Sem essa resposta, todo debug começa às cegas.

O cenário de falha é concreto e não-hipotético: alguém sobe a **V91**, a conversão despenca em 3 horas, e a operação precisa voltar para a **V90** que estava convertendo. Mas:
- Não há snapshot da V90 (foi sobrescrita ou só "existe" porque alguém lembra dela).
- Não há changelog dizendo *o que mudou da V90 para a V91* — então nem dá para saber o que reverter.
- Não há um campo "produção atual = Vxx" em lugar nenhum.

Isso é o **MTTR (tempo médio de recuperação) tendendo ao infinito** num sistema que é literalmente a torneira de receita. Numa loja SRE, um sistema que fatura e não tem rollback é classificado como **risco crítico P0** — não importa o quão bem ele converte nos dias bons.

A gravidade extra: 51 versões e zero rollback **não é falta de capacidade técnica** — o TypeBot permite duplicar/exportar fluxos. É **falta de processo**. O custo de implementar reversibilidade aqui é quase zero; o custo de não ter já está embutido em cada noite em que alguém reza para a versão nova não quebrar.

### Contas de anúncio = incident response permanente (sem runbook)

- **55 de 65 BMs (85%)** estão em "Contingência Tráfego" com status **"bloqueada"**.
- **115 perfis API de backup** (PF001 a PF021+) prontos para rotação.
- Multilogin (Lauth) ativo para gerenciar as identidades.

Em termos de SRE, isso descreve uma operação onde **85% da frota de servidores está em estado de incidente a qualquer momento** e a continuidade do negócio depende de **trocar a máquina banida por uma de reserva, manualmente, o tempo todo.**

Aqui mora um paradoxo importante, e ele é a favor da operação: **eles são bons nisso.** Manter 115 perfis de backup e um pool de rotação é, na prática, uma arquitetura de **alta disponibilidade por redundância** — exatamente o que SRE prega ("design for failure", N+1, hot standby). O Meta é um adversário que derruba sua infra de propósito; a resposta de manter reserva é correta.

O problema **não é a estratégia, é a formalização**:

- É **incident response permanente, mas reativo e tácito.** Não existe runbook escrito de "conta bloqueada".
- O conhecimento de *como* rotacionar (qual perfil pegar, em que ordem, o que reconfigurar no funil, como reaquecer a BM nova) vive na cabeça de quem faz. Isso é o **antônimo de SRE**: a pessoa que sabe rotacionar é um **single point of failure humano**. Se ela tira férias, o MTTR explode.
- Não há medição: ninguém sabe o **MTTR real de uma conta banida** (quantos minutos/horas de tráfego se perdem entre o ban e a recuperação), nem a **taxa de ban por semana**, nem o **custo de tráfego perdido por incidente**.

Charity Majors: sem observar a taxa e o tempo de recuperação dos bans, a operação não consegue saber se está melhorando ou piorando, nem dimensionar quanto buffer de contas precisa manter. Está dirigindo no escuro num trecho onde 85% da pista está em chamas.

### Observabilidade: métricas em planilha manual, tracking quebrado

Este é o achado que Charity Majors trataria como **incidente em si**, não como inconveniência:

- **"Gerar relatório / preencher planilha"** aparece como passo manual em **~140 tasks.** Métrica é coletada por humano, copiada à mão, mora numa planilha.
- **Creators Club**: existe uma task de **777 caracteres** descrevendo que *"o trackeamento personalizado não está funcionando"*. Ou seja: **lançaram um programa de afiliados sem tracking de conversão.**
- Stack de observabilidade **já existe e está subutilizada**: **Metabase, Grafana, N8N** estão na casa.

Três problemas distintos empilhados:

1. **Métrica manual = métrica atrasada e não-confiável.** Planilha preenchida à mão tem lag (você vê o número de ontem, não de agora), tem erro de digitação, e não dispara alerta. Quando o funil quebra, ninguém é avisado — alguém *descobre* na próxima vez que abrir a planilha. Isso é monitoramento humano, o oposto de observabilidade.

2. **Lançar afiliados sem tracking é deploy sem instrumentação.** É a definição literal do alerta de Majors: *"você não controla o que não consegue observar"*. Não dá para otimizar, pagar comissão certa, nem identificar fraude num programa cujas conversões não são rastreadas. É um sistema operando 100% no escuro.

3. **A ferramenta já está paga e ligada.** Metabase/Grafana existem. O gap **não é de tecnologia, é de uso.** Isso é importante: a recomendação não vai pedir orçamento novo, vai pedir para **usar o que já têm**.

### Toil: quanto trabalho manual repetitivo poderia ser automatizado

Definição de Google SRE: **toil** é trabalho manual, repetitivo, automatizável, sem valor duradouro, que escala linearmente com o tamanho da operação. A meta SRE clássica é manter toil **abaixo de 50%** do tempo da equipe.

Sinais de toil concentrado nos dados:

- **~140 tasks** com "gerar relatório/preencher planilha" como passo. Se cada uma custa ~20–30 min de coleta+digitação, é **dezenas de horas/semana** evaporando em copiar número de um lugar para outro — trabalho que um dashboard Metabase faz sozinho, em tempo real, de graça depois de configurado.
- **Rotação manual de contas** entre 115 perfis: cada ban dispara uma sequência manual de troca/reconfiguração.
- **Versionamento manual de funil**: duplicar fluxo, renomear, lembrar qual está no ar.

Toil é insidioso porque **escala com o crescimento**: dobrar o número de funis dobra o tempo de planilha. É exatamente o trabalho que impede a equipe pequena de virar equipe média sem contratar gente só para preencher célula. Gene Kim chamaria isso de **fila de trabalho não-planejado** comendo a capacidade de fazer trabalho de melhoria — o ciclo vicioso do *Phoenix Project*.

### O "canary de 3 dias" sem critério formal de pass/fail

- Todo criativo roda **"Testar (3 dias)"** antes do veredito de matar/escalar.
- Isso é, conceitualmente, um **canary deploy** lindo: você expõe o novo a uma fração e observa antes de comprometer.
- **Mas não há critério formal de pass/fail documentado.** O veredito é por feeling/experiência.

O canary de software tem regra explícita: *"se a taxa de erro do canary subir acima de X% ou a latência p99 passar de Y ms, rollback automático."* O canary de 3 dias daqui tem o **mecanismo certo** (janela de observação fixa) mas o **gatilho subjetivo** (alguém olha e decide).

Consequências:
- **Inconsistência entre pessoas:** o que o operador A mata, o operador B escala. Não dá para delegar para júnior sem risco.
- **Não dá para automatizar o kill:** sem threshold, nenhum N8N pode pausar um criativo ruim sozinho.
- **Não dá para aprender em escala:** sem critério registrado, não se acumula base de "o que faz um criativo passar".

A boa notícia, de novo: **o mecanismo já existe.** Falta só transformar o "feeling" num **SLO de criativo** — um número de corte escrito (ex.: CPA, CTR, ROAS, ou hook rate mínimo na janela de 3 dias).

---

## Onde as autoridades CONCORDAM

Apesar das culturas diferentes, os três convergem em pontos que aqui são unânimes:

1. **Reversibilidade barata é inegociável.** SRE (rollback como requisito de release) e Gene Kim (deploys pequenos e reversíveis) batem na mesma tecla: um funil sem rollback é dívida de risco pura. Os três assinariam embaixo: **resolver o rollback de funil é a prioridade #1.**

2. **Você não opera o que não mede.** Majors faz disso religião, mas SRE (SLIs/SLOs) e DORA (as 4 métricas) dependem igualmente de medição honesta e automática. Planilha manual e afiliado sem tracking ofendem os três simultaneamente.

3. **Conhecimento tácito é risco operacional.** Runbook (SRE), redução de heroísmo/single-point-of-failure humano (Kim), e tornar o sistema legível (Majors) — todos querem o conhecimento da rotação de contas **fora da cabeça das pessoas e dentro de um documento.**

4. **Automatizar toil libera capacidade para melhoria.** Os três veem o trabalho manual repetitivo como o ladrão que impede a operação de evoluir.

---

## Onde DIVERGEM

A tensão real e produtiva da mesa, que precisa ser resolvida a favor do **time pequeno e ágil**:

- **Google SRE puxa para o processo formal.** Quer error budgets calculados, postmortems estruturados, SLOs negociados, classificação de severidade. Numa operação de marketing enxuta, **isso pode virar peso morto** — burocracia que ninguém preenche. O risco da escola SRE aplicada cega é criar mais ~140 tasks de "preencher documento de incidente".

- **Gene Kim / DORA puxa para a velocidade de feedback e reversibilidade barata.** Prefere *"deploy 10x por dia com rollback de 1 clique"* a *"deploy 1x por mês com processo de aprovação de 5 páginas"*. Para esta operação — que vive de testar muitos criativos rápido — **a escola DORA está mais certa**: o valor é iterar veloz, não documentar pesado.

- **Charity Majors fica no meio, mas com viés anti-burocracia:** ela diria que **observabilidade boa torna o processo formal quase desnecessário** — se você consegue ver tudo em tempo real, não precisa de tanto ritual; o sistema te conta o que está errado.

**Síntese da mesa, ponderada pelo requisito de AGILIDADE + SIMPLICIDADE:**
> Adotar a **reversibilidade e a observabilidade do DORA/Majors** (alto valor, baixo peso) e pegar do **SRE apenas os artefatos leves** que cabem numa página (o runbook de uma folha, o postmortem de 5 linhas, o SLO de um número) — **rejeitando** o aparato pesado de error budget negociado e processo de aprovação. Processo só onde ele compra reversibilidade ou visibilidade; em nenhum outro lugar.

---

## Recomendações

Ordenadas por **risco evitado ÷ esforço** (faça de cima para baixo).

### 1. Runbook de funil: registro de versão ativa + changelog + rollback

O conserto do P0. Três artefatos minúsculos, todos cabem numa única página/planilha:

- **Registro de "Produção Atual"**: um único lugar (uma linha fixa no topo de uma planilha, ou um card pinado no ClickUp) que diz: `Funil X → versão ATIVA: V91 | anterior conhecida boa: V90`. Atualizado a cada troca. Custo: segundos por deploy.
- **Changelog de 1 linha por versão**: ao subir V91, registrar *"V91: trocou headline da etapa 3 + novo preço"*. Sem isso, rollback é cego.
- **Snapshot/export antes de cada deploy**: o TypeBot exporta o fluxo. Regra: **nunca sobrescrever a versão no ar sem exportar a anterior primeiro.** Esse export É o rollback. Guardar em pasta versionada (Drive/Git/o que for).
- **Procedimento de rollback escrito em 5 passos**: "1. pausar V91. 2. importar export da V90. 3. reapontar tráfego. 4. confirmar conversão voltando. 5. registrar incidente em 3 linhas."

Resultado DORA: MTTR de funil cai de "infinito/horas" para minutos. Change failure rate fica gerenciável porque toda mudança é reversível.

### 2. Runbook de conta banida (já fazem — falta documentar)

Eles **já executam** o incident response; o gap é só transformar o tácito em explícito. Um runbook de uma página:

- **Detecção**: como/quando se sabe que a BM caiu (hoje provavelmente "o tráfego parou" — idealmente um alerta).
- **Resposta passo a passo**: qual perfil de backup pegar (ordem do pool PF001…), o que reconfigurar no funil/pixel, como reaquecer a BM nova.
- **Quem aciona**: para não depender de uma única pessoa.
- **Registro pós-incidente em 3 linhas** (postmortem sem culpa, estilo Kim): *o que caiu, quanto tempo perdemos, o que tentar para reduzir bans.*

Isso elimina o single-point-of-failure humano e começa a gerar dados de MTTR e taxa de ban.

### 3. Critério formal de pass/fail do teste de 3 dias (vira "SLO de criativo")

Transformar o feeling num número escrito. Não precisa ser sofisticado — precisa ser **explícito e único**:

- Definir os SLIs do criativo (ex.: **CPA**, **ROAS**, **CTR/hook rate**) e o **threshold de corte** na janela de 3 dias.
- Exemplo de regra de uma linha: *"Mata se CPA > R$ X no D3 OU ROAS < Y. Escala se ROAS > Z. Zona cinza entre os dois = decisão do gestor."*
- Documentar no SOP do pipeline de criativos.

Ganho: decisão consistente entre pessoas, possibilidade de **delegar para júnior**, e — fase 2 — **kill automático via N8N** quando o criativo fura o threshold. O canary vira canary de verdade.

### 4. Observabilidade: tirar a métrica da planilha manual (usar Metabase/Grafana que já têm)

- **Migrar os ~140 pontos de "preencher planilha" para um dashboard Metabase/Grafana** alimentado por integração (a stack já está paga e ligada). Métrica em tempo real, sem digitação, com lag zero.
- **Consertar o tracking do Creators Club ANTES de escalar o programa.** Afiliado sem tracking é receita não-observável e fraude não-detectável. É um incidente aberto — tratar como tal.
- Começar pequeno: **um único dashboard** com as 3–4 métricas que mais movem decisão (CPA, ROAS, conversão por funil, gasto por BM). Não tentar instrumentar tudo de uma vez.

### Para TIME PEQUENO

A operação enxuta não aguenta processo pesado. Priorizar **uma página por área, máximo**:

- **Faça só 3 coisas**: (a) o registro "Produção Atual + export antes de sobrescrever" do funil; (b) o critério de pass/fail do criativo numa frase; (c) um dashboard único no Metabase.
- **Runbook de conta = uma página, escrita por quem já faz**, em 30 minutos.
- **Postmortem = 3 linhas no card do incidente.** Nada de template de 5 seções.
- Regra de ouro: **se um artefato não compra rollback ou visibilidade, não crie.** Simplicidade é feature.

### Para TIME GRANDE

Quando a operação escala e há mais de uma pessoa por função, formalizar **só o que a escala exige**:

- **Versionamento de funil em ferramenta** (Git/repositório de exports) com nomenclatura e tags consistentes, não mais "lembrar qual é a V90 boa".
- **Automação do toil**: N8N coletando métrica e disparando alerta; kill automático de criativo pelo SLO; rotação de conta semi-automatizada.
- **On-call leve para incidentes de conta**: escala de quem responde ban fora do horário, com o runbook como base — para o MTTR não depender de uma pessoa específica estar acordada.
- **Postmortem sem culpa recorrente** (Kim/SRE): revisão quinzenal dos bans e quebras de funil para atacar causa-raiz (por que o Meta bane? dá para reduzir a taxa?), não só apagar incêndio.
- **SLOs por funil/produto** com revisão periódica — aqui sim cabe o aparato SRE mais completo, porque há gente para sustentá-lo.

---

## Métricas dessa lente

Quatro números que esta lente quer ver medidos (hoje, nenhum é medido):

| Métrica | Definição | Estado hoje | Meta inicial |
|---|---|---|---|
| **MTTR de conta banida** | Tempo entre o ban da BM e o tráfego restaurado em conta nova | Desconhecido (rotação tácita) | < 30 min, e *medido* |
| **% de funis com rollback documentado** | Funis com export da versão anterior + changelog + "produção atual" registrada | **0%** (51 versões, zero rollback) | 100% dos funis ativos |
| **Toil hours/semana** | Horas gastas em coleta/digitação de planilha + rotação manual | Estimado em dezenas de h/sem (~140 tasks de planilha) | Cortar 50% via dashboard automático |
| **Lead time criativo → veredito** | Da entrega do criativo ao kill/escala decidido | ~3 dias (fixo, sem critério) | Manter 3 dias, mas com pass/fail formal |

Métricas de apoio (DORA-style): **taxa de ban/semana** (frequência de incidente de conta), **change failure rate de funil** (% de versões novas que precisaram rollback), **% de programas com tracking funcionando** (hoje: Creators Club = 0).

---

## Veredito em 1 frase

A operação já **opera produção, sofre incidentes e faz canary** todo dia — mas **sem rollback, sem runbook e sem observabilidade real**: o conserto não é tecnologia (Metabase, Grafana, N8N e o export do TypeBot já estão na casa), é a disciplina barata de **registrar a versão ativa, escrever em uma página o que já se faz, e definir um único número de pass/fail** — transformando heroísmo invisível em confiabilidade que cabe tanto no time pequeno quanto no grande.
