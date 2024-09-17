import { Router } from 'express';
import {
  getBooks,
  getEspecificBook,
  postBook,
  patchBook,
} from '../Controller/book.js';

const router = Router();

router.get('/', getBooks);

router.get('/:id', getEspecificBook);

router.post('/', postBook);

router.patch('/:id', patchBook);

router.delete('/', (req, res) => {
  res.send('Requisicao de DELETE');
});

export default router;
