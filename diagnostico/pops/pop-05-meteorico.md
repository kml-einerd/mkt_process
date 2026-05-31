# POP-05: Meteórico

> **Quando usar:** disparar um evento-relâmpago de venda no WhatsApp (oferta de combo por tempo curto, base própria + grupos antigos).  |  **Dono do processo:** Estrategista/PM.  |  **Duração típica:** 5-10 dias do termo ao disparo.

## Objetivo
Montar e disparar um evento flash de vendas centrado em WhatsApp + ManyChat: captar pro grupo, aquecer com conteúdo, fazer a oferta e converter via API de disparo — tudo enxuto e rápido.

## Papéis envolvidos
| Papel | Responsabilidade | Time pequeno (acumula) | Time grande (dedicado) |
|-------|------------------|------------------------|------------------------|
| PM/Estrategista | Termo de abertura, oferta, orquestra | acumula com copy | Pedro |
| Copywriter | Pack de copys, copy do PDF, página, ManyChat, API | gargalo | Fernando/Brian |
| Designer | ID visual, capas, background, design checkout, PDF | acumula | Lucas Cesar |
| Expert | Grava o pack de vídeos | — | expert |
| CRM/Automação | ManyChat, grupo WhatsApp, disparo API, checkout | dedicado | Henrique |
| Infra/Páginas | Página de captura, checkout | acumula com CRM | Lucas Nunes |

---

## Fluxo (passo a passo)
| # | Etapa | Responsável | Input | Output | Critério de Pronto (DoD) | Pode paralelizar? |
|---|-------|-------------|-------|--------|--------------------------|-------------------|
| 0 | Termo de Abertura | PM | decisão de fazer o evento | termo preenchido | oferta, combo, datas e preço definidos | — (porta de entrada) |
| 1 | Definir Oferta | PM | termo #0 | oferta fechada | combo + preço + prazo do flash definidos | — |
| 2 | Pack de Copys (captação + Meteórico) | Copywriter | oferta #1 | doc de copys aprovado | passou pelo Copy Chief; sem info errada | **NÃO** (gargalo) |
| 3 | Identidade visual (logo, capas, background, design checkout) | Designer | oferta #1 | pack visual | logo + capa WhatsApp + background + checkout entregues | **SIM** (paralela a #2) |
| 4 | Gravar Pack de Vídeos | Expert | copy #2 | vídeos no drive | todos os vídeos do pack gravados | parcial (depende de copy) |
| 5 | PDF do combo (copy + design) | Copy + Design | oferta #1 | PDF pronto | conteúdo + diagramação aprovados | **SIM** (paralela) |
| 6 | Grupo de WhatsApp | CRM | — | grupo criado | grupo ativo e configurado | **SIM** |
| 7 | Estrutura ManyChat (copy + gatilho) | Copy + CRM | copy #2 | fluxo ManyChat ativo | gatilho testado, copy carregada | depende de #2 |
| 8 | Página de Captura (copy→design→aprovação→implementação) | Copy→Design→Infra | copy #2 + visual #3 | página no ar | publicada e testada | depende de #2/#3 |
| 9 | Configurar Checkout | CRM/Infra | oferta #1 + visual #3 | checkout funcional | compra-teste OK | **SIM** |
| 10 | Conteúdos (publicar + impulsionar C1/C2) | CRM + Tráfego | visual #3 + copy #2 | conteúdo no ar | publicado e impulsionado | parcial |
| 11 | Realizar a Oferta | PM/Expert | tudo pronto (#2-#9) | oferta lançada no grupo | oferta comunicada com prazo claro | — (gatilho do flash) |
| 12 | Disparo de mensagens API (copy + configurar) | Copy + CRM | oferta #11 | sequência disparando | mensagens aprovadas e agendadas na API | depende de #11 |
| 13 | Convite em grupos antigos (copy + disparos) | Copy + CRM | grupo #6 pronto | tráfego pro grupo novo | disparos efetuados pros grupos antigos | parcial |

---

## Onde paralelizar (ganho de agilidade)
- **Serial obrigatório:** Termo (#0) → Oferta (#1) abrem tudo. A Oferta (#11) é o gatilho do flash — só depois dela vem o disparo API (#12).
- **Rodam em paralelo (não dependem de copy):** identidade visual (#3), grupo WhatsApp (#6) e checkout (#9) — comece os três no dia 1, junto com a copy.
- **Gargalo: copy** (#2) destrava vídeos, ManyChat, página e API. Sequencie: pack de copys primeiro, depois copy de página/ManyChat, por último copy do disparo API.
- **Convite a grupos antigos (#13)** é o canal de captação mais barato — pode rodar assim que o grupo existir (#6), em paralelo a quase tudo.

## Checklist de execução (copiável p/ ClickUp como subtasks)
```
[ ] Criar Termo de Abertura (PM)
[ ] Definir Oferta — combo + preço + prazo (PM)
[ ] Criar Pack de Copys — captação + Meteórico (Copywriter → Copy Chief)
[ ] Criar identidade visual — logo, capas, background, design checkout (Designer)
[ ] Gravar Pack de Vídeos (Expert)
[ ] Criar PDF do combo — copy + design (Copy + Design)
[ ] Criar grupo de WhatsApp (CRM)
[ ] Criar estrutura ManyChat — copy + gatilho (Copy + CRM)
[ ] Página de Captura — copy → design → aprovação → implementar (Copy/Design/Infra)
[ ] Configurar Checkout + compra-teste (CRM/Infra)
[ ] Criar conteúdos — publicar + impulsionar C1/C2 (CRM + Tráfego)
[ ] Realizar a Oferta no grupo (PM/Expert)
[ ] Disparo de mensagens API — copy + configurar (Copy + CRM)
[ ] Convite em grupos antigos — copy + disparos (Copy + CRM)
```

## Exceções e o que fazer
| Situação | Ação |
|----------|------|
| Termo/oferta indefinidos | NÃO inicia. Sem oferta clara, o flash não converte |
| Copy atrasada | Prioriza pack de copys > página > API; visual/grupo/checkout seguem em paralelo sem ela |
| API de disparo não aprovada | Fallback: disparo manual nos grupos + ManyChat até liberar |
| Checkout não testado | Bloqueia a oferta (#11) — sem compra-teste OK, não lança |
| Grupos antigos esgotados / baixo engajamento | Reforça captação paga (impulsionar conteúdo C1/C2) |
| Etapa sem dono | Atribui antes de começar — evento flash não tolera bastão no chão |

## Critério de Pronto FINAL
O Meteórico está "pronto pra disparar" quando: termo + oferta fechados, pack de copys aprovado, vídeos gravados, identidade visual entregue, grupo WhatsApp ativo, ManyChat com gatilho testado, página publicada, checkout validado com compra-teste e PDF pronto. O evento está "concluído" quando a oferta foi lançada, a sequência de API disparou no prazo do flash e os grupos antigos foram convidados — com o resultado de vendas registrado.

## Adaptação por tamanho de time
**Time de 3-6:** o Meteórico é o evento mais enxuto da operação — perfeito pra time pequeno. Corte o PDF e o ManyChat na primeira versão; foque em grupo + oferta + disparo API + convite a grupos antigos (o essencial). Uma pessoa faz copy+PM, outra CRM+infra+disparo. **Time de 15-30:** rode visual, infra e copy em paralelo total, com um dono por etapa, e use a captação paga (impulsionar conteúdo) pra encher o grupo além dos convites orgânicos. O ganho de velocidade vem de ter a copy desafogada — em time grande, dedique um copywriter só pro Meteórico pra ele não competir com a fila de remessas.
