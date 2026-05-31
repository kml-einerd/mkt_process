# Lente Lean + Teoria das Restrições

## Quem analisa

**Taiichi Ohno** construiu o Sistema Toyota de Produção perguntando obsessivamente "por que esse trabalho está parado?" até chegar à raiz. Ele caçava *muda* (desperdício) — tudo que o cliente não paga por: espera, retrabalho, estoque de coisa não usada. Sua tese central: o problema nunca é a velocidade de cada estação, é o **fluxo** entre elas, e estoque (trabalho parado entre etapas) esconde os defeitos. **Eliyahu Goldratt**, em "A Meta", inverteu a lógica da gestão tradicional: parou de tentar otimizar tudo e perguntou "qual é A restrição que limita o sistema inteiro?" — porque uma corrente arrebenta no elo mais fraco, e reforçar qualquer outro elo é desperdício de esforço. Essa dupla importa MUITO aqui porque a operação da Lari Colares é, literalmente, uma **linha de montagem de criativos**: 9 passos seriais, 6.141 links de dependência, "remessas" numeradas (R1 a R595+) entrando como lotes pela esteira. Não é metáfora — é uma fábrica de vídeos para tráfego pago rodando sem nenhum dos dois aprendizados aplicados. Ohno olha e vê uma linha entupida de espera e retrabalho; Goldratt olha e vê todo mundo otimizando o elo errado.

## Diagnóstico pela lente

### Ohno (Lean) vê:

Os 7 desperdícios clássicos, mapeados nesta operação específica:

1. **Espera (o pior aqui).** O passo "Testar (3 dias)" é espera institucionalizada — toda remessa congela 3 dias antes do relatório, e isso está embutido no processo como se fosse trabalho. Pior: a dependência "Subir no tráfego → Feedback de performance" aparece **434 vezes** — é o evento mais frequente de toda a operação, e é majoritariamente *espera por dado chegar*. Some a isso copy que não saiu travando gravação, gravação travando edição: cada remessa acumula filas em série.
2. **Retrabalho (muda de correção).** Copy reprovada na revisão volta para o copywriter e reinicia a cadeia. Como há um único copywriter de peso (Fernando Origuela, 156 das suas tasks são "escrever copy"), toda reprovação não tem para onde escoar — volta para o mesmo gargalo. Edição idem: Kayke é o único editor pesado (929 tasks); refação de vídeo empilha nele.
3. **Estoque / Inventário (WIP parado).** As **458 tasks "stale"** (ativas, paradas há mais de 30 dias) são estoque puro: trabalho começado, capital de atenção investido, valor zero entregue. No Lean isso é o pecado capital — estoque escondendo problema. São 458 remessas ou subtasks "em andamento" que na prática estão mortas na esteira.
4. **Superprodução.** Numeração até R595+ sugere empurrar remessas para a esteira em ritmo que o gargalo (copy/edição) não consegue absorver. Empurrar (push) em vez de puxar (pull) gera fila na frente do gargalo.
5. **Movimento / Transporte (handoffs).** 9 passos = 8 handoffs entre pessoas/funções por remessa. Cada passagem de bastão é risco de fila, mal-entendido e perda de contexto. Com **53% das tasks sem assignee**, muitos handoffs nem têm destinatário definido — o bastão cai no chão.
6. **Superprocessamento.** O "Atualizar planilha" como primeiro passo formal de TODA remessa, e "Gerar relatório" como passo final separado, sugerem trabalho administrativo que poderia ser automatizado ou colapsado.
7. **Talento subutilizado.** Marcel (backup de edição) opera a 35% da capacidade enquanto Kayke afoga. Capacidade ociosa de um lado, gargalo do outro — desbalanceamento clássico de linha.

**Onde o fluxo trava:** não há paralelismo *dentro* de uma remessa. A cadeia é 100% serial — Copy → Gravar → Editar → Tráfego → Testar. Ohno diria: "1 dia de atraso em copy = 1 dia em TODA a remessa" não é bug, é a consequência matemática de uma linha sem buffers e sem desacoplamento. O lead time da remessa é a SOMA dos 9 passos mais TODA a espera entre eles, não o máximo.

### Goldratt (TOC) vê:

**A restrição é COPY.** Não por opinião — por estrutura. Copy é o primeiro passo criativo de verdade (depois de planilha/estratégia) e alimenta toda a cadeia downstream: bloqueia gravação, que bloqueia edição, que bloqueia tráfego. As dependências confirmam: "Copy escrever novos ads → Gravar" 154x; "Escrever copy → Programar envio" 182x. E o lado humano grita: **um único copywriter principal** (Fernando, 156 copies) sustentando uma esteira que empurra centenas de remessas. Tudo a jusante é capaz (Lucas + Samuel = 2.233 tasks de tráfego escoam fácil; Kayke edita 929), mas só se a copy chegar. Throughput do sistema = throughput da copy. Ponto.

Aplicação dos **5 passos de focalização**:

1. **IDENTIFICAR a restrição.** Feito: é a copy (capacidade de escrever copy aprovada por unidade de tempo). Sintoma de confirmação: fila e stale acumulam ANTES de gravar, não depois.
2. **EXPLORAR a restrição (tirar 100% dela sem gastar dinheiro).** O copywriter NUNCA pode ficar ocioso nem fazer trabalho que não seja copy. Hoje ele provavelmente atualiza planilha, entra em reunião, formata documento — *muda* roubando o recurso mais caro do sistema. Garantir um buffer de briefings prontos na frente dele para que jamais espere input. Priorizar a fila de copy por impacto, não por ordem de chegada.
3. **SUBORDINAR tudo o mais à restrição.** Esta é a virada mental. Gravação, edição e tráfego devem trabalhar no **ritmo da copy**, não no próprio. Parar de empurrar R595 se a copy está em R580 — superproduzir só gera estoque stale. O time inteiro serve a copy: revisor prioriza copy, gravador fica pronto para receber assim que sai.
4. **ELEVAR a restrição (agora sim, investir).** Contratar/treinar copywriters; criar biblioteca de hooks e estruturas de copy reutilizáveis; usar IA para gerar primeiras versões que o Fernando edita em vez de escrever do zero. Só DEPOIS de exaurir os passos 2 e 3 — porque elevar antes de explorar é jogar dinheiro fora.
5. **NÃO deixar a inércia virar a nova restrição. VOLTAR ao passo 1.** Quando copy deixar de ser gargalo, a restrição vai migrar — provavelmente para **edição (Kayke)**, o segundo elo mais magro. Reidentificar e recomeçar. O processo é eterno.

## Onde Ohno e Goldratt CONCORDAM

- **O sistema é uma corrente serial, e a velocidade dele é ditada por um único ponto.** Ohno chama de fluxo travado; Goldratt de restrição. Mesmo diagnóstico: copy.
- **Trabalho parado é o inimigo.** As 458 tasks stale são WIP/estoque para Ohno e fila-na-frente-do-gargalo para Goldratt. Os dois mandam: pare de empurrar.
- **Otimização local é ilusão.** Acelerar tráfego (Lucas/Samuel já são rápidos) não acelera nada — Ohno diria "não adianta uma estação correr se a anterior não entrega"; Goldratt diria "uma hora ganha num não-gargalo é uma miragem".
- **Puxar > Empurrar.** Numerar até R595+ enquanto a copy está atrás é superprodução (Ohno) e fura a subordinação ao gargalo (Goldratt). Ambos querem cadência puxada pela restrição.
- **Tornar o problema visível.** Ohno com gestão visual (andon, kanban); Goldratt com buffer management. Hoje o gargalo está invisível — só aparece como stale acumulado.

## Onde DIVERGEM

A tensão é real e útil:

- **Ohno quer eliminar o desperdício EM TODO LUGAR, na fonte.** Os 3 dias de teste? Reduzir. Handoffs? Eliminar. Retrabalho de copy? Atacar a causa raiz com qualidade na fonte (jidoka). Para o Lean, *todo* muda é alvo — inclusive os desperdícios fora do gargalo.
- **Goldratt diz que isso é, em si, desperdício de esforço.** Reduzir os 3 dias de teste não aumenta o throughput se a copy continua sendo o limite — você só faz remessas esperarem o teste *e* esperarem a copy. Mexer em handoffs do tráfego (não-gargalo) é energia jogada fora. Para a TOC, **só importa o que toca a restrição**; o resto pode até ter folga de propósito (buffers protegem o gargalo).
- **Inventário/WIP:** Ohno quer WIP mínimo em toda a linha (estoque é mal absoluto). Goldratt quer WIP **estrategicamente posicionado** — um buffer ANTES da copy é desejável (proteger o gargalo de nunca faltar trabalho), mesmo sendo "estoque". Aqui o Lean purista e a TOC se chocam de frente.
- **A síntese prática:** comece pela TOC (foque na copy, ignore o resto por enquanto — é mais rápido e mais simples, atende o requisito de agilidade). Depois que o gargalo migrar, traga o Ohno para varrer o muda residual da linha inteira. TOC dá o *foco*; Lean dá o *acabamento*.

## Recomendações

### Para TIME PEQUENO (3-6 pessoas)

1. **Quadro Kanban com WIP limit na coluna "Copy".** Uma única regra: no máximo X remessas em copy ao mesmo tempo. Não comece R+1 enquanto não escoar. Simples, visível, mata superprodução e stale de uma vez.
2. **O copywriter só escreve copy.** Tire dele planilha, relatório e reunião. Alguém leva briefing pronto até ele e tira o produto dele. Explorar o gargalo custa zero.
3. **Banco de hooks/estruturas reutilizáveis.** Não escrever copy do zero toda vez — partir de templates dos criativos que já performaram. Elevar a restrição barato.
4. **Matar o stale semanalmente.** Toda sexta, revisar tasks paradas >30 dias: conclui, mata ou desbloqueia. Sem exceção. WIP limpo.
5. **Cadência puxada simples:** só entra remessa nova quando uma sai do teste. Ritmo ditado pelo fim da linha, não pela ansiedade de produzir.

### Para TIME GRANDE (15-30 pessoas)

1. **Buffer management formal antes da copy.** Manter uma fila visível de briefings 100% prontos para a copy — o copywriter jamais espera input. Monitorar o tamanho do buffer como métrica de saúde do gargalo.
2. **Elevar copy com camada de IA + segundo copywriter.** IA gera v0, copywriters editam. Hoje 156 copies em uma pessoa (Fernando) é fragilidade estrutural — single point of failure no exato ponto mais crítico do sistema.
3. **Resolver o gargalo nº2 (edição/Kayke) antes que ele assuma.** Marcel a 35% da capacidade é capacidade ociosa esperando para ser usada. Treinar/escalar edição agora, porque a restrição VAI migrar pra lá quando copy abrir.
4. **Atribuir dono a toda task (zerar os 53% sem assignee).** Handoff sem destinatário é bastão no chão. Em time grande, fila sem dono = stale garantido.
5. **Desacoplar com pull entre estações + andon.** Cada estação puxa da anterior quando tem capacidade; sinal visível (andon) quando uma trava. Para a remessa inteira mentalmente quando a copy para — não adianta gravar adiantado o que não tem copy.

## Métricas que essa lente sugere acompanhar

- **Lead time da remessa** (da abertura do parent ao "gerar relatório"): a métrica-rainha. Hoje provavelmente dominada por espera, não por trabalho.
- **% do tempo em espera vs. tempo em trabalho ativo** por remessa (Ohno): expor que a maior parte do lead time é fila/teste, não criação.
- **Throughput de remessas concluídas por semana** (Goldratt): o único número que mede o sistema inteiro. Subiu? O gargalo abriu. Não subiu? Você otimizou o elo errado.
- **Tamanho da fila antes da copy** e **antes da edição**: onde o WIP empoça revela onde está/migrou a restrição.
- **Contagem de tasks stale (>30 dias)** como termômetro de superprodução — meta: tendência a zero.
- **Taxa de retrabalho de copy** (% reprovado na revisão): atacar a qualidade na fonte do gargalo dá ganho duplo.
- **Utilização do recurso-restrição (copy)**: deve ser ~100% de tempo útil; qualquer ociosidade do gargalo é throughput perdido para sempre.

## Veredito em 1 frase

A operação é uma linha de montagem serial estrangulada pela copy: pare de empurrar remessas e otimizar o tráfego (que já voa), blinde e multiplique o copywriter, e a fábrica inteira anda — porque uma corrente só corre na velocidade do seu elo mais fraco.
