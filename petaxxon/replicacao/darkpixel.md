# DarkPixel — Pacote de Replicação

> **O que é:** DarkPixel é o braço de agência/DR do grupo Petaxxon. Seu papel é replicar
> o vault validado para outras operações — influencers, marcas, projetos parceiros —
> usando os mesmos funis, setups e playbooks de campanha, adaptando apenas o front-end
> (oferta, marca, esteira do cliente).
>
> **Status geral:** parkeado (estrutura documentada, ativação na Fase 5)

---

## As 3 camadas

### Ideal (onde queremos chegar)
- Um processo plug-and-play: novo cliente → fork do vault → briefing de adaptação → operação rodando em ≤ 30 dias.
- Funis validados internamente replicados sem recriar do zero — só adaptar oferta e identidade.
- Receita recorrente via taxa de gestão + percentual de resultado (rev-share).
- Biblioteca de funis crescendo a cada projeto: o que funciona vira ficha validada e volta ao vault-mãe.

### Foto atual (parkeado — Fase 5)
- O vault existe e está documentado, mas ainda não passou pela validação completa interna (algumas fichas em status "a testar" ou "a desenhar").
- Nenhum cliente externo ativo.
- Setups 02 e 03 documentados; setups 01, 04, 05, 06 ainda não criados.
- Sem contrato-modelo, sem onboarding de cliente, sem precificação definida.

### Gaps (o que falta para ativar)
- [ ] Concluir validação interna dos funis (pelo menos VSL e Shorts rodando com dados reais).
- [ ] Criar setups restantes (01, 04, 05, 06) conforme template.
- [ ] Redigir contrato-modelo DarkPixel (cláusula de confidencialidade + rev-share).
- [ ] Definir precificação (setup fee + mensalidade + % resultado).
- [ ] Criar checklist de onboarding de cliente externo (ver seção abaixo).
- [ ] Produzir deck de apresentação para prospecção.

---

## O que se duplica (fixo — vault-mãe)

Estes artefatos são copiados integralmente para cada nova operação e não precisam ser
recriados — só configurados:

| Artefato | Onde fica no vault | Observação |
|---|---|---|
| Fichas de funil (8) | `petaxxon/funis/` | Copiar a ficha, preencher campos `[a confirmar]` com dados do cliente |
| Templates (4) | `petaxxon/_templates/` | Base para criar novos funis, campanhas, setups e POPs do cliente |
| Setup 02 — Tracking & Dados | `petaxxon/setups/setup-02-tracking-dados.md` | Replicar pixel/UTM na conta do cliente |
| Setup 03 — CRM & Listas | `petaxxon/setups/setup-03-crm-listas.md` | Replicar estrutura de lista/tag na ferramenta do cliente |
| Modelo Monday | `petaxxon/operacao/monday-estrutura.md` | Criar workspace espelhado para o cliente |
| Pass/Fail por funil | `petaxxon/dados/pass-fail-por-funil.md` | Mesma lógica de decisão, adaptar metas do cliente |
| Playbooks de campanha | `petaxxon/campanhas/` | Copiar playbook, ajustar produto e público |

---

## O que se adapta por cliente (variável)

Cada operação replicada tem um "núcleo fixo" (vault) e uma "casca adaptável":

| O que adaptar | Descrição |
|---|---|
| Oferta & produto | Nome, preço, promessa, checkout, plataforma de venda |
| Marca & identidade | Nome do projeto, visual, voz, canais (YouTube, Instagram, etc.) |
| Esteira de produtos | Entrada, upsell, recorrência — mapeado na aba 02 do vault do cliente |
| Integrações | Pixel na conta do cliente, CRM, WhatsApp, plataforma de curso |
| Metas de pass/fail | Benchmarks ajustados ao ticket e ao volume do cliente |
| Público-alvo | Segmentação de anúncios, personas, linguagem das copies |

---

## Passo a passo — subir uma nova operação (alto nível)

### Etapa 1 — Briefing (1–2 dias)
1. Preencher ficha de briefing do cliente: produto(s), esteira atual, canais ativos,
   metas de receita, ferramentas em uso.
2. Definir qual funil(s) entra primeiro (prioridade por temperatura de base e produto).
3. Alinhar responsabilidades: o que DarkPixel opera vs. o que o cliente opera.

### Etapa 2 — Fork do vault (1 dia)
1. Duplicar estrutura de pastas do vault-mãe para um workspace dedicado ao cliente
   (Monday, Notion, ou repositório — o que estiver em uso).
2. Preencher campos `[a confirmar]` de cada ficha com dados reais do cliente.
3. Criar os setups de tracking e CRM na conta do cliente (Setup 02 e 03).

### Etapa 3 — Configuração técnica (3–7 dias)
1. Instalar pixel/UTMs conforme Setup 02.
2. Configurar listas e tags no CRM conforme Setup 03.
3. Configurar página(s) de captura ou VSL conforme ficha do funil escolhido.
4. Testar fluxo ponta-a-ponta (opt-in → notificação → checkout → tag de comprador).

### Etapa 4 — Lançamento e cadência
1. Seguir playbook de campanha aplicável (ver `petaxxon/campanhas/`).
2. Acompanhar métricas via pass/fail (ver `petaxxon/dados/pass-fail-por-funil.md`).
3. Reportar ao cliente semanalmente: o que rodou, decisão (escalar / pausar / ajustar).

### Etapa 5 — Retroalimentação do vault-mãe
1. Qualquer aprendizado validado (nova copy, novo setup, novo funil) volta como ficha
   ou nota de atualização no vault-mãe.
2. Fichas que passam no pass/fail de um cliente externo atualizam o status no vault
   Petaxxon (ex.: "a testar" → "roda").

---

## Modelo de governança (a definir na Fase 5)

- **Contrato:** [a confirmar — modelo a redigir]
- **Precificação:** [a confirmar — setup fee + mensalidade + % resultado]
- **SLA de entrega:** [a confirmar]
- **Ferramentas de acesso:** [a confirmar — acesso ao Monday/Notion do cliente, acesso à conta de anúncios]
- **Deck de prospecção:** [a criar]

---

*Última atualização: vault-mãe Petaxxon — Fase 4 (parkeado para Fase 5)*
