---
name: "✅ Checklist Clientes"
about: Template para checklist de clientes
title: "[Checklist] "
labels: checklist
assignees: ""
---


# Checklist Clientes

---

# ✅ Necessidades do Ambiente

## Produtos
- [ ] Os produtos do cliente (challenges) foram cadastrados de forma correta?
- [ ] Todos os produtos aparecem para o usuário final no fluxo de compra?
- [ ] As informações dos produtos nos cards são mostradas de forma correta?

## Risk Engine
- [ ] Os perfis de risco estão configurados de forma correta para cada produto?
- [ ] Há regras diferentes entre a fase de challenge e funded? Se sim, essas diferenças foram aplicadas corretamente?
- [ ] O comportamento do engine de risco foi testado e está dentro do esperado?

## Programa de Afiliação
- [ ] Os percentuais de tier do programa de afiliados estão corretos de acordo com o solicitado pelo cliente?
- [ ] O programa de afiliados está contabilizando os sign ups?
- [ ] O programa de afiliados está contabilizado as comissões?
- [ ] O cálculo das comissões está correto para cada período?

## Certificados
- [ ] Os certificados foram recebidos (templates)?
- [ ] Os certificados estão sendo corretamente gerados para cada cliente? Funded e de payout?

## E-mails Transacionais
- [ ] Os emails transacionais foram configurados com templates adequados?
- [ ] Se foram fornecidos por nós, fizemos uma revisão no nome do cliente e nas informações específicas?

## Backoffice
- [ ] O prop owner consegue criar e vincular contas a usuários específicos?
- [ ] O prop owner consegue ajustar o saldo corretamente para cada conta?
- [ ] Os fluxos estão habilitados para o cliente?
- [ ] O prop owner consegue tomar todas as providências administrativas (ex: criar cadastro de clientes, criar contas, criar/aprovar/rejeitar payouts, etc.)
- [ ] O prop owner consegue executar todas as funções com clareza e navegar pela interface?

## Plataforma de Trading
- [ ] As ordens estão sendo executadas corretamente?
- [ ] Recebemos todas as informações necessárias para a conexão com o nosso produto?
- [ ] Temos acesso ao feed de dados e ambiente de execução de ordens necessário para a classe de ativos?

## Fluxo de Saque
- [ ] O cliente final (trader) consegue solicitar saque?
- [ ] Quais as regras estão sendo fiscalizadas para habilitação do saque?
- [ ] Há a possibilidade de criação manual de saques?
- [ ] O cliente final (trader) é comunicado quando há alteração no status do saque?

## Dashboard
- [ ] Como estamos mostrando os dados para clientes na etapa de avaliação e funded? Está de forma correta para cada etapa?
- [ ] A jornada do usuário (ex: entrar —> comprar conta —> receber credenciais —> operar —> quebrar conta —> repeat) funciona?
- [ ] A tradução do dashboard está 100% finalizada para Português e Inglês?

## Integrações
- [ ] As integrações necessárias estão conectadas às credenciais do cliente?
- [ ] PSP
- [ ] KYC?
- [ ] Klaviyo?
- [ ] Zendesk?

## Website
- [ ] O site do cliente está com o redirecionamento correto em todos os CTAs?

---

# ✅ Relatório de Testes (Front)

## 1. Sign Up (Cadastro) 
### Caminho Feliz
- [ ] Acessar a página de cadastro
- [ ] Preencher os campos obrigatórios
- [ ] Confirmar recebimento de e-mail de verify

### Caminho Triste
- [ ] Tentar cadastrar com e-mail já existente
- [ ] Preencher senha fraca ou não coincidir confirmação
- [ ] Deixar campos obrigatórios em branco
- [ ] Inserir e-mail em formato inválido


## 2. Sign In (Login) 
### Caminho Feliz
- [ ] Acessar a página de login
- [ ] Inserir e-mail e senha válidos
- [ ] Clicar em "Entrar"
- [ ] Redirecionar para o Dashboard
- [ ] Deslogar e atualizar a página

### Caminho Triste
- [ ] Inserir e-mail não cadastrado
- [ ] Inserir senha incorreta
- [ ] Deixar campos em branco
- [ ] Inserir e-mail em formato inválido
- [ ] Testar bloqueio de conta


## 3. Resetar Senha
### Caminho Feliz
- [ ] Clicar em "Esqueci minha senha"
- [ ] Inserir e-mail cadastrado
- [ ] Receber e-mail de recuperação
- [ ] Seguir o link, definir nova senha
- [ ] DFazer login com a nova senha

### Caminho Triste
- [ ] Inserir e-mail não cadastrado


## 4. Comprar Challenges
- [ ] Comprando a Challenge
- [ ] Verificar challenge disponível no dashboard/perfil
- [ ] Receber confirmação de compra (notificação ou e-mail)


## 5. Logout
- [ ] Clicar em "Sair"
- [ ] Verificar redirecionamento para tela de login.
- [ ] Confirmar que não é possível acessar áreas restritas após logout


## 6. Edição de Perfil
### Caminho Feliz
- [ ] Editar o perfil

### Caminho Triste
- [ ] Tentar salvar com campos obrigatórios em branco
- [ ] Inserir dados inválidos (ex: e-mail em formato errado)


## 7. Visualização e Progresso de Challenges
### Caminho Feliz
- [ ] Visualizar lista de challenges adquiridos
- [ ] Verificar atualização do progresso
- [ ] Receber feedback visual de conclusão
- [ ] Verificar se o progresso é salvo após recarregar a página

### Caminho Triste
- [ ] Tentar acessar challenge não adquirido
- [ ] Progresso não é salvo corretamente


## 8. Refer and Earn
### Caminho Feliz
- [ ] Acessar a área de "Refer & Earn"
- [ ] Copiar o link de convite/referral
- [ ] Novo usuário realiza cadastro usando o link de referral
- [ ] Verificar se o usuário convidado recebe o benefício

### Caminho Triste
- [ ] Usar link de referral inválido ou expirado
- [ ] Tentar usar o próprio link de referral para auto-cadastro