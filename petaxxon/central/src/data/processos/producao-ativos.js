// MODO B · Processo: PRODUÇÃO DE ATIVOS (pipeline de remessa de criativos)
// Schema canônico: lanes(Setor) · nodes(Entregável + checklist + responsavel + pop) · edges(fluxo).

const processo = {
  id: 'producao-ativos',
  titulo: 'Produção de Ativos (remessa)',
  categoria: 'Petaxxon · Infoprodutos (atual)',
  fase: 'Otimização',
  descricao:
    'Pipeline de uma remessa de criativos, da copy ao subir anúncio. Operação contínua (fase de Otimização do funil). Raias = setores; quem produz nunca aprova.',
  docs: [
    { label: 'Setup 05 · Biblioteca de Ativos', href: '../setups/setup-05-ativos.md' },
    { label: 'Setup 06 · Papéis & DoD', href: '../setups/setup-06-papeis-dod.md' },
  ],
  lanes: [
    { id: 'copy',  label: 'Copy',              color: '#2a5a86' },
    { id: 'prod',  label: 'Gravação / Edição', color: '#a9842f' },
    { id: 'aprov', label: 'Aprovação',         color: '#b5462b' },
    { id: 'traf',  label: 'Gestor de Tráfego',           color: '#2e6b4a' },
  ],
  nodes: [
    { id: 's1', lane: 'copy',  x: 40,   label: 'Briefing + Copy',       responsavel: 'Copywriter',       status: 'Concluído',
      detalhe: 'Roteiro/headline a partir do briefing e dos winners.', pop: { label: 'Setup 05 · Ativos', href: '../setups/setup-05-ativos.md' } },
    { id: 's2', lane: 'aprov', x: 270,  label: 'Revisão de copy',       responsavel: 'Copy Chief', status: 'Concluído',
      detalhe: 'Gate de qualidade da copy. Só o Aprovador muda para Concluído.', pop: { label: 'Setup 06 · Papéis & DoD', href: '../setups/setup-06-papeis-dod.md' } },
    { id: 's3', lane: 'prod',  x: 500,  label: 'Gravação',              responsavel: 'Talento / Editor', status: 'Em produção',
      detalhe: 'Captação do vídeo (ou produção de imagens, p/ estáticos).' },
    { id: 's4', lane: 'aprov', x: 730,  label: 'Revisão de gravação',   responsavel: 'Aprovador',        status: 'A fazer',
      detalhe: 'Confere se o bruto está apto a editar.' },
    { id: 's5', lane: 'prod',  x: 960,  label: 'Edição 9x16 (stories)', responsavel: 'Editor de Vídeo',           status: 'A fazer',
      detalhe: 'Versão vertical. Aplicar nomenclatura no arquivo.', pop: { label: 'Setup 04 · Nomenclatura', href: '../setups/setup-04-nomenclatura.md' } },
    { id: 's6', lane: 'prod',  x: 1190, label: 'Edição 16x9 (feed/YT)', responsavel: 'Editor de Vídeo',           status: 'A fazer',
      detalhe: 'Versão horizontal para feed/YouTube.' },
    { id: 's7', lane: 'aprov', x: 1420, label: 'Revisão de vídeos',     responsavel: 'Aprovador',        status: 'A fazer',
      detalhe: 'Gate final do criativo.' },
    { id: 's8', lane: 'traf',  x: 1560, label: 'Subir anúncios',        responsavel: 'Gestor de Tráfego',          status: 'A fazer',
      detalhe: 'Sobe na conta de anúncios com a nomenclatura padrão.', pop: { label: 'Setup 04 · Nomenclatura', href: '../setups/setup-04-nomenclatura.md' } },
  ],
  edges: [
    { source: 's1', target: 's2' }, { source: 's2', target: 's3' }, { source: 's3', target: 's4' },
    { source: 's4', target: 's5' }, { source: 's5', target: 's6' }, { source: 's6', target: 's7' }, { source: 's7', target: 's8' },
    { source: 's4', target: 's3', label: 'reprovado', feedback: true },
    { source: 's7', target: 's5', label: 'ajustar',   feedback: true },
  ],
}

export default processo
