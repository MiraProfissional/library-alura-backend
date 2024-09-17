const express = require('express');
const bookRoute = require('./Routes/book');

const app = express();

app.use(express.json());

const port = 3333;

app.use('/livros', bookRoute);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
