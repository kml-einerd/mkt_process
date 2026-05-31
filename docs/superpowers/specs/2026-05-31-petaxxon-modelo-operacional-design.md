# Petaxxon — Modelo Operacional de Marketing & Monetização (Design / Spec)

**Data:** 2026-05-31
**Autor:** Kemuel Leopoldino + time (encarnado: Arquiteto de Processos/BPM, Estrategista de Direct Response, RevOps, Lead de Orgânico, Gestão de Conhecimento, Designer de Informação)
**Status:** Em revisão (aguardando aprovação para gerar o plano de implementação)

---

## 1. Contexto & Problema

**Petaxxon** é um grupo de mídia *creator-led*: rede de canais (YouTube **Ei Nerd** e **Nerds de Negócios**, do Peter Jordan), perfis sociais e blog, com uma **base orgânica grande já consolidada**. O grupo monetiza essa base com **infoprodutos + SaaS** (PlaySquad), no nicho de crescimento em redes sociais, *make money* e ferramentas de produção de conteúdo.

**O ativo central já existe e funciona** (audiência + máquina de conteúdo orgânico). O que **não** está desenhado como sistema é a **operação de monetização** dessa base: hoje funis e ações existem de forma solta, sem um modelo padronizado, simples, visual e replicável.

**Problema a resolver:** projetar um **modelo operacional neutro e reutilizável** ("como deveria ser"), que vá do **macro (BPMN nível 0) ao micro (POP/checklist)**, seja **simples e visual** o suficiente para passar ao time, e **modular/plugável** — de modo que qualquer coisa nova (funil, campanha interna/externa, cliente/frio, produto novo) seja apenas *encaixada* num molde já validado, e o modelo inteiro seja **replicável/escalável para outras operações do grupo**.

**Fonte de referência (não é o objeto):** a extração da operação DIS/GPS em `Recursos/clickup-export/` e os POPs/lentes em `diagnostico/` servem como matéria-prima e prova de padrões, mas serão **neutralizados** — o modelo Petaxxon não documenta a DIS.

## 2. Escopo

**Dentro do escopo agora:** a operação **Ei Nerd** completa — produtos, esteira, 3 pipelines principais, setups, rotas de campanha, cadência e dados.

**Parkeado (neutro desde já, detalhado depois):** **DarkPixel** — braço de agência/DR que replica os funis para outros projetos e monetiza influencers (produtora). É o *motivo* de tudo ser plugável; vira a Aba 07.

**Fora do escopo (insumo dado):** crescer audiência e produzir conteúdo orgânico genérico. Conteúdo entra **apenas** com intenção de monetização (spot, vídeo temático, conteúdo+pitch, impulsionamento).

## 3. Objetivos & Princípios

1. **Simples por fora, completo por dentro.** 8 abas no topo; cada uma desce macro→meso→micro.
2. **Visual.** BPMN navegável que o time abre para se localizar e escolher o caminho.
3. **Plugável.** "Muda o front-end, a esteira permanece." Funis, ofertas e setups se combinam.
4. **Replicável/escalável** para outras operações do grupo (DarkPixel).
5. **3 camadas por área:** ① **Ideal** (como deveria ser) · ② **Foto atual** (como está: roda / a testar / a desenhar) · ③ **Gaps** (o que falta produzir → backlog).
6. **Separação produtor/aprovador** e **DoD explícito** em todo processo (herdado dos POPs-fonte).

**Não-objetivos:** documentar o estado atual da DIS; desenhar a máquina de conteúdo orgânico; resolver tudo de uma vez (fazemos um a um).

## 4. Modelo Macro (BPMN nível 0)

```
INSUMO DADO (fora do escopo): Base/Audiência + Máquina de Conteúdo Orgânico  (roda em paralelo)
        │
        ▼
[1] ATIVOS DE MONETIZAÇÃO  → spot · vídeo temático · conteúdo+pitch · impulsionamento · criativo pago
        │
        ├── ROTA A (indireta):  Capturar → Lista/CRM → Nutrir → Oferta
        └── ROTA B (direta):    Conteúdo+pitch / Oferta direta → Página/Checkout
        │  (as duas rotas usam a MESMA biblioteca de funis e o MESMO portfólio)
        ▼
[3] FUNIL (biblioteca plugável) → [4] OFERTA (portfólio) → [5] VENDA (checkout/recuperação) → [6] PÓS (recompra/ascensão)

FUNDAÇÃO (define 1x, reusa sempre): Setups
GOVERNANÇA (por cima de tudo): Dados & Decisão · Pessoas & Capacidade · Portfólio & Produto · Replicação
LOOP: dados de venda retroalimentam quais ativos de monetização produzir
```

## 5. Portfólio & Esteira (Aba 02)

**Produtos e papéis:**

| Produto | Papel | Notas |
|---|---|---|
| **VVSA** (Vídeo Vertical Sem Aparecer) | Front-end · low ticket | Vende por página **ou** Typebot. 5 order bumps. |
| **Fórmula YouTube 2026** | Front-end · principal (carro-chefe) | 2 bumps hoje → **meta 5**. |
| **YouTube Dark** (novo) | Upsell **e** front-end | Entra como upsell; vendido direto (VSL/Direct) com FY na esteira. |
| **PlaySquad** | SaaS · **Upsell 1 universal** | Gera clipes do YouTube p/ social. Em **todos** os funis. Precisa de funil próprio (ver Aba 03). |
| **Mega Combo** | Oferta combinada | Vendido via webinário (Fórmula YouTube + YouTube Dark + combo). |

**Esteira padrão (mecânica reutilizável de checkout):**

```
FRONT-END (qualquer)  →  5 ORDER BUMPS (padrão fixo)  →  UPSELL 1 = PlaySquad  →  CONTINUAÇÃO (varia)
```

| Front-end | Esteira |
|---|---|
| VVSA | VVSA → 5 bumps → **PlaySquad** → Fórmula YouTube |
| Fórmula YouTube 2026 | FY → 5 bumps → **PlaySquad** → YouTube Dark |
| YouTube Dark (direto) | YT Dark → 5 bumps → **PlaySquad** → Fórmula YouTube |

**Regras de ouro:**
- **Sempre 5 order bumps.**
- **PlaySquad é sempre o Upsell 1.**
- Testar **PlaySquad como Upsell 2** = isso vira **um novo funil (variante)**, não o padrão.
- Muda o front-end → bumps→PlaySquad→continuação permanecem. É o que torna plugável.

## 6. Biblioteca de Funis (Aba 03)

Cada **tipo de funil** é documentado com a mesma ficha: **o que é · quando usar · estrutura (blocos) · o que TEM que ter dentro (checklist de componentes) · métricas · status**.

| Tipo de funil | Status hoje | Observações |
|---|---|---|
| VSL tradicional | **roda** | vídeo de vendas → página → checkout+esteira |
| Typebot pré-venda | **roda** | bot aquece; VSL embedada → checkout **ou** página |
| Webinário (mega combo) | a testar | vende Fórmula YouTube + YouTube Dark + combo |
| Captura (lead magnet) | a desenhar | ebook/grátis → webinar/vendas (Rota A) |
| Recuperação WhatsApp | a testar | ações na base p/ monetização constante |
| Shorts → venda direta (orgânico) | **roda** | conteúdo+pitch |
| SaaS: página + mini-VSL + trial | a desenhar | funil próprio PlaySquad; objetivo **free → pagante** (hoje só capta e-mail) |
| Ações na base / recompra | a testar | e-mail/WhatsApp p/ quem já é contato/cliente |

**3 pipelines principais a estruturar primeiro:** (1) VSL tradicional · (2) Typebot pré-venda · (3) Webinário mega combo.

## 7. Rotas de Campanha (Aba 04)

Uma campanha = **escolher rota + escolher funil + plugar oferta**, sempre sobre os mesmos setups. Dimensões que definem a rota:

- **Objetivo:** capturar (Rota A) vs. vender direto (Rota B)
- **Público:** interno/base (clientes e leads existentes) vs. externo/frio
- **Temperatura:** quente vs. frio
- **Canal:** orgânico (Shorts, conteúdo+pitch) vs. pago (impulsionamento, criativo)

Inclui explicitamente: **ações para a base de clientes**, **ações para o orgânico**.

## 8. Setups — Fundação (Aba 01)

Seis setups, cada um com **checklist do que precisa existir** antes de rodar qualquer funil:

1. **Infra & Contas** — domínios, contas, ferramentas, segurança (cofre de senhas).
2. **Tracking & Dados** — UTM, pixels, eventos, dashboards. *(gap atual conhecido: tracking)*
3. **CRM & Listas** — tags, automações, segmentos.
4. **Nomenclatura** — padrão de nomes (ads, funis, campanhas, produtos).
5. **Biblioteca de Ativos** — marca, templates, *swipe*, provas sociais.
6. **Papéis & DoD** — quem faz, quem aprova, critério de pronto.

## 9. Operação & Cadência (Aba 05)

Como roda no dia a dia: **produção de ativos de monetização** (spots, vídeos temáticos, conteúdo+pitch, criativos), **ciclo de teste/otimização**, **rituais** (cadência semanal de decisão), **WIP/buffer**, **ciclo de vida do cliente**. Base de referência: POPs DIS adaptados e neutralizados (remessa de criativos, ciclo semanal de live, etc.).

## 10. Dados & Decisão (Aba 06)

Métricas por funil, critério **pass/fail** objetivo, dashboard, relatório. Fecha o loop com a Aba 01 (Tracking) e com a Aba 05 (decisão na cadência semanal).

## 11. Replicação / DarkPixel (Aba 07 — parkeado)

Como clonar o modelo para outra operação ou influencer (produtora/agência). Desenhada de forma neutra desde já; detalhada em fase posterior.

## 12. Arquitetura do Entregável

**HTML (o mapa navegável — para o time):**
- 8 abas: `00 Visão Macro · 01 Setups · 02 Produtos & Esteira · 03 Biblioteca de Funis · 04 Rotas de Campanha · 05 Operação & Cadência · 06 Dados & Decisão · 07 Replicação/DarkPixel`.
- Cada aba: drill **macro→meso→micro** + as 3 camadas **Ideal · Foto atual · Gaps**.
- Diagramas BPMN visuais (a esteira, as rotas, os funis), status colorido (roda/testar/desenhar), links para os documentos de apoio.
- **Estética:** seguir o padrão editorial do `diagnostico/index.html` atual (paleta paper/ink/accent, sem dependências externas pesadas), usando diagramas em CSS/SVG desenhados à mão; recorrer a **Mermaid** apenas onde a relação for genuinamente *graph-shaped* (decisão final de stack a confirmar no plano).

**Documentos de apoio (a profundidade — markdown):**
- POPs/SOPs (passo a passo, dono, input/output, DoD).
- Ficha de cada funil (estrutura + componentes obrigatórios).
- Checklists de Setup.
- Templates plugáveis (copy, página, automação, esteira).

**Estrutura de pastas proposta:**
```
petaxxon/
├── mapa/            # o(s) HTML navegável(is) das 8 abas
├── setups/          # checklists de fundação
├── funis/           # ficha de cada tipo de funil
├── esteira/         # mecânica de checkout/order bumps/upsell
├── campanhas/       # rotas e playbooks
├── operacao/        # POPs de cadência/produção
├── dados/           # métricas e critérios
└── _templates/      # o molde reutilizável (funil/setup/POP)
```
(Pasta separada de `diagnostico/` (DIS) e `Recursos/` (fonte).)

## 13. Fases (decomposição — cada fase tem seu próprio ciclo spec→plano→entrega)

- **Fase 0 — Fonte + Molde + Macro (AGORA):** templates reutilizáveis (ficha de funil, checklist de setup, POP), esqueleto das 8 abas em HTML, e o mapa macro. É o meta-sistema; sem ele cada processo vira floco de neve.
- **Fase 1 — Fatia vertical:** **Fórmula YouTube 2026 (VSL)** ponta a ponta (setup → estrutura → conteúdo → esteira → métricas → rota). Valida o molde inteiro num caso real.
- **Fase 2 — Setups completos:** as 6 fundações.
- **Fase 3 — Biblioteca de funis completa:** os 8 tipos, incluindo **funis para o orgânico**, **ações na base** e **SaaS trial→pago**.
- **Fase 4 — Rotas de campanha + Operação/Cadência + Dados:** incluindo **ações para a base de clientes** e **ações para o orgânico**.
- **Fase 5 — Replicação / DarkPixel.**

**Onde os gaps citados vivem:** ações p/ base de clientes → Aba 04 + funil "Ações na base" (Fase 3-4) · CRM → Setup 01 + Ciclo de Vida (Fase 2) · ações p/ orgânico → Aba 04 + Aba 05 (Fase 3-4) · funis p/ orgânico → Aba 03 (Fase 3).

## 14. Skills adaptadas a este contexto

- **mattpocock:** `grill-me` (questionário relentless), `to-prd` (domínio → PRD), `zoom-out` (mapa macro), `improve-codebase-architecture/HTML-REPORT` (HTML auto-contido + diagramas), `write-a-skill` (empacotar processos repetíveis), `handoff` (replicabilidade).
- **superpowers:** `brainstorming` (este doc) → `writing-plans` (próximo) → `frontend-design` (HTML).

## 15. Riscos & Decisões em Aberto

1. **Tracking** precisa funcionar antes de medir funis (gap conhecido da fonte).
2. **Composição exata do Mega Combo** (quais produtos entram) — confirmar.
3. **PlaySquad trial→pagante:** hoje só capta e-mail; falta o plano de marketing de conversão free→pago.
4. **Stack do HTML:** editorial puro (estilo atual) vs. Tailwind/Mermaid — decidir no plano.
5. **Granularidade dos POPs neutros:** quanto reaproveitar dos POPs DIS sem "vazar" contexto DIS.

---

## Critérios de Sucesso (Definition of Done do modelo)

- [ ] Um membro novo do time abre o HTML e entende a operação em minutos.
- [ ] Para criar um funil/campanha novo, basta escolher rota + funil + oferta e seguir o checklist — sem desenhar do zero.
- [ ] Cada aba tem as 3 camadas (Ideal/Foto/Gaps) preenchidas no nível de profundidade da sua fase.
- [ ] O molde é genérico o bastante para DarkPixel replicar em outra operação.
