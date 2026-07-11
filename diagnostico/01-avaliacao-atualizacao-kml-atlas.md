# Avaliação analítica — atualização de `mkt_process` com KML/Atlas

**Projeto:** `/home/agdev/mkt_process`  
**Estado da cópia auditada:** repositório estático de diagnóstico, não React (`package.json`, `src`, Vite e TypeScript ausentes).  
**Base encontrada:** 9.839 tasks exportadas, 10 spaces, 6 lentes, 5 POPs prescritivos, 8 SOPs extraídos, catálogo de 44 variantes/modelos, blocos e receitas em JSON/CSV.

## 1. Veredito executivo

O projeto já possui uma boa **fotografia operacional** e uma primeira camada prescritiva. O problema não é falta de conteúdo. O problema é que ele ainda mistura quatro produtos diferentes:

1. diagnóstico histórico do ClickUp;
2. modelo de processos e templates;
3. recomendações de gestão/risco;
4. materialização em HTML/CSV/JSON.

Sem uma camada canônica entre esses produtos, a evolução tende a gerar mais documentos, variantes e recomendações paralelas — exatamente o fenômeno que o diagnóstico identificou como 44 → 5.

### Decisão arquitetural

Não reescrever tudo. **Adicionar uma camada de contrato e rastreabilidade**, depois normalizar por ondas. O conteúdo existente deve ser tratado como evidência, decisão, processo ou execução — nunca tudo ao mesmo tempo.

## 2. O que está forte e deve ser preservado

- As seis lentes produzem raciocínio complementar, não apenas opinião.
- A lente BPM já identificou o colapso 44 → 5 e a necessidade de variantes condicionais.
- A lente Lean/TOC encontrou a restrição provável na copy e o problema de WIP/stale.
- A lente EOS tornou visíveis donos, bus factor e ausência de scorecard.
- A lente SRE/DevOps introduziu reversibilidade, observabilidade e postmortem.
- A lente Segurança identificou risco crítico de credenciais e governança.
- Os POPs já têm intenção de input/output, paralelização, exceções e DoD.
- O catálogo de blocos/receitas é um bom inventário de materialização downstream.

## 3. O que está desorganizado ou na camada errada

### 3.1 Diagnóstico e modelo normativo estão juntos

`diagnostico/index.html` mistura números do snapshot, interpretação das lentes, prescrição e roadmap. Isso é útil para leitura humana, mas perigoso como fonte canônica: uma recomendação pode parecer um fato observado.

**Atualização:** declarar em cada artefato `tipo: evidência | decisão | modelo | processo | procedimento | ficha | execução` e `data_fonte`.

### 3.2 POPs, SOPs e templates duplicam o mesmo conhecimento

Os POPs em `diagnostico/pops`, os SOPs em `Recursos/.../sops` e os templates em `Recursos/.../templates` têm sobreposição. O mesmo pipeline aparece como extração histórica e como prescrição nova, mas não há relação formal entre ambos.

**Atualização:** cada processo terá uma página canônica; SOPs e templates passam a ser implementações vinculadas por ID, com fonte e versão.

### 3.3 As 44 variantes ainda existem como catálogo operacional

A análise recomenda 5 processos, mas o catálogo continua organizado por variantes. Isso mantém a entropia como interface de uso.

**Atualização:** separar:
- família de processo canônica;
- variante condicional explícita;
- exceção autorizada;
- instância concreta.

### 3.4 A camada estratégica KML ainda não é referenciada pelo projeto

O HTML público da camada estratégica introduziu motores, processos, gates, squads e cadência, mas esses conceitos não estão ainda ligados aos POPs/blocos/receitas locais.

**Atualização:** usar `diagnostico/00-modelo-operacao-kml.md` como ponte local e adicionar IDs de motor/processo aos artefatos.

### 3.5 Fichas e níveis não estão formalizados

Há muitos documentos que funcionam como fichas, mas não existe contrato explícito para N0–N4. Como resultado, tese, processo, template, checklist e tarefa podem ocupar o mesmo arquivo ou o mesmo campo.

**Atualização:** adotar N0 Direção, N1 Estratégia/Motor, N2 Processo, N3 Procedimento/Ficha, N4 Execução/Registro.

### 3.6 Os 12 pontos ainda aparecem como ideia, não como instrumento

O HTML estratégico menciona “Raio-X — 12 pontas”, mas o projeto não tem uma ficha executável, com estado, evidência, decisão e dono por ponto.

**Atualização:** criar uma ficha única de raio-X e ligá-la ao processo de funil/produto ativo.

### 3.7 O loop de inteligência não fecha

Há métricas, red flags e recomendações, mas falta a transição formal:

```text
resultado → decisão → alteração no processo/ficha → nova execução → verificação
```

**Atualização:** scorecard e log de decisão precisam ser outputs obrigatórios, não apenas recomendações.

## 4. Gaps priorizados

| Prioridade | Gap | Impacto | Correção |
|---|---|---|---|
| P0 | Credenciais expostas no histórico/export | segurança/continuidade | rotação, limpeza, cofre e validação; não copiar segredos |
| P0 | ausência de camada canônica | toda evolução volta a duplicar | modelo KML + contratos + IDs |
| P1 | POP/SOP/template sem rastreabilidade | manutenção e conflito | fonte → decisão → processo → procedimento → tarefa |
| P1 | 44 variantes como catálogo primário | onboarding e variação | 5 famílias + condicionais |
| P1 | 12 pontos sem ficha executável | diagnóstico inconsistente | ficha de raio-X |
| P1 | falta de scorecard/decision log | sem aprendizado | loop de inteligência |
| P2 | donos e backups não representados em esquema | bus factor | matriz de papéis por processo |
| P2 | HTML/JSON/CSV mantidos manualmente | drift | gerar vistas a partir de fonte canônica |
| P2 | sem testes de integridade documental | links/IDs quebram | lint de contratos, links e duplicatas |
| P3 | interface não é React nesta cópia | expectativa técnica | confirmar repositório React antes de migrar |

## 5. Ordem segura de atualização

1. **Contrato:** metadados, níveis, motores, IDs e tipos.
2. **Modelo:** mapa estratégico e catálogo canônico de processos.
3. **Rastreabilidade:** cada POP/SOP/template aponta para o processo correto.
4. **Fichas:** raio-X 12 pontos, tese, processo, QA e scorecard.
5. **Normalização:** 44 → 5, sem apagar fonte histórica.
6. **Materialização:** regenerar HTML/CSV/JSON e só então adaptar a interface.
7. **Validação:** conteúdo, operação, segurança, links e execução real.

## 6. O que não fazer

- não apagar o export histórico para “limpar” a arquitetura;
- não criar um template para cada produto/campanha;
- não transformar cada recomendação das lentes em tarefa;
- não tornar todos os campos obrigatórios sem provar que mudam uma decisão;
- não migrar para React antes de identificar a fonte de verdade e os contratos de dados;
- não afirmar que um processo foi atualizado apenas porque um HTML foi editado.

## 7. Pergunta de conclusão

A atualização estará completa quando uma pessoa nova conseguir responder, para qualquer item da operação:

> “Em que nível isto está, qual motor atende, qual processo roda, qual ficha orienta, quem é o dono, qual gate libera e qual número decide o próximo passo?”
