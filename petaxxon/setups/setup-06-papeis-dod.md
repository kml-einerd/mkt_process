# Setup: Papéis & Definition of Done

> **Dono:** Gestor de Operações  ·  **Ferramenta(s):** Monday (board de Produção de Ativos + board de Setups)

## Objetivo
Definir quem faz o quê na operação Petaxxon, garantir a separação entre produtor e aprovador, e documentar o Definition of Done (DoD) global — o critério mínimo que qualquer entregável precisa cumprir antes de ser considerado "feito". Com papéis claros e DoD definido, elimina-se ambiguidade, retrabalho e entregáveis que passam sem revisão.

## Checklist do que precisa existir (antes de rodar qualquer funil)
- [ ] Cada papel abaixo tem uma função/atribuição definida e associada à sua conta no Monday
- [ ] Toda tarefa no Monday tem dois campos preenchidos: **Produtor** e **Aprovador**
- [ ] A regra "quem PRODUZ não conclui; quem APROVA conclui" está comunicada e praticada pelo time
- [ ] O DoD global abaixo está acessível a todos os membros do time
- [ ] Papéis com acúmulo estão documentados e revisados a cada ciclo semanal (para redistribuir quando o time crescer)

## Papéis da Operação

| Papel | Responsabilidade principal | Produz | Aprova | Pode acumular com |
|---|---|---|---|---|
| **Gestor de Operações** | Conduz o ritual semanal; registra decisões; garante que os processos rodam | Análises e relatórios de funil | Decisões de escalar/iterar/matar; encerramento de ciclos | Em time pequeno: pode acumular com CRM ou Infra |
| **Gestor de Tráfego** | Cria e otimiza campanhas pagas; monitora métricas diárias de Ads | Campanhas, públicos, criativos nos Ads | — (propõe; aprovação de escala é do Gestor de Operações) | Em time pequeno: pode acumular com análise de dados |
| **Copywriter** | Escreve copy de Ads, páginas, e-mails, scripts de VSL/webinário, bumps e upsells | Todos os textos de venda e ativação | — (produz; não aprova o próprio texto) | Em time pequeno: pode acumular com roteiro de vídeo |
| **Copy Chief** | Revisa e aprova copy; garante consistência de voz e padrão de qualidade | Diretrizes de voz e padrões de copy | Todo texto antes de ir ao ar | Em time grande: papel dedicado; em time pequeno: Gestor de Operações ou sênior externo |
| **Editor de Vídeo** | Edita vídeos (VSL, webinário gravado, Shorts, conteúdo+pitch) | Vídeos editados | — (produz; não aprova o próprio vídeo) | Em time pequeno: pode acumular com design |
| **Designer** | Cria criativos visuais para Ads, páginas e materiais de apoio | Criativos e layouts | — (produz; não aprova o próprio criativo) | Em time pequeno: pode acumular com Editor de Vídeo |
| **CRM** | Configura e mantém listas, automações, fluxos de e-mail/WhatsApp e segmentações | Fluxos e configurações de automação | — (propõe; Gestor de Operações valida antes de ativar) | Em time pequeno: pode acumular com Gestor de Operações |
| **Infra** | Mantém domínios, contas, integrações, checkout e segurança | Configurações técnicas e integrações | — (executa; Gestor de Operações valida testes de ponta a ponta) | Em time pequeno: pode acumular com CRM ou qualquer papel técnico |
| **Dono do Funil** | Responde por um funil ativo de ponta a ponta (metas, otimização) | Decisões e adjustments do funil | — (propõe; escala é do Gestor de Operações) | Pode acumular com Gestor de Tráfego |
| **Apresentador** | Apresenta lives/webinários e grava VSLs | Apresentações e gravações | — | Pode acumular com Copywriter |
| **Responsável pelo Produto** | Cria/cura o infoproduto (aulas, grade, bônus, entrega na plataforma) | Produto e materiais de entrega | Entrega do produto | Pode acumular com Gestor de Operações |
| **Produtor de Conteúdo** | Produz conteúdo orgânico (Shorts, YouTube, posts) | Conteúdo orgânico | — | Pode acumular com Editor de Vídeo |
| **Analista de Dados** | Coleta e analisa métricas; abastece a otimização | Relatórios e dashboards | — (Gestor de Operações decide) | Pode acumular com Gestor de Operações |

> **Nota sobre acúmulo:** em times pequenos, um mesmo profissional pode acumular papéis, desde que a regra produtor ≠ aprovador seja preservada. Se a mesma pessoa produz e aprova, um segundo par de olhos externo (freelancer, parceiro ou outro membro) deve validar antes de concluir.

## Padrão / convenção — Regra Produtor ≠ Aprovador

**Quem PRODUZ não conclui; quem APROVA conclui.**

- No Monday: toda tarefa tem dois campos obrigatórios — **Produtor** e **Aprovador** (pessoas diferentes).
- O status de uma tarefa só vai para "Concluído" quando o **Aprovador** (não o Produtor) marca como pronto.
- Se o Aprovador identificar ajustes, a tarefa volta para "Revisão" e o Produtor corrige.
- O Aprovador não é opcional: tarefa sem Aprovador definido não começa.

**Por que essa regra existe:** evitar que erros de copy, técnicos ou estratégicos cheguem ao ar sem um segundo olhar. O custo de um erro no ar (Ad com copy errado, funil quebrado, bump sem preço) é sempre maior que o tempo de revisão.

## Definition of Done Global

Todo entregável — texto, vídeo, configuração técnica, campanha, automação — está "pronto" quando cumpre os 5 critérios abaixo:

| # | Critério | Como verificar |
|---|---|---|
| 1 | **Tem Produtor e Aprovador atribuídos** | Campo no Monday preenchido |
| 2 | **O entregável está nomeado conforme Setup 04 (Nomenclatura)** | Nome do arquivo/item segue o padrão documentado |
| 3 | **O output está linkado na tarefa** (arquivo, link de página, link de vídeo, print de configuração) | Link ou anexo na tarefa do Monday |
| 4 | **Foi revisado pelo Aprovador** (e não pelo próprio Produtor) | Aprovador marcou "revisado" ou deixou comentário de aprovação |
| 5 | **Passou pelo teste mínimo do tipo de entregável** (ver abaixo) | Comprovação registrada na tarefa |

### Testes mínimos por tipo de entregável
- **Texto (copy, script, e-mail):** leitura em voz alta pelo Aprovador; verificação de link/CTA funcionando
- **Vídeo:** assistido integralmente pelo Aprovador; áudio e legenda verificados; exportado no formato correto
- **Criativo (Ads):** tamanhos e proporções corretos para o canal; texto dentro do limite da plataforma; link correto
- **Configuração técnica (checkout, página, automação):** teste de ponta a ponta executado (compra de teste real ou simulação documentada no GHL/Hotmart)
- **Campanha de Ads:** estrutura revisada (campanha → conjunto → anúncio); pixel verificado; orçamento correto; aprovação da plataforma
- **Automação de CRM:** fluxo testado no GHL com contato de teste; todos os gatilhos verificados; opt-out funcionando

## As 3 camadas
- **Ideal:** 100% das tarefas com Produtor e Aprovador definidos no Monday; DoD checado sistematicamente; zero entregáveis "concluídos" sem aprovação; papéis documentados e revisados a cada trimestre.
- **Foto atual:** 🟡 a testar — papéis definidos e tabela configurada no Monday, mas a disciplina prática de aprovação cruzada está sendo implementada.
- **Gaps:** mapear o acúmulo de papéis real de cada membro do time; aplicar e auditar semanalmente a regra produtor ≠ aprovador nos boards do Monday.
