// Compartilhado · Processo: SETUPS 01–06 (fundações) — pré-requisitos estruturais da operação.
const processo = {
  id: 'setups',
  titulo: 'Setups 01–06 (fundações)',
  categoria: 'Compartilhado',
  fase: 'Setup',
  descricao: 'Seis fundações que precisam existir antes de qualquer funil ou campanha ser ativado: infra/contas, tracking, CRM, nomenclatura, biblioteca de ativos e papéis com Definition of Done.',
  docs: [
    { label: 'Setup 01 · Infra & Contas',         href: '../setups/setup-01-infra-contas.md' },
    { label: 'Setup 02 · Tracking & Dados',       href: '../setups/setup-02-tracking-dados.md' },
    { label: 'Setup 03 · CRM & Listas',           href: '../setups/setup-03-crm-listas.md' },
    { label: 'Setup 04 · Nomenclatura',           href: '../setups/setup-04-nomenclatura.md' },
    { label: 'Setup 05 · Biblioteca de Ativos',   href: '../setups/setup-05-ativos.md' },
    { label: 'Setup 06 · Papéis & DoD',           href: '../setups/setup-06-papeis-dod.md' },
  ],
  lanes: [
    { id: 'fundacoes', label: 'Fundações', color: '#2a5a86' },
  ],
  nodes: [
    {
      id: 's01', lane: 'fundacoes', x: 40,
      label: 'Setup 01 · Infra & Contas',
      responsavel: 'Infra',
      status: 'A fazer',
      checklist: [
        'Domínios registrados com SSL ativo e DNS correto',
        'Contas de anúncio (Meta/Google) criadas e domínio verificado',
        'Checkout configurado com esteira (front-end → 5 bumps → upsell PlaySquad) e compra de teste aprovada',
      ],
      pop: { label: 'Setup 01 · Infra & Contas', href: '../setups/setup-01-infra-contas.md' },
    },
    {
      id: 's02', lane: 'fundacoes', x: 320,
      label: 'Setup 02 · Tracking & Dados',
      responsavel: 'Infra + Gestor de Tráfego',
      status: 'A fazer',
      checklist: [
        'Padrão de UTM definido e documentado (source / medium / campaign / content)',
        'Pixel Meta e Google instalados com eventos PageView, Lead, InitiateCheckout e Purchase (com valor)',
        'Compra de teste dispara todos os eventos corretamente e dashboard exibe métricas por funil',
      ],
      pop: { label: 'Setup 02 · Tracking & Dados', href: '../setups/setup-02-tracking-dados.md' },
    },
    {
      id: 's03', lane: 'fundacoes', x: 600,
      label: 'Setup 03 · CRM & Listas',
      responsavel: 'CRM',
      status: 'A fazer',
      checklist: [
        'Mapa de tags definido: produto, temperatura (frio/morno/comprador) e canal de entrada',
        'Integração checkout → CRM aplicando tag de compra automaticamente',
        'Automações de pós-venda e de nutrição de lead ativas e testadas com caso real',
      ],
      pop: { label: 'Setup 03 · CRM & Listas', href: '../setups/setup-03-crm-listas.md' },
    },
    {
      id: 's04', lane: 'fundacoes', x: 880,
      label: 'Setup 04 · Nomenclatura',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Tabela de valores fixos aprovada: produtos, funis, rotas, canais e variações',
        'Padrão de UTM e de nome de campanha/criativo/funil documentado e comunicado ao time',
        'Ao menos uma campanha nomeada no padrão e rastreada de ponta a ponta',
      ],
      pop: { label: 'Setup 04 · Nomenclatura', href: '../setups/setup-04-nomenclatura.md' },
    },
    {
      id: 's05', lane: 'fundacoes', x: 1160,
      label: 'Setup 05 · Biblioteca de Ativos',
      responsavel: '[a confirmar]',
      status: 'A fazer',
      checklist: [
        'Marca documentada: logo (PNG + SVG), paleta de cores e tipografia publicados no repositório',
        'Templates de página (VSL, captura, obrigado, upsell), roteiros e criativos organizados e versionados',
        'Qualquer membro do time monta funil novo sem buscar ativos fora da biblioteca',
      ],
      pop: { label: 'Setup 05 · Biblioteca de Ativos', href: '../setups/setup-05-ativos.md' },
    },
    {
      id: 's06', lane: 'fundacoes', x: 1440,
      label: 'Setup 06 · Papéis & DoD',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Todo papel da operação tem pessoa (ou acúmulo documentado) atribuída',
        'Regra Produtor ≠ Aprovador comunicada e campos do Monday preenchidos em todas as tarefas',
        'DoD global (5 critérios) acessível ao time e aplicado sistematicamente',
      ],
      pop: { label: 'Setup 06 · Papéis & DoD', href: '../setups/setup-06-papeis-dod.md' },
    },
  ],
  edges: [
    { source: 's01', target: 's02' },
    { source: 's02', target: 's03' },
    { source: 's03', target: 's04' },
    { source: 's04', target: 's05' },
    { source: 's05', target: 's06' },
  ],
}
export default processo
