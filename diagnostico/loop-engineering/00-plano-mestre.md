# Loop engineering — plano mestre de atualização

**Projeto:** `mkt_process`  
**Objetivo:** transformar o repositório de diagnóstico/templates em um sistema operacional coerente, rastreável e atualizável, incorporando as camadas KML/Atlas sem perder a evidência histórica.

## Princípio de execução

Cada onda deve produzir um artefato utilizável, receber revisão independente, passar por validação automatizada e só então alimentar a onda seguinte. Não fazer uma grande reescrita irreversível.

```text
inspecionar → modelar → propor → revisar → implementar → validar → registrar aprendizado → próxima onda
```

## Papéis de agentes/revisores

| Papel | Responsabilidade | Pergunta de qualidade |
|---|---|---|
| Arquiteto operacional | níveis, motores, processos e contratos | Está na camada certa? |
| Analista de evidência | números, fontes, divergências e confiança | Isto é fato ou inferência? |
| Especialista de processos | fluxo, handoffs, gates, DoD e exceções | Alguém consegue executar? |
| Especialista KML/Atlas | tese, filosofia, fichas, motores e 12 pontos | O sistema preserva o raciocínio KML? |
| Segurança/governança | segredos, PII, permissões, versionamento | Há risco ou vazamento? |
| Implementador | arquivos, IDs, geradores e vistas | A mudança é reproduzível? |
| Revisor adversarial | procura contradições e pontas soltas | O que quebra ou ficou sem dono? |
| Validador | testes estruturais, links, consistência e smoke test | A entrega funciona de verdade? |

## Onda 0 — baseline e segurança

**Objetivo:** congelar o estado de referência antes de alterar semântico.

Entregas:
- inventário versionado dos arquivos;
- `git status` limpo ou divergências registradas;
- varredura de segredos e PII;
- lista de fontes confiáveis e snapshots;
- relatório de riscos P0.

Gate de saída:
- nenhum segredo novo é copiado para documentos;
- qualquer credencial histórica é marcada para rotação/remoção, não republicada;
- baseline pode ser reproduzido.

## Onda 1 — contrato canônico (em curso)

Entregas iniciais já criadas:
- `diagnostico/00-modelo-operacao-kml.md`;
- `diagnostico/01-avaliacao-atualizacao-kml-atlas.md`.

Próximas entregas:
- schema para metadados de artefatos;
- vocabulário de níveis N0–N4;
- catálogo de motores;
- IDs de processo e procedimento;
- convenção de status: `draft`, `review`, `approved`, `deprecated`.

Gate:
- cada artefato novo declara nível, tipo, motor, processo-pai, dono e versão;
- nenhum campo sem uso em decisão é obrigatório.

## Onda 2 — catálogo canônico de processos

Consolidar 5 famílias:

1. Remessa de Criativos;
2. Setup de Aula ao Vivo;
3. Implantação de Infoproduto;
4. CDV Semanal;
5. Meteórico.

Para cada uma:
- propósito e motor;
- gatilho e pré-condições;
- entrada e saída;
- fluxo visual;
- decisões e condicionais;
- dono, aprovador e backup;
- métrica de throughput/qualidade;
- ligação com POP, SOP, template e receita.

Gate:
- variantes não somem; são convertidas em condições, exceções ou instâncias;
- o processo tem apenas um contrato canônico.

## Onda 3 — fichas e 12 pontos

Criar fichas N3:

- Raio-X de Produto/Funil — 12 pontos;
- Tese de Marketing;
- Briefing de Ativo/Criativo;
- QA de Funil;
- Scorecard e Decisão;
- Pós-mortem / aprendizado.

Cada ficha precisa de:
- objetivo;
- quando usar;
- campos mínimos;
- evidência obrigatória;
- estado;
- decisão possível;
- saída;
- ligação com o processo que a consome.

Gate:
- é possível executar o raio-X e gerar uma decisão sem interpretação oral do autor.

## Onda 4 — POP/SOP com contrato uniforme

Normalizar cada etapa no formato:

```text
ID · etapa
Objetivo
Nível / motor / processo
Pré-condições
Entrada
Responsável
Aprovador
Passos
Critério de pronto
Saída / evidência
Exceções
Métrica
Links para ficha/template
```

Gate:
- produtor não aprova a própria etapa quando houver revisão;
- toda saída é verificável;
- exceções não criam um processo paralelo sem justificativa.

## Onda 5 — materialização e geração

Separar fonte canônica de vistas:

- Markdown de arquitetura/processos;
- JSON de blocos/receitas;
- CSV para importação;
- HTML para leitura;
- export de tarefas.

Criar validações para:
- IDs únicos;
- links existentes;
- nível válido;
- motor/processo existentes;
- DoD não vazio;
- ausência de segredos;
- nenhuma variante órfã.

Gate:
- uma alteração de processo gera ou atualiza as vistas sem edição manual contraditória.

## Onda 6 — piloto operacional

Aplicar em dois casos reais, escolhidos por contraste:

- uma Remessa de Criativos de alto volume;
- um funil/produto ativo com problemas de tracking/régua.

Medir antes/depois:
- tempo até decisão;
- tasks órfãs;
- retrabalho;
- tempo de ciclo;
- cobertura de QA;
- qualidade do tracking;
- número de exceções criadas.

Gate:
- o modelo reduz ambiguidade sem criar burocracia percebida;
- qualquer nova exceção é registrada como aprendizado.

## Onda 7 — revisão adversarial e fechamento

Três revisões separadas:

1. **conteúdo:** fidelidade às fontes e à tese;
2. **operação:** executabilidade, donos e gates;
3. **estrutura:** links, níveis, IDs, geração e segurança.

Depois:
- corrigir conflitos;
- registrar decisões rejeitadas;
- publicar changelog;
- congelar versão aprovada;
- abrir apenas os gaps que têm evidência e dono.

## Definition of Done do programa

- [ ] baseline e fontes identificados;
- [ ] nenhum segredo republicado;
- [ ] arquitetura KML incorporada localmente;
- [ ] N0–N4 definidos e aplicados;
- [ ] 5 motores catalogados;
- [ ] 5 processos canônicos descritos;
- [ ] 44 variantes classificadas;
- [ ] 12 pontos em ficha executável;
- [ ] POPs/SOPs com contrato uniforme;
- [ ] owners, aprovadores e backups definidos;
- [ ] gates e cadência operacionais;
- [ ] scorecard fecha o loop de aprendizado;
- [ ] vistas HTML/CSV/JSON geradas sem drift;
- [ ] piloto real validado;
- [ ] revisão adversarial concluída;
- [ ] relatório final com lacunas remanescentes, sem “pontas soltas” silenciosas.

## Regra de parada

Não declarar “final” enquanto existir qualquer item sem uma destas quatro decisões explícitas:

```text
preservar | atualizar | arquivar | bloquear por decisão humana
```
