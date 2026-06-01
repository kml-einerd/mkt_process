// Processo: PRODUÇÃO DE ATIVOS (pipeline de remessa de criativos)
// Modelo data-driven: lanes (raias por papel) + nodes (passos) + edges (fluxo).
// Mapear um novo processo = copiar este arquivo e preencher. O render é uniforme.

const processo = {
  id: 'producao-ativos',
  titulo: 'Produção de Ativos (remessa)',
  categoria: 'Produção',
  fase: 'Otimização',
  descricao:
    'Pipeline de uma remessa de criativos, da copy ao subir anúncio. Operação contínua (fase de Otimização do funil). Raias = papéis; quem produz nunca aprova.',
  docs: [
    { label: 'Setup 05 · Biblioteca de Ativos', href: '../setups/setup-05-ativos.md' },
    { label: 'Setup 06 · Papéis & DoD', href: '../setups/setup-06-papeis-dod.md' },
  ],

  lanes: [
    { id: 'copy',  label: 'Copy',                color: '#2a5a86' },
    { id: 'prod',  label: 'Gravação / Edição',   color: '#a9842f' },
    { id: 'aprov', label: 'Aprovação',           color: '#b5462b' },
    { id: 'traf',  label: 'Tráfego',             color: '#2e6b4a' },
  ],

  // x = posição horizontal (ordem do fluxo). lane = raia. Status = exemplo de uma remessa em andamento.
  nodes: [
    { id: 's1', lane: 'copy',  x: 40,   label: 'Briefing + Copy',        dono: 'Copywriter',        status: 'Concluído',
      detalhe: 'Roteiro/headline a partir do briefing e dos winners. Saída: documento de copy aprovável.',
      ficha: '../setups/setup-05-ativos.md' },
    { id: 's2', lane: 'aprov', x: 270,  label: 'Revisão de copy',        dono: 'Aprovador (Head)',  status: 'Concluído',
      detalhe: 'Gate de qualidade da copy. Reprovou → volta para ajuste. Só o Aprovador muda para Concluído.',
      ficha: '../setups/setup-06-papeis-dod.md' },
    { id: 's3', lane: 'prod',  x: 500,  label: 'Gravação',               dono: 'Talento / Editor',  status: 'Em produção',
      detalhe: 'Captação do vídeo (ou produção de imagens, p/ estáticos). Saída: bruto para edição.',
      ficha: '../setups/setup-05-ativos.md' },
    { id: 's4', lane: 'aprov', x: 730,  label: 'Revisão de gravação',    dono: 'Aprovador',         status: 'A fazer',
      detalhe: 'Confere se o bruto está apto a editar. Reprovou → regravar.',
      ficha: '../setups/setup-06-papeis-dod.md' },
    { id: 's5', lane: 'prod',  x: 960,  label: 'Edição 9x16 (stories)',  dono: 'Editor',            status: 'A fazer',
      detalhe: 'Versão vertical para stories/Reels. Aplicar nomenclatura no arquivo.',
      ficha: '../setups/setup-04-nomenclatura.md' },
    { id: 's6', lane: 'prod',  x: 1190, label: 'Edição 16x9 (feed/YT)',  dono: 'Editor',            status: 'A fazer',
      detalhe: 'Versão horizontal para feed/YouTube.',
      ficha: '../setups/setup-04-nomenclatura.md' },
    { id: 's7', lane: 'aprov', x: 1420, label: 'Revisão de vídeos',      dono: 'Aprovador',         status: 'A fazer',
      detalhe: 'Gate final do criativo. Reprovou → reeditar.',
      ficha: '../setups/setup-06-papeis-dod.md' },
    { id: 's8', lane: 'traf',  x: 1560, label: 'Subir anúncios',         dono: 'Tráfego',           status: 'A fazer',
      detalhe: 'Sobe na conta de anúncios com a nomenclatura padrão. Passa a contar como remessa Rodando.',
      ficha: '../setups/setup-04-nomenclatura.md' },
  ],

  edges: [
    { source: 's1', target: 's2' },
    { source: 's2', target: 's3' },
    { source: 's3', target: 's4' },
    { source: 's4', target: 's5' },
    { source: 's5', target: 's6' },
    { source: 's6', target: 's7' },
    { source: 's7', target: 's8' },
    { source: 's4', target: 's3', label: 'reprovado', feedback: true },
    { source: 's7', target: 's5', label: 'ajustar',   feedback: true },
  ],
}

export default processo
