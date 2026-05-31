# Auditoria: Red Flags Identificados

**Data:** 2026-04-04
**Verificado:** Dados brutos dos CSVs, sem intermediario

---

## 1. TypeBot: 51 versoes, ZERO rollback

**Severidade:** ALTA

- 51 versoes unicas de TypeBot (V1 a V91, com gaps + variantes TBA/TBA2)
- 233 tasks referenciando TypeBot
- **0 mentions** de "rollback", "revert", "fallback" em task names
- **0 mentions** em descriptions (3 encontradas, nenhuma relacionada a funil)
- **2 mentions** em comments — sobre design/copy, nao sobre funil
- 7 tasks "Desligar" — pausam versao mas NAO documentam fallback
- Nenhum registro de qual versao e a "producao atual"

**Risco:** Se V91 quebrar, nao ha processo para voltar para V90. Sem versionamento, sem snapshots, sem documentacao de "o que mudou".

---

## 2. Credenciais em plaintext no ClickUp

**Severidade:** CRITICA

- 96 tasks com campo "Senha" preenchido em custom fields
- Senhas visiveis para qualquer usuario do workspace
- Exemplos encontrados: `j9K2npH6800#`, `5x4PY~M'"!i6f?E`, `Sucesso2024!`
- Logins incluem: admin@disdigital.com.br, contas de ferramentas SaaS
- Campo "Login" presente em 105 tasks

**Risco:** Qualquer ex-colaborador com acesso ao ClickUp tem todas as senhas.

---

## 3. 53% das tasks sem assignee

**Severidade:** MEDIA

| Space | Sem assignee | % |
|-------|-------------|---|
| Gestao | 1.303 | 94% |
| DIS Equipes | 359 | 61% |
| LC | 3.110 | 44% |
| AVT | 219 | 46% |
| EVA | 91 | 60% |
| DIS DEV | 28 | 25% |
| Creators Club | 23 | 38% |
| Trivvo | 17 | 89% |
| DIS Academy | 13 | 100% |

**Risco:** Impossivel rastrear responsabilidade. Se algo falha, quem e responsavel?

---

## 4. 458 tasks stale (ativas mas paradas >30 dias)

**Severidade:** MEDIA

| Space | Stale | Nota |
|-------|-------|------|
| Gestao | 384 | Templates nunca instanciados |
| DIS DEV | 30 | Features pendentes ha meses |
| LC | 27 | Ads/funis em teste esquecidos |
| AVT | 8 | Remessas paradas |
| Trivvo | 5 | Features em progresso congeladas |
| DIS Equipes | 3 | Operacional |
| Agencia Dis | 1 | Projeto morto |

**Risco:** Trabalho "em progresso" que ninguem esta fazendo. Polui dashboards e metricas.

---

## 5. Gestao: 99.9% inerte

**Severidade:** BAIXA (e template)

- 1.389 tasks, 1 concluida
- 1.004 "a fazer" + 222 "nao executar" + 162 "pendente"
- Templates existem mas sao copiados manualmente (nao ha automacao)

**Risco:** Desconexao entre planejamento e execucao. Templates existem mas nao viram trabalho real de forma sistematica.

---

## 6. Pipeline 100% serial (gargalo em Copy)

**Severidade:** ALTA

Chain de 9 passos: Planilha → Estrategia → **Copy** → Gravacao → Edicao → Revisao → Trafego → Teste → Relatorio

- Copy bloqueia gravacao (154x)
- Gravacao bloqueia edicao (138x)
- Edicao bloqueia trafego (160x)
- Zero paralelismo dentro de uma remessa

**Risco:** 1 dia de atraso em copy = 1 dia de atraso em TODA a remessa.

---

## 7. Concentracao de pessoa-chave

**Severidade:** ALTA

| Pessoa | Tasks | % do total | Bus factor |
|--------|-------|-----------|------------|
| Kayke (edicao) | 929 | 9.4% | Marcel tem 35% da capacidade |
| Lucas Diniz (trafego) | 1.148 | 11.7% | Par com Samuel, mas Lucas e cross-functional |
| Samuel Lira (trafego) | 1.085 | 11.0% | Par com Lucas |
| Pedro Duarte (planejamento) | 4.985 criadas | 51% criadas | Zero backup |

**Risco:** Se Kayke sair, edicao cai para 35% da capacidade. Se Pedro sair, planejamento para.

---

## 8. 85% de BMs bloqueadas

**Severidade:** ALTA

- 55/65 Business Managers em Contingencia Trafego com status `bloqueada`
- Operacao depende de rotacao constante de contas
- 115 perfis API de backup (PF001-PF021+)
- Ferramenta de multilogin (Lauth) em uso ativo

**Risco:** Meta pode escalar enforcement. Se todas as BMs caem simultaneamente, operacao de trafego para.

---

## 9. Creators Club — tracking quebrado

**Severidade:** MEDIA

- `Trackeamento Personalizado Nao Esta Funcionando` — 777 chars de descricao
- Bot Discord nao funciona
- Programa novo (marco 2026) com bugs criticos na infraestrutura

**Risco:** Lancamento de programa de afiliados sem tracking funcional = zero visibilidade de performance.

---

## Resumo de Prioridades

| # | Red Flag | Severidade | Acao sugerida |
|---|----------|-----------|---------------|
| 2 | Senhas em plaintext | CRITICA | Migrar para vault (1Password, Bitwarden) HOJE |
| 1 | TypeBot sem rollback | ALTA | Criar registro de versao ativa + snapshots |
| 6 | Pipeline serial | ALTA | Explorar paralelismo copy/edicao |
| 7 | Pessoa-chave | ALTA | Cross-training, documentacao |
| 8 | BMs bloqueadas | ALTA | Diversificar canais (Google, TikTok) |
| 9 | Tracking CC | MEDIA | Corrigir antes de escalar programa |
| 3 | Sem assignee | MEDIA | Atribuir owners em tasks ativas |
| 4 | Tasks stale | MEDIA | Limpar ou arquivar |
| 5 | Gestao inerte | BAIXA | Automatizar instanciacao de templates |
