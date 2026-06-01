// Compartilhado · Processo: BACKLOG / GAPS — fila de melhoria contínua que consome GAPS.md.
// Espelha a metade "Backlog/Gaps" do board "Setups & Backlog" do modelo Monday:
// worklist priorizada (Alta/Média/Baixa) com Status e dependências (Bloqueado-por).
const processo = {
  id: 'backlog-gaps',
  titulo: 'Backlog / Gaps',
  categoria: 'Compartilhado',
  fase: 'Gestão',
  descricao:
    'Fila de melhoria contínua da operação: worklist priorizada (Alta / Média / Baixa) alimentada por GAPS.md. ' +
    'Cada item tem Prioridade, Status e dependências (Bloqueado-por). É consumida no ciclo semanal (S4) e pela rotina noturna (1 gap 🔴 por execução). Respeitar dependências: Tracking (Setup 02) e CRM (Setup 03) antes dos funis de base.',
  docs: [
    { label: 'Backlog de gaps (GAPS.md)',          href: '../GAPS.md' },
    { label: 'POP-01 · Ciclo Semanal de Decisão',  href: '../operacao/pop-ciclo-semanal.md' },
    { label: 'Rotina noturna',                     href: '../operacao/rotina-noturna.md' },
  ],
  lanes: [
    { id: 'fila',       label: 'Fila de Gaps (GAPS.md)',  color: '#8a8170' },
    { id: 'priorizacao', label: 'Priorização',            color: '#2a5a86' },
    { id: 'execucao',   label: 'Execução',                color: '#2e6b4a' },
  ],
  nodes: [
    {
      id: 'bg1',
      lane: 'fila',
      x: 40,
      label: 'Capturar gap no GAPS.md',
      responsavel: 'Gestor de Operações + Donos de Funil',
      status: 'Backlog',
      checklist: [
        'Registrar o gap em GAPS.md com Status (🔴 a desenhar · 🟡 a testar · 🟢 documentado · ⏸️ parkeado)',
        'Indicar Aba / Fase a que pertence',
        'Anotar por que é relevante (impacto em receita / cascata)',
        'Não inventar dados: onde faltar input do time, deixar [a confirmar]',
      ],
      pop: { label: 'Backlog de gaps (GAPS.md)', href: '../GAPS.md' },
    },
    {
      id: 'bg2',
      lane: 'priorizacao',
      x: 320,
      label: 'Classificar prioridade (Alta / Média / Baixa)',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Alta: bloqueia receita ou destrava em cascata',
        'Média: consolida o que já roda / qualifica a decisão',
        'Baixa / parkeado: não bloqueia nada agora',
        'Registrar prioridade na worklist (board Setups & Backlog · Monday)',
      ],
      pop: { label: 'Backlog de gaps (GAPS.md)', href: '../GAPS.md' },
    },
    {
      id: 'bg3',
      lane: 'priorizacao',
      x: 600,
      label: 'Mapear dependências (Bloqueado-por)',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Tracking (Setup 02) e CRM (Setup 03) antes dos funis de base',
        'Marcar item como Bloqueado-por quando depende de outro gap/setup',
        'Não puxar para execução itens bloqueados',
      ],
    },
    {
      id: 'bg4',
      lane: 'execucao',
      x: 880,
      label: 'Puxar item de maior prioridade (não bloqueado)',
      responsavel: 'Gestor de Operações / Rotina noturna',
      status: 'A fazer',
      checklist: [
        'Pegar o item de maior prioridade ainda 🔴/🟡 e não bloqueado',
        'Rotina noturna: só "gap elegível" = item 🔴 sem documento criado; senão, encerra sem agir',
        'Atribuir dono e prazo ao item puxado',
      ],
      pop: { label: 'Rotina noturna', href: '../operacao/rotina-noturna.md' },
    },
    {
      id: 'bg5',
      lane: 'execucao',
      x: 1160,
      label: 'Executar / documentar o gap',
      responsavel: 'Dono do gap',
      status: 'Em produção',
      checklist: [
        'Criar/preencher o documento usando o template de _templates/',
        'Manter simples; deixar [a confirmar] onde faltar input do time',
        'Validar entregável contra o DoD (Setup 06)',
      ],
    },
    {
      id: 'bg6',
      lane: 'fila',
      x: 1440,
      label: 'Atualizar Status e repriorizar (no ciclo semanal)',
      responsavel: 'Gestor de Operações',
      status: 'A fazer',
      checklist: [
        'Atualizar o Status do gap em GAPS.md (→ 🟢 quando documentado/rodando)',
        'Fechar gaps resolvidos nas decisões do ciclo (S4)',
        'Adicionar novos gaps identificados na semana',
        'Repriorizar a worklist completa',
      ],
      pop: { label: 'POP-01 · Ciclo Semanal', href: '../operacao/pop-ciclo-semanal.md' },
    },
  ],
  edges: [
    { source: 'bg1', target: 'bg2' },
    { source: 'bg2', target: 'bg3' },
    { source: 'bg3', target: 'bg4' },
    { source: 'bg4', target: 'bg5' },
    { source: 'bg5', target: 'bg6' },
    // Loop: repriorização realimenta a fila
    { source: 'bg6', target: 'bg2', label: 'repriorizar / novos gaps', feedback: true },
  ],
}
export default processo
