# SOP: Pipeline Completo de Criativos (Producao → Teste → Escala)

**Fonte:** Dependencias reais (6.141 links) e padroes de task names

## Visao Geral

```
PRODUCAO → TESTE → VALIDACAO → ESCALA
```

## Fase 1: Producao (Pipeline da Remessa)

```
Planilha → Estrategia → Copy → Gravacao → Edicao → [Revisao] → Subida
```

Ver: `templates/01-remessa-criativos.md` para detalhes.

## Fase 2: Teste (3 dias padrao)

Apos subir no trafego:
1. **Testar por 3 dias** com orcamento base
2. **Feedback performance** — task mais frequente (307x)
3. Preencher planilha de resultados

## Fase 3: Validacao

```
Ads testados
├── Validados (21 tasks encontradas com status)
│   └── → Escala
├── Nao validados (51 tasks)
│   ├── → Retestar (18 tasks) com ajustes
│   └── → Descartar
└── Em validacao (10 tasks)
```

Validacao envolve "Comite" (41 tasks de "Validacao do comite").

## Fase 4: Escala

```
Validado → Escala 1 (5 tasks)
         → Escala 2 (4 tasks)
         → Winner (4 tasks)
```

Winners vao para:
- **Pools Ads** (15 tasks com status `controle ads`)
- Subida em multiplas Ad Accounts (AC1-AC7 + AC Fleyn)
- Aumento progressivo de orcamento

## Fase 5: Manutencao

- **Subir no trafego** (285x) — winners em novas contas/campanhas
- **Feedback performance** (307x) — monitoramento continuo
- **Desligar** (7 tasks) — pausar versoes que caem

## Top 5 Dependencias Mais Frequentes

| De | Para | Ocorrencias |
|----|------|-------------|
| Subir no trafego | Feedback performance | 434 |
| Escrever copy | Programar envio | 182 |
| Iniciar trafego novos ads | Testar novos ads (3 dias) | 160 |
| Copy escrever novos ads | Gravar novos ads | 154 |
| Gravar novos ads | Editar novos ads | 138 |

## Gargalo Identificado

**Copy e o blocker #1.** Copy bloqueia gravacao (154x), que bloqueia edicao (138x), que bloqueia trafego (160x). Pipeline 100% serial — zero paralelismo possivel dentro de uma remessa individual.
