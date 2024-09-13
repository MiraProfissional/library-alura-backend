function getBooks (req,res) {
  try {
    res.send("Requisicao de GET");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks
}
