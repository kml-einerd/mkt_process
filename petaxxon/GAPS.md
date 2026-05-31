# Petaxxon — Backlog de Gaps (worklist)

> **O que é:** a lista priorizada do que falta para a operação ficar **clara, simples e sem gaps**.
> Sai das camadas "Foto atual / Gaps" das 8 abas + dos gaps nomeados pelo time. É o insumo que a
> **rotina noturna** consome (1 gap por execução). Atualize o Status conforme avança.

**Status:** 🔴 a desenhar · 🟡 a testar · 🟢 documentado/rodando

---

## Prioridade ALTA (bloqueia receita ou destrava em cascata)

| # | Gap | Aba / Fase | Status | Por que é alta |
|---|-----|-----------|--------|----------------|
| 1 | **Fatia vertical Fórmula YouTube 2026 (VSL)** — ficha de funil completa + 3 setups base + rota + métricas de referência | Todas / Fase 1 | 🟡 | Ficha criada em `funis/vsl-tradicional.md`. Faltam: Setup 02 (Tracking) + Setup 03 (CRM) preenchidos, playbook de rota, e números de métrica [a confirmar] |
| 2 | **CRM & Listas (Setup 03)** — tags por produto/temperatura/canal, automações, segmentos WhatsApp×e-mail | Aba 01 / Fase 2 | 🟡 | Checklist criado em `setups/setup-03-crm-listas.md`. Falta: definir ferramenta, mapa de tags e construir/testar as automações [a confirmar] |
| 3 | **Tracking & Dados (Setup 02)** — UTMs padrão, pixel Meta+Google, eventos de conversão, atribuição de checkout | Aba 01+06 / Fase 2 | 🟡 | Checklist criado em `setups/setup-02-tracking-dados.md`. Falta: padronizar UTM, instalar/validar pixels+eventos, integrar Purchase, montar dashboard [a confirmar] |
| 4 | **Funil SaaS trial→pagante (PlaySquad)** — página + mini-VSL + onboarding trial + ativação + upgrade | Aba 03 / Fase 3 | 🟡 | Ficha criada em `funis/saas-playsquad-trial.md`. Falta: definir planos/checkout, onboarding, gatilhos de upgrade e medição free→pago [a confirmar] |
| 5 | **Funil de captura (lead magnet → webinário/vendas)** — squeeze, isca, nutrição até oferta | Aba 03 / Fase 3 | 🔴 | Sem Rota A não há lista própria; receita fica refém de tráfego direto |
| 6 | **Funil de webinário (Mega Combo)** — convite, sequência pré, oferta ao vivo, follow-up | Aba 03 / Fase 3 | 🟡 | Única rota documentada p/ vender FY + YouTube Dark juntos (ticket maior) |
| 7 | **Ações na base / recompra** — segmentação por produto comprado + sequência e-mail/WhatsApp de recompra e ascensão | Aba 03+04 / Fase 3-4 | 🟡 | A base é o ativo mais barato de converter; não monetizar é custo de oportunidade direto |

## Prioridade MÉDIA (consolida o que já roda / qualifica a decisão)

| # | Gap | Aba / Fase | Status | Por que |
|---|-----|-----------|--------|---------|
| 8 | **Funil orgânico Shorts → venda direta (documentar)** — pitch, CTA, página, métricas | Aba 03 / Fase 3 | 🟡 | Já converte; documentar tira do conhecimento tácito e permite replicar |
| 9 | **Funil orgânico conteúdo + pitch (vídeo longo)** — ângulo, estrutura, CTA, destino | Aba 03+04 / Fase 3-4 | 🔴 | Principal veículo do YouTube longo; sem funil separado dos Shorts |
| 10 | **Recuperação WhatsApp** — carrinho abandonado, sequência, oferta, timing | Aba 03 / Fase 3 | 🟡 | ROI alto (base quente); depende de CRM + tracking de abandono |
| 11 | **Rotas de campanha — playbooks preenchidos** — fichas p/ combinações principais (orgânico/base/quente; pago/frio/B; base/e-mail/upsell) | Aba 04 / Fase 4 | 🔴 | Estrutura existe; falta o playbook pronto p/ não decidir ad hoc |
| 12 | **Operação & Cadência — donos + ritual semanal** — dono por tipo de ativo + pauta/critério/output do review | Aba 05 / Fase 4 | 🔴 | Cadência sem dono não se sustenta; é o que separa operação de projeto |
| 13 | **Dados & Decisão — critérios pass/fail numéricos por funil** — ROAS mín., CVR, CPA por produto | Aba 06 / Fase 4 | 🔴 | Sem números, o review vira reunião de opiniões |

## Prioridade BAIXA / parkeado

| # | Gap | Aba / Fase | Status | Por que |
|---|-----|-----------|--------|---------|
| 14 | **Setups restantes (01 Infra, 04 Nomenclatura, 05 Ativos, 06 Papéis&DoD)** | Aba 01 / Fase 2 | 🔴 | Importantes, mas menos bloqueantes que CRM/Tracking |
| 15 | **Replicação / DarkPixel** — pacote clonável (setups+funis+campanhas) p/ outras operações/influencers | Aba 07 / Fase 5 | 🔴 | Parkeado por decisão de escopo |

---

## Documentos a produzir (arquivos concretos)

**Fichas de funil** (`petaxxon/funis/`):
1. `vsl-tradicional.md` (Fase 1 — validador do molde)
2. `typebot-pre-venda.md`
3. `webinario-mega-combo.md`
4. `captura-lead-magnet.md`
5. `saas-playsquad-trial.md`
6. `acoes-base-recompra.md`
7. `recuperacao-whatsapp.md`
8. `shorts-venda-direta.md`

**Setups** (`petaxxon/setups/`):
9. `setup-02-tracking-dados.md` · 10. `setup-03-crm-listas.md` · 11. `setup-01-infra-contas.md` · `setup-04-nomenclatura.md` · `setup-05-ativos.md` · `setup-06-papeis-dod.md`

**Campanhas** (`petaxxon/campanhas/`):
12. `campanha-organico-shorts-pitch.md` · 13. `campanha-base-email-recompra.md`

**Operação & Dados:**
14. `petaxxon/operacao/pop-ciclo-semanal.md` · 15. `petaxxon/dados/pass-fail-por-funil.md`

---

## Regra para a rotina noturna
Cada execução: pega o **item de maior prioridade ainda 🔴/🟡**, cria/preenche o documento usando o template de `_templates/`, atualiza o Status aqui, e commita. Respeitar dependências (Tracking e CRM antes dos funis de base). Manter **simples** — nada de inventar dados; onde faltar input do time, deixar `[a confirmar]` explícito.
