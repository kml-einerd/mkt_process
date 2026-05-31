# Campanha: Pago — Tráfego Frio (VSL ou Typebot)

> **Objetivo:** vender direto  ·  **Público:** externo/frio
> **Temperatura:** frio  ·  **Canal:** pago (Meta Ads / Google Ads)

## Montagem (a fórmula plugável)
- **Rota:** B (venda direta)
- **Funil escolhido (opção A):** [VSL Tradicional](../funis/vsl-tradicional.md) — anúncio → página com VSL → checkout
- **Funil escolhido (opção B):** [Typebot Pré-Venda](../funis/typebot-pre-venda.md) — anúncio → Typebot → checkout
- **Oferta plugada:** front-end principal (Fórmula YouTube 2026) ou variável + esteira padrão (5 bumps → PlaySquad → continuação)

> A escolha entre VSL e Typebot deve ser testada por split (A/B). Começar com a variante de menor
> fricção de entrada [a confirmar com o time].

## Ativos de monetização necessários
- [ ] **Criativo de anúncio** (vídeo ou imagem) — gancho ≤ 3 s para tráfego frio [a confirmar formatos e variações]
- [ ] **Página de vendas com VSL** (Funil A) OU **fluxo Typebot** (Funil B) ativos
- [ ] **Copy de anúncio** (manchete + texto) — [a confirmar]
- [ ] **Checkout + esteira** com 5 order bumps + PlaySquad (Upsell 1) + continuação
- [ ] **UTM por criativo/variação** (source · medium · campaign · content)
- [ ] **Pixel de conversão** validado antes de escalar (Purchase com valor)

## Setups exigidos
- [ ] **Infra & Contas:** conta de anúncios ativa + método de pagamento + domínio verificado — [a confirmar]
- [ ] **Tracking & Dados** (Setup 02): pixel Meta/Google com evento Purchase disparando corretamente; UTM preservado até o checkout — 🔴 crítico
- [ ] **CRM & Listas** (Setup 03): tag de comprador aplicada automaticamente na venda (Setup 03 — 🔴)
- [ ] **Nomenclatura** (Setup 04): padrão de nome de campanha/ad set/criativo + UTMs aplicado

## Cronograma
| Dia | Ação | Dono |
|---|---|---|
| D-14 | Validar Setup 02 (pixel + Purchase) e Setup 04 (nomenclatura) | [a confirmar] |
| D-10 | Definir oferta, preço e funil escolhido (VSL ou Typebot) | [a confirmar] |
| D-7 | Produzir criativos (vídeo/imagem) + copy de anúncio | [a confirmar] |
| D-5 | Configurar campanha na plataforma com nomenclatura padrão + UTMs | [a confirmar] |
| D-3 | Teste de ponta a ponta: clique → checkout → Purchase no pixel | [a confirmar] |
| D0 | Go live com budget inicial de teste [a confirmar valor] | [a confirmar] |
| D+3 | Primeira análise: CPL/CPA × meta; pausar criativos abaixo do limiar | [a confirmar] |
| D+7 | Decisão: escalar, iterar ou pausar | [a confirmar] |

## Métricas & meta
| Métrica | Meta | Ação se abaixo |
|---|---|---|
| CPM (custo por mil impressões) | [a confirmar] | Rever criativo / público |
| CTR (clique no anúncio) | [a confirmar] | Testar novo gancho/criativo |
| CPC (custo por clique) | [a confirmar] | Rever criativo; ajustar lance |
| Conversão visita → checkout | [a confirmar] | Testar nova página / bot |
| CPA (custo por aquisição) | [a confirmar] | Pausar criativo; rever oferta |
| ROAS (retorno sobre gasto) | [a confirmar — mínimo viável] | Pausar campanha |
| Take rate bumps / PlaySquad | [a confirmar] | Revisar ordem da esteira |

> Critério pass/fail definitivo: ROAS ≥ [a confirmar] ou CPA ≤ [a confirmar] após [a confirmar] dias / [a confirmar] R$ gastos.

## Dono & Definition of Done
Quem PRODUZ não conclui; quem APROVA conclui. DoD: campanha no ar com criativos no padrão de
nomenclatura, pixel disparando Purchase, UTM preservado, e primeiro relatório de CPA/ROAS entregue
ao aprovador no prazo definido. Dono/aprovador: [a confirmar].

## As 3 camadas
- **Ideal:** campanha pago/frio segmentada com criativos variados (teste A/B VSL × Typebot), UTMs padronizados, pixel funcional, CPA/ROAS definidos como pass/fail, e escalonamento baseado em dados.
- **Foto atual:** 🔴 a desenhar — Setup 02 (Tracking) ainda não funcional; campanha pago estruturada formalmente ainda não rodou no padrão do processo.
- **Gaps:** Setup 02 (pixel + Purchase) como pré-requisito; Setup 04 (Nomenclatura) para UTMs; criativos para tráfego frio; definição de budget e metas de CPA/ROAS.
