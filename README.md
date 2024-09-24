[![CI](https://github.com/MiraProfissional/library-alura-backend/actions/workflows/node.js.yml/badge.svg)](https://github.com/MiraProfissional/library-alura-backend/actions/workflows/node.js.yml)

# AluraBooks - Backend

Este é o repositório do backend do projeto **AluraBooks**, desenvolvido durante o curso da Alura: [Full Stack React e Node.js](https://cursos.alura.com.br/formacao-full-stack-react-node-js). O backend é responsável por fornecer os dados dos livros através de uma API e gerenciar as operações de CRUD.

## Relação com o Frontend

O backend fornece dados e funcionalidades para o frontend, que pode ser encontrado no repositório [library-alura-frontend](https://github.com/MiraProfissional/library-alura-frontend).

## Tecnologias Utilizadas

- **Node.js**: Plataforma utilizada para rodar o backend.
- **Express.js**: Framework para a criação de rotas e serviços RESTful.
- **Cors**: Para permitir a comunicação entre o frontend e o backend.
- **ESLint**: Para garantir a qualidade e consistência do código.
- **Prettier**: Para formatação automática do código.

## Docker

O projeto inclui um `Dockerfile` e um `docker-compose.yml` para facilitar a execução do backend em um container Docker. Para rodar o backend utilizando Docker:

1. Certifique-se de ter o **Docker** instalado e em execução.
2. Construa a imagem:

   ```bash
   docker-compose build
   ```

3. Inicie o container:

   ```bash
   docker-compose up
   ```

4. A API estará disponível em `http://localhost:8000`.

## Funcionalidades

- API para fornecer a lista de livros.
- Operações de CRUD para gerenciamento dos livros.
- Operações de Read, Update e Delete para gerenciamento dos favoritos
- Conexão com o frontend utilizando Axios.

## Rotas da API

- `GET /livros`: Retorna a lista de todos os livros.
- `GET /livros/:id`: Retorna um livro específico pelo seu ID.
- `POST /livros`: Adiciona um novo livro ao banco de dados.
- `PATCH /livros/:id`: Atualiza um livro existente.
- `DELETE /livros/:id`: Remove um livro do banco de dados.
- `GET /favoritos`: Retorna a lista de todos os favoritos.
- `PUT /favoritos/:id`: Atualiza um livro na lista de favoritos.
- `DELETE /favoritos/:id`: Remove um livro da lista de favoritos.

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/MiraProfissional/library-alura-backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode a aplicação:

   ```bash
   npm start
   ```

4. A API estará disponível em `http://localhost:8000`.

## Linting e Formatação

- Utilize o **ESLint** para checar erros de sintaxe e qualidade de código:

  ```bash
  npm run lint
  ```

- Utilize o **Prettier** para formatar automaticamente o código:

  ```bash
  npm run format
  ```

## Contribuições

Sinta-se à vontade para enviar sugestões ou melhorias, criando uma issue ou pull request.
