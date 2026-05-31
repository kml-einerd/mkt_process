# Space: [LC] Lari Colares — 7.025 tasks

**O que e:** Core da operacao. Marketing de performance para GPS App e CDV.
**Periodo:** Junho 2024 — Abril 2026
**Concluidas:** 90% (6.335 feito/fechado)
**Subtasks:** 90% (6.329/7.025)

## Listas

| Lista | Tasks | Funcao |
|-------|-------|--------|
| GPS-F01 | 6.258 | Pipeline principal. 346 parents, 5.912 subtasks. Remessas R1-R595+ |
| CRM Automacoes | 247 | 61 projetos: GHL, emails, WhatsApp API, ManyChat, N8N, migracao Active→GHL |
| Teste Criativos | 156 | Ads em validacao com nomenclatura padrao |
| Testes de Funis | 125 | TypeBot V1-V91 + TBA/TBA2. 51 versoes unicas |
| CDV Semanal | 87 | Modelo semanal 9 fases. 5 parents |
| CDV VSL | 40 | Funil evergreen. Remessas CDV, TypeBot, Crisp |
| Miles e Points | 36 | Produto milhas. Paginas, checkout, trafego |
| Teste Trafego | 27 | Escala, bids, campanhas winners |
| Teste Ticket Medio | 20 | Precos R$297/397/497. Maioria validou R$397 |
| Pools Ads | 15 | Winners ativos em `controle ads` |
| CDV sub-listas | 14 | Testes CDV semanal + VSL |

## Workflow

**Producao:**
```
🔒 nao exec|bklg → 🔓 pendente → ⚡em execucao → 🔍 checagem → 🏆feito
```

**Validacao ads:**
```
ready to go → controle ads → validados/nao validados → retestar → escala 1 → escala 2 → winner
```

**Extras:** `em teste` (80), `desligados` (64)

## Pessoas-chave

| Pessoa | Tasks | Funcao |
|--------|-------|--------|
| Kayke | 583 | Editor video principal |
| Fernando Origuela | 227 | Copywriter principal |
| Lucas Diniz + Samuel Lira + Paulo Ricardo | 153 (juntos) | Gestores trafego |
| Henrique Gabriel | 140 | CRM/automacao |
| Lucas Nunes | 133 | Infra/paginas |

**Criadores:** Pedro Duarte (3.046, 43%), Bruno Gabriel (2.709, 39%)

## GPS-F01: Os 346 parents

Top-level tasks representam:
- **Remessas PDA** numeradas (S1-S5, M1-M12): `🚀[PDA S4-M3] [GPS] - Remessa 570 a 591`
- **Projetos de infra:** TypeBot tematicos, ajustes de ticket, novas leads
- **Conteudo:** YouTube Lari, angulos de ads winners
- Maior parent: 31 subtasks (Remessa 593+)

## CRM: 61 projetos concluidos

Destaques:
- Migracao Active Campaign → GHL
- Integracoes tags checkout ↔ GHL
- Agente IA N8N para atendimento
- 15+ fluxos de email automatizado
- Migracao de sites para React
- Recuperacao de vendas WhatsApp API
- Automacoes ManyChat Instagram

## TypeBot: 51 versoes

Versoes: TB-V1 a TB-V91 (com gaps) + variantes TBA, TBA2
Combinacoes com VSL: TB-V91-VSL20, TB-V86-VSL17, etc.
Combinacoes com ticket: TB-V42-397

**ZERO documentacao de rollback.**
