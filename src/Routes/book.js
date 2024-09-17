import { Router } from 'express';
import { getBooks, getEspecificBook, postBook } from './Controler/book.js';

const router = Router();

router.get('/', getBooks);

router.get('/:id', getEspecificBook);

router.post('/', postBook);

router.patch('/', (req, res) => {
  res.send('Requisicao de PATCH');
});

router.delete('/', (req, res) => {
  res.send('Requisicao de DELETE');
});

export default router;
