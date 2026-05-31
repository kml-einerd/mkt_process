# Lente BPM + Six Sigma (Padronização e Variação)

## Quem analisa

Uma mesa de três autoridades complementares em processo e qualidade:

- **Michael Hammer** (*Reengineering the Corporation*, *The Agenda*) — pensa o processo **end-to-end**, defende **donos de processo** (process owners) com autoridade real e a eliminação de **handoffs** que só existem por herança organizacional. Para Hammer, a pergunta nunca é "como melhoramos esta tarefa?", mas "por que esta tarefa existe?".
- **Visão Six Sigma / Lean Six Sigma** — o inimigo é a **VARIAÇÃO**. Processo bom não é o mais rápido em média, é o mais **previsível** (menor desvio-padrão de lead time e de defeitos). Ferramenta-mãe: **DMAIC** (Define-Measure-Analyze-Improve-Control). Mantra: *"se não é medido, não é gerenciado"* — e variação não medida é variação que ninguém controla.
- **Geary Rummler** (*Improving Performance*) — o desempenho mora no **"white space"**, o espaço em branco entre os silos do organograma. O trabalho real flui horizontalmente (processo); a organização é desenhada verticalmente (cargos). O gap entre os dois é onde tudo trava. Rummler exige alinhar **três níveis**: organização, processo e executor/desempenho.

O ponto cego que essa lente expõe e nenhuma outra vê com a mesma nitidez: **a operação está pagando o custo de 44 processos enquanto opera apenas 5.** A bagunça não está no que fazem — está em quantas formas diferentes inventaram de fazer a mesma coisa.

---

## Diagnóstico pela lente

### A variação medida (com números)

A operação tem **9.839 tasks** e ~20 pessoas produzindo criativos de tráfego pago e lançamentos de infoproduto. O sinal mais forte de saúde latente é que **86% das tasks têm parent** — ou seja, há reuso massivo de templates. As pessoas *já* clonam estruturas. O problema não é falta de padrão; é **excesso de padrões quase-iguais**, cada um divergindo do vizinho por detalhes cosméticos.

#### 44 → 5: como as variantes colapsam nas 5 estruturas reais

Foram catalogados **44 "modelos" de projeto**. Analisados pela ótica do processo end-to-end (Hammer) — *o que o trabalho realmente produz, do gatilho à entrega* — eles colapsam em **apenas 5 estruturas reais**:

| Estrutura real (canônica) | Forma canônica | Variantes cosméticas que a representam | Natureza da variação |
|---|---|---|---|
| **1. Remessa de Criativos** | 9 passos | 6+ variantes ("Remessa Novos Ads": com/sem revisão, com/sem copy, curta/completa) | Passos **arbitrariamente omitidos** — não por decisão de processo, por descuido de clonagem |
| **2. Setup Aula ao Vivo** | 15 subtasks | múltiplas variantes por produto/lançamento | Mesma sequência, **renomeada por contexto** |
| **3. Implantação Infoproduto** | 30+ subtasks | variantes por produto e por squad | Macro-processo estável, **rótulos divergentes** |
| **4. CDV Semanal** | 9 fases | variantes semana-a-semana | Cadência fixa, **instâncias tratadas como modelos novos** |
| **5. Meteórico** | 10 subtasks | variantes por campanha | Sequência idêntica, **nomes diferentes** |

O caso mais didático é a **Remessa de Criativos**: as 6 variantes de "Remessa Novos Ads" não são *processos diferentes* — são **a mesma cadeia com passos faltando**. "Com revisão / sem revisão" não deveria ser um *template diferente*; deveria ser **a presença ou ausência de uma etapa condicional dentro do mesmo template**. Hammer chamaria isso de processo fragmentado por conveniência local; Six Sigma chamaria de **variação de processo não controlada** — você não sabe se a versão "sem revisão" foi uma decisão consciente ou um erro de quem clonou às pressas.

**A conta:** 44 modelos para 5 processos = um **fator de inflação de 8,8×**. Cada modelo extra é uma superfície de manutenção, um ponto de divergência e uma página a mais no onboarding.

#### Catálogo de variação tóxica

Variação tóxica é a que **não carrega informação** — não distingue dois trabalhos genuinamente diferentes, só polui. Inventário do que foi medido:

**Status (Space LC: 30 status diferentes para um fluxo que cabe em 6–8).** O catálogo inclui **duplicatas por typo e por formatação invisível** — o pior tipo de variação, porque é indetectável a olho nu e quebra qualquer agrupamento/relatório:

- `em teste` **vs** `em teste␣` (espaço em branco no fim) → o ClickUp trata como **dois status distintos**. Uma task "em teste" e outra "em teste " nunca somam no mesmo bucket.
- `ready to go` **vs** `read to go` (typo) → mesma armadilha.
- `checkagem` **vs** `checagem` (typo) → idem.

Isso é o equivalente, em qualidade, a **medir duas peças com a mesma trena mal calibrada e achar que são tamanhos diferentes**. Toda métrica de funil construída sobre esses status está silenciosamente errada.

**Custom fields: 29 no total, vários redundantes.** Campo redundante é variação de *entrada de dados*: duas pessoas registram a mesma informação em campos diferentes, e nenhum relatório fecha.

**Sinais de governança ausente (variação por omissão):**
- **97% das tasks sem prioridade** → o campo Priority existe mas não é operado; não há sinal de o que é urgente. Variação total na percepção do que importa.
- **Tags abandonadas: 22 tags únicas, só 203 usos** → tentativa de taxonomia que morreu. Resíduo, não sistema.

#### O contraponto: a nomenclatura de ads como prova de que a operação SABE padronizar

Este é o achado mais importante da lente, porque destrói qualquer narrativa de "esse time não consegue seguir padrão". A nomenclatura de criativos **já é rígida, posicional e universalmente seguida**:

```
h5-vr1-Dan-Enrik-F01-R514-GPS-ON
│   │   │   │     │   │    │   └── status
│   │   │   │     │   │    └────── projeto
│   │   │   │     │   └─────────── remessa
│   │   │   │     └─────────────── funil
│   │   │   └───────────────────── copy (autor)
│   │   └───────────────────────── editor
│   └───────────────────────────── versão
└───────────────────────────────── hook
```

Sete campos, ordem fixa, separador único. **Zero variação tóxica.** Ninguém escreve "h5 ver1" num dia e "h5-v1" no outro. Por quê? Porque esse padrão **tem dono, tem consequência e está embutido no fluxo de trabalho** — um ad mal nomeado não roda. Já o status do projeto não tem dono nem consequência imediata, então floresceram 30 deles.

> **Conclusão de Rummler:** a competência de padronização existe e está provada. O que falta não é capacidade do executor — é o **alinhamento de nível organizacional** (alguém ser dono do padrão de status e dos templates) e o **design do white space** (o padrão de ads vive *dentro* do trabalho; o padrão de status vive *à margem*, por isso degrada).

### Custo da variação

A variação não é um problema estético. Ela tem fatura, paga em quatro moedas:

1. **Onboarding lento (custo de aprendizagem).** Um novo editor precisa aprender, na prática, **44 modelos** em vez de 5 famílias com regras claras de quando cada etapa se aplica. Tempo até produtividade plena se multiplica; o conhecimento fica tácito ("pergunta pro fulano qual template usar"), não codificado. Rummler: a organização não consegue *escalar* o que não consegue *transferir*.

2. **Métricas não comparáveis (custo de cegueira gerencial).** Com `em teste` ≠ `em teste␣`, qualquer dashboard de "quantos criativos estão em teste" subnotifica. Lead time por etapa fica impossível de calcular porque a mesma etapa tem nomes diferentes em projetos diferentes. **Six Sigma é impossível sem medição confiável** — e aqui a medição está corrompida na origem. Você não está pilotando às cegas; está pilotando com instrumentos *mentindo*.

3. **Retrabalho e defeito de processo (custo de qualidade).** A variante "sem revisão" da Remessa significa que **criativos chegam ao ar sem passar por QA**, não por decisão, mas por sorteio de qual template foi clonado. Defeito que vaza para produção = verba de tráfego queimada num criativo com erro. É o caso clássico de Six Sigma: **variação no processo vira defeito no output.**

4. **Manutenção e entropia (custo de carga).** 44 modelos = 44 coisas para atualizar quando o processo muda. Na prática, ninguém atualiza os 44 — então eles divergem ainda mais com o tempo. A variação se **autoalimenta**: quanto mais modelos, mais difícil padronizar, mais gente cria o próprio "jeitinho".

---

## Onde as autoridades CONCORDAM

As três vozes, partindo de tradições diferentes, convergem em pontos duros:

1. **5 estruturas, não 44.** Hammer (consolidar o processo end-to-end), Six Sigma (reduzir variação a um padrão único) e Rummler (um mapa de processo por fluxo de valor) concordam: o catálogo verdadeiro tem **5 processos**. Os outros 39 são instâncias, condicionais ou ruído.

2. **Status precisa ser um conjunto fechado e unificado.** Os 30 status do LC são **variação não gerenciada**. Todos concordam: status é a espinha dorsal da medição. Sem um vocabulário fechado de status, não há lead time, não há funil, não há controle (o "C" de DMAIC).

3. **O padrão de ads é o modelo a seguir.** Todos olham para a nomenclatura `h5-vr1-...` e dizem a mesma coisa: **replique esse mecanismo** (padrão rígido, dono, consequência embutida no fluxo) para os status e os templates.

4. **Padrão precisa de DONO.** Hammer (process owner), Six Sigma (process owner do DMAIC) e Rummler (responsabilidade no nível organizacional) são unânimes: **variação prolifera onde não há um responsável único pelo padrão.** Os 30 status existem precisamente porque ninguém é dono do status.

5. **Os 8 SOPs atuais são insuficientes como estão.** Todos concordam que **descrever não é padronizar.** Um SOP descritivo ("é assim que costuma acontecer") não reduz variação. Só um SOP **prescritivo** — com responsável, entrada, critério de pronto e saída por etapa — controla o processo.

---

## Onde DIVERGEM

Aqui mora a tensão produtiva da lente. As divergências não se anulam; elas **delimitam o intervalo seguro de mudança.**

### Tensão 1 — Hammer (reengenharia radical) × Six Sigma (melhoria incremental / DMAIC)

- **Hammer** olha 44 modelos e diz: *"Não conserte. Apague tudo e redesenhe os 5 processos do zero, em torno do resultado, não dos passos herdados. Big bang."* Reengenharia é **descontínua e ousada** — meia-reforma para Hammer é desperdício.
- **Six Sigma** responde: *"Não. Você não tem dados confiáveis ainda (os status estão corrompidos). Primeiro **meça** (consertar status), depois **analise** a variação real, **melhore** um processo-piloto e só então **controle/escale**. Incremental, DMAIC, sem ruptura."*

Quem está certo para *esta* operação? **Six Sigma no método, Hammer no escopo.** O escopo da ambição é radical (5 templates canônicos, vocabulário de status novo), mas a **execução é incremental e medida** — pilota num processo (Remessa de Criativos, o de maior volume), valida, depois propaga. Big bang aqui mataria a agilidade que o usuário exige preservar.

### Tensão 2 — Padronização × Agilidade (o risco existencial do BPM)

Esta é a divergência que o usuário nomeou explicitamente, e a mesa a leva a sério:

- A leitura **ingênua de BPM** diria: documente os 44, force gates de aprovação, exija preenchimento de todos os 29 campos. Isso **mataria a operação** — viraria burocracia, e o time grande e o pequeno fugiriam do sistema (voltariam ao "jeitinho", recriando a variação que se queria eliminar).
- A leitura **madura** (a que esta mesa defende): padronizar **o vocabulário e o esqueleto**, deixar **livre o conteúdo e o ritmo**. Padroniza-se **o quê e o critério de pronto**; não se padroniza **como cada um chega lá**.

> **Hammer adverte:** não confundir *controle de variação* (bom) com *controle de pessoas* (mortal). O padrão de ads funciona porque é **leve e embutido**, não porque tem um fiscal. Se o novo padrão de status exigir um fiscal, ele falhará igual às 22 tags abandonadas.

### Tensão 3 — Rummler × os outros: o problema é o processo ou a organização?

Rummler discorda parcialmente dos dois: *"Vocês estão tratando como problema de processo (templates) algo que é **problema organizacional** (white space). Os 30 status não são um defeito de desenho de processo — são o sintoma de que **ninguém é dono do fluxo entre os silos**. Conserte o template e, sem dono, em 6 meses haverá 30 status de novo."* — É a divergência mais incômoda e provavelmente a mais correta: **template novo sem process owner é recaída garantida.**

---

## Recomendações

### Padrão canônico proposto: 5 templates + status unificado

**5 templates canônicos** (um por estrutura real), cada um com **etapas condicionais explícitas** em vez de variantes separadas:

1. **Remessa de Criativos** — 9 passos, com a etapa *Revisão* e a etapa *Copy* marcadas como **condicionais** (`[opcional: revisão]`, `[opcional: copy interna]`). Acaba a guerra das 6 variantes: é **um template, com checkboxes de etapa**. Quem dispensa revisão *desmarca a etapa conscientemente* — e isso fica registrado (auditável), ao contrário de "clonei o template errado".
2. **Setup Aula ao Vivo** — 15 subtasks.
3. **Implantação Infoproduto** — 30+ subtasks (o macro-processo; pode ter sub-blocos reutilizáveis).
4. **CDV Semanal** — 9 fases (recorrência, não modelo novo por semana).
5. **Meteórico** — 10 subtasks.

Regra-mãe: **variante = etapa condicional, nunca template novo.** Se a diferença entre dois "modelos" é "um tem revisão e o outro não", são o mesmo template com uma etapa ligável/desligável.

#### Conjunto de status unificado: de 30 → **7 status**

Substituir os 30 status do LC (e replicar como **status global** nos demais spaces) por **7 status fechados**, em ordem de fluxo, vocabulário único, **minúsculas, sem espaço final, sem typo**:

| # | Status canônico | Significa | Substitui (exemplos do caos atual) |
|---|---|---|---|
| 1 | `backlog` | aceito, ainda não iniciado | "a fazer", "ideias", "novo" |
| 2 | `em produção` | alguém está executando | "fazendo", "em andamento", "produzindo" |
| 3 | `em revisão` | aguardando QA/checagem | `checkagem`, `checagem`, "revisar", "conferir" |
| 4 | `ajustes` | voltou da revisão, em correção | "refazer", "correção", "retorno" |
| 5 | `pronto` | aprovado, aguardando publicação | `ready to go`, `read to go`, "aprovado" |
| 6 | `no ar / em teste` | publicado e em mensuração | `em teste`, `em teste␣`, "rodando", "ativo" |
| 7 | `concluído` | encerrado (com acento, padrão da casa) | "finalizado", "done", "entregue" |

> 7 status capturam **100% dos estados reais** que os 30 tentavam descrever, sem nenhuma duplicata por typo ou espaço. Se a operação preferir 6, funde `ajustes` dentro de `em revisão` (estado, não status próprio). Teto duro: **8.** Acima disso, volta-se à entropia.

**Padronização cosmética obrigatória** (a lição do typo): todos os status em minúsculas, **sem espaço inicial/final** (validação automática), e **fechados para edição livre** — criar status vira privilégio do dono de processo, não de qualquer membro. Esse único controle teria evitado `em teste` vs `em teste␣`.

**Custom fields: de 29 → ~10–12.** Manter os que entram em relatório ou automação (Operação, Funil, Editor, Remessa, Projeto — os que já vivem na nomenclatura de ads); aposentar os redundantes. Campo que ninguém preenche ou que duplica outro = remover, não tolerar.

#### Tornar os 8 SOPs prescritivos

Cada SOP descritivo atual ganha, por etapa: **Responsável (R) · Entrada · Critério de Pronto (Definition of Done) · Saída.** Esse é o salto de "descreve o que existe" para "prescreve como fazer e como saber que terminou" — sem o critério de pronto, não há como medir defeito.

### Para TIME PEQUENO

A regra é **mínima fricção, máxima clareza**:

- Usar **os 5 templates e os 7 status — e nada mais.** Sem prioridade obrigatória, sem 29 campos, sem gates de aprovação. O esqueleto basta.
- Etapas condicionais **desligadas por padrão** quando não houver braço para QA — mas o *desligar* é explícito (a etapa "em revisão" pode ser pulada, e isso fica visível, em vez de simplesmente não existir).
- SOP enxuto: **um cartão de uma página por processo** (os 9/10/15 passos com critério de pronto). Onboarding de um novato cabe num dia.
- Process owner pode ser **acumulado** (o líder da operação é dono dos 5 templates). Não exige cargo novo.

### Para TIME GRANDE

A mesma espinha, com **governança e medição ligadas**:

- **Process owner dedicado por família de processo** (Rummler): alguém responde pela Remessa, alguém pela Implantação. É quem pode criar/alterar status e templates — ninguém mais. Isso fecha a torneira da variação na fonte.
- **Etapas condicionais ligadas** (QA obrigatório, copy revisada) — o time grande tem braço para qualidade, então usa-o.
- **Prioridade passa a ser operada** (sair dos 97% em branco) e **dashboards de lead time por status** ligados — possível agora que o vocabulário de status é confiável.
- **Controle de aderência ao template** via automação (ver métricas).
- Auditoria trimestral de status/campos órfãos para impedir reincidência (o destino das 22 tags abandonadas).

### Como padronizar SEM burocratizar (a regra de ouro)

> **Padronize o vocabulário e o esqueleto. Liberte o conteúdo e o ritmo.**
>
> Padroniza-se **O QUÊ** (as 5 estruturas), **OS NOMES** (7 status, campos fechados) e **O CRITÉRIO DE PRONTO** (Definition of Done por etapa). **Nunca** se padroniza *como* cada pessoa executa dentro da etapa nem se impõe gate que não exista por necessidade real.

Quatro travas anti-burocracia:

1. **Padrão embutido, não fiscalizado.** Replicar o mecanismo da nomenclatura de ads: o padrão vive *dentro* do fluxo (status fechados, template clonável em 1 clique), de modo que **seguir é mais fácil que burlar.** Padrão que precisa de fiscal já nasceu morto (vide as tags).
2. **Variante = etapa condicional, jamais template novo.** Mata a raiz dos 44 modelos sem tirar flexibilidade.
3. **Teto de complexidade explícito:** 5 templates, 8 status no máximo, ~12 campos. Qualquer adição acima do teto exige *remover* outra (orçamento fixo de complexidade).
4. **Nenhum campo obrigatório que não alimente uma decisão.** Se preencher um campo não muda nada para ninguém, ele é burocracia — remova.

---

## Métricas dessa lente

Six Sigma exige o "M" (Measure) e o "C" (Control). Métricas propostas — todas viabilizadas *após* a unificação de status:

| Métrica | Definição | Meta / Sinal | Por que importa |
|---|---|---|---|
| **Taxa de aderência ao template** | % de tasks-pai criadas a partir de um dos 5 templates canônicos (vs. ad-hoc) | > 90% | Mede se a consolidação 44→5 pegou; queda = variação voltando |
| **Nº de status ativos por space** | contagem de status distintos efetivamente em uso | ≤ 8 (alarme em 9) | Detector precoce de recaída ao caos dos 30 |
| **% retrabalho** | tasks que entraram em `ajustes` ÷ tasks que passaram por `em revisão` | baseline → reduzir | Defeito de processo (Six Sigma); alto = critério de pronto fraco |
| **Variação de lead time por etapa** | desvio-padrão do tempo em cada status, por processo | reduzir σ ao longo do tempo | **O coração da lente:** previsibilidade > velocidade média |
| **Defeitos por etapa** | erros detectados em `em revisão` por 100 criativos, por etapa | tendência de queda | Aponta *qual* etapa do processo gera defeito (Analyze do DMAIC) |
| **Cobertura de QA** | % de remessas que passaram por `em revisão` (etapa não pulada) | crescente no time grande | Mede o risco da antiga variante "sem revisão" |
| **Higiene de campos/status** | nº de status/tags/campos órfãos (0 ou ~0 usos) | → 0 | Impede o acúmulo de resíduo (lição das 22 tags / 203 usos) |

Princípio: **antes de unificar os status, NENHUMA dessas métricas é confiável** (`em teste` ≠ `em teste␣` corrompe tudo). Logo, o **primeiro passo do DMAIC é o "Measure" = consertar os status.** É pré-requisito de tudo o mais.

---

## Veredito em 1 frase

**A operação não sofre de falta de padrão — sofre de 44 variantes cosméticas de 5 processos reais e 30 status (com duplicatas por typo) onde cabem 7; e como a própria nomenclatura de ads prova que o time sabe padronizar quando o padrão é leve, embutido e tem dono, a cura é consolidar vocabulário e esqueleto (5 templates + 7 status + critério de pronto), libertar conteúdo e ritmo, e dar dono ao processo — padronizar o "o quê", nunca o "como".**
