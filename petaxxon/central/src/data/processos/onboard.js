// MODO A · Processo: ONBOARD de cliente/projeto.
const processo = {
  id: 'onboard',
  titulo: 'Onboard de cliente/projeto',
  categoria: 'DarkPixel · Agência (em breve)',
  fase: 'Setup',
  descricao: 'Entrada de um novo cliente/projeto: criação no PM, duplicação de materiais, grupo, confirmações e call de onboarding.',
  docs: [
    { label: 'Modelo de ATA', href: '../processos/pops/modelo-ata.md' },
    { label: 'Central do cliente', href: '../processos/pops/central-do-cliente.md' },
    { label: 'Planilha de margem', href: '../processos/pops/planilha-margem.md' },
  ],
  lanes: [
    { id: 'pmo', label: 'PMO (ferramenta de gestão)', color: '#a9842f' },
    { id: 'gp',  label: 'Gestão de Projetos / CS',    color: '#2a5a86' },
    { id: 'adm', label: 'Administrativo',             color: '#2e6b4a' },
  ],
  nodes: [
    { id: 'o1', lane: 'pmo', x: 40,   label: 'Criação do projeto', responsavel: 'Gestor PMO', status: 'A fazer',
      checklist: ['Criar a lista do cliente no space de funis', 'Configurar as tags do cliente'] },
    { id: 'o2', lane: 'gp', x: 300,   label: 'Duplicar materiais p/ o cliente', responsavel: 'Gestão de Projetos', status: 'A fazer',
      checklist: ['Duplicar modelo de ATA', 'Duplicar Central do cliente', 'Criar planilha de margem (se não for afiliado)'],
      pop: { label: 'Modelo de ATA', href: '../processos/pops/modelo-ata.md' } },
    { id: 'o3', lane: 'gp', x: 560,   label: 'Criar e configurar grupo', responsavel: 'Gestão de Projetos', status: 'A fazer',
      checklist: ['Colocar ATA na descrição', 'Colocar Central do cliente na descrição', 'Trocar a foto do grupo', 'Adicionar os responsáveis do projeto'] },
    { id: 'o4', lane: 'gp', x: 820,   label: 'Confirmações e alinhamento', responsavel: 'Gestão de Projetos', status: 'A fazer',
      checklist: ['Confirmar pagamento', '(se afiliado) pegar e-mail p/ cadastrar e solicitar link de afiliado', 'Agendar call de onboarding com o cliente'] },
    { id: 'o5', lane: 'adm', x: 1080, label: 'Call de onboarding', responsavel: 'Administrativo', status: 'A fazer',
      checklist: ['Realizar call de onboarding explicando os processos'] },
    { id: 'o6', lane: 'gp', x: 1340,  label: 'Fechamento', responsavel: 'Gestão de Projetos', status: 'A fazer',
      checklist: ['Enviar materiais do novo cliente ao PMO', 'Marcar o PMO e sinalizar que o onboard foi finalizado'] },
  ],
  edges: [
    { source: 'o1', target: 'o2' }, { source: 'o2', target: 'o3' }, { source: 'o3', target: 'o4' },
    { source: 'o4', target: 'o5' }, { source: 'o5', target: 'o6' },
  ],
}
export default processo
