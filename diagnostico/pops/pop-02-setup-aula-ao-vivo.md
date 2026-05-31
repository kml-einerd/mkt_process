# POP-02: Setup de Aula ao Vivo / Lançamento

> **Quando usar:** lançar (ou relançar) um produto via aula/imersão ao vivo com captação + transmissão + carrinho.  |  **Dono do processo:** Estrategista/PM (Pedro).  |  **Duração típica:** 3-5 semanas de setup até o dia da aula.

## Objetivo
Montar toda a estrutura de um lançamento ao vivo — captação, antecipação, transmissão, vendas e onboarding — em paralelo, garantindo que cada peça tenha dono e esteja pronta antes do D-Day.

## Papéis envolvidos
| Papel | Responsabilidade | Time pequeno (acumula) | Time grande (dedicado) |
|-------|------------------|------------------------|------------------------|
| Estrategista/PM | Concepção, termo de abertura, orquestra fases | acumula com tráfego | Pedro dedicado |
| Copywriter | Copies de páginas, e-mails, anúncios, mensagens | acumula com PM | Fernando/Brian |
| Designer | ID visual, páginas, backgrounds, checkout | acumula com copy | Lucas Cesar |
| Infra/Páginas | Implementa páginas, área de membros, checkout | acumula com CRM | Lucas Nunes |
| CRM/Automação | GHL, e-mails, WhatsApp, ManyChat, tags | dedicado se possível | Henrique |
| Gestor de Tráfego | Verba, públicos, UTM, campanhas | acumula com PM | Lucas/Samuel |
| Editor de Vídeo | Reels, anúncios em vídeo, background da live | acumula | Kayke/Marcel |
| Expert | Grava vídeos de boas-vindas/antecipação; faz a aula | — | expert do produto |

---

## Fluxo (por fase — as fases SETUP rodam em paralelo)
| # | Fase / Etapa | Responsável | Input | Output | Critério de Pronto (DoD) | Pode paralelizar? |
|---|--------------|-------------|-------|--------|--------------------------|-------------------|
| 0 | **Concepção** — produto, reuniões com expert, Termo de Abertura | PM + Expert | data da aula definida | Termo de Abertura preenchido | oferta, promessa, datas e expert fechados | — (porta de entrada) |
| 1 | **Setup** (15 frentes, ver lista) | times por frente | Termo #0 | infraestrutura completa | todas as 15 frentes em `CONCLUÍDO` | **SIM, massivo** |
| 2 | **Captação** — ads, reels, e-mails, WhatsApp, ManyChat | Copy→Design/Editor→Tráfego/CRM | páginas + UTM (#1) prontos | campanhas e mensagens no ar | leads entrando, automação confirmando inscrição | parcial (depende #1) |
| 3 | **Antecipação** — e-mails D-2/D-1, reels, voz/SMS, bônus | Copy→CRM→Expert | base captada (#2) | sequência de aquecimento ativa | mensagens agendadas no GHL; bônus enviado | parcial |
| 4 | **Vendas** — transmissão, e-mails venda/recuperação, WhatsApp, remarketing | PM→todos | live configurada (#1) | live no ar + carrinho aberto | background pronto, slides, QR checkout, automações de venda armadas | depende do D-Day |
| 5 | **Onboarding** — e-mail boas-vindas, FAQ, atendimento | CRM + Suporte | venda confirmada (#4) | cliente entregue | área de membros liberada, FAQ publicado | pós-venda |

### As 15 frentes da Fase 1 (Setup) — todas paralelizáveis
| Frente | Responsável | DoD curto |
|--------|-------------|-----------|
| Slides do Pitch (copy→revisão→design) | Copy + Design | slides aprovados, link encurtado pro chat YT |
| Página de Captura + Obrigado | Copy→Design→Infra | publicada e testada |
| Página de Vendas + Obrigado | Copy→Design→Infra | publicada e testada |
| Formulário de pesquisa + recompensa | CRM | formulário ativo, recompensa configurada |
| Grupo de WhatsApp + envio automático GHL | CRM | grupo criado, automação disparando |
| Planilha de links (UTM) e dados | Tráfego | UTMs mapeadas e rastreáveis |
| Identidade visual (logo, capas, backgrounds, checkout) | Design | pack completo entregue |
| Sequência de e-mails (lista, campos, form, automação) | CRM | automação ativa no GHL |
| Produto + GHL (tags, mapa de tags, integração Trivvo, automações CA/AC/CC/PIX) | CRM | produto integrado, automações testadas |
| Transmissão YT (agendar live, acesso, descrição, convidados) | PM | live agendada e acessível |
| Planejamento de Tráfego (verba, hierarquia de públicos, distribuição, públicos no FB) | Tráfego | verba distribuída, públicos criados |
| Checkout (Trivvo + 2 cartões) | Infra | checkout funcional, testado |
| Área de membros (produto, integração, vincular curso) | Infra/CRM | acesso liberado em teste |
| Pasta do projeto | PM | estrutura criada no drive |
| Bônus PDF (construir + diagramar) | Copy + Design | PDF pronto pra entrega |

---

## Onde paralelizar (ganho de agilidade)
- **Serial obrigatório:** Concepção (#0) ANTES de tudo. Sem Termo de Abertura, nada começa.
- **Setup (#1) é massivamente paralelo:** as 15 frentes não dependem entre si, exceto: design depende da ID visual; implementação de página depende da copy+design dela; checkout depende do produto no GHL.
- **A copy é o gargalo aqui também:** toda frente que precisa de copy (páginas, e-mails, anúncios, mensagens) compete pelo mesmo recurso. Sequencie a fila de copy por prioridade: primeiro o que está no caminho crítico do D-Day (página de vendas, slides, e-mails de venda).
- **Tráfego, identidade visual e infra rodam SEM esperar copy** — comece-os no dia 1.
- **Captação (#2) só começa quando páginas + UTM estão prontas;** antecipação (#3) só quando há base captada.

## Checklist de execução (copiável p/ ClickUp como subtasks)
```
FASE 0 — CONCEPÇÃO
[ ] Reunião de alinhamento com expert
[ ] Reunião de alinhamento estratégico
[ ] Preencher Termo de Abertura (oferta, promessa, datas)

FASE 1 — SETUP (paralelo)
[ ] Slides do Pitch · [ ] Página Captura+Obrigado · [ ] Página Vendas+Obrigado
[ ] Formulário pesquisa+recompensa · [ ] Grupo WhatsApp+GHL · [ ] Planilha UTM
[ ] Identidade visual · [ ] Sequência e-mails GHL · [ ] Produto+GHL+Trivvo
[ ] Transmissão YT · [ ] Planejamento tráfego · [ ] Checkout (2 cartões)
[ ] Área de membros · [ ] Pasta do projeto · [ ] Bônus PDF

FASE 2 — CAPTAÇÃO
[ ] Ads estáticos · [ ] Ads vídeo · [ ] Reels · [ ] E-mails captação
[ ] WhatsApp Business · [ ] ManyChat · [ ] Confirmação inscrição · [ ] Post fixado

FASE 3 — ANTECIPAÇÃO
[ ] E-mails D-2/D-1 · [ ] WhatsApp grupos · [ ] Voz/SMS · [ ] Reels · [ ] Enviar bônus

FASE 4 — VENDAS
[ ] Background da live · [ ] Slides + QR checkout · [ ] E-mails venda + recuperação
[ ] WhatsApp API venda · [ ] Remarketing vídeo+estático · [ ] Ação comercial

FASE 5 — ONBOARDING
[ ] E-mail boas-vindas · [ ] FAQ · [ ] Atendimento/onboarding
```

## Exceções e o que fazer
| Situação | Ação |
|----------|------|
| Termo de Abertura incompleto | NÃO inicia Setup. Fecha concepção primeiro |
| Copy atrasada bloqueando páginas | Prioriza a copy do caminho crítico (vendas, slides, e-mails venda); o resto espera |
| Expert não gravou vídeos de boas-vindas | Cobra data; usa antecipação só por e-mail/texto até gravar |
| WhatsApp API não aprovada a tempo | Fallback pra grupos manuais + e-mail |
| Checkout não testado antes do D-Day | Bloqueia o "go live" — checkout quebrado = lançamento perdido |
| Frente sem dono | Atribui antes da fase começar (Setup tem 15 frentes — todas precisam de dono) |

## Critério de Pronto FINAL
O lançamento está "pronto pra ir ao ar" quando: Termo fechado, as 15 frentes de Setup em `CONCLUÍDO`, captação rodando com leads entrando, antecipação agendada, transmissão testada (background + QR + slides), checkout validado com compra-teste, e automações de venda + onboarding armadas no GHL. Pós-evento: relatório de métricas e onboarding dos compradores concluído.

## Adaptação por tamanho de time
**Time de 3-6:** as 15 frentes do Setup viram uma fila sequencial pesada — priorize o caminho crítico (páginas de vendas → checkout → automações de venda → captação) e corte o que é "nice to have" (voz/SMS, ManyChat) na primeira edição. Uma pessoa acumula copy+PM, outra design+infra. **Time de 15-30:** atribua um dono por frente e rode tudo em paralelo de verdade — é onde este POP brilha. O PM vira orquestrador puro, monitorando que nenhuma frente vire gargalo no caminho crítico do D-Day.
