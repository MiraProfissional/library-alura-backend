const { getAllBooks, getBookWithId } = require("../Services/book");

function getBooks (req,res) {
  try {
    const books = getAllBooks()
    res.send(books)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getEspecificBook (req,res) {
  try {
    const bookId = req.params.id;
    const book = getBookWithId(bookId)
    res.send(book)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getEspecificBook
}
