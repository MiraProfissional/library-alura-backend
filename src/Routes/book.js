const { Router } = require('express');
const { getBooks, getEspecificBook, postBook } = require('../Controler/book');

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

module.exports = router;
