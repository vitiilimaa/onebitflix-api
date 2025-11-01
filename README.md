## 🎬 OneBitFlix API

A OneBitFlix API é a base backend de uma plataforma de streaming inspirada na Netflix.
O projeto tem como objetivo fornecer uma API escalável para gerenciamento de usuários, autenticação e controle de catálogo de filmes e séries.

### 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Sequelize
- JWT
- Bcrypt
- AdminJS
- PostgreSQL

### 🧩 Arquitetura

O projeto segue uma arquitetura modular, separando responsabilidades entre camadas de controller, service, model e middleware, garantindo organização e fácil manutenção.

### ⚙️ Instalação e Execução

Clone o repositório e instale as dependências:

```
git clone https://github.com/vitiilimaa/onebitflix-api.git
cd onebitflix-api
npm install
```

Crie o arquivo `.env` com base no `.env_example` e configure suas variáveis de ambiente.

Execute as migrations e inicie o servidor:
```
npx sequelize db:migrate
npm run dev
```

A API estará disponível em:
👉 http://localhost:3000 (se você não definir uma porta no `.env`, por padrão inicia na 3000)

### 🧱 Status do Projeto

🚧 Em desenvolvimento
