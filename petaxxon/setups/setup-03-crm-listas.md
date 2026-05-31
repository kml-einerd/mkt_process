# Setup: CRM & Listas

> **Dono:** [a confirmar]  ·  **Ferramenta(s):** [a confirmar — plataforma de CRM/e-mail + API de WhatsApp]

## Objetivo
Garantir que toda pessoa que entra na operação — lead ou comprador — seja **identificada, marcada e
segmentada** de forma padronizada, para permitir nutrição, venda e recompra. É **pré-requisito em cascata**:
captura (Rota A), webinário, ações na base e recuperação WhatsApp só funcionam com CRM no lugar.

## Checklist do que precisa existir (antes de rodar qualquer funil)
- [ ] **Tags por produto comprado** (ex.: VVSA, Fórmula YouTube 2026, YouTube Dark, PlaySquad)
- [ ] **Tags por temperatura** (lead frio · morno · comprador)
- [ ] **Tags por canal de entrada** (orgânico · pago · base)
- [ ] **Segmentos separados por canal de contato** (e-mail × WhatsApp)
- [ ] **Integração checkout → CRM** (tag de compra aplicada automaticamente na venda)
- [ ] **Automação de pós-venda** (boas-vindas + entrega + gatilho de recompra/ascensão)
- [ ] **Automação de nutrição de lead** (sequência da Rota A: captura → oferta)
- [ ] **Higiene de base** (supressão de descadastro, deduplicação) [a confirmar]

## Padrão / convenção
Padrão de nomenclatura de tags/listas a definir junto ao **Setup 04 (Nomenclatura)**. Sugestão de formato:
`prod:<produto>` · `temp:<frio|morno|comprador>` · `canal:<organico|pago|base>` (ex.: `prod:formula-youtube`,
`temp:comprador`, `canal:organico`). Confirmar com o time. [a confirmar]

## Definition of Done
Toda entrada (lead/compra) gera tag automática; existem segmentos separados e-mail × WhatsApp; automações de
pós-venda e de nutrição estão **ativas e testadas** com um caso real; o checkout está integrado e aplica a tag
de produto na venda.

## As 3 camadas
- **Ideal:** mapa de tags (produto/temperatura/canal) + segmentos e-mail×WhatsApp + automações de pós-venda e nutrição, tudo integrado ao checkout.
- **Foto atual:** 🔴 a desenhar — hoje no SaaS captura-se apenas o e-mail; o resto da estrutura de CRM/segmentação [a confirmar].
- **Gaps:** definir a ferramenta de CRM; desenhar o mapa de tags; construir as automações; integrar o checkout.
