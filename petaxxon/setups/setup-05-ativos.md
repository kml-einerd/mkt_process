# Setup: Biblioteca de Ativos

> **Dono:** [a confirmar]  ·  **Ferramenta(s):** [a confirmar — drive / repositório de arquivos do time]

## Objetivo
Garantir que tudo que precisa existir para rodar qualquer funil esteja **pronto, versionado e reutilizável**,
evitando recriar do zero a cada campanha ou funil novo. A biblioteca é o ativo fixo; as campanhas consomem
dela. Sem biblioteca estruturada, cada lançamento cria dívida de produção.

---

## Checklist do que precisa existir (antes de rodar qualquer funil)

### Marca
- [ ] Logo em versões: fundo claro, fundo escuro, ícone isolado — formatos PNG + SVG
- [ ] Paleta de cores oficial (hex / RGB) documentada
- [ ] Tipografia oficial (fontes, pesos, tamanhos) documentada
- [ ] Guia de tom de voz / personalidade da marca — 1 página resumo [a confirmar]

### Templates de página
- [ ] Template de página de vendas (VSL) — reutilizável por produto
- [ ] Template de squeeze page (captura / lead magnet)
- [ ] Template de página de obrigado (thank you page) pós-compra
- [ ] Template de página de upsell / downsell
- [ ] Template de checkout com os 5 order bumps configurados como padrão [a confirmar ferramenta]

### Templates de VSL / vídeo
- [ ] Estrutura de roteiro de VSL (gancho → problema → solução → oferta → garantia → CTA) — versão documentada
- [ ] Estrutura de Short (hook 3 s → conteúdo → pitch → CTA) — versão documentada
- [ ] Estrutura de pitch de webinário (abertura → conteúdo → oferta → garantia → urgência) — versão documentada
- [ ] Estrutura de mini-VSL do PlaySquad — versão documentada [a confirmar]

### Templates de criativo (tráfego pago)
- [ ] Formatos: feed (1:1 · 4:5), stories (9:16), banner [a confirmar quais plataformas]
- [ ] Modelo de arte de imagem por produto principal [a confirmar]
- [ ] Modelo de arte de imagem por formato de funil (webinário, captura, VSL) [a confirmar]
- [ ] Checklist de variações de teste A/B (hook / headline / imagem) — padrão mínimo [a confirmar]

### Swipe de copy
- [ ] Headline e subheadline por produto (Fórmula YouTube, YouTube Dark, PlaySquad, VVSA) [a confirmar]
- [ ] Copy de anúncio (primário) por produto — pelo menos 3 variações por produto [a confirmar]
- [ ] Copy de páginas (VSL, squeeze, thank you, upsell) — 1 versão base por formato
- [ ] Copy dos 5 order bumps — versão base por bump [a confirmar quais bumps]
- [ ] Copy do upsell 1 (PlaySquad) — versão base
- [ ] Assunto de e-mail — banco de subjects [a confirmar]
- [ ] Sequência de WhatsApp: confirmação de webinário, lembrete, recuperação de vendas, pós-venda — versões base [a confirmar]
- [ ] Swipe de DM / mensagem de recompra / ascensão — versões base [a confirmar]

### Provas sociais
- [ ] Depoimentos em texto — categorizados por produto [a confirmar quantidade mínima]
- [ ] Depoimentos em vídeo — categorizados por produto [a confirmar quantidade mínima]
- [ ] Prints de resultados de alunos — organizados por produto
- [ ] Badges / selos de credibilidade (alunos, aulas, garantia) — formatos PNG [a confirmar números]

### Garantia
- [ ] Texto oficial da garantia — período e condições [a confirmar]
- [ ] Arte / selo de garantia — PNG para páginas e criativos
- [ ] Política de reembolso documentada [a confirmar]

### Esteira (bumps + upsell)
- [ ] Definição dos 5 order bumps: nome do produto, preço e copy — documentados [a confirmar quais bumps]
- [ ] Definição do Upsell 1 PlaySquad: preço, copy e condição de exibição — documentado [a confirmar]
- [ ] Definição da continuação (ex.: YouTube Dark): posição na esteira e copy — documentado [a confirmar]

---

## Padrão de Organização e Versionamento

### Estrutura de pastas (sugestão — [a confirmar com o time])
```
/biblioteca-ativos/
  marca/
    logo/
    cores-tipografia/
    guia-tom-de-voz.md
  templates/
    paginas/
    roteiros/
    criativos/
  copy/
    headlines/
    anuncios/
    whatsapp/
    email/
    bumps-upsell/
  provas-sociais/
    textos/
    videos/
    prints/
  garantia/
  esteira/
```

### Regras de versionamento (simples)
- Nomes de arquivo com sufixo de versão: `vsl-formula-youtube-v1.md`, `vsl-formula-youtube-v2.md`
- A versão em uso vai para a pasta da campanha; a anterior fica em `/arquivo/`
- Nunca sobrescrever o arquivo ativo — criar nova versão e atualizar a referência
- Ao aprovar uma nova versão, registrar: data + quem aprovou + o que mudou (1 linha no topo do arquivo)

### Regra de acesso
- Qualquer membro do time pode **ler** a biblioteca
- Para **alterar** um ativo de marca ou template de página: aprovação do dono [a confirmar]
- Para **alterar** copy de produto ativo: aprovação de copy + dono do funil [a confirmar]

---

## Definition of Done
A biblioteca está pronta quando: (a) todos os itens do checklist acima estão produzidos e acessíveis no
repositório; (b) qualquer membro do time consegue montar um funil novo sem pedir "onde está o logo" ou
"qual é o texto da garantia"; e (c) a estrutura de pastas está publicada e comunicada ao time.

---

## As 3 camadas

- **Ideal:** todos os itens do checklist organizados em repositório centralizado, versionados e acessíveis ao
  time — qualquer funil novo é montado puxando ativos prontos da biblioteca.
- **Foto atual:** [a confirmar — mapear o que já existe disperso (drive, Notion, máquinas locais) e o que falta].
- **Gaps:** consolidar o que existe; produzir o que falta (copys, templates, provas sociais mínimas,
  selo de garantia); publicar a estrutura de pastas e comunicar ao time.
