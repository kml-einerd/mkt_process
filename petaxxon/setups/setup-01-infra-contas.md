# Setup: Infra & Contas

> **Dono:** [a confirmar]  ·  **Ferramenta(s):** [a confirmar — cofre de senhas, gerenciador de domínios, plataforma de checkout, contas de anúncio]

## Objetivo
Garantir que toda a infraestrutura de contas, domínios, ferramentas e acessos esteja organizada, documentada e segura antes de qualquer funil ou campanha ser ativada. Sem Infra & Contas estruturado, qualquer outro setup fica bloqueado ou inseguro.

## Checklist do que precisa existir (antes de rodar qualquer funil)

### Domínios
- [ ] Domínio principal registrado e com DNS apontando corretamente
- [ ] Subdomínios para funis mapeados e configurados (ex.: vsl., cap., wbn.) `[a confirmar padrão de subdomínios]`
- [ ] Certificado SSL ativo em todos os domínios e subdomínios usados
- [ ] Redirecionamentos (301/302) documentados e testados
- [ ] Responsável pelo controle de renovação definido `[a confirmar]`

### Contas de Anúncio
- [ ] Conta de anúncio Meta (Business Manager) criada com o domínio verificado
- [ ] Conta Google Ads criada e vinculada ao GA4
- [ ] Perfis de acesso definidos: admin (mínimo 2 pessoas), operador (Gestor de Tráfego) `[a confirmar]`
- [ ] Método de pagamento validado e com limite suficiente para escala `[a confirmar limite mínimo]`
- [ ] Conta de anúncio separada por produto/marca se necessário `[a confirmar política de separação]`
- [ ] Política de uso da plataforma lida e cumprida (evitar banimento)

### Ferramentas e Integrações
- [ ] Plataforma de checkout configurada e integrada com o domínio `[a confirmar ferramenta: Hotmart, Kiwify, Eduzz, etc.]`
- [ ] Plataforma de páginas (VSL, captura, etc.) ativa e integrada ao checkout `[a confirmar ferramenta]`
- [ ] Ferramenta de e-mail / WhatsApp para CRM ativa e integrada `[a confirmar — ver Setup 03]`
- [ ] Plataforma de live (webinário) configurada `[a confirmar ferramenta]`
- [ ] Typebot ou equivalente configurado para funis de bot `[a confirmar]`
- [ ] PlaySquad (SaaS) com acesso de administrador para a operação `[a confirmar]`
- [ ] Integrador de webhooks (ex.: Make, Zapier, n8n) ativo se necessário `[a confirmar]`
- [ ] Cofre de senhas ativo e com acessos dos membros do time `[a confirmar ferramenta]`

### Checkout e Esteira
- [ ] Produto principal (front-end) cadastrado e publicado
- [ ] 5 order bumps configurados na sequência padrão da esteira `[a confirmar produtos de cada bump]`
- [ ] Upsell 1 PlaySquad configurado como primeiro upsell após o checkout
- [ ] Continuação da esteira (pós-PlaySquad) configurada `[a confirmar por produto]`
- [ ] Página de obrigado / confirmação com pixel de Purchase disparando
- [ ] Checkout testado de ponta a ponta com uma compra real antes de ativar tráfego

### Segurança e Cofre de Senhas
- [ ] Cofre de senhas com entrada para cada ferramenta crítica (checkout, anúncios, domínio, e-mail, hosting)
- [ ] Mínimo 2 administradores com acesso ao cofre (redundância) `[a confirmar quem]`
- [ ] 2FA (autenticação de dois fatores) ativado em todas as contas críticas
- [ ] Política de troca de senha documentada `[a confirmar periodicidade]`
- [ ] Acessos revogados imediatamente ao desligamento de um membro do time
- [ ] Nenhuma senha crítica em texto plano em mensagens, e-mails ou documentos compartilhados

## Padrão / convenção
- **Nomenclatura de contas:** seguir o padrão definido em Setup 04 (Nomenclatura) — não criar nomes ad hoc.
- **Acesso mínimo necessário:** cada papel recebe apenas o nível de acesso que sua função exige (não dar admin para quem só precisa de operador).
- **Cofre de senhas:** toda credencial nova vai primeiro pro cofre, nunca fica só na cabeça ou no WhatsApp.
- **Checkout:** a esteira padrão é sempre FRONT-END → 5 ORDER BUMPS → UPSELL 1 PlaySquad → continuação. Qualquer variação deve ser documentada e aprovada. `[a confirmar continuações por produto]`

## Definition of Done
Todos os itens do checklist acima marcados; uma compra de teste realizada de ponta a ponta (anúncio → checkout → bumps → upsell → página de obrigado com evento Purchase disparado); cofre de senhas atualizado; acessos revisados e documentados.

## As 3 camadas
- **Ideal:** cofre de senhas com 100 % das credenciais; 2FA em tudo; checkout testado com esteira completa; domínios e contas documentados e com renovação monitorada; separação de acessos por papel.
- **Foto atual:** [a confirmar — quais ferramentas e contas já existem? O checkout está integrado? O cofre de senhas está em uso?]
- **Gaps:** inventariar todas as contas existentes; centralizar credenciais no cofre; ativar 2FA onde falta; configurar e testar a esteira completa (5 bumps + upsell PlaySquad). `[a confirmar]`
