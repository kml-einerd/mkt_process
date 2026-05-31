# Setup: Tracking & Dados

> **Dono:** [a confirmar]  ·  **Ferramenta(s):** [a confirmar — Meta Pixel, Google (GA4/Ads), plataforma de checkout, dashboard]

## Objetivo
Garantir **dado confiável de ponta a ponta** (da origem do clique até a compra) para que cada funil possa
ser decidido por critério objetivo (pass/fail). Sem tracking funcional, a Aba 06 (Dados & Decisão) não tem
insumo e toda otimização vira opinião.

## Checklist do que precisa existir (antes de rodar qualquer funil)
- [ ] **Padrão de UTM** definido e documentado (source / medium / campaign / content)
- [ ] **Pixel Meta** instalado e disparando: PageView, Lead, InitiateCheckout, Purchase
- [ ] **Google (GA4/Ads)** com eventos equivalentes
- [ ] **Evento de conversão no checkout** (Purchase com valor) integrado e validado
- [ ] **Atribuição**: parâmetros UTM persistidos da origem até o checkout
- [ ] **Eventos da esteira** rastreados (order bumps, upsell PlaySquad) [a confirmar viabilidade na ferramenta]
- [ ] **Dashboard único** consolidando métricas por funil [a confirmar ferramenta]
- [ ] **Teste de ponta a ponta**: uma compra de teste dispara todos os eventos corretamente

## Padrão / convenção
Formato de UTM e nomenclatura de campanha a alinhar com o **Setup 04 (Nomenclatura)**. Sugestão:
`utm_source` = canal, `utm_medium` = orgânico/pago, `utm_campaign` = nome padrão da campanha,
`utm_content` = criativo/variação. Confirmar com o time. [a confirmar]

## Definition of Done
Uma compra de teste real dispara a sequência PageView → InitiateCheckout → Purchase (com valor) com o UTM
atribuído corretamente; o dashboard exibe os números por funil. Só então os funis podem ser medidos.

## As 3 camadas
- **Ideal:** UTM padronizado + pixels Meta/Google com eventos + Purchase com valor no checkout + atribuição persistida + dashboard por funil.
- **Foto atual:** 🔴 a desenhar — tracking ainda não confiável; o que existe hoje [a confirmar].
- **Gaps:** padronizar UTM; instalar/validar pixels e eventos; integrar Purchase no checkout; montar dashboard; teste ponta a ponta.
