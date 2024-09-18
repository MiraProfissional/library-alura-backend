import {
  getAllBooks,
  getBookWithId,
  insertBook,
  modifyBook,
  deleteBookById,
} from '../Services/book.js';

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

function patchBook(req, res) {
  try {
    const bookId = req.params.id;
    const body = req.body;
    modifyBook(body, bookId);
    res.send('Book modified successfully');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const bookId = req.params.id;
    deleteBookById(bookId);
    res.send('Book delete successfully');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export { getBooks, getEspecificBook, postBook, patchBook, deleteBook };
