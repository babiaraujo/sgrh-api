# Sistema de Gerenciamento de Recursos Humanos (SGRH) - API

Este projeto consiste em uma API para um Sistema de Gerenciamento de Recursos Humanos, desenvolvido utilizando Node.js, Express e Sequelize. A API permite realizar operações CRUD (Create, Read, Update, Delete) para as entidades Funcionário, Departamento, Cargo e Projeto, facilitando a gestão de informações relacionadas aos recursos humanos de uma empresa.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM para interação com banco de dados)
- MySQL (Banco de dados relacional)

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js (https://nodejs.org/)
- MySQL Server (https://dev.mysql.com/downloads/)

## Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/sgrh-api.git
   cd sgrh-api

3. Configuração do Banco de Dados:

Certifique-se de ter um servidor MySQL em execução.
Configure as credenciais do banco de dados em config/database.js.

4.Executar as Migrações do Banco de Dados:

O Sequelize utiliza migrações para criar e alterar tabelas no banco de dados. Execute o seguinte comando para criar as tabelas necessárias:

```bash
npx sequelize-cli db:migrate
```

5. Executar a Aplicação:
```bash
node app.js
```

A aplicação será executada localmente em http://localhost:3000.
