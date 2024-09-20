import express from 'express';
import bookRoute from './Routes/book.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }));

const port = 8000;

app.use('/livros', bookRoute);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
