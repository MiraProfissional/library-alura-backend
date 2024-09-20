import { Router } from 'express';
import { getFavourite, deleteFavouriteBook } from '../Controller/favourites.js';

const router = Router();

router.get('/', getFavourite);

router.delete('/:id', deleteFavouriteBook);

export default router;
