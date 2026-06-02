// MODO A · Processo: AUXILIARES (Upsell 2/3, Backredirect 2/3, Downsell 1/2).
// Raias aqui = TIPO de auxiliar; o setor responsável aparece em cada caixa.
const processo = {
  id: 'auxiliares',
  titulo: 'Auxiliares (Upsell / Backredirect / Downsell)',
  categoria: 'DarkPixel · Agência (em breve)',
  fase: 'Otimização',
  descricao: 'Processos auxiliares que ampliam a esteira após o start. Cada linha é um tipo; o fluxo é Escrita → (Edição) → Infra → Implementação.',
  docs: [
    { label: 'Estrutura de validação', href: '../processos/pops/estrutura-validacao.md' },
  ],
  lanes: [
    { id: 'up',   label: 'Upsell 2 e 3',       color: '#2e6b4a' },
    { id: 'back', label: 'Backredirect 2 e 3', color: '#b5462b' },
    { id: 'down', label: 'Downsell 1 e 2',     color: '#a9842f' },
  ],
  nodes: [
    // Upsell 2 e 3
    { id: 'u1', lane: 'up', x: 40,  label: 'Escrita Upsell 2 e 3', responsavel: 'Copywriting', status: 'A fazer', checklist: ['Escrita upsell 2', 'Escrita upsell 3'] },
    { id: 'u2', lane: 'up', x: 320, label: 'Edição Upsell 2 e 3',  responsavel: 'Edição',      status: 'A fazer', checklist: ['Edição upsell 2', 'Edição upsell 3'] },
    { id: 'u3', lane: 'up', x: 600, label: 'Infra Upsell 2 e 3',   responsavel: 'Infra',       status: 'A fazer', checklist: ['Página upsell 2', 'Página upsell 3'] },
    { id: 'u4', lane: 'up', x: 880, label: 'Implementação',        responsavel: 'Gestão de Projetos', status: 'A fazer', checklist: ['Enviar para o cliente'] },
    // Backredirect 2 e 3
    { id: 'b1', lane: 'back', x: 40,  label: 'Escrita Backredirect', responsavel: 'Copywriting', status: 'A fazer', checklist: ['Escrita backredirect 1', 'Escrita backredirect 2'] },
    { id: 'b2', lane: 'back', x: 600, label: 'Infra Backredirect',   responsavel: 'Infra',       status: 'A fazer', checklist: ['Infra backredirect 1', 'Infra backredirect 2'] },
    { id: 'b3', lane: 'back', x: 880, label: 'Implementação',        responsavel: 'Gestão de Projetos', status: 'A fazer', checklist: ['Enviar para o cliente'] },
    // Downsell 1 e 2
    { id: 'w1', lane: 'down', x: 40,  label: 'Escrita Downsell', responsavel: 'Copywriting', status: 'A fazer', checklist: ['Escrita downsell 1', 'Escrita downsell 2'] },
    { id: 'w2', lane: 'down', x: 320, label: 'Edição Downsell',  responsavel: 'Edição',      status: 'A fazer', checklist: ['Edição downsell 1', 'Edição downsell 2'] },
    { id: 'w3', lane: 'down', x: 600, label: 'Infra Downsell',   responsavel: 'Infra',       status: 'A fazer', checklist: ['Página downsell 1', 'Página downsell 2'] },
    { id: 'w4', lane: 'down', x: 880, label: 'Implementação',    responsavel: 'Gestão de Projetos', status: 'A fazer', checklist: ['Enviar para o cliente'] },
  ],
  edges: [
    { source: 'u1', target: 'u2' }, { source: 'u2', target: 'u3' }, { source: 'u3', target: 'u4' },
    { source: 'b1', target: 'b2' }, { source: 'b2', target: 'b3' },
    { source: 'w1', target: 'w2' }, { source: 'w2', target: 'w3' }, { source: 'w3', target: 'w4' },
  ],
}
export default processo
