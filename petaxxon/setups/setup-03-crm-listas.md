# Setup: CRM & Listas

> **Dono:** CRM  ·  **Ferramenta(s):** GoHighLevel (GHL) + WhatsApp API Oficial

## Objetivo
Garantir que toda pessoa que entra na operação — lead ou comprador — seja **identificada, marcada e
segmentada** de forma padronizada, para permitir nutrição, venda e recompra. É **pré-requisito em cascata**:
captura (Rota A), webinário, ações na base e recuperação WhatsApp só funcionam com CRM no lugar.

## Checklist do que precisa existir (antes de rodar qualquer funil)
- [ ] **Tags por produto comprado** (ex.: VVSA, Fórmula YouTube 2026, YouTube Dark, PlaySquad)
- [ ] **Tags por temperatura** (lead frio · morno · comprador)
- [ ] **Tags por canal de entrada** (orgânico · pago · base)
- [ ] **Segmentos separados por canal de contato** (e-mail × WhatsApp)
- [ ] **Integração checkout → CRM** (tag de compra da Hotmart aplicada automaticamente no GHL)
- [ ] **Automação de pós-venda** (boas-vindas + entrega + gatilho de recompra/ascensão)
- [ ] **Automação de nutrição de lead** (sequência da Rota A: captura → oferta)
- [ ] **Higiene de base** (automação de opt-out/supressão de descadastro, deduplicação de contatos no GHL)

## Padrão / convenção
Padrão de nomenclatura de tags/listas alinhado com o **Setup 04 (Nomenclatura)**:
Formato canônico: `prod:<produto>` · `temp:<frio|morno|comprador>` · `canal:<organico|pago|base>` (ex.: `prod:formula-youtube`, `temp:comprador`, `canal:organico`).

## Definition of Done
Toda entrada (lead/compra) gera tag automática; existem segmentos separados e-mail × WhatsApp; automações de
pós-venda e de nutrição estão **ativas e testadas** com um caso real; o checkout da Hotmart está integrado e aplica a tag 
de produto correspondente no GHL na venda.

## As 3 camadas
- **Ideal:** mapa de tags (produto/temperatura/canal) + segmentos e-mail×WhatsApp + automações de pós-venda e nutrição no GHL, integrado ao checkout da Hotmart.
- **Foto atual:** 🟡 a testar — contas criadas e integradas, mas segmentações por temperatura/canal e automações de pós-venda precisam de testes práticos de validação.
- **Gaps:** desenhar o mapa de tags oficial no GHL; construir as automações de pós-venda e nutrição; integrar com a Hotmart e testar os webhooks.
