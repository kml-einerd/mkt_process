# Lente Segurança + Governança

## Quem analisa

**O Princípio Zero Trust** (formalizado por John Kindervag e materializado no BeyondCorp do Google e no NIST SP 800-207) parte de uma premissa brutal: a rede interna não é mais segura que a internet. "Nunca confie, sempre verifique." Não existe perímetro confiável, não existe "está dentro do workspace então pode ver" — cada acesso é avaliado, cada privilégio é o mínimo necessário (*least privilege*), e o padrão é negar. Zero Trust olha para um campo "Senha" preenchido em texto plano, visível a 20 pessoas, e vê um colapso conceitual: a confiança foi concedida de forma implícita e permanente a quem quer que tenha logado um dia no ClickUp.

**A escola OWASP de gestão de segredos** é mais cirúrgica e operacional. Segredo (senha, token, chave de API) tem ciclo de vida: nasce, é usado, **roda** (rotaciona) e morre. Nunca vive em texto plano fora de um cofre (*secrets manager*). A regra de ouro: se um segredo apareceu em algum lugar que não é o cofre — um commit, um log, um campo de task — ele está **comprometido** e precisa ser rotacionado, ponto. Não importa se "ninguém viu". OWASP olha para `j9K2npH6800#` num export de ClickUp e não pergunta "será que vazou?" — declara vazado e manda trocar.

**A visão de governança e compliance (LGPD no contexto Brasil)** sobe um nível: não é só proteger o sistema, é responder *quem é responsável, quem acessou o quê, e o que acontece com dados de pessoas reais*. A LGPD (Lei 13.709/2018) não é opcional para quem capta leads em massa no Brasil — exige base legal para tratamento, registro das operações de tratamento (Art. 37), controle de acesso, e a capacidade de responder ao titular e à ANPD. Governança olha para milhares de leads capturados em funis, formulários e WhatsApp API, sem registro de onde a base está nem de quem acessa, e vê não um problema técnico, mas um **passivo jurídico** rodando há dois anos.

Essa mesa importa MUITO aqui porque a operação não é um banco nem uma fintech — é marketing de performance de ~20 pessoas. Mas ela acumulou, dentro de uma ferramenta de gestão de tarefas, o pior dos dois mundos: **credenciais de produção em texto plano** E **dados pessoais de terceiros sem governança**. As três autoridades concordam que isto está quebrado; divergem ferozmente sobre *quanto* consertar antes de virar teatro de segurança que ninguém adota.

## Diagnóstico pela lente

### CRÍTICO: 96 senhas em texto plano (o risco real)

Não é hipótese. O campo custom "Senha" está **preenchido em texto plano em 96 tasks**, e o próprio export confirma valores reais vazados: `j9K2npH6800#`, `5x4PY~M'"!i6f?E`, `Sucesso2024!`. Some o campo "Login" preenchido em **105 tasks** — `admin@disdigital.com.br`, `dis@fullz.com.br`, `marcosduda@fullz.com.br` e contas de ferramentas SaaS. Cruzando os dois campos, qualquer pessoa com acesso ao workspace ClickUp tem em mãos **pares login+senha prontos para uso** de dezenas de sistemas.

Por que isso é a red flag mais grave de todo o diagnóstico, na voz das três autoridades:

- **OWASP:** todo segredo que tocou o campo "Senha" do ClickUp está **comprometido por definição**. Não é "risco de vazar" — já vazou, para dentro do workspace, para o export, e para qualquer integração/backup/print que tenha tocado essas tasks. O ClickUp não é um cofre: não há criptografia em repouso voltada a segredo, não há mascaramento (a senha aparece na tela), não há rotação, não há trilha de quem leu o campo. `Sucesso2024!` é o tipo de senha que um atacante quebra por dicionário em segundos — e ela está escrita ali, nem precisa quebrar.
- **Zero Trust:** o modelo de acesso é "confiança implícita por pertencimento ao workspace". Entrou no ClickUp → vê tudo. Isso é exatamente o que Zero Trust proíbe. 96 senhas visíveis a 20 pessoas significa que o privilégio efetivo de cada pessoa é **acesso a 96 sistemas de terceiros**, independente da função dela. O estagiário de tráfego enxerga a senha admin do domínio.
- **Governança/LGPD:** entre esses 96 sistemas há provavelmente ferramentas que tratam dados pessoais (GHL, WhatsApp API, plataformas de e-mail). Senha em plaintext compartilhada = **impossível atribuir responsabilidade** (Art. 37 e 46 da LGPD pedem segurança e trilha). Se um desses sistemas vaza dados de leads, a operação não consegue nem dizer quem acessou — todo mundo tinha a senha.

O risco concreto, em uma frase: **uma única pessoa mal-intencionada (ou um único laptop comprometido) com acesso ao ClickUp tem as chaves de até 96 sistemas da operação inteira.** E como veremos, ex-colaboradores entram nessa conta.

Os vetores de ataque que isto abre, em ordem de probabilidade real para uma operação de marketing:

- **Vetor humano (o mais provável):** alguém sai mal, ou um freelancer/agência terceira teve acesso temporário. Não precisa de hacker — precisa de uma pessoa com print e ressentimento. As senhas estão prontas, em texto, copiáveis.
- **Vetor de export:** este próprio diagnóstico nasceu de um export que continha as senhas em claro. Quantos exports desses já circularam por e-mail, Drive, WhatsApp, planilhas compartilhadas nos últimos 2 anos? Cada cópia é um vazamento permanente fora de qualquer controle.
- **Vetor de integração:** ClickUp conecta-se a automações (Zapier, Make, n8n, webhooks). Qualquer integração que leia o corpo das tasks carrega as senhas para fora — para logs de terceiros, para serviços que ninguém mais lembra que estão ligados.
- **Vetor de comprometimento de conta:** se UMA conta de usuário do ClickUp é phishada, o atacante não ganha uma conta — ganha 96. O ClickUp vira o jackpot da operação inteira.

A gravidade não está em "se" — está em que o dano já pode ter ocorrido e a operação não tem como saber, porque não há trilha de quem leu o campo "Senha". Em segurança, ausência de evidência de vazamento, quando não há logging, **não é evidência de ausência**.

### Acesso e offboarding (o ex-colaborador problema)

A operação roda há 2 anos com rotatividade de pessoal, mantendo ~20 ativos. Não há registro de rotação de senhas. A conta matemática é desconfortável: **todo ex-colaborador que algum dia teve acesso ao ClickUp ainda conhece as 96 senhas que estavam lá na época dele** — porque elas não foram trocadas. Se 30 pessoas passaram pela operação em 2 anos, há ~10 ex-membros que ainda detêm credenciais de produção válidas. Removeram o acesso ao ClickUp deles? Talvez. Mas a senha do Meta Ads, do GHL, do domínio, eles **anotaram na cabeça ou levaram no print** — e ela continua a mesma.

- **Zero Trust** chama isso de falha de revogação: tirar o crachá não adianta se a fechadura é a mesma senha que a pessoa decorou. O offboarding precisa **invalidar o segredo, não só o acesso à ferramenta onde o segredo estava escrito**.
- **OWASP** é categórico: todo desligamento deveria disparar rotação dos segredos a que a pessoa teve acesso. Como aqui *todos têm acesso a tudo*, cada desligamento exigiria rotacionar tudo — o que é insustentável, e é exatamente por isso que segredos compartilhados em plaintext são proibidos. A arquitetura impede um offboarding limpo.
- **Governança** acrescenta: **53% das tasks sem assignee** significa que mais da metade do trabalho não tem dono registrado. Não há trilha de auditoria de quem fez, quem acessou, quem mexeu. Quando a ANPD ou um titular perguntar "quem tratou meu dado?", a resposta hoje é "não sabemos".

O ex-colaborador problema não é teórico: é o estado-padrão desta operação. Cada saída nos últimos 2 anos é um vazamento ambulante não contido.

### LGPD: base de leads sem governança de tratamento

A operação **capta leads em massa** — funis, formulários, WhatsApp API, SMS via Comtele, Ligue Leads. Isso são dados pessoais de **milhares de titulares** (nome, telefone, e-mail, comportamento). A LGPD trata cada um desses leads como uma pessoa com direitos. E o diagnóstico encontra o vazio:

- **Onde está a base?** Espalhada entre GHL (listas de e-mail), SendFlow/WhatsApp API, Comtele, planilhas. Não há um inventário de "onde residem dados pessoais".
- **Quem tem acesso?** Indefinido — e dado o problema das senhas compartilhadas, na prática *todos* têm.
- **Qual a base legal?** Captação de lead exige consentimento ou legítimo interesse documentado. Disparo de WhatsApp/SMS em massa sem base legal é infração direta (e a fonte mais comum de denúncia à ANPD no Brasil).
- **Há registro de tratamento (Art. 37)?** Não. Não há mapa de fluxo de dados, não há definição de retenção, não há processo de resposta ao titular.

Governança vê aqui o **segundo maior passivo** depois das senhas — porque, diferente de uma senha que se troca em minutos, dados pessoais mal-tratados geram exposição que se acumula a cada lead captado e a cada disparo enviado. A LGPD prevê multas de até 2% do faturamento (limitadas a R$ 50 milhões por infração). Para uma operação de performance, o risco mais imediato e provável não é a multa — é a **denúncia de spam/SMS** que derruba a reputação do número/domínio e mata a entregabilidade.

### Zona cinzenta das contas de anúncio (risco de plataforma)

A operação mantém **115 perfis de API de backup**, **multilogin via Lauth**, e reporta **85% das BMs (Business Managers) banidas**. Isso descreve uma operação em guerra permanente com as políticas do Meta — criando contas, sendo banida, recriando, mascarando origem com multilogin.

- **Zero Trust e OWASP** têm pouco a dizer aqui em termos de criptografia, mas a governança de risco é gritante: 85% de BMs banidas não é azar, é **sinal de que o modelo operacional viola sistematicamente os termos da plataforma**. O risco não é hacker externo — é o **Meta como adversário**, capaz de banir o ativo de negócio inteiro (pixel, públicos, histórico) de uma vez. Multilogin e perfis de backup são paliativos que aumentam a superfície: 115 perfis API são 115 conjuntos de credenciais que também precisam de cofre, rotação e controle.
- **Governança** registra o conflito: parte dos dados de leads pode estar sendo coletada e usada de formas que violam tanto a política do Meta quanto a LGPD simultaneamente. É um risco de **continuidade de negócio**, não só de segurança. Se as BMs caem em massa num ban coordenado, a operação para.

Esta mesa não vai resolver a estratégia de mídia — mas registra que a fragilidade das contas de anúncio é um risco de plataforma de primeira ordem, e que cada credencial desses 115 perfis some à pilha de segredos a proteger.

### Dados financeiros expostos em custom fields

Os campos custom **Pag. Via, Custo, Orçamento** carregam dados financeiros da operação dentro do mesmo ClickUp aberto a 20 pessoas. Não é da gravidade de uma senha (não dá acesso a sistema), mas:

- **Zero Trust:** mesmo princípio — quem precisa ver orçamento e custo para fazer o trabalho dele? O estagiário de edição não. Visibilidade financeira total para todos é o oposto de menor privilégio.
- **Governança:** se "Pag. Via" contém dados de meio de pagamento (cartão, chave Pix, conta), isso é dado sensível financeiro circulando sem controle. Vale verificar o conteúdo real desses campos — se houver número de cartão ou dado bancário de terceiros, sobe para a categoria crítica junto das senhas.

## Onde as autoridades CONCORDAM

- **As 96 senhas saem do ClickUp HOJE. Sem exceção, sem debate.** Zero Trust, OWASP e Governança batem o martelo juntos: este é o item número um, e é o único ponto onde não há tom pragmático — é urgência pura.
- **Segredo compartilhado em plaintext torna o offboarding impossível.** Os três concordam que a arquitetura atual impede revogar acesso de quem sai. Conserta-se a arquitetura (cofre), não o sintoma.
- **Menor privilégio é o organizador de tudo.** Nem todos precisam ver tudo. Senhas, finanças, base de leads — cada um para quem precisa. Os três derivam disso.
- **O que não tem dono não tem trilha.** 53% sem assignee é falha transversal: Zero Trust (quem acessou?), OWASP (quem usou o segredo?) e LGPD (quem tratou o dado?) precisam todos de atribuição.
- **Rotacionar o que vazou.** As senhas expostas no export já estão comprometidas — todos concordam que precisam ser trocadas no destino, não só movidas para o cofre.

## Onde DIVERGEM

A tensão central desta lente é **Zero Trust formal/pesado vs. realidade ágil de 20 pessoas que não vai virar banco** — e ela é real e útil:

- **Zero Trust purista** quer SSO obrigatório, MFA em tudo, microssegmentação, acesso condicional por dispositivo, revisão de privilégio contínua, logging centralizado. Para uma operação de marketing de 20 pessoas com requisito explícito de **agilidade e simplicidade**, isso é teatro de segurança: o time não adota, contorna, anota senha no bloco de notas de novo, e você volta à estaca zero — agora com falsa sensação de segurança. SSO + acesso condicional faz sentido para a faixa de 30+ pessoas, não para um time enxuto que precisa entregar criativo amanhã.
- **OWASP é o mais proporcional aqui** e serve de árbitro: a regra "segredo só vive no cofre, e roda quando vaza" **escala dos dois lados**. Para time pequeno, é um Bitwarden compartilhado de 30 minutos de setup. Para time grande, é o mesmo conceito com grupos e SSO por cima. OWASP entrega o ganho de segurança real (tirar plaintext) sem o peso do Zero Trust completo. É a peça que o time *realmente adota*.
- **Governança/LGPD diverge no ritmo, não no destino.** A LGPD não admite "depois" para captação ativa de leads — mas a mesa reconhece que governança plena (DPO formal, RIPD, política completa) é desproporcional para 20 pessoas. A síntese: **um mínimo viável de conformidade** (registro de tratamento simples, base legal nos formulários, retenção definida, um responsável nomeado) entrega 80% da proteção jurídica com 20% do esforço. O resto é maturidade incremental.
- **A síntese prática:** comece pelo OWASP (cofre + rotação — ganho enorme, atrito mínimo, atende a agilidade), porque é a ação que mata o risco crítico sem virar burocracia. Traga Zero Trust em doses (MFA primeiro, SSO só quando o time crescer). Traga Governança no ritmo mínimo-viável que a LGPD exige para captação de leads. **Segurança que o time adota > segurança ideal que o time sabota.**

## Recomendações (priorizadas por urgência)

### HOJE (crítico): tirar as 96 senhas do ClickUp

1. **Provisionar um cofre AGORA.** 1Password (pago, mais fácil) ou Bitwarden/Vaultwarden (open source, gratuito). Setup de cofre compartilhado: menos de 1 hora.
2. **Migrar as 96 senhas e 105 logins para o cofre, e APAGAR os campos no ClickUp.** Não basta mover — limpar o campo "Senha" e "Login" de todas as tasks (e considerar que exports antigos já vazaram).
3. **Rotacionar imediatamente as 3 expostas no export** (`j9K2npH6800#`, `5x4PY~M'"!i6f?E`, `Sucesso2024!`) e qualquer credencial admin/domínio. Essas estão queimadas — troca obrigatória, não opcional.
4. **Ligar MFA nas contas críticas hoje:** domínio, Meta Business, GHL, e qualquer conta admin. MFA é o controle de maior retorno por minuto investido.
5. **Eliminar `Sucesso2024!` e senhas fracas/repetidas** — gerar senhas únicas pelo cofre.

### Esta semana: política de offboarding e revisão de acesso

1. **Checklist de offboarding de 1 página:** ao sair alguém → remover do ClickUp + do cofre + **rotacionar os segredos críticos a que tinha acesso**. Sem isso, sair não revoga nada.
2. **Revisão de acesso retroativa:** listar ex-colaboradores dos últimos 2 anos e rotacionar as senhas que eles conheciam (priorizar domínio, financeiro, Meta). Doloroso uma vez, depois o offboarding limpo previne.
3. **Atribuir dono às tasks órfãs** (atacar os 53% sem assignee) — começar pelas que tocam credencial, finanças ou dados de lead. Trilha mínima de responsabilidade.
4. **Definir grupos de acesso no cofre:** quem vê credencial de mídia, quem vê financeiro, quem vê ferramentas. Menor privilégio na prática, sem peso.

### Este mês: governança LGPD mínima (sem virar cartório)

1. **Inventário de onde residem dados pessoais:** uma planilha simples — GHL, WhatsApp API, Comtele, formulários, planilhas. "Que dado, onde, por quanto tempo, quem acessa."
2. **Registro de tratamento simplificado (Art. 37):** uma página por fluxo de captação (finalidade, base legal, retenção). Não precisa ser RIPD completo — precisa existir.
3. **Base legal nos pontos de captação:** consentimento/aviso de privacidade nos formulários e funis; verificar opt-in real nos disparos de WhatsApp/SMS (este é o risco de denúncia mais imediato).
4. **Nomear um responsável informal por dados (DPO de facto):** uma pessoa que sabe onde está a base e responde quando alguém pergunta. Não precisa de cargo formal para 20 pessoas — precisa de um nome.
5. **Política de retenção:** definir quando leads antigos são apagados. Acumular base eterna é passivo crescente.

### Segurança PROPORCIONAL (o que NÃO fazer pra não virar teatro)

- **NÃO** implantar Zero Trust completo, microssegmentação ou acesso condicional por dispositivo agora. Para 20 pessoas, é peso que o time contorna.
- **NÃO** exigir RIPD formal, DPO certificado e comitê de privacidade. Desproporcional — gera papel que ninguém lê.
- **NÃO** criar política de segurança de 40 páginas. Ninguém adota. Checklist de 1 página > manual ignorado.
- **NÃO** trocar todas as senhas a cada 30 dias por rotina cega — rotação obrigatória é no vazamento e no offboarding, não calendário arbitrário (OWASP moderno e NIST já abandonaram a troca periódica forçada porque gera senhas fracas previsíveis).
- A régra de proporcionalidade: **cada controle precisa passar no teste "o time vai usar amanhã sem reclamar?"** Se não passa, é teatro.

### Para TIME PEQUENO (3-6 pessoas): cofre compartilhado simples

1. **Bitwarden gratuito ou 1Password Família/Teams.** Um cofre compartilhado, todo mundo dentro. Tira 100% do plaintext com atrito quase zero.
2. **MFA nas contas críticas** — domínio, Meta, financeiro. Cinco minutos por conta.
3. **Senha mestra forte + recuperação combinada** (quem tem o acesso de emergência se alguém sumir).
4. Offboarding = remover do cofre + trocar senhas críticas. Cabe num checklist de 5 linhas.

### Para TIME GRANDE (15-30 pessoas): cofre com grupos + SSO

1. **1Password Business ou Bitwarden Enterprise com grupos** — cofres segmentados: Mídia, Financeiro, Ferramentas, Admin. Menor privilégio aplicado.
2. **SSO (Google Workspace já serve de IdP)** — login único, e ao desligar alguém no Google, cai o acesso a tudo de uma vez. Resolve offboarding de forma estrutural.
3. **MFA obrigatório via política** do IdP, não na boa vontade individual.
4. **Trilha de auditoria do cofre** (quem acessou qual segredo, quando) — atende Zero Trust e LGPD ao mesmo tempo.
5. **Revisão de acesso trimestral** leve — 30 minutos olhando quem tem acesso a quê e cortando o que sobrou.

## Métricas dessa lente

- **% de segredos em cofre vs. plaintext.** Hoje: ~0% em cofre, 96 senhas em plaintext. Meta: 100% em cofre, 0 no ClickUp. A métrica-rainha desta lente.
- **Nº de senhas/campos "Senha" e "Login" preenchidos no ClickUp.** Hoje: 96 + 105. Meta: 0.
- **Tempo de revogação no offboarding** (da saída da pessoa até segredos rotacionados). Hoje: efetivamente infinito (não acontece). Meta: < 24h.
- **Nº de contas críticas com MFA ativo.** Hoje: provavelmente baixo. Meta: 100% das contas admin/domínio/financeiro/Meta.
- **Nº de credenciais expostas no export já rotacionadas.** Hoje: 0 de 3+. Meta: 100% das expostas.
- **% de tasks com assignee** (proxy de trilha de auditoria). Hoje: 47%. Meta: > 90% nas que tocam credencial/dado/finanças.
- **Existência de registro de tratamento LGPD** (binário sim/não, por fluxo de captação). Hoje: não. Meta: sim para todos os pontos de captação ativa.
- **Nº de ex-colaboradores com credenciais ainda válidas.** Hoje: desconhecido e provavelmente alto. Meta: 0.

## Veredito em 1 frase

Há 96 senhas em texto plano e 105 logins de produção visíveis a todo o workspace há dois anos sem rotação — tire isso para um cofre HOJE e rotacione as queimadas, porque tudo o mais (offboarding, LGPD, contas de anúncio) é importante mas pode esperar dias; isto não pode esperar a próxima hora, e a solução certa é a mais simples que o time realmente adota: um cofre compartilhado, não um projeto de Zero Trust que vira teatro.
