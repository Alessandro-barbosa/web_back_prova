## Instalação das depedências:
  npm install
## Consumo de API para utilizar Inteligência artificial do groq:
  Necessário a configuração do .env da api do groq com a variávels GROQ_API_KEY="{$SUACHAVE}"
## comandos para rodar projeto:
 Iniciar o projeto com o comando:
 
 npm run dev
 
 e após isso o projeto estará rodando na porta 3000, e estará pronto para ouvir qualquer requisição que precisa ser feita.
 
## Rotas para lidar com usuários:
### Listar todos os usuários
  Método GET
  http://localhost:3000/users
  
  Com retorno de um JSON de todos os usuários cadastrados no banco de dados.

### Criar um novo usuário
  Método POST
  http://localhost:3000/user
  
  No corpo da requisição, é necessário passar o email, nome, e senha para cadastrar um novo usuário, o sistema salvará
  o hash da senha no backend

### Atualizar um usuário
  Método PUT
  http://localhost:3000/user/:id
  
  É necessário passar o id do usuário na URL e é necessário passar o email, nome, e senha no body para atualizar um usuário.

### Pegar um único usuário
  Método GET
  http://localhost:3000/user/:id
  
  Com o id do usuário na URL, essa rota retorna os dados desse usuário específico.

### Deletar um usuário
  Método DELETE
  http://localhost:3000/user/:id
  
  A requisição necessita do id do usuário para removê-lo do banco de dados.
  
***
## Rotas para lidar com comentários
### Listar todos os comentários
  Método GET
  http://localhost:3000/comments
  
  Com retorno de um JSON de todos os comentários cadastrados no banco de dados.

### Inserir um novo comentário
  Método POST
  http://localhost:3000/comment
  
  No corpo da requisição, é necessário passar os dados do comentário a ser criado, como o title, content, identificar o author com seu id e a qual post pertence, o comentário passará por uma analise de IA consumindo a API do groq.

### Atualizar um comentário
  Método PUT
  http://localhost:3000/comment/:id
  
  É necessário passar o id do comentário na URL e, no corpo da requisição, No corpo da requisição, é necessário passar os dados do comentário a ser criado, como o title, content, identificar o author com seu id e a qual post pertence. 

### Deletar um comentário
  Método DELETE
  http://localhost:3000/comment/:id
  
  A requisição precisa do id do comentário para removê-lo do banco de dados.

***
## Rotas para lidar com posts

### Listar todos os posts
  Método GET
  http://localhost:3000/posts
  
  Com retorno de um JSON contendo todos os posts cadastrados no banco de dados.

### Inserir um novo post
  Método POST
  http://localhost:3000/post
  
  No corpo da requisição, é necessário passar os dados do post, como o título, conteúdo e o ID do usuário que criou o post.

### Atualizar um post
  Método PUT
  http://localhost:3000/post/:id
  
  É necessário passar o id do post na URL e, no corpo da requisição, os dados a serem atualizados, como o título ou o conteúdo do post.

### Deletar um post
  Método DELETE
  http://localhost:3000/post/:id
  
  A requisição necessita do id do post para removê-lo do banco de dados.

***

### Autenticar um usuário e gerar seu token
  Método POST
  http://localhost:3000/auth/signin
  
  O usuário envia suas credenciais como o email e a senha no corpo da requisição. Se as credenciais forem válidas, o servidor gera e retorna um token de autenticação. Esse token será usado para acessar rotas protegidas.

### Criar um novo usuário
  Método POST
  http://localhost:3000/auth/signup
  
  Essa rota é usada para registrar um novo usuário no sistema. No corpo da requisição, o usuário envia informações como email, senha, os dados necessários para completar o cadastro. Após a criação do usuário, o sistema pode retorna um usuário criado.

### Sair da aplicação (logout)
  Método POST
  http://localhost:3000/auth/signout
  
  Essa rota é responsável por fazer o logout do usuário.

