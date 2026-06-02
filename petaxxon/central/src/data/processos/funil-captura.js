// MODO B · Processo: FUNIL CAPTURA (LEAD MAGNET)
// Fonte: ../funis/captura-lead-magnet.md

const processo = {
  id: 'funil-captura',
  titulo: 'Funil Captura (lead magnet)',
  categoria: 'Petaxxon · Infoprodutos (atual)',
  fase: 'Otimização',
  descricao: 'Funil de topo que troca material grátis (ebook/conteúdo) por contato, construindo lista própria (Rota A), e entrega o lead para webinário ou funil de vendas downstream.',
  docs: [
    { label: 'Ficha Funil Captura', href: '../funis/captura-lead-magnet.md' },
  ],
  lanes: [
    { id: 'trafego',   label: 'Gestor de Tráfego',              color: '#2a5a86' },
    { id: 'conteudo',  label: 'Conteúdo / Isca',       color: '#b5462b' },
    { id: 'crm',       label: 'CRM / Automação',       color: '#a9842f' },
    { id: 'produto',   label: 'Produto / Destino',     color: '#2e6b4a' },
    { id: 'dados',     label: 'Dados & Tracking',      color: '#8a8170' },
  ],
  nodes: [
    // ── CONTEÚDO / ISCA ───────────────────────────────────────────────────────
    {
      id: 'n1', lane: 'conteudo', x: 40,
      label: 'Isca / Lead Magnet',
      responsavel: 'Copywriter / Produtor de Conteúdo',
      status: 'A fazer',
      checklist: [
        'Definir tema e promessa da isca [a confirmar]',
        'Produzir ebook ou conteúdo grátis',
        'Revisar e aprovar material com dono [a confirmar]',
        'Hospedar isca (Setup 01 — Infra & Contas)',
        'Gerar link público de entrega',
      ],
      pop: { label: 'Ficha Funil Captura', href: '../funis/captura-lead-magnet.md' },
    },

    // ── TRÁFEGO ──────────────────────────────────────────────────────────────
    {
      id: 'n2', lane: 'trafego', x: 320,
      label: 'Anúncio / Conteúdo Orgânico',
      responsavel: 'Gestor de Tráfego',
      status: 'A fazer',
      checklist: [
        'Definir canal de aquisição (pago ou orgânico)',
        'Criar criativo e copy com promessa da isca',
        'Apontar para squeeze page',
        'Seguir nomenclatura de campanha (Setup 04)',
        'Publicar e monitorar entrega inicial',
      ],
      pop: { label: 'Ficha Funil Captura', href: '../funis/captura-lead-magnet.md' },
    },

    // ── CONTEÚDO / ISCA ───────────────────────────────────────────────────────
    {
      id: 'n3', lane: 'conteudo', x: 600,
      label: 'Squeeze Page (captura)',
      responsavel: 'Copywriter / Dev de Funis',
      status: 'A fazer',
      checklist: [
        'Criar página com promessa clara da isca',
        'Adicionar formulário de captura (e-mail e/ou WhatsApp) [a confirmar canal]',
        'Configurar integração com CRM (Setup 03)',
        'Publicar e testar opt-in end-to-end',
        'Validar evento de lead no tracking (Setup 02)',
      ],
      pop: { label: 'Ficha Funil Captura', href: '../funis/captura-lead-magnet.md' },
    },

    // ── CRM / AUTOMAÇÃO ───────────────────────────────────────────────────────
    {
      id: 'n4', lane: 'crm', x: 880,
      label: 'Entrega Automática da Isca',
      responsavel: 'CRM',
      status: 'A fazer',
      checklist: [
        'Configurar automação de entrega (e-mail/WhatsApp) — Setup 03',
        'Incluir link da isca na mensagem de boas-vindas',
        'Aplicar tag de origem ao contato',
        'Testar disparo automático após opt-in',
      ],
      pop: { label: 'Ficha Funil Captura', href: '../funis/captura-lead-magnet.md' },
    },
    {
      id: 'n5', lane: 'crm', x: 1160,
      label: 'Sequência de Nutrição',
      responsavel: 'Gestor de CRM / Copywriter',
      status: 'A fazer',
      checklist: [
        'Definir número de mensagens e intervalos da sequência [a confirmar]',
        'Escrever e-mails/mensagens de nutrição',
        'Configurar automação no CRM (Setup 03)',
        'Apontar destino final: webinário ou funil de vendas',
        'Testar sequência completa antes de ativar',
      ],
      pop: { label: 'Ficha Funil Captura', href: '../funis/captura-lead-magnet.md' },
    },

    // ── PRODUTO / DESTINO ─────────────────────────────────────────────────────
    {
      id: 'n6', lane: 'produto', x: 1440,
      label: 'Destino: Webinário ou Funil de Vendas',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Definir destino downstream [a confirmar: webinário ou VSL/Typebot]',
        'Conectar saída da nutrição ao funil de destino',
        'Validar que lead chega ao destino corretamente',
      ],
      goto: 'funil-webinario',
      detalhe: 'Ver Funil Webinário para o fluxo downstream',
    },

    // ── DADOS & TRACKING ──────────────────────────────────────────────────────
    {
      id: 'n7', lane: 'dados', x: 1720,
      label: 'Tracking: lead → atribuição → venda',
      responsavel: 'Analista de Dados',
      status: 'A fazer',
      checklist: [
        'Validar Setup 02 (Tracking & Dados) ativo',
        'Confirmar evento de lead disparando na squeeze',
        'Configurar atribuição lead → venda downstream',
        'Revisar CPL e taxa de opt-in [a confirmar metas]',
        'Revisar conversão lead → venda [a confirmar meta]',
        'Gerar relatório de pass/fail por período',
      ],
      pop: { label: 'Ficha Funil Captura', href: '../funis/captura-lead-magnet.md' },
    },
  ],
  edges: [
    { source: 'n1', target: 'n3', label: 'isca pronta' },
    { source: 'n2', target: 'n3', label: 'clique no anúncio' },
    { source: 'n3', target: 'n4', label: 'opt-in' },
    { source: 'n4', target: 'n5' },
    { source: 'n5', target: 'n6', label: 'nutrição completa' },
    { source: 'n6', target: 'n7' },
    { source: 'n7', target: 'n2', label: 'otimizar CPL / opt-in', feedback: true },
    { source: 'n7', target: 'n5', label: 'otimizar sequência', feedback: true },
  ],
}
export default processo
