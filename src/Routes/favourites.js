import { Router } from 'express';
import {
  getFavourites,
  deleteFavouriteBook,
  postFavourite,
} from '../Controller/favourites.js';

const router = Router();

router.get('/', getFavourites);

router.post('/', postFavourite);

router.delete('/:id', deleteFavouriteBook);

export default router;
