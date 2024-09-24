import { Router } from 'express';
import {
  getFavorites,
  deleteFavoriteBook,
  postFavorite,
} from '../Controller/favorites.js';

const router = Router();

router.get('/', getFavorites);

router.post('/:id', postFavorite);

router.delete('/:id', deleteFavoriteBook);

export default router;
