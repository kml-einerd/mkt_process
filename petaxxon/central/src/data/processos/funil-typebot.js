// MODO B · Processo: FUNIL TYPEBOT PRÉ-VENDA (fluxo conversacional → oferta → checkout com esteira).
const processo = {
  id: 'funil-typebot',
  titulo: 'Funil Typebot pré-venda',
  categoria: 'Modo B · Produtos Próprios',
  fase: 'Otimização',
  descricao: 'Funil conversacional que aquece o lead via perguntas sequenciais, entrega a oferta (VSL embedada, página de vendas ou checkout direto) e conecta ao checkout com 5 order bumps + PlaySquad.',
  docs: [
    { label: 'Ficha do funil Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
  ],
  lanes: [
    { id: 'trafego',  label: 'Tráfego',           color: '#2a5a86' },
    { id: 'bot',      label: 'Bot / Produto',      color: '#a9842f' },
    { id: 'tracking', label: 'Tracking & Dados',   color: '#8a8170' },
    { id: 'crm',      label: 'CRM & Listas',       color: '#2e6b4a' },
    { id: 'checkout', label: 'Checkout / Esteira', color: '#b5462b' },
    { id: 'pmo',      label: 'PMO / Aprovação',    color: '#16140f' },
  ],
  nodes: [
    // ── Tráfego ───────────────────────────────────────────────────────
    {
      id: 'n1', lane: 'trafego', x: 40,
      label: 'Anúncio / Conteúdo de entrada',
      responsavel: 'Gestor de Tráfego',
      status: 'Rodando',
      checklist: [
        'Criar/validar criativo (anúncio ou post orgânico)',
        'Inserir UTMs no link de destino do Typebot',
        'Conferir URL de destino aponta para o Typebot publicado',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },

    // ── Bot / Produto ─────────────────────────────────────────────────
    {
      id: 'n2', lane: 'bot', x: 320,
      label: 'Fluxo Typebot publicado',
      responsavel: 'Responsável pelo Produto',
      status: 'Rodando',
      checklist: [
        'Escrever roteiro de aquecimento [a confirmar roteiro]',
        'Configurar gancho de entrada (1ª mensagem)',
        'Montar perguntas de qualificação progressiva',
        'Definir lógica de ramificação (segmentação de leads)',
        'Publicar fluxo no workspace Typebot [a confirmar instância]',
        'Testar URL de acesso público',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },
    {
      id: 'n3', lane: 'bot', x: 600,
      label: 'VSL embedada no bot (opcional)',
      responsavel: 'Responsável pelo Produto',
      status: 'A fazer',
      checklist: [
        'Confirmar se o fluxo usa VSL embedada',
        'Inserir URL/player da VSL no bloco do Typebot [a confirmar URL/player]',
        'Testar reprodução dentro do bot',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },
    {
      id: 'n4', lane: 'bot', x: 880,
      label: 'Saída do fluxo (página / checkout)',
      responsavel: 'Responsável pelo Produto',
      status: 'A fazer',
      checklist: [
        'Configurar Saída A: redirecionamento para página de vendas',
        'Configurar Saída B: link direto ao checkout (leads já quentes)',
        'Validar que URLs de saída estão corretas e com UTMs',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },

    // ── Tracking & Dados ──────────────────────────────────────────────
    {
      id: 'n5', lane: 'tracking', x: 320,
      label: 'Tracking de entrada (pixel + UTM)',
      responsavel: 'Especialista de Dados / Tracking',
      status: 'A fazer',
      checklist: [
        'Garantir UTM preservado da URL de entrada até o checkout (Setup 02 — 🔴)',
        'Configurar disparo do evento Lead (entrada no bot) no pixel Meta/Google',
        'Validar disparo via ferramenta de debug',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },
    {
      id: 'n6', lane: 'tracking', x: 880,
      label: 'Evento de conversão no checkout',
      responsavel: 'Especialista de Dados / Tracking',
      status: 'A fazer',
      checklist: [
        'Configurar evento Purchase no checkout (Setup 02 — 🔴)',
        'Verificar passagem de UTMs do bot até a venda',
        'Confirmar dados em pass-fail-por-funil.md [a confirmar metas]',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },

    // ── CRM & Listas ──────────────────────────────────────────────────
    {
      id: 'n7', lane: 'crm', x: 600,
      label: 'Coleta e integração do lead',
      responsavel: 'Responsável CRM / Automações',
      status: 'A fazer',
      checklist: [
        'Coletar e-mail e/ou WhatsApp dentro do Typebot',
        'Integrar Typebot ao CRM (Setup 03 — 🔴) [a confirmar plataforma]',
        'Nomear fluxo e listas conforme padrão de nomenclatura (Setup 04)',
        'Testar passagem do lead para o CRM',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },

    // ── Checkout / Esteira ────────────────────────────────────────────
    {
      id: 'n8', lane: 'checkout', x: 1160,
      label: 'Checkout com 5 order bumps',
      responsavel: 'Responsável pelo Produto',
      status: 'Rodando',
      checklist: [
        'Confirmar produto front-end ativo na plataforma',
        'Validar os 5 order bumps configurados',
        'Confirmar Upsell 1: PlaySquad ativo',
        'Validar continuação da esteira (VVSA → Fórmula YouTube / YouTube Dark)',
        'Testar fluxo completo de compra',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },

    // ── PMO / Aprovação ───────────────────────────────────────────────
    {
      id: 'n9', lane: 'pmo', x: 1440,
      label: 'Definition of Done & aprovação',
      responsavel: 'PMO / Aprovador',
      status: 'A fazer',
      checklist: [
        'Typebot publicado e acessível pela URL de campanha',
        'Checkout com 5 bumps + PlaySquad + continuação ativos',
        'Tracking disparando da entrada do bot até a venda',
        'Nome do fluxo e UTMs no padrão de nomenclatura',
        'Aprovador [a confirmar] assina o DoD',
      ],
      pop: { label: 'Ficha Typebot pré-venda', href: '../funis/typebot-pre-venda.md' },
    },
  ],
  edges: [
    { source: 'n1', target: 'n2' },
    { source: 'n1', target: 'n5' },
    { source: 'n2', target: 'n3' },
    { source: 'n2', target: 'n7' },
    { source: 'n3', target: 'n4' },
    { source: 'n4', target: 'n6' },
    { source: 'n4', target: 'n8' },
    { source: 'n5', target: 'n6' },
    { source: 'n6', target: 'n8' },
    { source: 'n7', target: 'n8' },
    { source: 'n8', target: 'n9' },
    { source: 'n9', target: 'n2', label: 'ajustar fluxo', feedback: true },
  ],
}
export default processo
