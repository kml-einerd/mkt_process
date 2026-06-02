// Registro de todos os processos da Central, organizados por operação.
// Mapear "tudo" = adicionar o arquivo de dados e registrar aqui. Itens sem dados aparecem como "a desenhar".

// --- Petaxxon · Infoprodutos (operação ATUAL)
import infoprodutosMacro from './processos/infoprodutos-macro.js'
import portfolioEsteira from './processos/portfolio-esteira.js'
import setupDeFunil from './processos/setup-de-funil.js'
import funisProprios from './processos/funis-proprios.js'
import funilVsl from './processos/funil-vsl.js'
import funilTypebot from './processos/funil-typebot.js'
import funilWebinario from './processos/funil-webinario.js'
import funilSaasTrial from './processos/funil-saas-trial.js'
import funilShorts from './processos/funil-shorts.js'
import funilCaptura from './processos/funil-captura.js'
import funilConteudoPitch from './processos/funil-conteudo-pitch.js'
import funilRecuperacao from './processos/funil-recuperacao.js'
import funilAcoesBase from './processos/funil-acoes-base.js'
import campanhaPago from './processos/campanha-pago.js'
import campanhaOrganico from './processos/campanha-organico.js'
import campanhaBase from './processos/campanha-base.js'
import webinar from './processos/webinar.js'
import producaoAtivos from './processos/producao-ativos.js'
import posVendaRetencao from './processos/pos-venda-retencao.js'

// --- DarkPixel · Agência de Funil (em breve · clientes) — molde pronto
import funilAgenciaMacro from './processos/funil-agencia-macro.js'
import onboard from './processos/onboard.js'
import escritaVsl from './processos/escrita-vsl.js'
import producaoGravacaoVsl from './processos/producao-gravacao-vsl.js'
import edicaoVsl from './processos/edicao-vsl.js'
import infraFunil from './processos/infra-funil.js'
import auxiliares from './processos/auxiliares.js'
import reguaRecuperacao from './processos/regua-recuperacao.js'

// --- Compartilhado (os dois modos usam)
import setups from './processos/setups.js'
import otimizacao from './processos/otimizacao.js'
import cicloSemanal from './processos/ciclo-semanal.js'
import backlogGaps from './processos/backlog-gaps.js'
import peerReviewQa from './processos/peer-review-qa.js'

export const PROCESSOS = {
  // Petaxxon · Infoprodutos (atual)
  'infoprodutos-macro': infoprodutosMacro,
  'portfolio-esteira': portfolioEsteira,
  'setup-de-funil': setupDeFunil,
  'funis-proprios': funisProprios,
  'funil-vsl': funilVsl,
  'funil-typebot': funilTypebot,
  'funil-webinario': funilWebinario,
  'funil-saas-trial': funilSaasTrial,
  'funil-shorts': funilShorts,
  'funil-captura': funilCaptura,
  'funil-conteudo-pitch': funilConteudoPitch,
  'funil-recuperacao': funilRecuperacao,
  'funil-acoes-base': funilAcoesBase,
  'campanha-pago': campanhaPago,
  'campanha-organico': campanhaOrganico,
  'campanha-base': campanhaBase,
  'webinar': webinar,
  'producao-ativos': producaoAtivos,
  'pos-venda-retencao': posVendaRetencao,
  // DarkPixel · Agência (em breve)
  'funil-agencia-macro': funilAgenciaMacro,
  'onboard': onboard,
  'escrita-vsl': escritaVsl,
  'producao-gravacao-vsl': producaoGravacaoVsl,
  'edicao-vsl': edicaoVsl,
  'infra-funil': infraFunil,
  'auxiliares': auxiliares,
  'regua-recuperacao': reguaRecuperacao,
  // Compartilhado
  'setups': setups,
  'otimizacao': otimizacao,
  'ciclo-semanal': cicloSemanal,
  'backlog-gaps': backlogGaps,
  'peer-review-qa': peerReviewQa,
}

// Inventário completo (catálogo) — a operação atual primeiro; agência (DarkPixel) é molde futuro.
export const CATEGORIAS = [
  {
    nome: 'Petaxxon · Infoprodutos (atual)',
    itens: [
      { id: 'infoprodutos-macro', nome: '★ Macro (operação atual)' },
      { id: 'portfolio-esteira', nome: 'Portfólio & Esteira' },
      { id: 'setup-de-funil', nome: 'Setup de funil' },
      { id: 'funis-proprios', nome: 'Funis próprios (hub)' },
      { id: 'funil-vsl', nome: 'Funil VSL' },
      { id: 'funil-typebot', nome: 'Funil Typebot' },
      { id: 'funil-webinario', nome: 'Funil Webinário' },
      { id: 'funil-saas-trial', nome: 'Funil SaaS / Trial' },
      { id: 'funil-shorts', nome: 'Funil Shorts' },
      { id: 'funil-captura', nome: 'Funil de Captura' },
      { id: 'funil-conteudo-pitch', nome: 'Funil Conteúdo + Pitch' },
      { id: 'funil-recuperacao', nome: 'Funil de Recuperação' },
      { id: 'funil-acoes-base', nome: 'Ações de base' },
      { id: 'campanha-pago', nome: 'Campanha · Pago' },
      { id: 'campanha-organico', nome: 'Campanha · Orgânico' },
      { id: 'campanha-base', nome: 'Campanha · Base' },
      { id: 'webinar', nome: 'Webinar (operação)' },
      { id: 'producao-ativos', nome: 'Produção de Ativos' },
      { id: 'pos-venda-retencao', nome: 'Pós-venda & Retenção' },
    ],
  },
  {
    nome: 'DarkPixel · Agência (em breve)',
    itens: [
      { id: 'funil-agencia-macro', nome: '★ Macro (agência)' },
      { id: 'onboard', nome: 'Onboard de cliente' },
      { id: 'escrita-vsl', nome: 'Escrita de VSL' },
      { id: 'producao-gravacao-vsl', nome: 'Produção & Gravação' },
      { id: 'edicao-vsl', nome: 'Edição de VSL' },
      { id: 'infra-funil', nome: 'Infra do funil' },
      { id: 'auxiliares', nome: 'Auxiliares (Up/Back/Down)' },
      { id: 'regua-recuperacao', nome: 'Régua de recuperação' },
    ],
  },
  {
    nome: 'Compartilhado',
    itens: [
      { id: 'setups', nome: 'Setups 01–06 (fundações)' },
      { id: 'otimizacao', nome: 'Otimização (sinal→ação)' },
      { id: 'ciclo-semanal', nome: 'Ciclo semanal' },
      { id: 'backlog-gaps', nome: 'Backlog / Gaps' },
      { id: 'peer-review-qa', nome: 'Peer review / QA' },
    ],
  },
]
