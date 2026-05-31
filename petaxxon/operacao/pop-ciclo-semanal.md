# POP-01: Ciclo Semanal de Decisão

> **Quando usar:** toda semana (reunião de revisão) e toda manhã (checagem diária do webinário)  ·  **Dono do processo:** Gestor de Operações  ·  **Duração típica:** 90 min (ritual semanal) + 15 min/dia (checagem diária)

## Objetivo
Revisar métricas de todos os funis ativos, decidir (escalar / iterar / matar) com critério objetivo, atualizar o backlog de melhorias e planejar os ativos da semana seguinte. Produz uma decisão registrada por funil ativo e uma lista de tarefas priorizadas para a semana.

## Papéis envolvidos
| Papel | Responsabilidade | Time pequeno (acumula) | Time grande (dedicado) |
|---|---|---|---|
| Gestor de Operações | Dono do ritual; conduz a reunião; registra decisões; garante que o ciclo acontece | Acumula com gestão de tráfego ou CRM | Papel dedicado |
| Gestor de Tráfego | Apresenta métricas dos funis pagos; propõe ajustes | Acumula com análise de dados | Papel dedicado |
| Donos de Funil (por funil ativo) | Apresentam status e métricas do seu funil; propõem escalar/iterar/matar | Gestor de Operações faz esse papel para todos | Um dono por funil |
| Copy Chief | Revisa decisões que impactam copy; aprova ajustes de mensagem | Acumula com Copywriter sênior | Papel dedicado |
| CRM | Apresenta métricas de listas e recuperação; propõe ajustes de automação | Acumula com Gestor de Operações | Papel dedicado |
| Infra | Informa status de setups e pendências técnicas | Acumula com qualquer papel técnico | Papel dedicado |

> **Regra produtor ≠ aprovador:** quem PRODUZ a análise (dono do funil) não conclui a decisão; quem APROVA (Gestor de Operações ou Copy Chief, conforme o caso) conclui.

## Fluxo

### Parte A — Checagem Diária (webinário e tráfego ativo)
> O webinário é DIÁRIO. Toda manhã, antes do início do dia, o Gestor de Tráfego e o responsável pelo webinário executam a checagem abaixo. Isso não substitui o ritual semanal — complementa.

| # | Etapa | Responsável | Input (pra começar) | Output (entregável) | Critério de Pronto (DoD) | Paraleliza? |
|---|---|---|---|---|---|---|
| D1 | Acessar dashboard e anotar métricas do webinário da véspera | Dono do Funil 3 | Dashboard com dados de ontem | Registro de: inscritos, presentes, conversões, CPA | Números anotados em log diário (planilha ou Monday) | não |
| D2 | Comparar com meta (pass/fail) conforme `dados/pass-fail-por-funil.md` | Dono do Funil 3 | Registro de D1 + tabela de metas do Funil 3 | Status pass/fail por métrica | Cada métrica marcada como pass ou fail | não |
| D3 | Verificar tráfego pago (CPL, CPC, CTR) dos funis com Ads ativos | Gestor de Tráfego | Painel Meta Ads / Google Ads | Registro de métricas de tráfego | Métricas anotadas; anomalias sinalizadas | sim com D1–D2 |
| D4 | Decidir ação imediata se fail crítico (pausar Ad, ajustar lance, escalar budget) | Gestor de Operações | Registros D2 e D3 | Decisão registrada (ação + responsável + prazo) | Decisão escrita; responsável ciente | não |
| D5 | Executar ajuste autorizado e registrar | Gestor de Tráfego | Decisão de D4 | Ajuste feito; print/log de comprovação | Ajuste executado e comprovado por quem aprovou | não |

### Parte B — Ritual Semanal (revisão geral)
> Ocorre uma vez por semana no dia e horário fixos definidos pelo time. [a confirmar: dia e horário do ritual semanal]

| # | Etapa | Responsável | Input (pra começar) | Output (entregável) | Critério de Pronto (DoD) | Paraleliza? |
|---|---|---|---|---|---|---|
| S1 | Preparar relatório de métricas por funil (últimos 7 dias) | Dono de cada funil ativo | Dashboard + `dados/pass-fail-por-funil.md` | Relatório por funil: métricas vs. meta, status pass/fail | Todas as métricas-chave preenchidas; status por métrica marcado | sim — cada dono prepara o seu |
| S2 | Apresentar métricas e propor decisão (escalar / iterar / matar) | Dono de cada funil ativo | Relatório de S1 | Proposta de decisão por funil + justificativa | Proposta clara; dados que suportam | sim — apresentações sequenciais por funil |
| S3 | Aprovar ou ajustar decisão por funil | Gestor de Operações | Proposta de S2 | Decisão final registrada por funil | Decisão escrita no Monday (board Funis) com status e dono | não — aprovador único |
| S4 | Atualizar backlog: fechar gaps resolvidos, adicionar novos, repriorizar | Gestor de Operações + Donos | Decisões de S3 + backlog atual (`GAPS.md`) | Backlog atualizado e priorizado | Itens novos adicionados; itens resolvidos fechados; prioridades revistas | não |
| S5 | Planejar ativos da semana: definir o que produzir, quem produz, quem aprova | Gestor de Operações + Copy Chief + Editor | Decisões de S3 + backlog de S4 + capacidade do time | Lista de ativos da semana com responsável (produtor e aprovador) e prazo | Toda tarefa tem: tipo de ativo, funil, produtor, aprovador, prazo | não |
| S6 | Registrar tudo no Monday e comunicar ao time | Gestor de Operações | Lista de S5 | Itens criados/atualizados no Monday; time notificado | Nenhuma tarefa sem dono; Monday reflete o plano da semana | não |

## Onde paralelizar
- **Serial obrigatório:** D1→D2→D4→D5 (cada etapa depende da anterior); S2→S3 (aprovação depende da proposta); S4→S5→S6 (backlog precisa estar atualizado antes de planejar).
- **Pode rodar junto:** D3 com D1/D2 (tráfego e webinário em paralelo, por pessoas diferentes); S1 (todos os donos preparam seus relatórios ao mesmo tempo antes da reunião); dentro de S2, cada funil é apresentado em sequência mas os demais donos podem já ter seus slides prontos.

## Exceções e o que fazer
| Situação | Ação |
|---|---|
| Funil com volume abaixo do mínimo para decisão (`[a confirmar]` conversões) | Registrar "aguardar amostra" — não decidir; definir prazo para próxima avaliação |
| Dono do funil ausente na reunião | Gestor de Operações apresenta os dados disponíveis; decisão postergada ou tomada com ressalva; dono alinhado assincronamente |
| Anomalia crítica identificada fora do ciclo (ex.: ROAS < 1 por 2 dias seguidos) | Acionar Gestor de Operações imediatamente; não esperar o ritual semanal; registrar decisão emergencial |
| Setup 02 (Tracking) não confiável | Suspender decisões de escala/matar até o dado estar validado; registrar como bloqueio no backlog |
| Webinário sem edição diária (ex.: feriado) | Definir responsável substituto com antecedência; registrar no Monday como cobertura `[a confirmar protocolo de férias/feriados]` |

## Critério de Pronto FINAL
O ciclo semanal está "feito" quando: (a) todas as métricas dos funis ativos foram revisadas e têm status pass/fail registrado; (b) cada funil tem uma decisão escrita (escalar/iterar/matar/aguardar); (c) o backlog está atualizado; (d) a lista de ativos da semana está no Monday com produtor e aprovador definidos; (e) o time foi notificado.

## As 3 camadas
- **Ideal:** ritual semanal fixo + checagem diária automatizada (dashboard sempre atualizado, alertas automáticos); decisão registrada em < 2h após a reunião; backlog sempre priorizado.
- **Foto atual:** [a confirmar — o time está rodando alguma reunião de revisão? Com qual cadência? Em qual ferramenta?]
- **Gaps:** definir dia/horário fixo do ritual; garantir que o dashboard está alimentado antes da reunião; treinar donos de funil no formato pass/fail; configurar alertas automáticos para anomalias críticas. `[a confirmar]`
