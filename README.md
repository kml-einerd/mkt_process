# KML Operating System V2

Esta é a nova aplicação operacional do projeto. A versão anterior era um conjunto de diagnóstico, exports, POPs, templates e vistas duplicadas. A V2 reorganiza o núcleo em uma fonte canônica de dados e uma única interface de operação.

## Estrutura

```text
operacao-v2/
├── data/operacao.json   # fonte canônica da V2
├── index.html            # interface
├── app.js                # renderização e filtros
└── styles.css            # sistema visual
```

## Modelo

```text
N0 Direção/tese
→ N1 Estratégia/motores
→ N2 Processos
→ N3 Fichas/procedimentos
→ N4 Execução/inteligência
```

A V2 possui cinco motores, cinco processos canônicos, cinco fichas núcleo, cinco gates e quatro ritmos de cadência. Variantes não viram novos templates: entram como condicionais do processo.

## Rodar localmente

```bash
python3 -m http.server 4817
# abrir http://127.0.0.1:4817/
```

Não abrir `index.html` diretamente via `file://`, porque a aplicação carrega `data/operacao.json` por `fetch`.

## Validação

```bash
python3 tools/validate_operacao.py
```

O validador verifica JSON, IDs, relações motor/processo/gate, cinco processos canônicos, cinco motores e referências da interface.

## Regra de manutenção

O arquivo `operacao-v2/data/operacao.json` é a fonte de verdade da aplicação. HTML, CSS e JavaScript são vistas/implementação. Não recriar POPs, CSVs ou templates paralelos sem adicionar o contrato ao JSON e à validação.

## Fontes incorporadas

O conteúdo foi sintetizado a partir dos diagnósticos, lentes, POPs, blocos, receitas, exports e artefatos públicos Atlas/KML. As fontes históricas não permanecem na aplicação ativa; o Git preserva o ponto de recuperação anterior.
