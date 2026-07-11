# Modelo da Operação KML — camada canônica

> Documento de arquitetura operacional. Não é um novo POP e não substitui os dados do ClickUp. Ele define como estratégia, motores, processos, procedimentos, fichas, tarefas e inteligência se relacionam.
>
> **Status:** v0.1 — primeira camada incorporada ao projeto após auditoria KML/Atlas.

## 1. Regra de precedência

O projeto anterior começa pelo diagnóstico, pelos templates e pelos POPs. A arquitetura KML corrige a ordem:

```text
Tese / Direção
  → Níveis de trabalho
  → Motores
  → Processos
  → Procedimentos / SOPs
  → Fichas / artefatos de decisão
  → Tarefas / execução
  → Scorecard / aprendizado
  → revisão do motor e da tese
```

**Documento não é processo.** Documento é uma materialização de um processo ou de uma decisão. **Tarefa não é processo.** Tarefa é uma unidade de execução dentro de um procedimento já desenhado.

## 2. Níveis de trabalho

A classificação abaixo evita misturar altitude estratégica com execução:

| Nível | Nome | Pergunta | Unidade de saída | Exemplos neste projeto |
|---|---|---|---|---|
| N0 | Direção / filosofia | Onde jogar e o que não fazer? | princípio, tese-mãe, restrição | tese de marketing, limites, prioridades |
| N1 | Estratégia / sistema | Qual sistema/motor precisa existir? | mapa de motor, proposta, arquitetura | aquisição, conversão, monetização, entrega, inteligência |
| N2 | Processo / fluxo | Como o valor atravessa as etapas? | fluxo com entrada, saída e gates | remessa, aula ao vivo, implantação, CDV, meteórico |
| N3 | Procedimento / ficha | Como executar uma etapa com qualidade? | SOP, ficha, checklist, DoD | nomenclatura, QA, copy, edição, régua |
| N4 | Execução / registro | O que foi feito agora? | tarefa, evidência, métrica, log | task ClickUp, link do ativo, resultado do teste |

### Regra de classificação

- Se muda a direção da operação, é N0/N1.
- Se se repete como fluxo de valor, é N2.
- Se ensina alguém a executar uma etapa, é N3.
- Se registra uma ocorrência concreta, é N4.
- Um artefato pode apontar para vários níveis, mas precisa declarar seu nível primário.

## 3. Motores da operação

Os cinco motores canônicos devem ser o eixo de organização do catálogo:

| Motor | Função | Processos conectados | Indicador de saúde |
|---|---|---|---|
| Aquisição | gerar atenção, tráfego e demanda | tese, criativos, tráfego, conteúdo | leads qualificados, custo de aquisição, volume de ativos úteis |
| Conversão | transformar atenção em oportunidade e venda | oferta, página, VSL, Typebot, checkout | conversão por etapa, CPA, taxa de checkout |
| Monetização | capturar valor e recuperar receita | venda, upsell, recuperação, régua | receita, AOV, recuperação, payback |
| Entrega / Retenção | entregar promessa e criar continuidade | onboarding, área, suporte, live, prova | ativação, satisfação, retenção, reembolso |
| Inteligência | aprender e decidir | tracking, scorecard, QA, pós-mortem | decisões tomadas, qualidade dos dados, tempo de feedback |

**Diagnóstico atual:** o repositório cobre fortemente Aquisição e parte de Conversão; cobre Monetização/Entrega de modo fragmentado; Inteligência aparece como recomendações, mas não como circuito fechado de decisão. Essa assimetria precisa virar um gap explícito, não ser escondida dentro de “templates”.

## 4. Os 12 pontos do raio-X

Todo produto, oferta, funil ou operação existente deve passar pelo mesmo raio-X antes de receber novas tarefas. Os 12 pontos são uma ficha de diagnóstico; não são 12 novas áreas burocráticas.

1. Direção e tese
2. Público / mecanismo / problema
3. Oferta e promessa
4. Produto e entrega
5. Aquisição e canais
6. Criativos e comunicação
7. Página / VSL / Typebot
8. Checkout / pagamento
9. Tracking e atribuição
10. CRM, régua e recuperação
11. Suporte, prova e retenção
12. Métricas, gargalo e próxima decisão

Cada ponto recebe uma das quatro classificações: **Ativo**, **Otimizar**, **Não feito** ou **Bloqueado**. O output mínimo do raio-X é: evidência, estado, gargalo principal, decisão recomendada e dono da próxima ação.

## 5. Processo, procedimento, ficha e tarefa

| Elemento | Deve conter | Não deve virar |
|---|---|---|
| Processo N2 | gatilho, fluxo, decisões, handoffs, saída e métrica | lista de documentos |
| Procedimento N3 | pré-condição, passos, responsável, entrada, saída, DoD, exceções | descrição histórica do que alguém costuma fazer |
| Ficha N3 | campos de decisão, evidência, estado, hipótese, próximo passo | texto livre sem uso operacional |
| Tarefa N4 | dono, prazo, input, output, dependência, critério de pronto | pergunta vaga ou container de brainstorming |
| Registro N4 | evidência do ocorrido, resultado e data | nova regra sem revisão |

## 6. Mapeamento inicial do que já existe

| Material atual | Nível correto | Ação nesta evolução |
|---|---:|---|
| `diagnostico/index.html` | N1/N2 | preservar como diagnóstico; linkar ao modelo canônico |
| 6 lentes | N1 | preservar como autoridades de análise; extrair decisões para backlog |
| POP-01 a POP-05 | N2/N3 | normalizar todos para contrato único de processo/procedimento |
| `extrato/sops` | N3 | consolidar com POPs; remover duplicação e registrar fonte |
| `extrato/templates` | N2/N3 | transformar variantes em condicionais dentro dos 5 processos canônicos |
| `blocos.json` + `monday-blocos.csv` | N3/N4 | adicionar `nivel`, `motor`, `processo`, `ficha`, `gate` e `dod` |
| `receitas.json` + `monday-receitas.csv` | N2/N4 | declarar processo-mãe e não deixar receita substituir arquitetura |
| ClickUp CSVs | N4 / evidência | manter como fonte histórica; não tratá-los como modelo canônico |
| Atlas/HTMLs KML | N0/N1 | usar como camada de direção e princípios, com rastreabilidade |

## 7. Gates mínimos

- **G0 — Entra no sistema?** Conecta com tese, motor, receita, risco ou aprendizado prioritário?
- **G1 — É recorrente?** Se sim, precisa de processo; se não, é decisão/projeto excepcional.
- **G2 — Está no nível certo?** Estratégia, processo, procedimento, ficha ou tarefa?
- **G3 — Pode virar tarefa?** Tem dono, input, output, prazo, dependência e DoD?
- **G4 — Pode publicar/rodar?** Tese, oferta, ativo, checkout, tracking, mobile, CRM e reversibilidade verificados.
- **G5 — Aprendeu?** Resultado registrado e processo/ficha atualizado quando necessário.

## 8. Cadência de melhoria

| Ritmo | Pergunta | Saída |
|---|---|---|
| semanal | O que travou o throughput e qual decisão falta? | desbloqueios e prioridades |
| quinzenal | Quais tarefas repetem o mesmo padrão? | candidatos a procedimento/ficha |
| mensal | Qual processo quebrou ou gerou retrabalho? | alteração versionada de processo |
| trimestral | Qual motor/tese ainda merece recursos? | manter, mudar, pausar ou matar |

## 9. Critério de aceitação desta camada

Esta camada só pode ser considerada incorporada quando:

- todos os POPs estiverem vinculados a um motor e processo;
- cada processo tiver contrato de entrada, saída, dono, gate e métrica;
- cada template tiver nível e uso explícitos;
- as 44 variantes estiverem tratadas como 5 processos + condicionais, quando a evidência confirmar;
- o raio-X de 12 pontos existir como ficha executável;
- o scorecard fechar o loop de decisão;
- mudanças forem revisadas por conteúdo, operação e implementação antes de propagar para templates/tarefas.
