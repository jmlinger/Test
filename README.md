<h1 align="center">In-Tregue Delivery</h1>
<br>

# Descrição
<<<<<<< HEAD

=======
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
E-commerce para bebidas alcoólicas.

Projeto fullstack desenvolvido em React e Node.js que apresenta funcionalidades para três tipos de usuário: administrador, vendedor e cliente.

Aplicação desenvolvida como forma de critério avaliativo da escola de tecnologia Trybe.
<br><br>

# Stacks de Desenvolvimento

<div>
  <a href="https://javascript.info/">
    <img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=black" />
  </a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
    <img src="https://img.shields.io/badge/html5-339933?style=for-the-badge&logo=html5&color=black" />
  </a>
  <a href="https://www.w3schools.com/cssref/">
    <img src="https://img.shields.io/badge/css-339933?style=for-the-badge&logo=css3&color=black" />
  </a>
  <a href="https://pt-br.reactjs.org/docs/getting-started.html">
    <img src="https://img.shields.io/badge/React-339933?style=for-the-badge&logo=react&color=black" />
  </a>
  <a href="https://redux-toolkit.js.org/introduction/getting-started">
    <img src="https://img.shields.io/badge/redux--toolkit-339933?style=for-the-badge&logo=redux&color=black" />
  </a>
  <a href="https://styled-components.com/docs">
    <img src="https://img.shields.io/badge/Styled--Components-339933?style=for-the-badge&logo=styledcomponents&color=black" />
  </a>
  <a href="https://docs.npmjs.com/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=black" />
  </a>
  <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/Express.js-339933?style=for-the-badge&logo=express&color=black" /> 
  </a>
  <a href="https://dev.mysql.com/doc/">
    <img src="https://img.shields.io/badge/MySQL-339933?style=for-the-badge&logo=mysql&color=black" />
  </a>
  <a href="https://sequelize.org/">
    <img src="https://img.shields.io/badge/Sequelize-339933?style=for-the-badge&logo=sequelize&color=black" />
  </a>
  <a href="https://socket.io/docs/v4/">
    <img src="https://img.shields.io/badge/Socket.io-339933?style=for-the-badge&logo=socket.io&color=black" /> 
  </a>
</div>
<br>

# A aplicação em nuvem

<<<<<<< HEAD
Acesse a aplicação alocada no Heroku por <a href="https://in-tregasdelivery.herokuapp.com/"> aqui <a/>.

<br>

# Rodando a aplicação localmente

=======
Acesse a aplicação alocada no Vercel por <a href="https://intreguedelivery.vercel.app"> aqui <a/>.

<br>  

# Rodando a aplicação localmente
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MySQL](https://dev.mysql.com/doc/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Rodando o servidor Back-End

```bash
# Clone este repositório com a chave SSH ou HTTP a depender de como seu git está configurado.

# Acesse a pasta do projeto no terminal/cmd
$ cd delivery_app_backend

# Vá para a back-end
$ cd delivery_app_backend

# Instale as dependências
$ npm install

## Crie um arquivo .env

<<<<<<< HEAD
- NODE_ENV=
=======
- NODE_ENV=dev
- PORT=3001
- JWT_SECRET=grupo21senhasecreta
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
- SQL_HOST=localhost
- SQL_PORT=3306
- SQL_USER=(seu usuário mysql)
- SQL_PASSWORD=(sua senha mysql)
- SQL_DB_NAME=delivery-app
<<<<<<< HEAD
- EVAL_ALWAYS_RESTORE_DEV_DB=true

=======
	
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>

```
<<<<<<< HEAD

### Rodando o Front-End
=======
### Rodando o Front-End 
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123

```bash
# Clone este repositório com a chave SSH ou HTTP a depender de como seu git está configurado.

# Acesse a pasta do projeto no terminal/cmd
$ cd delivery_app_frontend

# Vá para a front-end
$ cd delivery_app_frontend

# Instale as dependências
$ npm install

## Crie um arquivo .env

- REACT_APP_NODE_ENV=dev
<<<<<<< HEAD
- REACT_APP_API=https://in-tregasbackend.herokuapp.com/
- REACT_APP_LOCALHOST=http://localhost:3001/
- SKIP_PREFLIGHT_CHECK=true

=======
- REACT_APP_API=https://intreguedelivery.vercel.app/
- REACT_APP_LOCALHOST=http://localhost:3000/
- SKIP_PREFLIGHT_CHECK=true	
	
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```
<<<<<<< HEAD

=======
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
<br>

## Funcionalidades da aplicação

<div align=right>
	<h4>V 1.36</h4>

</div>

### Fluxo Comum

Tela de login (/login):
<<<<<<< HEAD

- [x] Login.

Tela de registro (/register):

- [x] Cadastro de usuário.

Barra de navegação:

- [x] Guias.
- [x] Alteração de tema visual.
- [x] Logout.
      <br></br>
=======
- [x] Login.

Tela de registro (/register):
- [x] Cadastro de usuário.

Barra de navegação:
- [x] Guias.
- [x] Alteração de tema visual.
- [x] Logout.
<br></br>
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123

### Fluxo do Administrador

Tela de Gerenciamento de Usuários (/admin/manage):
<<<<<<< HEAD

- [x] Cadastro de novos usuários.
- [x] Deleção de usuário.
      <br></br>
=======
- [x] Cadastro de novos usuários.
- [x] Deleção de usuário.
<br></br>
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123

### Fluxo do Vendedor

Tela de Pedidos (/seller/orders):
<<<<<<< HEAD

=======
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
- [x] Exibe todos os pedidos do vendedor.
- [x] Acesso aos detalhes do pedido ao clicar no card.
- [x] Atualização status do pedido em tempo real.

Tela de Detalhes/Controle do Pedido (/seller/orders/:id):
<<<<<<< HEAD

- [x] Exibe os detalhes do pedido.
- [x] Alteração de status do pedido.
      <br></br>
=======
- [x] Exibe os detalhes do pedido.
- [x] Alteração de status do pedido.
<br></br>
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123

### Fluxo do Cliente

Tela de Produtos (/customer/orders):
<<<<<<< HEAD

=======
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
- [x] Exibe todos os produtos.
- [x] Exibe/oculta o valor total da compra no carrinho ao inserir/excluir produtos.
- [x] Altera o valor do carrinho ao alterar quantidade de um produto.
- [x] Acesso à finalização da compra ao clicar no carrinho.

Tela de Checkout
<<<<<<< HEAD

=======
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
- [x] Exibe detalhes do pedido.
- [x] Remoção de produto do pedido.
- [x] Inserção de informações para a entrega.

Tela de Pedidos (/customer/orders):
<<<<<<< HEAD

=======
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
- [x] Exibe todos os pedidos do cliente.
- [x] Acessa os detalhes do pedido ao clicar no card.
- [x] Atualização status do pedido em tempo real.

Tela de Detalhes do Pedido (/customer/orders/:id):
<<<<<<< HEAD

- [x] Exibe os detalhes do pedido.
- [x] Alteração de status do pedido.
      <br><br>
=======
- [x] Exibe os detalhes do pedido.
- [x] Alteração de status do pedido.
<br><br>

## Login
A aplicação contém em seu banco de dados três usuários padrão. Para logar em uma destas contas basta copiar o conteúdo entre aspas e colar nos respectivos campos. Segue:
### Administrador
- email: "adm@deliveryapp.com"
- senha: "--adm2@21!!--"

### Vendedor
- email: "fulana@deliveryapp.com"
- senha: "fulana@123"

### Cliente
- email: "zebirita@email.com"
- senha: "$#zebirita#$"
<br><br>
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123

## Desenvolvido por:

Gustavo Mourão - https://github.com/Gustavo-Mourao
<br>
Henrique Alarcon - https://github.com/Henriquealarcon
<br>
Igor Fernandes - https://github.com/srsifer
<br>
Johann Munzlinger - https://github.com/jmlinger
<br>
José Luis Demeneghi - https://github.com/Joseluisdemeneghi

## Status

<h3> 
<<<<<<< HEAD
	🚧  Implementando novas funcionalidades  🚧
=======
	🚧  Finalizado!  🚧
>>>>>>> 3cde74a67e56e5945dc94456466dd244fbb24123
</h3>
