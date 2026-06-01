// Registro de todos os processos da Central, organizados nos 2 modos + compartilhado.
// Mapear "tudo" = adicionar o arquivo de dados e registrar aqui. Itens sem dados aparecem como "a desenhar".

import funilAgenciaMacro from './processos/funil-agencia-macro.js'
import onboard from './processos/onboard.js'
import escritaVsl from './processos/escrita-vsl.js'
import producaoGravacaoVsl from './processos/producao-gravacao-vsl.js'
import edicaoVsl from './processos/edicao-vsl.js'
import infraFunil from './processos/infra-funil.js'
import auxiliares from './processos/auxiliares.js'
import reguaRecuperacao from './processos/regua-recuperacao.js'
import producaoAtivos from './processos/producao-ativos.js'

export const PROCESSOS = {
  'funil-agencia-macro': funilAgenciaMacro,
  'onboard': onboard,
  'escrita-vsl': escritaVsl,
  'producao-gravacao-vsl': producaoGravacaoVsl,
  'edicao-vsl': edicaoVsl,
  'infra-funil': infraFunil,
  'auxiliares': auxiliares,
  'regua-recuperacao': reguaRecuperacao,
  'producao-ativos': producaoAtivos,
}

// Inventário completo (catálogo) — guia do que falta desenhar.
export const CATEGORIAS = [
  {
    nome: 'Modo A · Agência de Funil',
    itens: [
      { id: 'funil-agencia-macro', nome: '★ Macro (visão geral)' },
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
    nome: 'Modo B · Produtos Próprios',
    itens: [
      { id: 'producao-ativos', nome: 'Produção de Ativos (remessa)' },
      { id: 'portfolio-esteira', nome: 'Portfólio & Esteira' },
      { id: 'setup-de-funil', nome: 'Setup de funil (start)' },
      { id: 'funis-proprios', nome: 'Funis próprios (VSL/Typebot/...)' },
      { id: 'campanhas', nome: 'Campanhas (pago/orgânico/base)' },
      { id: 'webinar', nome: 'Webinar (operação)' },
    ],
  },
  {
    nome: 'Compartilhado',
    itens: [
      { id: 'setups', nome: 'Setups 01–06 (fundações)' },
      { id: 'otimizacao', nome: 'Otimização (sinal→ação)' },
      { id: 'ciclo-semanal', nome: 'Ciclo semanal' },
      { id: 'peer-review-qa', nome: 'Peer review / QA' },
    ],
  },
]
