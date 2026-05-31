# POP-00: Índice e Convenções Comuns

> **O que é isto:** o conjunto de POPs (Procedimentos Operacionais Padrão) da DIS Digital. Transforma as 5 estruturas reais da operação (extraídas do ClickUp) em processos PRESCRITIVOS — com dono, input, output, critério de pronto e gatilho. Use junto.

## Os 5 POPs

| POP | Estrutura | Quando usar | Frequência real | Duração típica |
|-----|-----------|-------------|-----------------|----------------|
| [POP-01](pop-01-remessa-criativos.md) | Remessa de Criativos | Toda vez que precisa de novos ads/hooks pra alimentar tráfego | ~245 instâncias (a mais usada) | 6-9 dias |
| [POP-02](pop-02-setup-aula-ao-vivo.md) | Setup Aula ao Vivo / Lançamento | Lançamento de produto via aula/imersão ao vivo | ~10 instâncias | 3-5 semanas |
| [POP-03](pop-03-implantacao-infoproduto.md) | Implantação de Infoproduto | Subir um produto novo do zero (infra + materiais + curso) | 30+ subtasks por instância | 6-10 semanas |
| [POP-04](pop-04-cdv-ciclo-semanal.md) | CDV Ciclo Semanal | Toda semana, para a live de terça do Clube de Viagens | Semanal (recorrente) | 7 dias (ciclo fechado) |
| [POP-05](pop-05-meteorico.md) | Meteórico | Evento-relâmpago de venda no WhatsApp | ~58 tasks de templates | 5-10 dias |

---

## Convenção 1 — Nomenclatura

### Ad de vídeo (formato principal)
```
[hook][versão]-[editor]-[copy]-[funil]-[remessa]-[projeto]-[status]

Exemplo:  h5-vr1-Dan-Enrik-F01-R514-GPS-ON
```

| Campo | Significado | Exemplo |
|-------|-------------|---------|
| `h[N]` ou `G[N]H[N]` | Hook N (ou Grupo N + Hook N) | `h5`, `G2H5` |
| `vr[N]` | Versão N do ad | `vr1`, `vr8` |
| `[editor]` | Quem editou | `Kayke`, `Dan` |
| `[copy]` | Quem escreveu | `Enrik`, `Jorge` |
| `F[NN]` | Funil | `F01` |
| `R[NNN]` | Remessa | `R514` |
| `[projeto]` | Código do projeto | `GPS` |
| `[status]` | `ON` ativo / `OFF` desligado | `ON` |
| `IMG` | Sufixo se for imagem (não vídeo) | `...-IMG` |

### Ad para edição (interno)
```
[NumAd]-[NumRemessa]-[Projeto]-[Formato]   →   AD1-R1-RAP-4x5
```

### Funil / TypeBot
```
TB-V[NN]            TBA-V[NN]            TBA2-V[NN]            TB-V[NN]-VSL[N]
Exemplos: TB-V91-VSL20 · TBA2-V49-VSL8-GG · TB-V42-397
```

### Remessa / PDA (Plano de Ação)
```
[PDA S{semana}-M{mês}] [Projeto] - Remessa {NNN} a {NNN}
Exemplo: [PDA S4-M3] [GPS] - Remessa 570 a 591
```

---

## Convenção 2 — Status no ClickUp

| Status | Significado | Quem move pra cá |
|--------|-------------|------------------|
| `A FAZER` | Na fila, ainda não começou | — |
| `EXECUTANDO` | Em produção ativa | o dono da etapa, ao começar |
| `REVISÃO COPY` | Copy aguardando Copy Chief | o Copywriter, ao terminar |
| `REVISÃO` | Vídeo/entrega aguardando Head | o Editor, ao terminar |
| `CONCLUÍDO` (com acento) | Done, validado por quem aprova | quem APROVA, nunca quem produz |
| `NÃO EXECUTAR` | Descartado / fora de escopo | dono do processo |

**Regra de ouro:** quem PRODUZ não conclui. Quem APROVA conclui. (Copywriter manda pra Copy Chief; Editor manda pro Head de Edição.)

---

## Convenção 3 — Definition of Done GLOBAL

Uma task só é `CONCLUÍDO` quando TODAS são verdade:

- [ ] Tem **assignee** (zero tasks órfãs — 53% sem dono é o problema nº1 a matar)
- [ ] O **output** prometido existe e está linkado (doc, vídeo, página, planilha)
- [ ] Passou pela **revisão** prevista (se a etapa tiver aprovador)
- [ ] Foi **renomeada** no padrão (se gera ad/funil)
- [ ] Quem **aprova** moveu o status (não quem produziu)

---

## Convenção 4 — Papéis (mapa real da equipe)

| Papel no POP | Pessoa(s) hoje | Bus factor / risco |
|--------------|----------------|--------------------|
| Dono do processo / PM | Pedro Duarte | Sem backup — concentra 51% das criações |
| Media Buying Lead | Bruno Aguiar | — |
| Gestor de Tráfego | Lucas Diniz, Samuel Lira, Paulo, Thiago, Gabriel | Capacidade folgada |
| Copywriter | Fernando Origuela, Brian Lira | **GARGALO** — Fernando concentra |
| Copy Chief (aprova copy) | Kemuel Leopoldino | — |
| Editor de Vídeo | Kayke (principal), Marcel (35% capac.) | **Gargalo nº2** |
| Head de Edição (aprova vídeo) | Kayke / Kemuel | — |
| CRM / Automação | Henrique Gabriel | Single point |
| Infra / Páginas / Funil | Lucas Nunes | Single point |
| Designer | Lucas Cesar | Single point |
| Gravação / Expert | Thays da Costa + expert do produto | — |

---

## Convenção 5 — Princípio operacional (vale pra TODO POP)

1. **A copy é a restrição (gargalo).** Em todo POP que tem copy, ela puxa o ritmo. Nunca empurrar produção downstream à frente da copy — só gera estoque parado.
2. **Paralelize o que não depende de copy.** Identidade visual, infra/páginas, checkout e configuração de tráfego rodam EM PARALELO à copy. Cada POP marca onde.
3. **Toda etapa tem dono ANTES de começar.** Sem assignee = não começa.
4. **Puxar, não empurrar.** Só abre item novo quando um antigo escoa (WIP limit). Toda sexta, varredura de stale (parado >30 dias): conclui, mata ou desbloqueia.

---

## Como adaptar por tamanho de time

- **Time pequeno (3-6):** uma pessoa acumula papéis (ex.: copy + gravação, ou tráfego + relatório). Os POPs continuam válidos — o que muda é que o mesmo nome aparece em várias colunas "Responsável". O risco é o gargalo da copy ficar invisível: use WIP limit rígido.
- **Time grande (15-30):** papéis dedicados, um dono por etapa. Aqui o ganho está em PARALELIZAR de verdade (várias etapas simultâneas) e em buffer management na frente da copy. Zerar tasks sem assignee é obrigatório.
