# Petaxxon — INDEX (mapa do vault)

> **O que é:** lista navegável de **todos** os documentos do vault, organizados pelas 8 áreas.
> Linke a partir daqui para encontrar qualquer artefato sem procurar na árvore de pastas.
> Apenas arquivos que existem de fato são listados.

**Legenda de status:** 🟢 roda · 🟡 a testar · 🔴 a desenhar · ⏸️ parkeado · 🧩 template

---

## Quadro de status geral

| Área | Documentos | Situação |
|---|---|---|
| 00 · Visão Macro | README, INDEX, GAPS, mapa HTML | 🟢 mapa navegável completo (8 abas, sem gaps) |
| 01 · Setups | 6 checklists | 🔴 escritos; Tracking (02) e CRM (03) ainda não implementados |
| 02 · Produtos & Esteira | (tabelas no HTML + fichas de funil) | 🟡 VVSA e Fórmula YouTube rodam; FY a chegar a 5 bumps; YouTube Dark a integrar |
| 03 · Biblioteca de Funis | 9 fichas | 🟢 3 rodam · 🟡 3 a testar · 🔴 3 a desenhar |
| 04 · Rotas de Campanha | 3 playbooks | 🟢 orgânico roda · 🟡 pago e base a testar |
| 05 · Operação & Cadência | 4 docs | 🟡 POP/rotinas/Monday a praticar · 🟢 rotina noturna roda |
| 06 · Dados & Decisão | 2 docs | 🟡 regras prontas; metas a calibrar (dep. Setup 02) |
| 07 · Replicação / DarkPixel | 1 doc | ⏸️ parkeado (Fase 5) |
| Templates | 4 moldes | 🧩 bases para novos artefatos |

> **Caminho crítico:** Setup 02 (Tracking) e Setup 03 (CRM) destravam em cascata os funis de base, captura, recuperação e webinário, e habilitam as metas pass/fail. São a prioridade do backlog (ver `GAPS.md`).

---

## Raiz do vault

| Arquivo | Status | Descrição |
|---|---|---|
| [README.md](./README.md) | 🟢 | Visão de uma página: o que é o vault, os 3 pilares, como navegar |
| [INDEX.md](./INDEX.md) | 🟢 | Este arquivo — mapa de todos os documentos do vault |
| [GAPS.md](./GAPS.md) | 🟢 | Backlog priorizado de gaps — insumo da rotina noturna |

---

## 00 — Visão Macro

| Arquivo | Status | Descrição |
|---|---|---|
| [mapa/index.html](./mapa/index.html) | 🟢 | Mapa navegável do vault (8 abas, 3 camadas por aba, links para todas as fichas) |
| [README.md](./README.md) | 🟢 | Visão macro em texto: pilares, rotas A/B, esteira, 3 camadas |

---

## 01 — Setups (a fundação que todo funil reusa)

> 6 setups, todos com checklist escrito. Tracking (02) e CRM (03) são pré-requisito em cascata.

| Arquivo | Status | Descrição |
|---|---|---|
| [setups/setup-01-infra-contas.md](./setups/setup-01-infra-contas.md) | 🔴 | Domínios, contas de anúncio, ferramentas, checkout+esteira, cofre de senhas + 2FA |
| [setups/setup-02-tracking-dados.md](./setups/setup-02-tracking-dados.md) | 🔴 | UTMs, pixels Meta/Google, evento Purchase, atribuição, dashboard por funil |
| [setups/setup-03-crm-listas.md](./setups/setup-03-crm-listas.md) | 🔴 | Tags por produto/temperatura/canal, segmentos e-mail×WhatsApp, automações |
| [setups/setup-04-nomenclatura.md](./setups/setup-04-nomenclatura.md) | 🔴 | Padrão único de nomes (campanha/funil/criativo/UTM) com tabela de valores fixos |
| [setups/setup-05-ativos.md](./setups/setup-05-ativos.md) | 🔴 | Biblioteca: marca, templates de página/VSL, criativos, copy, provas, garantia |
| [setups/setup-06-papeis-dod.md](./setups/setup-06-papeis-dod.md) | 🟡 | Papéis da operação + regra produtor ≠ aprovador + DoD global (no Monday) |

---

## 02 — Produtos & Esteira

> As tabelas de portfólio e esteira vivem na **Aba 02 do HTML**. Os produtos aparecem nas fichas
> de funil (campo "Produto(s)"). Não há `.md` dedicado — o HTML é a fonte.

| Referência | Status | Descrição |
|---|---|---|
| [mapa/index.html](./mapa/index.html) (Aba 02) | 🟡 | Portfólio (VVSA, Fórmula YouTube 2026, YouTube Dark, PlaySquad, Mega Combo), esteira padrão e regras de ouro (5 bumps → PlaySquad U1 → continuação) |

---

## 03 — Biblioteca de Funis (9 fichas)

> Estrutura comum de cada ficha: o que é & quando usar · componentes obrigatórios · esteira plugada · setups exigidos · métricas pass/fail · dono & DoD.

| Arquivo | Tipo | Status | Descrição |
|---|---|---|---|
| [funis/vsl-tradicional.md](./funis/vsl-tradicional.md) | VSL | 🟢 | Carro-chefe Fórmula YouTube — Ads/conteúdo → VSL → checkout (Rota B) |
| [funis/typebot-pre-venda.md](./funis/typebot-pre-venda.md) | Typebot | 🟢 | Bot conversacional aquece → VSL/página/checkout direto (Rota B) |
| [funis/shorts-venda-direta.md](./funis/shorts-venda-direta.md) | Orgânico | 🟢 | Shorts com gancho + pitch → CTA → checkout (Rota B) |
| [funis/webinario-mega-combo.md](./funis/webinario-mega-combo.md) | Webinário | 🟡 | Ads→WhatsApp→live diária→recuperação; vende o Mega Combo (Rota A) |
| [funis/recuperacao-whatsapp.md](./funis/recuperacao-whatsapp.md) | Recuperação | 🟡 | Carrinho abandonado/lead quente → sequência WhatsApp → checkout (Rota A) |
| [funis/acoes-base-recompra.md](./funis/acoes-base-recompra.md) | Base/Recompra | 🟡 | Recompra e ascensão por e-mail/WhatsApp na base existente (Rota A) |
| [funis/captura-lead-magnet.md](./funis/captura-lead-magnet.md) | Captura | 🔴 | Isca grátis → squeeze → lista → nutrição → webinário/vendas (Rota A) |
| [funis/saas-playsquad-trial.md](./funis/saas-playsquad-trial.md) | SaaS-trial | 🔴 | Funil próprio do PlaySquad: página+mini-VSL → trial → upgrade free→pago (Rota A) |
| [funis/conteudo-pitch.md](./funis/conteudo-pitch.md) | Orgânico | 🔴 | Vídeo longo (YouTube) com pitch integrado → CTA → checkout (Rota B) |

---

## 04 — Rotas de Campanha (playbooks)

> Cada playbook = montagem plugável (rota + funil + oferta) + ativos + setups exigidos + cronograma + métricas.

| Arquivo | Status | Descrição |
|---|---|---|
| [campanhas/campanha-organico-shorts-pitch.md](./campanhas/campanha-organico-shorts-pitch.md) | 🟢 | Orgânico Shorts + pitch (venda direta, público frio + base) — Rota B |
| [campanhas/campanha-pago-frio-vsl.md](./campanhas/campanha-pago-frio-vsl.md) | 🟡 | Pago tráfego frio com VSL ou Typebot (split A/B) — Rota B |
| [campanhas/campanha-base-email-recompra.md](./campanhas/campanha-base-email-recompra.md) | 🟡 | Base e-mail/WhatsApp: recompra e ascensão de oferta — Rota A |

---

## 05 — Operação & Cadência

| Arquivo | Status | Descrição |
|---|---|---|
| [operacao/pop-ciclo-semanal.md](./operacao/pop-ciclo-semanal.md) | 🟡 | POP-01: ritual semanal de decisão + checagem diária do webinário |
| [operacao/rotina-otimizacao.md](./operacao/rotina-otimizacao.md) | 🟡 | Manual de como ler dados e decidir escalar / iterar / matar |
| [operacao/monday-estrutura.md](./operacao/monday-estrutura.md) | 🟡 | Modelo de Monday: quadros por função, funil como visão, ciclo Setup/Otimização; Foto atual + migração |
| [operacao/monday-prompts.md](./operacao/monday-prompts.md) | 🟡 | Prompts prontos p/ a IA do Monday criar os 5 quadros + migração manual |
| [central/](./central/README.md) | 🟢 | App React Flow (Vite): **30 processos** clicáveis (Modo A + B + Compartilhado), navegação + links de documento resolvidos |
| [processos/README.md](./processos/README.md) | 🟡 | Modo A · Agência de Funil: índice dos processos + 13 POPs/modelos em `processos/pops/` |
| [operacao/rotina-noturna.md](./operacao/rotina-noturna.md) | 🟢 | Cron que avança 1 gap por execução (00h–06h) a partir do GAPS.md |

---

## 06 — Dados & Decisão

| Arquivo | Status | Descrição |
|---|---|---|
| [dados/pass-fail-por-funil.md](./dados/pass-fail-por-funil.md) | 🟡 | Regra geral de decisão + tabela de métricas por funil (9 funis); metas a calibrar (dep. Setup 02) |
| [dados/historico-metas.md](./dados/historico-metas.md) | 🔴 | Log de calibração das metas (data, fonte, aprovador); preencher ao definir valores |

---

## 07 — Replicação / DarkPixel

| Arquivo | Status | Descrição |
|---|---|---|
| [replicacao/darkpixel.md](./replicacao/darkpixel.md) | ⏸️ | Pacote de replicação: o que se duplica, o que se adapta, onboarding de nova operação (Fase 5) |

---

## Templates (moldes — sem dados reais)

| Arquivo | Status | Uso |
|---|---|---|
| [_templates/funil-template.md](./_templates/funil-template.md) | 🧩 | Para criar novas fichas de funil |
| [_templates/campanha-template.md](./_templates/campanha-template.md) | 🧩 | Para criar novos playbooks de campanha |
| [_templates/pop-template.md](./_templates/pop-template.md) | 🧩 | Para criar novos POPs (procedimentos operacionais) |
| [_templates/setup-template.md](./_templates/setup-template.md) | 🧩 | Para criar novos setups de fundação |

---

*Gerado a partir da estrutura real do vault (`find petaxxon -type f`) — os documentos do vault estão listados; o app interativo vive em `central/` (código) e os modelos de POP em `processos/pops/`.*
