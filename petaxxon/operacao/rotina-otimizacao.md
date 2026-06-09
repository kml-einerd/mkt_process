# Rotina de Otimização — Petaxxon

> Como ler os dados de cada funil e decidir, com critério objetivo, o que **escalar / iterar / matar**.
> Este documento é o manual operacional; os critérios numéricos vivem em `dados/pass-fail-por-funil.md`.

---

## 1. Princípio

Toda decisão de otimização parte de **dado confiável** (Setup 02 funcionando) comparado a uma **meta documentada** (`dados/pass-fail-por-funil.md`). Sem tracking validado, não há otimização — há opinião.

A decisão tem três saídas possíveis:

| Saída | Significado | Próximo passo |
|---|---|---|
| **Escalar** | Funil/elemento está funcionando acima da meta | Aumentar budget, volume ou frequência |
| **Iterar** | Funil/elemento tem potencial mas 1–2 métricas estão fora da meta | Ajustar o elemento específico; testar variação |
| **Matar** | Funil/elemento está inviável (múltiplas métricas fora da meta ou CPA/ROAS inviável persistente) | Pausar; reformular ou substituir |

---

## 2. Cadência

### 2a. Diária (webinário e tráfego pago)
- **Quem:** Gestor de Tráfego + Dono do Funil 3 (webinário)
- **Quando:** toda manhã antes do início do dia `[a confirmar: horário fixo]`
- **O que verificar:**
  - Funil 3 (webinário): inscritos do dia anterior, taxa de presença, conversão da live, taxa de recuperação
  - Funis com Ads ativos: CPL/CPC/CTR vs. meta; CPA intradiário
- **Onde registrar:** log diário `[a confirmar: planilha ou Monday — board Rotina de Otimização]`
- **Decisão imediata possível:** pausar Ad com CPA > X por 2 dias consecutivos; escalar budget de Ad com ROAS > Y; iterar criativo se CTR abaixo da meta por 3 dias

### 2b. Semanal (revisão geral de todos os funis)
- **Quem:** todos os donos de funil + Gestor de Operações (ritual do POP-01)
- **Quando:** dia e horário fixos `[a confirmar]`
- **O que verificar:** todos os funis ativos — métricas da semana vs. meta, conforme `dados/pass-fail-por-funil.md`
- **Saída:** decisão registrada por funil; backlog atualizado; plano de ativos da semana

---

## 3. Tabela de Decisão (sinal → ação)

| Sinal observado | Ação | Urgência |
|---|---|---|
| Métrica-chave dentro da meta em ≥ 70 % das linhas do funil | **Escalar** | Executar até o próximo ciclo diário |
| 1–2 métricas fora da meta, restante dentro | **Iterar** o elemento específico | Planejar no ciclo semanal |
| ≥ 3 métricas fora da meta | **Matar / pausar** e reformular | Imediato — não esperar o semanal |
| CPA inviável por 2 semanas consecutivas | **Matar / pausar** | Imediato |
| ROAS < 1 × por 2 dias consecutivos (tráfego pago) | **Pausar Ad** imediatamente | Imediato |
| Volume abaixo do mínimo para decisão (`[a confirmar]` conversões) | **Aguardar amostra** — não decidir | — |
| Tracking com dado inconsistente (ex.: Purchase ≠ vendas reais) | **Bloquear decisão** — acionar Setup 02 | Imediato |
| Nova variação testada com volume suficiente e ganha | **Escalar vencedor; matar perdedor** | No próximo ciclo |

---

## 4. Como ler os dados por funil

### Sequência padrão de leitura
1. Abrir o dashboard `HotWebinar / GHL (conforme o caso)` no recorte do período (diário ou semanal)
2. Abrir `dados/pass-fail-por-funil.md` na seção do funil a analisar
3. Para cada métrica da tabela: registrar o valor real e comparar com a meta (PASS / FAIL)
4. Contar quantas métricas estão em FAIL
5. Aplicar a tabela de decisão da Seção 3 acima
6. Registrar a decisão no Monday (board Rotina de Otimização): funil, métrica, sinal, decisão, dono

### Ordem de leitura por funil (do topo ao fundo da esteira)
Para cada funil, leia as métricas nesta ordem:
1. **Aquisição** (CTR, CPL, CPC) — problema aqui = criativo ou segmentação
2. **Ativação** (opt-in, presença, conclusão do fluxo) — problema aqui = página, bot ou live
3. **Conversão** (checkout → pago) — problema aqui = oferta, preço, urgência ou formulário
4. **Monetização** (order bumps, upsell PlaySquad) — problema aqui = copy, posição ou preço dos bumps
5. **Eficiência** (CPA, ROAS, CAC) — problema aqui = estrutura geral do funil

> Isole o elemento com FAIL antes de iterar. Nunca altere dois elementos ao mesmo tempo em um funil — perde-se a capacidade de saber o que funcionou.

---

## 5. O que documentar

A cada decisão (diária ou semanal), registrar:

| Campo | Onde | Exemplo |
|---|---|---|
| Funil | Monday / log diário | Funil 3 — Webinário |
| Métrica avaliada | Monday / log diário | Taxa de presença |
| Valor real | Monday / log diário | `[a confirmar]` % |
| Meta (PASS) | `dados/pass-fail-por-funil.md` | `[a confirmar]` % |
| Sinal | Monday / log diário | FAIL — abaixo da meta |
| Decisão | Monday | Iterar |
| Ação específica | Monday | Ajustar lembrete de confirmação — testar novo texto e horário |
| Dono da ação | Monday | `[a confirmar]` |
| Prazo | Monday | Próximo ciclo diário / semanal |

---

## 6. Ligação com outros documentos

- **`dados/pass-fail-por-funil.md`** — fonte única das metas; toda decisão referencia este arquivo
- **`POP-01 Ciclo Semanal`** — ritual que executa esta rotina de forma estruturada
- **`petaxxon/setups/setup-02-tracking-dados.md`** — pré-requisito: sem tracking funcional, a rotina para
- **Monday (board Rotina de Otimização)** — onde as decisões são registradas e acompanhadas

---

## As 3 camadas
- **Ideal:** dashboard automático alimentado em tempo real; alertas automáticos para anomalias críticas; decisões registradas dentro de 2h do sinal; histórico de otimizações indexado por funil.
- **Foto atual:** [a confirmar — o time está usando algum processo de revisão de métricas hoje? Com qual ferramenta e cadência?]
- **Gaps:** montar dashboard por funil; definir metas numéricas em `dados/pass-fail-por-funil.md`; criar board de Rotina de Otimização no Monday; treinar donos de funil no processo de leitura. `[a confirmar]`
