// MODO A · Processo: INFRA DO FUNIL (páginas, checkout, configurações e Start).
const processo = {
  id: 'infra-funil',
  titulo: 'Infra do funil',
  categoria: 'DarkPixel · Agência (em breve)',
  fase: 'Setup',
  descricao: 'Construção das páginas (VSL/Upsell/Downsell), configurações (Vturb, cloaker, checkout/DTC), revisão e Start do funil.',
  docs: [
    { label: 'POP de infra (Vturb/cloaker/DTC)', href: '../processos/pops/pop-infra.md' },
  ],
  lanes: [
    { id: 'infra', label: 'Infra',        color: '#a9842f' },
    { id: 'copy',  label: 'Copywriting',  color: '#2a5a86' },
    { id: 'pmo',   label: 'PMO / CS',     color: '#2e6b4a' },
  ],
  nodes: [
    { id: 'i1', lane: 'infra', x: 40,   label: 'Construção das páginas', responsavel: 'Infra', status: 'A fazer',
      checklist: ['Página VSL', 'Página Upsell 1', 'Página Upsell 2', 'Página Downsell 1 (up1)', 'Página Downsell 2 (up1)'],
      pop: { label: 'POP de infra', href: '../processos/pops/pop-infra.md' } },
    { id: 'i2', lane: 'infra', x: 360,  label: 'Configurações', responsavel: 'Infra (+ Copy p/ Vturb)', status: 'A fazer',
      checklist: ['Configurar Vturb', 'Cloaker', 'Inserir links de checkout/DTC', 'Inserir banner de checkout'] },
    { id: 'i3', lane: 'infra', x: 680,  label: 'Revisão & finalização', responsavel: 'Infra', status: 'A fazer',
      checklist: ['Revisar páginas e links', 'Conferir a infra (copywriter do projeto)'] },
    { id: 'i4', lane: 'pmo', x: 1000,   label: 'Start do funil', responsavel: 'PMO + CS', status: 'A fazer',
      checklist: ['Marcar o PMO: infra finalizada', 'Marcar a gestora de projetos/CS', 'Iniciar processo de lançamento (enviar ao cliente)'] },
  ],
  edges: [
    { source: 'i1', target: 'i2' }, { source: 'i2', target: 'i3' }, { source: 'i3', target: 'i4' },
  ],
}
export default processo
