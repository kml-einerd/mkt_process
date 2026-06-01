// COMPARTILHADO · Processo: PEER REVIEW / QA (gate de qualidade da copy).
const processo = {
  id: 'peer-review-qa',
  titulo: 'Peer review / QA',
  categoria: 'Compartilhado',
  fase: 'Qualidade',
  descricao: 'Gate de qualidade da copy: solicitação de peer → peer review → correções → revisão final pelo Copy Chief → aprovado.',
  docs: [
    { label: 'Papéis & Definition of Done', href: '../setups/setup-06-papeis-dod.md' },
    { label: 'Sales letter (estrutura)', href: '../processos/pops/sales-letter.md' },
  ],
  lanes: [
    { id: 'copy',  label: 'Copy',        color: '#2a5a86' },
    { id: 'chief', label: 'Copy Chief',  color: '#b5462b' },
  ],
  nodes: [
    {
      id: 'q1', lane: 'copy', x: 40, label: 'Solicitar peer review', responsavel: 'Copywriter', status: 'A fazer',
      checklist: [
        'Finalizar a versão da copy a ser revisada',
        'Nomear o arquivo conforme padrão de nomenclatura (Setup 04)',
        'Linkar o doc na tarefa do Monday',
        'Marcar o par designado para o peer review',
        'Definir prazo de retorno',
      ],
      pop: { label: 'Papéis & Definition of Done', href: '../setups/setup-06-papeis-dod.md' },
    },
    {
      id: 'q2', lane: 'copy', x: 320, label: 'Peer review', responsavel: 'Copywriter (par)', status: 'A fazer',
      checklist: [
        'Ler a copy integralmente',
        'Verificar alinhamento com o briefing de copy aprovado',
        'Checar coerência de claims e voz da marca',
        'Verificar se todos os blocos estão presentes (Leads, História, Tese, Produto, Oferta, Fechamento, Prova-social)',
        'Registrar comentários / sugestões no doc',
        'Aprovar ou devolver para correções com anotações claras',
      ],
      pop: { label: 'Papéis & Definition of Done', href: '../setups/setup-06-papeis-dod.md' },
    },
    {
      id: 'q3', lane: 'copy', x: 600, label: 'Correções', responsavel: 'Copywriter', status: 'A fazer',
      checklist: [
        'Revisar todos os comentários do peer',
        'Aplicar correções ou justificar discordâncias',
        'Atualizar o doc e versionar conforme nomenclatura',
        'Marcar o par para confirmar resolução dos pontos',
      ],
      pop: { label: 'Sales letter (estrutura)', href: '../processos/pops/sales-letter.md' },
    },
    {
      id: 'q4', lane: 'chief', x: 880, label: 'Revisão final (Copy Chief)', responsavel: 'Copy Chief', status: 'A fazer',
      checklist: [
        'Receber o doc revisado com anotações do peer resolvidas',
        'Ler a copy completa em voz alta (teste mínimo de texto)',
        'Verificar consistência de voz e padrão de qualidade',
        'Checar CTAs e links funcionando',
        'Aprovar ou devolver para novo ciclo de correções',
        'Marcar "revisado" na tarefa do Monday (regra: Aprovador conclui)',
      ],
      pop: { label: 'Papéis & Definition of Done', href: '../setups/setup-06-papeis-dod.md' },
    },
    {
      id: 'q5', lane: 'copy', x: 1160, label: 'Aprovado', responsavel: 'Copywriter', status: 'A fazer',
      checklist: [
        'Confirmar status "Concluído" no Monday após aprovação do Copy Chief',
        'Linkar versão final aprovada na tarefa',
        'Notificar PMO / processo seguinte [a confirmar]',
      ],
    },
  ],
  edges: [
    { source: 'q1', target: 'q2' },
    { source: 'q2', target: 'q3' },
    { source: 'q2', target: 'q1', label: 'solicitar nova rodada', feedback: true },
    { source: 'q3', target: 'q4' },
    { source: 'q4', target: 'q5' },
    { source: 'q4', target: 'q3', label: 'ajustar copy', feedback: true },
  ],
}
export default processo
