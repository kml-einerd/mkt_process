# Setup: Infra & Contas

> **Dono:** Gestor de Operações  ·  **Ferramenta(s):** Hotmart, WordPress + Elementor, GoHighLevel (GHL), HotWebinar, Contas de Anúncio (Meta/Google)

## Objetivo
Garantir que toda a infraestrutura de contas, domínios, ferramentas e acessos esteja organizada, documentada e segura antes de qualquer funil ou campanha ser ativada. Sem Infra & Contas estruturado, qualquer outro setup fica bloqueado ou inseguro.

## Checklist do que precisa existir (antes de rodar qualquer funil)

### Domínios
- [ ] Domínio principal registrado e com DNS apontando corretamente
- [ ] Subdomínios para funis mapeados e configurados (padrão: `vsl.`, `captura.`, `live.`)
- [ ] Certificado SSL ativo em todos os domínios e subdomínios usados
- [ ] Redirecionamentos (301/302) documentados e testados
- [ ] Responsável pelo controle de renovação definido: **Infra**

### Contas de Anúncio
- [ ] Conta de anúncio Meta (Business Manager) criada com o domínio verificado
- [ ] Conta Google Ads criada e vinculada ao GA4
- [ ] Perfis de acesso definidos: admin (mínimo 2 pessoas da operação), operador (Gestor de Tráfego)
- [ ] Método de pagamento validado e com limite suficiente para escala (cartão corporativo)
- [ ] Conta de anúncio separada por produto/marca se necessário (campanhas separadas no nível de conta para evitar contaminação de pixel)
- [ ] Política de uso da plataforma lida e cumprida (evitar banimento)

### Ferramentas e Integrações
- [ ] Plataforma de checkout configurada e integrada com o domínio: **Hotmart**
- [ ] Plataforma de páginas (VSL, captura, etc.) ativa e integrada ao checkout: **WordPress + Elementor**
- [ ] Ferramenta de e-mail / WhatsApp para CRM ativa e integrada: **GoHighLevel (GHL)** com **WhatsApp API Oficial**
- [ ] Plataforma de live (webinário) configurada: **HotWebinar**
- [ ] Typebot ou equivalente configurado para funis de bot
- [ ] PlaySquad (SaaS) com acesso de administrador para a operação
- [ ] Integrações: priorizar integrações nativas e diretas (evitar Make/Zapier se possível)
- [ ] Cofre de senhas ativo e compartilhado com o time de forma segura (Bitwarden ou similar)

### Checkout e Esteira
- [ ] Produto principal (front-end) cadastrado e publicado na Hotmart
- [ ] Até 5 order bumps configurados no checkout (flexível por produto para maximizar o ticket)
- [ ] Upsell 1 configurado de forma dinâmica por produto (ex.: Fórmula YouTube oferece +1 Fórmula ou Cyberclass)
- [ ] Continuação da esteira (pós-Upsell 1) configurada de acordo com o produto de entrada
- [ ] Página de obrigado / confirmação com pixel de Purchase disparando
- [ ] Checkout testado de ponta a ponta com uma compra real antes de ativar tráfego

### Segurança e Cofre de Senhas
- [ ] Cofre de senhas com entrada para cada ferramenta crítica (checkout, anúncios, domínio, e-mail, hosting)
- [ ] Mínimo 2 administradores com acesso ao cofre (redundância)
- [ ] 2FA (autenticação de dois fatores) ativado em todas as contas críticas
- [ ] Política de troca de senha documentada (recomendado: semestral para contas críticas)
- [ ] Acessos revogados imediatamente ao desligamento de um membro do time
- [ ] Nenhuma senha crítica em texto plano em mensagens, e-mails ou documentos compartilhados

## Padrão / convenção
- **Nomenclatura de contas:** seguir o padrão definido em Setup 04 (Nomenclatura) — não criar nomes ad hoc.
- **Acesso mínimo necessário:** cada papel recebe apenas o nível de acesso que sua função exige (não dar admin para quem só precisa de operador).
- **Cofre de senhas:** toda credencial nova vai primeiro pro cofre, nunca fica só na cabeça ou no WhatsApp.
- **Checkout:** a esteira padrão segue FRONT-END → ATÉ 5 ORDER BUMPS → UPSELL 1 DINÂMICO → continuação. Qualquer variação deve ser documentada e aprovada.

## Definition of Done
Todos os itens do checklist acima marcados; uma compra de teste realizada de ponta a ponta (anúncio → checkout → bumps → upsell → página de obrigado com evento Purchase disparado); cofre de senhas atualizado; acessos revisados e documentados.

## As 3 camadas
- **Ideal:** cofre de senhas com 100% das credenciais; 2FA em tudo; checkout testado com esteira completa; domínios e contas documentados e com renovação monitorada; separação de acessos por papel.
- **Foto atual:** 🟡 a testar — contas criadas (Hotmart, GHL, WordPress), mas setups de 2FA e cofre de senhas precisam de validação e consolidação.
- **Gaps:** centralizar credenciais de todas as contas existentes no cofre; ativar 2FA onde falta; configurar e testar as esteiras dinâmicas e bumps na Hotmart.
