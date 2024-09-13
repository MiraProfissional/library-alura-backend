const { Router } = require("express");
const { getBooks } = require("../Controler/book")

const router = Router();

router.get('/', getBooks);

router.post('/', (req,res) => {
  res.send("Requisicao de POST");
});

router.patch('/', (req,res) => {
  res.send("Requisicao de PATCH");
});

router.delete('/', (req,res) => {
  res.send("Requisicao de DELETE");
});

module.exports = router
