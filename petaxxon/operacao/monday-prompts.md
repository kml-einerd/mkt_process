# Prompts para a IA do Monday — reorganizar para o modelo

> **Objetivo:** transformar o board atual ("🖥️ CYBERCLASS", 1 quadro com grupos por produto) no modelo
> decidido em `monday-estrutura.md`. Cole cada prompt na IA do Monday (monday AI / "criar quadro").
> **Importante:** a IA do Monday cria quadros/colunas/automações bem, mas **mover itens históricos** ela
> geralmente NÃO faz — por isso há uma seção de **migração manual** no fim. Faça na ordem.

## Vai precisar criar quadro novo?
**Sim.** Hoje é 1 quadro. O alvo são **5 quadros** (+1 opcional). Resumo:

| Quadro | Origem | Ação |
|---|---|---|
| Produção de Ativos | grupo `REMESSAS DE ANÚNCIOS` (atual) | **reusar** — vira quadro próprio |
| Portfólio & Produtos | grupos por produto (FÓRMULA, VVSA, PLAY SQUAD…) | **novo** — vira 1 item/produto |
| Funis & Campanhas | espalhado em subitens | **novo** |
| Otimização | hoje não existe | **novo** |
| Setups & Backlog | grupo `CENTRAL` | **novo** — recebe o CENTRAL |
| (opcional) Webinar diário | grupo `WEBINAR FÓRMULA` | **novo só se** virar operação diária pesada |

---

## Passo 0 — Padronizar os status (faça primeiro, no board atual)
```
No board CYBERCLASS, unifique os rótulos de status para este conjunto único e aplique a todos os itens:
Backlog · A fazer · Em produção · Em revisão · Rodando · Pausado · Concluído · Não executar.
Regras de conversão: "PARA FAZER"→A fazer; "GRAVAR"/"EDITAR"/"EM ANDAMENTO"→Em produção;
"REVISAR"→Em revisão; "ADS RODANDO" e "RODANDO ADS"→Rodando (unificar os dois, são o mesmo);
"FEITO"→Concluído; "NÃO EXECUTADO"→Não executar; "PAUSADO"→Pausado.
```

## Passo 1 — Quadro "Produção de Ativos" (reusa as remessas)
```
Crie um quadro chamado "Produção de Ativos". Colunas:
- Funil (lista/dropdown): VVSA, Fórmula YouTube, YouTube Dark, PlaySquad, Webinar, Captura, Recuperação, Orgânico
- Tipo (dropdown): Estático, Vídeo, Hook, Carrossel
- Status (status): Backlog, A fazer, Em produção, Em revisão, Rodando, Pausado, Concluído
- Responsável (pessoas) e Aprovador (pessoas)
- Link (link) e Prazo (data)
Crie a estrutura de subitens padrão para cada remessa:
Copy · Revisão copy · Gravação · Revisão gravação · Edição 9x16 (stories) · Edição 16x9 (feed/YouTube) · Revisão vídeos · Subir anúncios.
Adicione uma VISÃO agrupada pela coluna "Funil" e uma visão de Kanban por Status.
```

## Passo 2 — Quadro "Portfólio & Produtos"
```
Crie um quadro chamado "Portfólio & Produtos", 1 item por produto. Colunas:
- Estágio (status): Ideia, Gravando, Lançando, No ar, Pausado
- Papel na esteira (dropdown): Front-end, Upsell, Order bump, Combo, Recorrência
- Preço (número) e Checkout (texto, ex.: Hotmart)
- Esteira (texto, ex.: "VVSA R$14 → Fórmula R$397 → Cyber R$197")
- Dono (pessoas) e Ficha (link)
Itens iniciais: VVSA, Fórmula YouTube 2026, Cyberclass, PlaySquad, YouTube Dark, Raio-X do YouTube, Lucre com YouTube, TubeClub.
```

## Passo 3 — Quadro "Funis & Campanhas"
```
Crie um quadro chamado "Funis & Campanhas", 1 item por funil ou campanha. Colunas:
- Tipo (dropdown): VSL, Typebot, Webinário, Captura, Recuperação, Orgânico, SaaS-trial, Campanha
- Fase (status): Setup, Otimização, Pausado, Arquivado
- Rota (dropdown): A (captura→nutrir→vender), B (venda direta)
- Produto (conectar ao quadro "Portfólio & Produtos")
- Status (status): A fazer, Em produção, Rodando, Pausado, Concluído
- Dono (pessoas), Aprovador (pessoas), Métrica-chave (texto), Ficha (link)
Para cada funil em Fase=Setup, crie subitens com o checklist de start (11 passos):
1 Produto/oferta e posição na esteira · 2 Domínio/subdomínio · 3 Checkout 5 bumps + Upsell PlaySquad ·
4 Tracking (pixel/UTM/Purchase) · 5 CRM (listas/tags/automações) · 6 Nomenclatura · 7 Biblioteca de ativos ·
8 Produtor≠Aprovador definidos · 9 Metas no Pass/Fail · 10 Teste de ponta a ponta · 11 Publicar/ativar.
```

## Passo 4 — Quadro "Otimização"
```
Crie um quadro chamado "Otimização" (log de decisões de performance). Colunas:
- Funil (dropdown, mesma lista da Produção)
- Data da avaliação (data)
- Métrica (texto) e Valor real (texto) e Meta/PASS (texto)
- Sinal (status): PASS, FAIL, Aguardar amostra
- Decisão (status): Escalar, Iterar, Matar, Aguardar
- Ação (texto), Dono (pessoas), Prazo (data), Status da ação (status: A fazer, Em andamento, Concluído)
Cadência: itens diários (webinário/tráfego) e fechamento semanal.
```

## Passo 5 — Quadro "Setups & Backlog"
```
Crie um quadro chamado "Setups & Backlog" com 2 grupos.
Grupo "Setups" (1 item por setup): Infra & Contas, Tracking & Dados, CRM & Listas, Nomenclatura, Biblioteca de Ativos, Papéis & DoD.
  Colunas: Progresso (% / checklist), Ferramenta (texto), Dono (pessoas), Status (status), Checklist (link).
Grupo "Backlog / Gaps": colunas Prioridade (status: Alta/Média/Baixa), Área (texto), Status (status: A desenhar/A testar/Pronto), Dono (pessoas), Bloqueado por (conectar a este mesmo quadro).
```

## Passo 6 (opcional) — Quadro "Webinar diário"
```
[Só se o webinário virar operação diária pesada.] Crie um quadro "Webinar diário" com 1 item por edição (data).
Colunas: Data, Inscritos (número), Confirmados (número), Presentes (número), Vendas (número), Recuperação (status), Dono. Subitens: Convite/Ads · WhatsApp (cadastro+confirmação) · Lembrete · Live · Recuperação de vendas.
```

## Passo 7 — Dashboard / Comando
```
Crie um Dashboard "Comando" puxando dos quadros acima, com widgets:
- Funis por Fase (Setup vs Otimização) e por Status
- Produção: nº de remessas por Status e por Funil
- Otimização: decisões da semana (Escalar/Iterar/Matar)
- Portfólio: produtos por Estágio
- Setups: progresso %  ·  Backlog: gaps por Prioridade
É a tela do ritual semanal.
```

## Automações (prompts)
```
No quadro Produção de Ativos: quando Status muda para "Em revisão", notificar o Aprovador.
No quadro Funis & Campanhas: quando Fase muda para "Otimização", criar item ligado no quadro Otimização.
Em todos: quando um item fica 14 dias sem update, mover para "Pausado" e notificar o Dono.
Regra de ouro (manual): quem PRODUZ não muda para "Concluído" — só o Aprovador.
```

---

## Migração manual (o que a IA não move sozinha)
1. **Status:** rode o Passo 0 antes de tudo.
2. **Remessas:** mova os itens do grupo `REMESSAS DE ANÚNCIOS` para o quadro **Produção de Ativos**, preenchendo a coluna "Funil".
3. **Produtos:** para cada grupo de produto atual (FÓRMULA, VVSA, PLAY SQUAD, RAIO-X…), crie 1 item em **Portfólio & Produtos** e arquive o grupo.
4. **Funis/ofertas** que hoje são subitens soltos (Typebot, VSL, Upsell FYT>PlaySquad, Q1/Q2/Q3 do PlaySquad) viram itens em **Funis & Campanhas**, com Fase correta.
5. **CENTRAL:** tarefas soltas viram itens no grupo **Backlog / Gaps** do quadro Setups & Backlog.
6. **Webinar:** o grupo `WEBINAR FÓRMULA` vira item em Funis & Campanhas (ou quadro próprio, Passo 6).
7. **Conferir:** todo item tem Status e Dono (nada sem dono, nada sem status).
