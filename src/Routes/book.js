import { Router } from 'express';
import {
  getBooks,
  getEspecificBook,
  postBook,
  patchBook,
  deleteBook,
} from '../Controller/book.js';

const router = Router();

router.get('/', getBooks);

router.get('/:id', getEspecificBook);

router.post('/', postBook);

router.patch('/:id', patchBook);

router.delete('/:id', deleteBook);

export default router;
