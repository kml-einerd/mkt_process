// MODO A · MACRO: Funil de Agência (VSL resposta direta) — visão de alto nível.
// Cada caixa "abrir →" leva ao processo detalhado.

const processo = {
  id: 'funil-agencia-macro',
  titulo: 'Funil de Agência — macro',
  categoria: 'Modo A · Agência de Funil',
  fase: 'Visão geral',
  descricao:
    'O ciclo de construção de um funil de VSL (resposta direta) para um cliente, do onboard ao start. Clique em cada fase para abrir o processo detalhado. Auxiliares (Upsell/Downsell/Backredirect) e Régua de recuperação rodam após o start.',
  docs: [
    { label: 'Índice do Modo A (processos)', href: '../processos/README.md' },
  ],
  lanes: [
    { id: 'macro', label: 'Macro processo · funil para cliente', color: '#16140f' },
  ],
  nodes: [
    { id: 'm1', lane: 'macro', x: 40,   label: 'Onboard',              responsavel: 'Gestão de Projetos', status: 'A fazer', goto: 'onboard',
      detalhe: 'Entrada do cliente/projeto na operação.' },
    { id: 'm2', lane: 'macro', x: 320,  label: 'Escrita de VSL',       responsavel: 'Copywriting',        status: 'A fazer', goto: 'escrita-vsl',
      detalhe: 'Sales letter + briefing de produção + estrutura de validação.' },
    { id: 'm3', lane: 'macro', x: 600,  label: 'Produção & Gravação',  responsavel: 'Gestão de Projetos', status: 'A fazer', goto: 'producao-gravacao-vsl',
      detalhe: 'Atores, estúdio, gravação da VSL.' },
    { id: 'm4', lane: 'macro', x: 880,  label: 'Edição de VSL',        responsavel: 'Edição',             status: 'A fazer', goto: 'edicao-vsl',
      detalhe: 'Edição por blocos (IA, B-rolls, lettering) e montagem.' },
    { id: 'm5', lane: 'macro', x: 1160, label: 'Infra do funil',       responsavel: 'Infra',              status: 'A fazer', goto: 'infra-funil',
      detalhe: 'Páginas, checkout/DTC, Vturb, cloaker — e o Start.' },
    { id: 'm6', lane: 'macro', x: 1440, label: 'Start do funil',       responsavel: 'PMO + CS',           status: 'A fazer',
      detalhe: 'Lançamento e entrega ao cliente. Depois entram os Auxiliares e a Régua de recuperação.' },
  ],
  edges: [
    { source: 'm1', target: 'm2' }, { source: 'm2', target: 'm3' }, { source: 'm3', target: 'm4' },
    { source: 'm4', target: 'm5' }, { source: 'm5', target: 'm6' },
  ],
}

export default processo
