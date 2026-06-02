// MODO A · Processo: RÉGUA DE RECUPERAÇÃO (multicanal).
const processo = {
  id: 'regua-recuperacao',
  titulo: 'Régua de recuperação',
  categoria: 'DarkPixel · Agência (em breve)',
  fase: 'Otimização',
  descricao: 'Sequências de recuperação de venda por canal. Rodam em paralelo após o start do funil.',
  docs: [
    { label: 'Régua — templates (e-mail/SMS/WhatsApp)', href: '../processos/pops/regua-templates.md' },
  ],
  lanes: [
    { id: 'copy', label: 'Copywriting', color: '#2a5a86' },
  ],
  nodes: [
    { id: 'r1', lane: 'copy', x: 40,  label: 'Sequência de e-mails', responsavel: 'Copywriting', status: 'A fazer',
      checklist: ['Mapear gatilhos (carrinho, boleto/pix, pós-venda)', 'Escrever a sequência de e-mails'],
      pop: { label: 'Régua — templates', href: '../processos/pops/regua-templates.md' } },
    { id: 'r2', lane: 'copy', x: 360, label: 'Sequência de SMS', responsavel: 'Copywriting', status: 'A fazer',
      checklist: ['Escrever a sequência de SMS'],
      pop: { label: 'Régua — templates', href: '../processos/pops/regua-templates.md' } },
    { id: 'r3', lane: 'copy', x: 680, label: 'Sequência de WhatsApp (se Brasil)', responsavel: 'Copywriting', status: 'A fazer',
      checklist: ['Escrever a sequência de WhatsApp'],
      pop: { label: 'Régua — templates', href: '../processos/pops/regua-templates.md' } },
  ],
  edges: [],
}
export default processo
