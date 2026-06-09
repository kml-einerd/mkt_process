// MODO B · Processo: FUNIL WEBINÁRIO (MEGA COMBO)
// Fonte: ../funis/webinario-mega-combo.md

const processo = {
  id: 'funil-webinario',
  titulo: 'Funil Webinário (Mega Combo)',
  categoria: 'Petaxxon · Infoprodutos (atual)',
  fase: 'Otimização',
  descricao: 'Webinário diário de venda do Mega Combo via Click-to-WhatsApp: ads → cadastro no WhatsApp → live com pitch → checkout+esteira → recuperação de vendas.',
  docs: [
    { label: 'Ficha do Funil Webinário', href: '../funis/webinario-mega-combo.md' },
  ],
  lanes: [
    { id: 'trafego',      label: 'Gestor de Tráfego',                color: '#2a5a86' },
    { id: 'crm',          label: 'CRM / WhatsApp',          color: '#a9842f' },
    { id: 'conteudo',     label: 'Conteúdo / Live',         color: '#b5462b' },
    { id: 'produto',      label: 'Produto / Checkout',      color: '#2e6b4a' },
    { id: 'dados',        label: 'Dados & Tracking',        color: '#8a8170' },
  ],
  nodes: [
    // ── TRÁFEGO ──────────────────────────────────────────────────────────────
    {
      id: 'n1', lane: 'trafego', x: 40,
      label: 'Ads CTWA (Click-to-WhatsApp)',
      responsavel: 'Gestor de Tráfego',
      status: 'A fazer',
      checklist: [
        'Definir criativo e copy do anúncio',
        'Configurar campanha click-to-WhatsApp',
        'Apontar para número com fluxo de cadastro ativo',
        'Validar link de destino e número correto',
        'Publicar e monitorar entrega inicial',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },

    // ── CRM / WHATSAPP ────────────────────────────────────────────────────────
    {
      id: 'n2', lane: 'crm', x: 320,
      label: 'Fluxo de Cadastro & Confirmação (WhatsApp)',
      responsavel: 'CRM',
      status: 'A fazer',
      checklist: [
        'Configurar bot/fluxo de boas-vindas',
        'Coletar nome e confirmar presença na live',
        'Adicionar inscrito em lista segmentada',
        'Registrar inscrito no tracking (Setup 02)',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },
    {
      id: 'n3', lane: 'crm', x: 600,
      label: 'Lembretes Pré-Live (automação)',
      responsavel: 'CRM',
      status: 'A fazer',
      checklist: [
        'Configurar sequência de lembretes (D-1, H-1, H) [a confirmar intervalos]',
        'Incluir link/acesso à live no lembrete final',
        'Testar disparos antes do go-live',
      ],
    },

    // ── CONTEÚDO / LIVE ───────────────────────────────────────────────────────
    {
      id: 'n4', lane: 'conteudo', x: 880,
      label: 'Roteiro / Pitch da Live',
      responsavel: 'Copywriter / Apresentador',
      status: 'A fazer',
      checklist: [
        'Confirmar composição exata do Mega Combo (FY + YouTube Dark + combo) [a confirmar]',
        'Elaborar roteiro com gancho, história, tese, oferta e fechamento',
        'Preparar slides do pitch',
        'Aprovar roteiro com dono do produto [a confirmar]',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },
    {
      id: 'n5', lane: 'conteudo', x: 1160,
      label: 'Live Diária (transmissão)',
      responsavel: 'Apresentador',
      status: 'A fazer',
      checklist: [
        'Configurar sala de transmissão HotWebinar / GHL (conforme o caso)',
        'Testar áudio, vídeo e compartilhamento de tela',
        'Executar pitch do Mega Combo conforme roteiro',
        'Acionar oferta/checkout no momento correto',
        'Registrar presença no tracking (Setup 02)',
      ],
    },

    // ── PRODUTO / CHECKOUT ────────────────────────────────────────────────────
    {
      id: 'n6', lane: 'produto', x: 1440,
      label: 'Oferta + Checkout + Esteira',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Configurar página de checkout do Mega Combo',
        'Configurar order bumps [a confirmar — até 5]',
        'Configurar upsell 1: PlaySquad',
        'Configurar continuação da esteira [a confirmar]',
        'Testar fluxo completo de compra',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },
    {
      id: 'n7', lane: 'crm', x: 1720,
      label: 'Recuperação de Vendas (WhatsApp pós-live)',
      responsavel: 'CRM',
      status: 'A fazer',
      checklist: [
        'Segmentar presentes que não compraram',
        'Disparar sequência de recuperação via WhatsApp [a confirmar número de mensagens]',
        'Incluir link de checkout com oferta especial [a confirmar]',
        'Registrar conversões da recuperação no tracking',
      ],
    },

    // ── DADOS & TRACKING ──────────────────────────────────────────────────────
    {
      id: 'n8', lane: 'dados', x: 2000,
      label: 'Tracking: inscrito → presença → venda',
      responsavel: 'Analista de Dados',
      status: 'A fazer',
      checklist: [
        'Validar Setup 02 (Tracking & Dados) ativo',
        'Confirmar eventos: inscrito, presente, compra',
        'Revisar métricas por edição diária [a confirmar metas]',
        'Gerar relatório de pass/fail por edição',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },
  ],
  edges: [
    { source: 'n1', target: 'n2' },
    { source: 'n2', target: 'n3' },
    { source: 'n3', target: 'n4' },
    { source: 'n4', target: 'n5' },
    { source: 'n5', target: 'n6' },
    { source: 'n6', target: 'n7' },
    { source: 'n7', target: 'n8' },
    { source: 'n8', target: 'n1', label: 'nova edição diária', feedback: true },
    { source: 'n4', target: 'n5', label: 'roteiro aprovado' },
  ],
}
export default processo
