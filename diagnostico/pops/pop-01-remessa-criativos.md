# POP-01: Remessa de Criativos

> **Quando usar:** sempre que o tráfego precisa de novos ads/hooks para testar (cadência semanal/quinzenal).  |  **Dono do processo:** Gestor de Tráfego (abre o PDA).  |  **Duração típica:** 6-9 dias (3 deles só de teste).

## Objetivo
Produzir, testar e validar um lote de criativos para tráfego pago, seguindo um pipeline padronizado, e decidir com critério objetivo o que escala e o que descarta.

## Sub-tipos (escolha 1 ao abrir a remessa)
| Sub-tipo | Tem copy? | Tem gravação? | Pipeline |
|----------|-----------|---------------|----------|
| **Novos Ads** | Sim | Sim | completo (9 passos) |
| **Novos Hooks** | Sim | Não (só edição visual) | curto-com-copy (6 passos) |
| **Hooks: Plugar/Substituir** | Não | Não | só edição (5 passos) |
| **BTC** (Best Take Compilation) | Não | Não | só edição (5 passos) |

## Papéis envolvidos
| Papel | Responsabilidade | Time pequeno (acumula) | Time grande (dedicado) |
|-------|------------------|------------------------|------------------------|
| Gestor de Tráfego | Abre PDA, estratégia, sobe, testa, relatório | mesma pessoa faz planilha+estratégia+tráfego+relatório | Lucas/Samuel/Paulo dividem por funil |
| Copywriter | Escreve copy dos ads/hooks | pode acumular com gravação | Fernando/Brian, fila priorizada |
| Copy Chief | Aprova a copy (validação do comitê) | acumula com PM | Kemuel dedicado |
| Expert/Gravação | Grava os takes | acumula com copy | Thays + expert |
| Editor de Vídeo | Edita, entrega 4x5 e 9x16, renomeia | acumula com gravação | Kayke + Marcel |

---

## Fluxo — Novos Ads (pipeline completo)
| # | Etapa | Responsável | Input (pra começar) | Output (entregável) | Critério de Pronto (DoD) | Pode paralelizar? |
|---|-------|-------------|---------------------|---------------------|--------------------------|-------------------|
| 1 | Atualizar planilha de controle | Gestor Tráfego | dados da semana anterior | linha da remessa na planilha | remessa numerada e registrada | — |
| 2 | Criar estratégia de otimização | Gestor Tráfego | #1 + aprendizado dos winners | brief de ângulos/hooks-alvo | brief com nº de ads, hooks e públicos definidos | — |
| 3 | **Copy escrever novos ads** | Copywriter | brief #2 pronto | doc de copy (1 por ad) | passou pelo checklist de copy; link no comentário; sem info errada (preço/nome/oferta); status `REVISÃO COPY` | **NÃO** (é o gargalo) |
| 3b | Validar copy | Copy Chief | copy em `REVISÃO COPY` | copy aprovada | Copy Chief conclui (não o copy); ajustes voltam pra #3 | — |
| 4 | Gravar novos ads | Expert/Gravação | copy aprovada #3b | takes brutos no drive | todos os ângulos da copy gravados; link no drive | parcial (grava ad A enquanto copy B sai) |
| 5 | Editar novos ads | Editor Vídeo | takes #4 | ads editados 4x5 + 9x16 | ver **SOP de edição** abaixo; renomeado no padrão; ambos formatos | parcial (edita sem-hook 1º) |
| 6 | Validação do comitê (opcional) | Copy Chief | ads editados #5 | ads aprovados pra subir | comitê deu OK ou pediu ajuste | — |
| 7 | Iniciar tráfego | Gestor Tráfego | #5 ou #6 aprovado | campanha no ar | ads ativos, orçamento base setado, UTM ok | — |
| 8 | Testar 3 dias | Gestor Tráfego | campanha no ar #7 | 3 dias de dados | rodou 3 dias completos sem pausa | — (espera institucional) |
| 9 | Gerar relatório / preencher planilha | Gestor Tráfego | dados #8 | veredito pass/fail por ad | planilha preenchida; cada ad marcado validado/reteste/descarte | parcial |

> **Pipelines curtos:** *Novos Hooks* pula a gravação (#4) — copy → edição direto. *BTC* e *Plugar/Substituir Hooks* pulam copy E gravação — começam na estratégia (#2) → edição (#5).

---

## SOP de Edição (regra fixa da etapa #5)
1. Editar todos os ads SEM os hooks primeiro → mandar pra revisão e validar enquanto edita o resto.
2. Usar recursos nativos de CapCut/TikTok/IG para parecer **conteúdo orgânico** (aumenta CTR).
3. Entregar **2 formatos**: 4x5 (quadrado) e 9x16 (vertical).
4. Renomear no padrão `[NumAd]-[NumRemessa]-[Projeto]-[Formato]` (ex.: `AD1-R1-RAP-4x5`).
5. Críticos: legenda dinâmica (não lenta), CTA de 5s no final, hooks acelerados 120%, mesmo perfil de cor em toda a remessa, áudio não abafado.

## SOP de Copy (regra fixa da etapa #3)
1. Seguir o checklist do tipo (VSL Principal / Criativos / Upsell).
2. Garantir SEM info errada: preço, nome do produto, ofertas atualizadas.
3. Colar o link do doc nos comentários da task.
4. Marcar **Copy Chief** como responsável → status `REVISÃO COPY`.
5. **Copy Chief finaliza** (nunca o Copywriter). Ajuste = repete o ciclo.

---

## Onde paralelizar (ganho de agilidade)
- **Serial obrigatório (não fure):** Copy (#3) → Gravação (#4) → Edição (#5) → Tráfego (#7). É a corrente que o gargalo dita.
- **Pode rodar JUNTO:**
  - Etapas #1 e #2 (planilha + estratégia) enquanto a copy da remessa ANTERIOR ainda está no ar.
  - Em remessas com vários ads: o Editor começa os ads SEM-hook (#5) assim que os primeiros takes chegam, sem esperar a copy de todos.
  - BTC e Plugar/Substituir Hooks **não tocam a copy** → rode-os em paralelo às Novos Ads para manter tráfego abastecido enquanto a copy é o gargalo.
- **Buffer da copy:** mantenha sempre 2-3 briefs (#2) prontos na frente do Copywriter — ele nunca pode esperar input.

## Checklist de execução (copiável p/ ClickUp como subtasks)
```
[ ] Atualizar planilha de controle (Gestor Tráfego)
[ ] Criar estratégia de otimização — brief de hooks/públicos (Gestor Tráfego)
[ ] Copy escrever novos ads — checklist + link no comentário (Copywriter)
[ ] Validar copy — Copy Chief conclui (Copy Chief)
[ ] Gravar novos ads — todos os ângulos (Gravação)
[ ] Editar ads — 4x5 + 9x16, renomeados, sem-hook primeiro (Editor)
[ ] (opcional) Validação do comitê (Copy Chief)
[ ] Iniciar tráfego — UTM + orçamento base (Gestor Tráfego)
[ ] Testar 3 dias (Gestor Tráfego)
[ ] Gerar relatório + veredito pass/fail por ad (Gestor Tráfego)
```

## Critério Pass/Fail do teste de 3 dias
Decisão objetiva por ad ao fim dos 3 dias (ajuste os números à meta do projeto; baseline GPS abaixo):

| Resultado | Regra | Ação |
|-----------|-------|------|
| **VALIDADO → escala** | CPA ≤ meta do funil **E** CTR (link) ≥ 1,5% **E** gastou ≥ 1x ticket sem vender abaixo da meta | promove pra Escala 1 → 2 → Winner (Pools Ads) |
| **RETESTE** | CPA até 30% acima da meta **OU** CTR 1,0-1,5% (sinal misto) | ajusta hook/copy e roda +3 dias (máx. 1 reteste) |
| **DESCARTE** | CPA > 30% acima da meta **OU** CTR < 1,0% **OU** gastou 2x ticket sem venda | desliga (status `OFF`), documenta aprendizado |

> Sem dado suficiente em 3 dias (gasto < 0,5x ticket): estender 1-2 dias antes de decidir — nunca decidir no escuro.

## Pós-pipeline: validação e escala
```
Validado → Escala 1 → Escala 2 → Winner → Pools Ads (status `controle ads`)
         → sobe em múltiplas Ad Accounts (AC1-AC7) com orçamento progressivo
Reteste  → roda de novo com ajuste
Descarte → OFF + aprendizado registrado
```

## Exceções e o que fazer
| Situação | Ação |
|----------|------|
| Copy não saiu e trava tudo | Dispare BTC/Plugar-Hooks (sem copy) pra manter tráfego abastecido; não empurre gravação à frente |
| Editor sobrecarregado (Kayke) | Roteie sem-hooks/BTC pro Marcel; priorize por impacto, não por ordem de chegada |
| Ad sem dono | Não sobe. Atribua antes de iniciar tráfego |
| Falta link de referência pra edição | Cobrar Gestor de Projetos + Copy no canal antes de começar |
| BM bloqueada na hora de subir | Trocar pra conta de contingência (PF/AC reserva); registrar |
| Remessa parada >30 dias (stale) | Na varredura de sexta: conclui, mata ou desbloqueia |

## Critério de Pronto FINAL
A remessa está "feita" quando: todos os ads passaram pelos 3 dias de teste, o relatório está preenchido, **cada ad tem veredito** (validado/reteste/descarte), os validados foram promovidos pra escala e os descartados estão `OFF` com aprendizado registrado. A planilha de controle reflete o estado real.

## Adaptação por tamanho de time
**Time de 3-6:** uma pessoa pode ser copy+gravação e outra tráfego+edição+relatório. O risco é o gargalo da copy sumir de vista — use WIP limit duro: no máx. X remessas "em copy" ao mesmo tempo, e só abre remessa nova quando uma sai do teste. **Time de 15-30:** papéis dedicados, e o ganho real vem de paralelizar BTC/Hooks com Novos Ads e manter buffer de briefs na frente da copy. Aqui o Copy Chief e o Head de Edição são pessoas distintas dos produtores — a separação produtor/aprovador é o que segura a qualidade.
