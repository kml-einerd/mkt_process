# Funil: Typebot Pré-Venda — tipo: Typebot

> **Status:** roda  ·  **Rota:** B (venda direta); serve também como etapa de aquecimento na Rota A
> **Produto(s):** qualquer front-end do portfólio  ·  **Dono:** [a confirmar]

## 1. O que é & quando usar
Typebot pré-venda = funil conversacional interativo que **aquece o lead antes de entregar a oferta**. A pessoa responde a
perguntas sequenciais, é segmentada e aquecida pelo próprio fluxo — e ao final recebe a VSL embedada,
é redirecionada para a página de vendas ou vai direto ao checkout. Use quando há tráfego frio ou morno
(orgânico ou pago) e a oferta precisa de contexto antes da decisão, ou quando se quer substituir a
landing page tradicional por uma experiência mais interativa e personalizada.

## 2. Estrutura (blocos) — o caminho do lead
```
Anúncio/Conteúdo
    ↓
Typebot (perguntas sequenciais de aquecimento)
    ↓
[Saída A] VSL embedada dentro do Typebot
    ↓
[Saída B] Redirecionamento para página de vendas
    ↓
[Saída C] Link direto para o checkout (atalho para leads já quentes)
    ↓
Checkout + Esteira (5 bumps → PlaySquad → continuação)
```

> As três saídas não são mutuamente exclusivas: o fluxo pode levar para a VSL embedada e depois redirecionar
> ao checkout, ou ir direto ao checkout conforme a segmentação do lead dentro do bot.

## 3. O que TEM que ter dentro (checklist de componentes obrigatórios)
- [ ] **Fluxo Typebot publicado** — perguntas de aquecimento, ordem e lógica de ramificação [a confirmar roteiro]
- [ ] **Gancho de entrada** (primeira mensagem que captura atenção e motiva a responder)
- [ ] **Perguntas de aquecimento** que qualificam e geram comprometimento progressivo com a oferta
- [ ] **VSL embedada** dentro do bot (opcional conforme o fluxo) — vídeo de vendas ativo [a confirmar URL/player]
- [ ] **Redirecionamento para página** OU **link direto ao checkout** no final do fluxo
- [ ] **Checkout com 5 order bumps** (padrão do grupo) + Upsell 1: PlaySquad
- [ ] **Tracking:** UTM na URL de entrada do Typebot + pixel (Meta/Google) + evento de conversão no checkout → depende do Setup 02

## 4. Esteira plugada (mecânica padrão)
```
front-end (produto variável) → 5 ORDER BUMPS → UPSELL 1: PlaySquad → continuação:
  · VVSA    → PlaySquad → Fórmula YouTube 2026
  · Fórmula → PlaySquad → YouTube Dark
  · YouTube Dark → PlaySquad → Fórmula YouTube 2026
```

> A esteira é padrão independentemente da saída do Typebot (VSL, página ou checkout direto). O produto
> front-end varia; PlaySquad é sempre o Upsell 1.

## 5. Setups exigidos (links p/ Aba 01)
- [ ] **Infra & Contas:** Typebot instalado e publicado (domínio + workspace) — [a confirmar instância/plataforma]
- [ ] **Tracking & Dados:** UTM preservado da URL de entrada até o checkout; pixel disparando Lead (entrada no bot) + Purchase (Setup 02 — 🔴)
- [ ] **CRM & Listas:** lead identificado (e-mail/WhatsApp) coletado dentro do Typebot e integrado ao CRM (Setup 03 — 🔴)
- [ ] **Nomenclatura:** nome do fluxo e UTMs no padrão (Setup 04)
- [ ] **Biblioteca de Ativos:** roteiro do bot, VSL (se embedada), copy de aquecimento

## 6. Métricas & critério pass/fail
| Métrica | Meta | Ação se abaixo |
|---|---|---|
| Taxa de início do bot (clique → 1ª resposta) | [a confirmar] | [a confirmar] |
| Taxa de conclusão do fluxo (início → saída final) | [a confirmar] | [a confirmar] |
| Conversão saída → checkout | [a confirmar] | [a confirmar] |
| Conversão checkout → venda | [a confirmar] | [a confirmar] |
| Take rate dos order bumps | [a confirmar] | [a confirmar] |
| Take rate do Upsell PlaySquad | [a confirmar] | [a confirmar] |

> Números dependem do Setup 02 (Tracking) funcional. Definir junto com `dados/pass-fail-por-funil.md`.

## 7. Dono & Definition of Done
Quem PRODUZ não conclui; quem APROVA conclui. DoD: fluxo Typebot publicado e acessível pela URL de
campanha, checkout com 5 bumps + PlaySquad + continuação ativos, tracking disparando da entrada do bot
até a venda, e nome/UTM no padrão de nomenclatura. Dono/aprovador: Dono do Funil / Gestor de Operações.

## 8. As 3 camadas
- **Ideal:** Typebot com perguntas de aquecimento → saída adaptada (VSL / página / checkout direto) → checkout com 5 bumps → PlaySquad → continuação; tudo rastreado de ponta a ponta.
- **Foto atual:** 🟢 roda — o Typebot pré-venda está ativo; as três saídas existem na prática. Tracking de ponta a ponta e integração CRM [a confirmar].
- **Gaps:** roteiro formal do bot documentado; Setup 02 (Tracking) e Setup 03 (CRM) 🟢; números de métrica pass/fail [a confirmar].
