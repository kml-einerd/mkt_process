// PETAXXON · Infoprodutos · Processo: PÓS-VENDA & RETENÇÃO.
// Básico bem feito: boas-vindas, recuperação (WhatsApp API oficial + e-mail), remarketing, reembolso/suporte,
// recorrência (TubeClub) e um slot ABERTO para ofertas personalizadas (criar conforme demanda).

const processo = {
  id: 'pos-venda-retencao',
  titulo: 'Pós-venda & Retenção',
  categoria: 'Petaxxon · Infoprodutos (atual)',
  fase: 'Otimização',
  descricao: 'A venda não acaba no checkout. Recuperação por WhatsApp (API oficial) e e-mail, remarketing, reembolso/suporte e recorrência — simples e contínuo. Ofertas personalizadas ficam como slot aberto.',
  docs: [
    { label: 'Funil Recuperação (WhatsApp)', href: '../funis/recuperacao-whatsapp.md' },
    { label: 'Ações na base / recompra', href: '../funis/acoes-base-recompra.md' },
    { label: 'Setup 03 · CRM & Listas', href: '../setups/setup-03-crm-listas.md' },
  ],
  lanes: [
    { id: 'crm',  label: 'CRM',                color: '#2a5a86' },
    { id: 'traf', label: 'Gestor de Tráfego',  color: '#2e6b4a' },
    { id: 'ops',  label: 'Gestor de Operações', color: '#a9842f' },
  ],
  nodes: [
    { id: 'pv1', lane: 'crm', x: 40, label: 'Boas-vindas & acesso', responsavel: 'CRM', status: 'A fazer',
      checklist: ['E-mail/WhatsApp de boas-vindas', 'Liberar acesso ao produto (Hotmart)'],
      pop: { label: 'Setup 03 · CRM', href: '../setups/setup-03-crm-listas.md' } },
    { id: 'pv2', lane: 'crm', x: 320, label: 'Recuperação — WhatsApp (API oficial)', responsavel: 'CRM', status: 'A fazer',
      checklist: ['Configurar WhatsApp Business API oficial', 'Sequência p/ carrinho/boleto/pix abandonado', 'Parar na conversão'],
      pop: { label: 'Funil Recuperação (WhatsApp)', href: '../funis/recuperacao-whatsapp.md' } },
    { id: 'pv3', lane: 'crm', x: 600, label: 'Recuperação — E-mail', responsavel: 'CRM', status: 'A fazer',
      checklist: ['Sequência de e-mails por gatilho (abandono/boleto/pós-venda)'] },
    { id: 'pv4', lane: 'traf', x: 320, label: 'Remarketing', responsavel: 'Gestor de Tráfego', status: 'A fazer',
      checklist: ['Públicos de abandono/visitantes', 'Campanha de remarketing simples'] },
    { id: 'pv5', lane: 'ops', x: 600, label: 'Reembolso & suporte', responsavel: 'Gestor de Operações', status: 'A fazer',
      checklist: ['Atendimento ao aluno', 'Política de reembolso', 'Registrar motivo (loop p/ o produto)'] },
    { id: 'pv6', lane: 'ops', x: 880, label: 'Recorrência / Comunidade (TubeClub)', responsavel: 'Gestor de Operações', status: 'A fazer',
      checklist: ['Definir oferta de recorrência [a confirmar]', 'Onboarding na comunidade'] },
    { id: 'pv7', lane: 'ops', x: 1160, label: 'Ofertas personalizadas [aberto]', responsavel: 'Responsável pelo Produto', status: 'Backlog',
      detalhe: 'Slot aberto: criar ofertas sob medida conforme a demanda surgir.',
      checklist: ['Demanda de oferta personalizada — criar conforme necessidade [a confirmar]'] },
  ],
  edges: [
    { source: 'pv1', target: 'pv2' }, { source: 'pv1', target: 'pv3' }, { source: 'pv1', target: 'pv4' },
  ],
}
export default processo
