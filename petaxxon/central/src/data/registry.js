// Registro de todos os processos da Central. Mapear "tudo" = adicionar ao mapa abaixo.
// Itens sem dados ainda aparecem como "a desenhar" (placeholder), dando a visão do inventário completo.

import producaoAtivos from './processos/producao-ativos.js'

export const PROCESSOS = {
  'producao-ativos': producaoAtivos,
}

// Inventário completo (catálogo) — guia do que falta desenhar.
export const CATEGORIAS = [
  {
    nome: 'Produção',
    itens: [{ id: 'producao-ativos', nome: 'Produção de Ativos (remessa)' }],
  },
  {
    nome: 'Funis',
    itens: [
      { id: 'vsl-tradicional', nome: 'VSL tradicional' },
      { id: 'typebot-pre-venda', nome: 'Typebot pré-venda' },
      { id: 'webinario-mega-combo', nome: 'Webinário (Mega Combo)' },
      { id: 'saas-playsquad-trial', nome: 'SaaS PlaySquad (trial→pago)' },
      { id: 'shorts-venda-direta', nome: 'Shorts venda direta' },
      { id: 'captura-lead-magnet', nome: 'Captura (lead magnet)' },
      { id: 'conteudo-pitch', nome: 'Conteúdo + pitch' },
      { id: 'recuperacao-whatsapp', nome: 'Recuperação (WhatsApp)' },
      { id: 'acoes-base-recompra', nome: 'Ações na base (recompra)' },
    ],
  },
  {
    nome: 'Esteira',
    itens: [{ id: 'esteira-produtos', nome: 'Esteira de produtos' }],
  },
  {
    nome: 'Gestão & Rotinas',
    itens: [
      { id: 'ciclo-semanal', nome: 'Ciclo semanal' },
      { id: 'rotina-otimizacao', nome: 'Otimização (sinal→ação)' },
      { id: 'setup-de-funil', nome: 'Setup de funil (start)' },
    ],
  },
  {
    nome: 'Setups',
    itens: [
      { id: 'setup-01', nome: '01 · Infra & Contas' },
      { id: 'setup-02', nome: '02 · Tracking & Dados' },
      { id: 'setup-03', nome: '03 · CRM & Listas' },
      { id: 'setup-04', nome: '04 · Nomenclatura' },
      { id: 'setup-05', nome: '05 · Ativos' },
      { id: 'setup-06', nome: '06 · Papéis & DoD' },
    ],
  },
]
