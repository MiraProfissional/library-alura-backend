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

    if (bookId && Number(bookId)) {
      const book = getBookWithId(bookId);
      res.send(book);
    } else {
      res.status(422);
      res.send('Invalid ID');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    if (req.body.name) {
      insertBook(newBook);
      res.status(201);
      res.send('Book insertion successfully');
    } else {
      res.status(422);
      res.send('The field name is required');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const bookId = req.params.id;
    if (bookId && Number(bookId)) {
      const body = req.body;
      modifyBook(body, bookId);
      res.send('Book modified successfully');
    } else {
      res.status(422);
      res.send('Invalid ID');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const bookId = req.params.id;
    if (bookId && Number(bookId)) {
      deleteBookById(bookId);
      res.send('Book delete successfully');
    } else {
      res.status(422);
      res.send('Invalid ID');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export { getBooks, getEspecificBook, postBook, patchBook, deleteBook };
