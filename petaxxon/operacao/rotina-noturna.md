# Rotina Noturna — avança o backlog automaticamente

> **O que é:** uma rotina que roda de hora em hora na madrugada (00h–06h, fuso America/Sao_Paulo)
> e avança **1 gap por execução** do `../GAPS.md`, deixando a operação mais clara, simples e sem gaps.
> Simples de ajustar: muda-se o `GAPS.md` (a fila) e este arquivo (as regras).

## O que cada execução faz
1. Lê `petaxxon/GAPS.md`.
2. Escolhe o gap de **maior prioridade** ainda aberto (🔴/🟡) **cujas dependências já estão atendidas**
   (regra dura: **Tracking (Setup 02) e CRM (Setup 03) vêm antes** dos funis de base/recuperação/captura).
3. Cria/preenche o documento correspondente (lista "Documentos a produzir" no `GAPS.md`) usando o
   template adequado de `petaxxon/_templates/`.
4. Atualiza o Status do item no `GAPS.md` (🔴→🟡 ou 🟢).
5. Commita: `git add petaxxon/ && git commit -m "rotina: avança <gap>"`.
6. **Um gap por execução.** Se não houver gap aberto elegível, não faz nada e encerra.

## Regras de qualidade (inegociáveis)
- **Simples e neutro.** Nada de jargão desnecessário; serve qualquer produto/funil.
- **Não inventar dados.** Onde faltar input do time (números, ferramentas, nomes), escrever `[a confirmar]`.
- **Respeitar o molde.** Usar os templates; não criar estrutura nova sem necessidade.
- **Não vazar contexto DIS/GPS.**

## Mecanismo & pré-condições
- Roda via cron **dentro do Claude Code** (job `durable`). Portanto, durante a janela:
  - O **Claude Code precisa estar aberto** nesta sessão (ou reiniciado — o job é durável).
  - O **Mac precisa estar acordado** (sugestão: rodar `caffeinate -s` à noite, ou desativar suspensão em Ajustes do Sistema).
- O cron **expira em 7 dias** (limite da ferramenta). Recriar se quiser manter além disso.
- Trabalha no branch `petaxxon-fase-0`. De manhã, revise os commits da noite.

## Como ajustar
- **Mudar a fila:** edite `GAPS.md` (prioridades/status).
- **Mudar janela/cadência:** recriar o cron (ver abaixo).
- **Pausar:** fechar o Claude Code, ou pedir pra deletar o job de cron.

## Cron configurado
- Expressão: `7 0-6 * * *` (00:07, 01:07, … 06:07 local) — 7 execuções.
- Escopo por execução: 1 gap do `GAPS.md`.
