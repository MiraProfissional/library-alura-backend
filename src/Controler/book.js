const { getAllBooks, getBookWithId, insertBook } = require('../Services/book');

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getEspecificBook(req, res) {
  try {
    const bookId = req.params.id;
    const book = getBookWithId(bookId);
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    insertBook(newBook);
    res.status(201);
    res.send('Book insertion successfully');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getEspecificBook,
  postBook,
};
