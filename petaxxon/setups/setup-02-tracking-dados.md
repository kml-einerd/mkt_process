# Setup: Tracking & Dados

> **Dono:** Infra + Gestor de Tráfego  ·  **Ferramenta(s):** Meta Pixel, Google Analytics (GA4) / Google Ads, Hotmart, Metabase (dashboard)

## Objetivo
Garantir **dado confiável de ponta a ponta** (da origem do clique até a compra) para que cada funil possa ser decidido por critério objetivo (pass/fail). Sem tracking funcional, a Aba 06 (Dados & Decisão) não tem insumo e toda otimização vira opinião.

## Checklist do que precisa existir (antes de rodar qualquer funil)
- [ ] **Padrão de UTM** definido e documentado (source / medium / campaign / content)
- [ ] **Pixel Meta** instalado e disparando: PageView, Lead, InitiateCheckout, Purchase
- [ ] **Google (GA4/Ads)** com eventos equivalentes
- [ ] **Evento de conversão no checkout** (Purchase com valor na Hotmart) integrado e validado
- [ ] **Atribuição**: parâmetros UTM persistidos da origem até o checkout
- [ ] **Eventos da esteira** rastreados (order bumps, upsell dinâmico) via integração de Pixel e API de Conversões da Hotmart
- [ ] **Dashboard único** consolidando métricas por funil no **Metabase**
- [ ] **Teste de ponta a ponta**: uma compra de teste dispara todos os eventos corretamente

## Padrão / convenção
Formato de UTM e nomenclatura de campanha a alinhar com o **Setup 04 (Nomenclatura)**. Padrão definido:
`utm_source` = canal, `utm_medium` = orgânico/pago, `utm_campaign` = nome padrão da campanha, `utm_content` = criativo/variação (ex.: `utm_source=meta&utm_medium=pago&utm_campaign=formula-youtube-2026&utm_content=ad-v01-dan`).

## Definition of Done
Uma compra de teste real dispara a sequência PageView → InitiateCheckout → Purchase (com valor) com o UTM atribuído corretamente; o dashboard do Metabase exibe os números por funil. Só então os funis podem ser medidos.

## As 3 camadas
- **Ideal:** UTM padronizado + pixels Meta/Google com eventos + Purchase com valor no checkout + atribuição persistida + dashboard no Metabase por funil.
- **Foto atual:** 🟡 a testar — pixel e GA4 parcialmente configurados, mas integração de Purchase com valor da Hotmart e dashboard no Metabase precisam ser homologados.
- **Gaps:** padronizar UTM; instalar/validar pixels e eventos; integrar Purchase no checkout da Hotmart; homologar o dashboard do Metabase; teste ponta a ponta.
