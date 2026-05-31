# Template: Remessa de Criativos (PDA)

**Frequencia:** Semanal/quinzenal
**Instancias encontradas:** 595+ remessas
**Pipeline:** 9 passos sequenciais com dependencias

## Estrutura

```
🚀[PDA SX-MY] [Projeto] - Remessa NNN a NNN
│
├── Remessa NNN - Novos ads (Responsavel)
│   └── Pipeline completo (9 passos)
│
├── Remessa NNN - BTC (Responsavel)
│   └── Pipeline curto (pula copy + gravacao)
│
├── Remessa NNN - Plugar/Substituir hooks
│   └── Pipeline curto (pula copy + gravacao)
│
├── Remessa NNN - Novos hooks (Responsavel)
│   └── Pipeline com copy (pula gravacao)
│
└── Remessa NNN - Footprint
    └── Pipeline curto (remix)
```

## Pipeline Completo (Novos Ads)

| # | Task | Role | Depende de | Ocorrencias |
|---|------|------|------------|-------------|
| 1 | Atualizar planilha de controle | Gestor Trafego | — | 64x |
| 2 | Criar estrategia de otimizacao | Gestor Trafego | #1 | 132x |
| 3 | Copy escrever novos ads | Copywriter | #2 | 154x |
| 4 | Gravar novos ads | Expert/Gravacao | #3 | 138x |
| 5 | Editar novos ads | Editor Video | #4 | 136x |
| 6 | Validacao do comite | Copy Chief | #5 | 41x (opcional) |
| 7 | Iniciar trafego novos ads | Gestor Trafego | #5 ou #6 | 160x |
| 8 | Testar novos ads (3 dias) | Gestor Trafego | #7 | 100x |
| 9 | Gerar relatorio/preencher planilha | Gestor Trafego | #8 | 50x |

## Variantes

### BTC (Best Take Compilation)
Pula passos 3 e 4. Inicia no passo 5 (editar).

| # | Task | Depende de |
|---|------|------------|
| 1 | Criar estrategia de otimizacao | — |
| 2 | Editar BTC | #1 |
| 3 | Iniciar trafego BTC | #2 |
| 4 | Testar BTC (3 dias) | #3 |
| 5 | Gerar relatorio/preencher planilha | #4 |

### Plugar/Substituir Hooks
Mesmo que BTC — edita hooks existentes com novos takes.

### Novos Hooks
Inclui copy mas pula gravacao (hook e so visual/edicao).

| # | Task | Depende de |
|---|------|------------|
| 1 | Criar estrategia de otimizacao | — |
| 2 | Copy escrever novos hooks | #1 |
| 3 | Editar novos hooks | #2 |
| 4 | Iniciar trafego novos hooks | #3 |
| 5 | Testar novos hooks (3 dias) | #4 |
| 6 | Gerar relatorio/preencher planilha | #5 |

## Nomenclatura PDA

```
PDA = Plano de Acao
S = Semana (S1-S5)
M = Mes (M1-M12)
Exemplo: [PDA S4-M3] [GPS] - Remessa 570 a 591
```

## Pos-Pipeline: Validacao e Escala

```
Ads testados → Feedback performance
  → Validados → Escala 1 → Escala 2 → Winner
  → Nao validados → Retestar ou Descartar
```
