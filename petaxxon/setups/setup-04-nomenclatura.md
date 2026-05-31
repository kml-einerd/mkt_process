# Setup: Nomenclatura (Campanhas, Funis, Criativos e UTMs)

> **Dono:** [a confirmar]  ·  **Ferramenta(s):** planilha/documento de controle + plataformas de anúncio + CRM + plataforma de checkout

## Objetivo
Garantir um **padrão único de nomeação** reutilizado por todos os funis, campanhas, criativos e UTMs
do grupo Petaxxon. É a base que permite ao tracking (Setup 02) e ao CRM (Setup 03) identificar a
origem de cada lead e venda **de forma inequívoca, automática e sem ambiguidade**. Sem nomenclatura
padrão, não há atribuição confiável — qualquer decisão de escalar ou pausar vira opinião.

## Checklist do que precisa existir (antes de rodar qualquer funil)
- [ ] **Tabela de valores fixos** definida: lista de produtos, canais, funis, rotas e tipos de criativo aceitos
- [ ] **Padrão de nome de campanha** documentado e comunicado ao time
- [ ] **Padrão de UTM** documentado (os 5 parâmetros: source, medium, campaign, content, term)
- [ ] **Padrão de nome de ad set / grupo de anúncio** documentado
- [ ] **Padrão de nome de criativo/anúncio** documentado
- [ ] **Padrão de nome de funil/fluxo** (Typebot, página, automação de e-mail) documentado
- [ ] **Glossário de siglas/abreviações** aceitas (ex.: FY = Fórmula YouTube, YD = YouTube Dark)
- [ ] **Validação na prática:** ao menos uma campanha nomeada no padrão e rastreada de ponta a ponta

## Padrão / convenção

### Estrutura geral
Todos os identificadores seguem a lógica posicional:
```
[produto]-[funil]-[rota]-[canal]-[variação]
```

Cada posição usa valores fixos da tabela abaixo. Separador padrão: hífen `-`. Sem espaços, sem
caracteres especiais, sem acentos. Tudo em minúsculo.

---

### Tabela de valores fixos

| Posição | Campo | Valores aceitos (sugestão — confirmar) |
|---|---|---|
| 1 | **produto** | `vvsa` · `formula-yt` · `yt-dark` · `playsquad` · `mega-combo` |
| 2 | **funil** | `vsl` · `typebot` · `shorts` · `webinario` · `base` · `captura` · `recuperacao` |
| 3 | **rota** | `a` (captura→nutrir→vender) · `b` (venda direta) |
| 4 | **canal** | `pago` · `organico` · `email` · `whatsapp` |
| 5 | **variação** | `v1` · `v2` · `v3` … (versão/teste) |

> Todos os valores da tabela precisam ser validados e fixados pelo time antes do uso. [a confirmar]

---

### Exemplos de nomes de campanha
```
formula-yt-vsl-b-pago-v1
formula-yt-typebot-b-pago-v2
vvsa-shorts-b-organico-v1
yt-dark-webinario-b-pago-v1
playsquad-base-a-email-v1
mega-combo-webinario-b-pago-v1
```

---

### Padrão de UTM (5 parâmetros)
```
utm_source   = canal de tráfego        (ex.: meta · google · youtube · email · whatsapp)
utm_medium   = tipo de mídia           (ex.: pago · organico · cpc · email)
utm_campaign = nome da campanha        (ex.: formula-yt-vsl-b-pago-v1)
utm_content  = identificador do criativo/anúncio/mensagem (ex.: criativo-gancho-emocional-v1)
utm_term     = variação de público ou palavra-chave [a confirmar uso]
```

**Exemplo de URL com UTM completo:**
```
https://[domínio]/formula-youtube?
  utm_source=meta&
  utm_medium=pago&
  utm_campaign=formula-yt-vsl-b-pago-v1&
  utm_content=criativo-gancho-v1
```

> Os valores de `utm_source` e `utm_medium` para canais orgânicos (Shorts, bio) precisam ser definidos
> para diferenciar de pago. Sugestão: `utm_source=youtube&utm_medium=organico`. [a confirmar]

---

### Padrão de nome de criativo/anúncio
```
[produto]-[tipo-criativo]-[tema]-[variação]
```
Exemplos:
```
formula-yt-video-gancho-emocional-v1
formula-yt-imagem-prova-social-v1
yt-dark-video-resultado-v2
```

---

### Padrão de nome de funil/fluxo (Typebot, página, automação)
```
[produto]-[tipo-funil]-[variação]
```
Exemplos:
```
formula-yt-typebot-v1
formula-yt-vsl-v1
playsquad-email-recompra-v1
```

---

### Padrão de nome no CRM (tags, listas, segmentos)
Alinhar com o Setup 03 (CRM & Listas). Sugestão:
```
prod:<produto>         ex.: prod:formula-yt
temp:<temperatura>     ex.: temp:comprador · temp:lead-frio · temp:lead-morno
canal:<canal>          ex.: canal:organico · canal:pago · canal:email
```
> Confirmar com o time e consolidar no Setup 03. [a confirmar]

---

## Definition of Done
A nomenclatura está pronta quando: (1) a tabela de valores fixos está aprovada e publicada; (2) ao
menos uma campanha completa — da criação do anúncio ao relatório de CPA — foi nomeada e rastreada
no padrão; (3) o CRM aplica tags no padrão automaticamente; (4) qualquer pessoa do time consegue
montar o nome de uma campanha nova sem perguntar a ninguém.

## As 3 camadas
- **Ideal:** padrão único documentado, tabela de valores fixos aprovada, UTMs padronizados em todos os funis, CRM com tags no mesmo padrão — rastreamento de ponta a ponta sem ambiguidade.
- **Foto atual:** 🔴 a desenhar — não há padrão de nomenclatura formal definido; cada campanha usa nomes ad hoc. [a confirmar o que existe hoje]
- **Gaps:** definir e aprovar a tabela de valores fixos; comunicar ao time; aplicar em todas as campanhas ativas e novas; validar que o Setup 02 (Tracking) lê os UTMs no padrão.
