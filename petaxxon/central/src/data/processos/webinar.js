// MODO B · Processo: WEBINAR (OPERAÇÃO) — execução por edição diária
// Fonte: ../funis/webinario-mega-combo.md

const processo = {
  id: 'webinar',
  titulo: 'Webinar (operação)',
  categoria: 'Modo B · Produtos Próprios',
  fase: 'Otimização',
  descricao: 'Operação diária do webinário Mega Combo: convite via Ads CTWA → cadastro e confirmação no WhatsApp → lembretes automáticos → live com pitch → recuperação de vendas pós-live.',
  docs: [
    { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
  ],
  lanes: [
    { id: 'trafego',  label: 'Tráfego',           color: '#2a5a86' },
    { id: 'crm',      label: 'CRM / WhatsApp',     color: '#a9842f' },
    { id: 'live',     label: 'Live / Apresentação', color: '#b5462b' },
    { id: 'produto',  label: 'Produto / Checkout',  color: '#2e6b4a' },
    { id: 'dados',    label: 'Dados & Tracking',    color: '#8a8170' },
  ],
  nodes: [
    // ── TRÁFEGO ──────────────────────────────────────────────────────────────
    {
      id: 'w1', lane: 'trafego', x: 40,
      label: 'Convite — Ads CTWA (Click-to-WhatsApp)',
      responsavel: 'Gestor de Tráfego',
      status: 'A fazer',
      checklist: [
        'Verificar campanha CTWA ativa e budget suficiente',
        'Confirmar que o link aponta para o número com fluxo de cadastro ativo',
        'Monitorar entrega e CPM no período pré-live',
        'Registrar volume de cliques por edição [a confirmar meta de inscritos/dia]',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },

    // ── CRM / WHATSAPP — CADASTRO ─────────────────────────────────────────────
    {
      id: 'w2', lane: 'crm', x: 320,
      label: 'Cadastro & Confirmação de Presença (WhatsApp)',
      responsavel: 'Gestor de CRM',
      status: 'A fazer',
      checklist: [
        'Verificar fluxo de cadastro ativo no WhatsApp',
        'Confirmar que bot coleta nome e confirma presença',
        'Checar inclusão automática do inscrito na lista segmentada',
        'Validar evento de inscrito disparando no tracking (Setup 02)',
        'Monitorar taxa de confirmação por edição [a confirmar meta]',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },

    // ── CRM / WHATSAPP — LEMBRETES ────────────────────────────────────────────
    {
      id: 'w3', lane: 'crm', x: 600,
      label: 'Lembretes Pré-Live (automação)',
      responsavel: 'Gestor de CRM',
      status: 'A fazer',
      checklist: [
        'Confirmar sequência de lembretes programada para a edição (D-1, H-1, H) [a confirmar intervalos]',
        'Verificar que o lembrete final contém o link/acesso à live',
        'Checar disparos enviados antes do início da live',
        'Monitorar taxa de abertura/clique nos lembretes [a confirmar meta]',
      ],
    },

    // ── LIVE / APRESENTAÇÃO ───────────────────────────────────────────────────
    {
      id: 'w4', lane: 'live', x: 880,
      label: 'Live Diária — Execução do Pitch',
      responsavel: 'Apresentador / Operador de Live',
      status: 'A fazer',
      checklist: [
        'Checar sala de transmissão ativa [a confirmar ferramenta]',
        'Testar áudio, vídeo e compartilhamento de tela antes de entrar ao ar',
        'Executar pitch do Mega Combo (FY + YouTube Dark + combo) conforme roteiro aprovado [a confirmar roteiro]',
        'Acionar link/página de checkout no momento da oferta',
        'Registrar início da live e presença no tracking (Setup 02)',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },

    // ── PRODUTO / CHECKOUT ────────────────────────────────────────────────────
    {
      id: 'w5', lane: 'produto', x: 1160,
      label: 'Oferta Aberta — Checkout & Esteira',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Confirmar checkout do Mega Combo acessível durante a live',
        'Verificar order bumps ativos [a confirmar — até 5]',
        'Verificar upsell 1 (PlaySquad) ativo',
        'Verificar continuação da esteira ativa [a confirmar]',
        'Monitorar vendas em tempo real durante a live',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },

    // ── CRM / WHATSAPP — RECUPERAÇÃO ─────────────────────────────────────────
    {
      id: 'w6', lane: 'crm', x: 1440,
      label: 'Recuperação de Vendas (WhatsApp pós-live)',
      responsavel: 'Gestor de CRM',
      status: 'A fazer',
      checklist: [
        'Segmentar presentes que não compraram',
        'Disparar sequência de recuperação via WhatsApp [a confirmar número de mensagens e intervalos]',
        'Incluir link de checkout com oferta especial [a confirmar se há desconto/bônus]',
        'Registrar conversões da recuperação no tracking',
        'Monitorar taxa de conversão da recuperação [a confirmar meta]',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },

    // ── DADOS & TRACKING ──────────────────────────────────────────────────────
    {
      id: 'w7', lane: 'dados', x: 1720,
      label: 'Análise da Edição (pass/fail)',
      responsavel: 'Analista de Dados',
      status: 'A fazer',
      checklist: [
        'Consolidar métricas da edição: inscritos, presença, vendas',
        'Calcular taxas: confirmação, presença, conversão live, conversão recuperação',
        'Comparar com metas pass/fail [a confirmar metas]',
        'Registrar resultado da edição no painel de tracking (Setup 02)',
        'Sinalizar ajuste para próxima edição se abaixo do limiar',
      ],
      pop: { label: 'Ficha Funil Webinário', href: '../funis/webinario-mega-combo.md' },
    },

    // ── NÓ DE NAVEGAÇÃO — SETUP DO FUNIL ─────────────────────────────────────
    {
      id: 'w8', lane: 'dados', x: 2000,
      label: 'Ver Funil Webinário (setup & estrutura)',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Acessar processo de setup para ajustar componentes do funil',
      ],
      goto: 'funil-webinario',
      detalhe: 'Ver processo Funil Webinário (Mega Combo) para setup e configuração dos componentes',
    },
  ],
  edges: [
    { source: 'w1', target: 'w2', label: 'clique no anúncio' },
    { source: 'w2', target: 'w3', label: 'inscrito confirmado' },
    { source: 'w3', target: 'w4', label: 'presentes na live' },
    { source: 'w4', target: 'w5', label: 'oferta acionada' },
    { source: 'w4', target: 'w6', label: 'live encerrada' },
    { source: 'w5', target: 'w6' },
    { source: 'w6', target: 'w7' },
    { source: 'w7', target: 'w1', label: 'nova edição diária', feedback: true },
    { source: 'w7', target: 'w8', label: 'ajuste de setup necessário' },
  ],
}
export default processo
