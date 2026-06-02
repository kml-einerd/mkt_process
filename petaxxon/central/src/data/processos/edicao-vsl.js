// MODO A · Processo: EDIÇÃO DE VSL (por blocos).
const BLOCOS = ['Lead 1', 'Lead 2', 'Lead 3', 'História', 'Nascimento do Produto', 'Tese de marketing', 'Oferta', 'Fechamento', 'Prova-social']

const processo = {
  id: 'edicao-vsl',
  titulo: 'Edição de VSL',
  categoria: 'DarkPixel · Agência (em breve)',
  fase: 'Setup',
  descricao: 'Edição da VSL bloco a bloco: setup, geração de materiais IA, inserts de B-rolls/zoom e lettering, montagem e finalização.',
  docs: [
    { label: 'POP de edição por blocos', href: '../processos/pops/pop-edicao-blocos.md' },
  ],
  lanes: [
    { id: 'edit', label: 'Edição', color: '#a9842f' },
    { id: 'pmo',  label: 'PMO',    color: '#2e6b4a' },
  ],
  nodes: [
    { id: 'd1', lane: 'edit', x: 40,   label: 'Setup de edição', responsavel: 'Edição', status: 'A fazer',
      checklist: ['Baixar e organizar materiais na pasta do projeto', 'Decupar bruto e exportar blocos'] },
    { id: 'd2', lane: 'edit', x: 340,  label: '(se necessário) Geração de materiais IA', responsavel: 'Edição', status: 'A fazer',
      checklist: BLOCOS, pop: { label: 'POP edição por blocos', href: '../processos/pops/pop-edicao-blocos.md' } },
    { id: 'd3', lane: 'edit', x: 640,  label: 'Insert de B-rolls + zoom (por bloco)', responsavel: 'Edição', status: 'A fazer',
      checklist: BLOCOS },
    { id: 'd4', lane: 'edit', x: 940,  label: 'Insert de Lettering (por bloco)', responsavel: 'Edição', status: 'A fazer',
      checklist: BLOCOS },
    { id: 'd5', lane: 'edit', x: 1240, label: 'Montagem & finalização', responsavel: 'Edição', status: 'A fazer',
      checklist: ['Juntar todas as partes', 'Exportar VSL completa', 'Subir VSL completa no frame.io'] },
    { id: 'd6', lane: 'pmo', x: 1540,  label: 'Start', responsavel: 'Gestor PMO', status: 'A fazer',
      checklist: ['Marcar o PMO: edição finalizada'] },
  ],
  edges: [
    { source: 'd1', target: 'd2' }, { source: 'd2', target: 'd3' }, { source: 'd3', target: 'd4' }, { source: 'd4', target: 'd5' }, { source: 'd5', target: 'd6' },
  ],
}
export default processo
