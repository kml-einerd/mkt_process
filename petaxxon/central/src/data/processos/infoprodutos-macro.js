// PETAXXON · Infoprodutos · MACRO da operação ATUAL (landing do app).
// Cadeia de valor do infoproduto próprio. Cada caixa "abrir →" leva ao processo detalhado.

const processo = {
  id: 'infoprodutos-macro',
  titulo: 'Petaxxon · Infoprodutos — macro',
  categoria: 'Petaxxon · Infoprodutos (atual)',
  fase: 'Visão geral',
  descricao: 'A operação de hoje: produtos próprios (infoprodutos). Do portfólio à retenção. Clique em cada etapa para abrir o processo. (O modo agência/clientes é a DarkPixel — em breve.)',
  docs: [
    { label: 'GAPS — Ideal × Foto atual × Gaps', href: '../GAPS.md' },
    { label: 'Índice do vault', href: '../INDEX.md' },
  ],
  lanes: [
    { id: 'macro', label: 'Cadeia de valor · infoproduto próprio', color: '#16140f' },
  ],
  nodes: [
    { id: 'im1', lane: 'macro', x: 40,   label: 'Portfólio & Esteira', responsavel: 'Responsável pelo Produto', status: 'A fazer', goto: 'portfolio-esteira', detalhe: 'Produtos, preços e esteira (front → bumps → upsell → continuação).' },
    { id: 'im2', lane: 'macro', x: 320,  label: 'Setup de funil', responsavel: 'Gestor de Operações', status: 'A fazer', goto: 'setup-de-funil', detalhe: 'O checklist zero de start de um funil.' },
    { id: 'im3', lane: 'macro', x: 600,  label: 'Funis próprios', responsavel: 'Dono do Funil', status: 'A fazer', goto: 'funis-proprios', detalhe: 'Biblioteca de funis (VSL, Typebot, webinário, shorts...).' },
    { id: 'im4', lane: 'macro', x: 880,  label: 'Produção de Ativos', responsavel: 'Gestor de Tráfego', status: 'A fazer', goto: 'producao-ativos', detalhe: 'Remessas de criativos que alimentam os funis.' },
    { id: 'im5', lane: 'macro', x: 1160, label: 'Otimização', responsavel: 'Gestor de Operações', status: 'A fazer', goto: 'otimizacao', detalhe: 'Sinal → escalar / iterar / matar.' },
    { id: 'im6', lane: 'macro', x: 1440, label: 'Pós-venda & Retenção', responsavel: 'CRM', status: 'A fazer', goto: 'pos-venda-retencao', detalhe: 'Recuperação, remarketing, reembolso, recorrência.' },
  ],
  edges: [
    { source: 'im1', target: 'im2' }, { source: 'im2', target: 'im3' }, { source: 'im3', target: 'im4' },
    { source: 'im4', target: 'im5' }, { source: 'im5', target: 'im6' },
  ],
}
export default processo
