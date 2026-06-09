# Pass / Fail por Funil — Petaxxon

> **Pré-requisito absoluto:** Setup 02 (Tracking & Dados) deve estar funcional — pixels instalados,
> UTMs padronizados e evento de Purchase disparando — antes de qualquer leitura decisória destas tabelas.
> Sem tracking validado, os números são inválidos para escalar, iterar ou matar.

---

## Regra Geral de Decisão (sinal → ação)

| Sinal | Ação |
|---|---|
| Métrica-chave dentro do critério PASS em ≥ 70 % das linhas da tabela | **Escalar** — aumentar budget / volume |
| 1–2 métricas fora do critério, isoladas | **Iterar** — ajustar o elemento específico |
| ≥ 3 métricas fora do critério, ou CPA/ROAS inviável por 2 semanas consecutivas | **Matar / pausar** e reformular |
| Volume de dados abaixo do mínimo por linha | **Aguardar amostra** — não decidir antes de ter volume |

> Volume mínimo antes de decidir: **[a confirmar]** conversões por variante / período.

---

## Funil 1 — VSL Tradicional
*(tipo: venda direta — Ads → Página VSL → Checkout → Esteira)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| CTR do anúncio (link click) | Meta Ads / Google Ads | [a confirmar] % | Iterar criativo / segmentação |
| CPC (custo por clique) | Meta Ads / Google Ads | [a confirmar] R$ | Revisar segmentação ou criativo |
| Conversão de página (visita → checkout iniciado) | GA4 / pixel | [a confirmar] % | Iterar headline, VSL, prova social ou garantia |
| Conversão de checkout (iniciado → pago) | Hotmart | [a confirmar] % | Iterar formulário, parcelamento ou urgência |
| CPA (custo por aquisição) | Gasto total / compras | [a confirmar] R$ | Acima por 2 semanas → pausar escala; iterar ou matar |
| ROAS | Receita / investimento | [a confirmar] × | Abaixo de 1 × → matar; 1–[a confirmar] × → iterar |
| Take rate — Order Bump 1 | % compradores que aceitam OB1 (Hotmart) | [a confirmar] % | Iterar copy / preço do bump |
| Take rate — Order Bumps 2–5 (média) | % compradores (Hotmart) | [a confirmar] % | Iterar copy / preço / posição |
| Take rate — Upsell 1 (dinâmico) | % compradores que aceitam upsell (Hotmart) | [a confirmar] % | Iterar apresentação / preço / posicionamento |

---

## Funil 2 — Typebot Pré-venda
*(tipo: pago/orgânico — bot que aquece respondendo perguntas → VSL embedada/página/checkout → Esteira)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| Taxa de início do fluxo (entrou no bot) | Typebot analytics | [a confirmar] % | Iterar criativo / promessa de entrada |
| Taxa de clique no CTA / link | UTM + GA4 | [a confirmar] % | Iterar CTA verbal ou posição do link |
| Taxa de conclusão do fluxo (bot) | Typebot analytics | [a confirmar] % | Iterar perguntas / reduzir atrito |
| Conversão CTA → checkout iniciado | GA4 / pixel | [a confirmar] % | Iterar página de destino ou oferta |
| Conversão de checkout (iniciado → pago) | Hotmart | [a confirmar] % | Iterar formulário / urgência |
| CAC orgânico (custo de produção / clientes) | Custo de produção / vendas (Hotmart) | [a confirmar] R$ | Reavaliar formato ou produto ofertado |
| Take rate — bumps e upsell | % compradores (Hotmart) | [a confirmar] % | Iterar copy / preço |

---

## Funil 3 — Webinário Mega Combo
*(tipo: Ads click-to-WhatsApp → Live diária → Recuperação → Checkout → Esteira)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| CPL — custo por lead / inscrito | Gasto / inscrições via GHL + WhatsApp API | [a confirmar] R$ | Iterar criativo / segmentação dos Ads |
| Inscritos por edição (dia) | GHL / WhatsApp API | [a confirmar] leads/dia | Aumentar budget ou melhorar criativo |
| Taxa de confirmação (inscrito → confirmou) | WhatsApp API Oficial / GHL | [a confirmar] % | Iterar mensagem de confirmação / horário |
| Taxa de presença (confirmados → assistiram) | HotWebinar | [a confirmar] % | Iterar lembrete, horário ou formato |
| Tempo médio na live (retenção) | HotWebinar | [a confirmar] min | Iterar ritmo / conteúdo da apresentação |
| Conversão da live (presentes → compraram) | HotWebinar + Hotmart | [a confirmar] % | Iterar pitch, oferta ou garantia |
| Taxa de recuperação pós-live (não-comprou → comprou) | Fluxo WhatsApp de recuperação (GHL) | [a confirmar] % | Iterar sequência, timing ou condição da oferta |
| CPA total (do Ad ao cliente) | Gasto total / compras (Hotmart) | [a confirmar] R$ | Matar ou reformular estrutura se inviável |
| ROAS | Receita / investimento | [a confirmar] × | Abaixo de 1 × → matar |

---

## Funil 4 — Captura (Lead Magnet)
*(tipo: Rota A — Anúncio / orgânico → Squeeze page → Lead → Nutrição → Funil de venda downstream)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| CPL — custo por lead (se pago) | Gasto / leads capturados no GHL | [a confirmar] R$ | Iterar criativo / segmentação |
| Taxa de opt-in (clique → lead) | Squeeze page analytics | [a confirmar] % | Iterar headline / promessa da isca |
| Taxa de entrega da isca (lead recebe) | GHL (E-mail / WhatsApp API) | [a confirmar] % | Verificar automação de entrega no CRM |
| Taxa de abertura da sequência de nutrição | GHL (E-mail) | [a confirmar] % | Iterar assunto / horário de envio |
| Conversão lead → compra (30 dias) | GHL + Hotmart | [a confirmar] % | Iterar sequência de nutrição ou oferta downstream |
| Receita atribuída por lead capturado (RPL) | Receita (Hotmart) / leads (GHL) | [a confirmar] R$/lead | Revisar isca ou funil de monetização downstream |

---

## Funil 5 — Recuperação WhatsApp
*(tipo: gatilho de abandono → Sequência WhatsApp → Checkout)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| Volume elegível por ciclo (abandonos) | Pixel / Hotmart (InitiateCheckout sem Purchase) | [a confirmar] contatos | Verificar configuração do evento de abandono |
| Taxa de leitura (read receipt) | WhatsApp API Oficial | [a confirmar] % | Iterar horário de envio |
| Taxa de resposta | Respostas / mensagens enviadas (GHL) | [a confirmar] % | Iterar copy da mensagem inicial |
| Taxa de recuperação (contato → compra) | GHL + Hotmart | [a confirmar] % | Iterar oferta, urgência ou segmentação |
| Receita por envio (RPE) | Receita recuperada / total enviado (Metabase) | [a confirmar] R$/envio | Abaixo do mínimo → reformular ou pausar sequência |
| Custo por recuperação | Custo API WhatsApp / recuperados (Hotmart) | [a confirmar] R$ | Avaliar viabilidade do canal |

---

## Funil 6 — Shorts → Venda Direta
*(tipo: orgânico — Short com gancho+pitch → CTA → Checkout → Esteira)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| Visualizações por Short | YouTube / TikTok / Instagram analytics | [a confirmar] views | Iterar hook dos primeiros 3 s |
| Retenção médio do Short | Plataforma | [a confirmar] % | Iterar estrutura / ritmo do vídeo |
| Taxa de clique no CTA (views → clique) | UTM + GA4 | [a confirmar] % | Iterar CTA verbal ou link na bio |
| Conversão de página (clique → checkout) | GA4 / pixel | [a confirmar] % | Iterar página de destino |
| Conversão de checkout (iniciado → pago) | Hotmart | [a confirmar] % | Iterar formulário / oferta |
| CAC orgânico (custo de produção / clientes) | Custo de produção / vendas (Hotmart) | [a confirmar] R$ | Reavaliar formato ou produto ofertado |
| Take rate — bumps e upsell | % compradores (Hotmart) | [a confirmar] % | Iterar copy / preço |

---

## Funil 7 — SaaS PlaySquad (Trial → Pagante)
*(tipo: SaaS-trial — Ads / orgânico → Página + mini-VSL → Trial → Ativação → Upgrade → Plano pago)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| Cadastros de trial por semana | Plataforma SaaS | [a confirmar] signups/sem | Iterar aquisição (Ads ou orgânico) |
| Taxa de ativação (signup → 1.º uso) | Analytics do produto | [a confirmar] % | Iterar onboarding / e-mail de ativação |
| Tempo médio de ativação (signup → 1.º uso) | Analytics do produto | [a confirmar] dias | Antecipar o passo de ativação |
| Conversão trial → pagante | Hotmart / GHL | [a confirmar] % | Iterar oferta de upgrade, feature gate ou sequência CRM |
| Tempo médio trial → conversão | Hotmart | [a confirmar] dias | Antecipar ponto de conversão (sequência/urgência) |
| Churn mensal (pagantes que cancelam) | Hotmart / financeiro | [a confirmar] % | Acionar retenção; iterar produto / pricing |
| MRR (receita recorrente mensal) | Hotmart / financeiro | [a confirmar] R$ | Revisar pricing ou volume de signups |
| LTV estimado | MRR médio ÷ churn | [a confirmar] R$ | Iterar planos anuais / retenção |

---

## Funil 8 — Ações na Base / Recompra
*(tipo: base/recompra — Segmento de base → Campanha e-mail/WhatsApp → Oferta → Checkout → Esteira)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| Alcance da base (% contactada por campanha) | GHL / WhatsApp API Oficial | [a confirmar] % | Revisar segmentação e higiene de lista |
| Taxa de abertura / leitura | WhatsApp API Oficial / GHL (E-mail) | [a confirmar] % | Iterar horário e assunto |
| Taxa de clique no CTA | GHL / GA4 | [a confirmar] % | Iterar copy da mensagem |
| Taxa de recompra (base → nova compra) | Hotmart + GHL | [a confirmar] % | Iterar oferta ou personalização |
| Taxa de ascensão (produto front → superior) | Hotmart + GHL | [a confirmar] % | Iterar apresentação do produto de ascensão |
| Receita por envio (RPE) | Receita da ação / total enviado (Metabase) | [a confirmar] R$/envio | Abaixo do mínimo → iterar oferta ou pausar ação |
| Ticket médio de recompra | Receita recompra / pedidos (Hotmart) | [a confirmar] R$ | Revisar produtos ofertados / bumps |

---

## Funil 9 — Conteúdo + Pitch (vídeo longo)
*(tipo: orgânico — vídeo temático longo com pitch integrado → CTA → Checkout → Esteira)*

| Métrica | Como medir | Meta (PASS) | Ação se FAIL |
|---|---|---|---|
| Retenção até o ponto de pitch | YouTube Analytics | [a confirmar] % dos espectadores | Iterar estrutura do vídeo / ponto do pitch |
| Taxa de clique no CTA / link | UTM + GA4 | [a confirmar] % | Iterar CTA verbal ou posição do link na descrição |
| Conversão de página (clique → checkout) | GA4 / pixel | [a confirmar] % | Iterar página de destino |
| Conversão de checkout (iniciado → pago) | Hotmart | [a confirmar] % | Iterar formulário / oferta |
| CAC orgânico (custo de produção / clientes) | Custo de produção / vendas (Hotmart) | [a confirmar] R$ | Reavaliar ângulo do conteúdo ou produto |
| Take rate — bumps e upsell | % compradores (Hotmart) | [a confirmar] % | Iterar copy / preço |

---

## Observações

1. **Setup 02 é pré-requisito de todas as tabelas.** Sem pixel, UTM e evento de Purchase configurados e validados no GHL, GA4 e Hotmart, as métricas acima não têm base confiável para decisão.
2. **Metas marcadas como `[a confirmar]`** devem ser preenchidas com base em benchmark do nicho, histórico de conta e custo do produto. Nunca usar valores genéricos de mercado sem ajuste ao contexto Petaxxon.
3. **Janela mínima de decisão:** avaliar cada funil após **[a confirmar]** dias com volume mínimo atingido antes de escalar, iterar ou matar.
4. **Registro de metas:** ao preencher um valor, registrar data, fonte do benchmark e quem aprovou. Versionar no próprio arquivo ou em `petaxxon/dados/historico-metas.md`.
