// MODO A · Processo: PRODUÇÃO & GRAVAÇÃO de VSL.
const processo = {
  id: 'producao-gravacao-vsl',
  titulo: 'Produção & Gravação de VSL',
  categoria: 'Modo A · Agência de Funil',
  fase: 'Setup',
  descricao: 'Contratação de ator, contrato/pagamento, gravação no estúdio e finalização da produção.',
  docs: [
    { label: 'Contrato de ator + autorização HeyGen', href: '../processos/pops/contrato-ator-heygen.md' },
    { label: 'Checklist de produção', href: '../processos/pops/checklist-producao.md' },
  ],
  lanes: [
    { id: 'gp',  label: 'Gestão de Projetos', color: '#2a5a86' },
    { id: 'jur', label: 'Jurídico',           color: '#b5462b' },
    { id: 'pmo', label: 'PMO',                color: '#2e6b4a' },
  ],
  nodes: [
    { id: 'p1', lane: 'gp', x: 40,   label: 'Contratação de ator', responsavel: 'Gestão de Projetos', status: 'A fazer',
      checklist: ['Analisar briefing de produção e alinhar com o copywriter', 'Encontrar atores', 'Entrevistar os atores', 'Informar sobre o HeyGen ao ator', 'Confirmar no grupo: link da VSL + quem serão os atores'] },
    { id: 'p2', lane: 'jur', x: 340,  label: 'Contrato & pagamento', responsavel: 'Jurídico + GP', status: 'A fazer',
      checklist: ['Pegar dados para contrato (solicitar ao jurídico)', 'Enviar ao cliente as cobranças (estúdio, atores, etc.)', 'Enviar comprovante de pagamento ao ator'],
      pop: { label: 'Contrato + HeyGen', href: '../processos/pops/contrato-ator-heygen.md' } },
    { id: 'p3', lane: 'gp', x: 640,  label: 'Gravação do VSL', responsavel: 'Gestão de Projetos', status: 'A fazer',
      checklist: ['Definir local de gravação', 'Alinhar dia/horário/endereço', 'Criar checklist de produção (materiais/figurinos)', 'Enviar script ao ator + estúdio', 'Comprar materiais e elementos de cena', 'Direcionar produção e cenário', 'Aprovar cenário e figurino', 'Pedir foto prévia do figurino', 'Definir acompanhante da gravação', 'Gravar VSL', 'Gravar autorização HeyGen'],
      pop: { label: 'Checklist de produção', href: '../processos/pops/checklist-producao.md' } },
    { id: 'p4', lane: 'gp', x: 940,  label: 'Finalização da produção', responsavel: 'Gestão de Projetos', status: 'A fazer',
      checklist: ['Verificar materiais', 'Solicitar upload dos materiais ao estúdio', 'Enviar agradecimentos (atores/equipe)', 'Enviar links dos vídeos/áudios ao time de edição'] },
    { id: 'p5', lane: 'pmo', x: 1240, label: 'Start da edição', responsavel: 'Gestor PMO', status: 'A fazer',
      checklist: ['Marcar o PMO: produção finalizada', 'Iniciar o processo de edição', 'Marcar o líder de edição'] },
  ],
  edges: [
    { source: 'p1', target: 'p2' }, { source: 'p2', target: 'p3' }, { source: 'p3', target: 'p4' }, { source: 'p4', target: 'p5' },
  ],
}
export default processo
