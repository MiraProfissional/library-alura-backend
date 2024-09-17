import fs from 'fs';

function getAllBooks() {
  return JSON.parse(fs.readFileSync('books.json'));
}

function getBookWithId(id) {
  const books = JSON.parse(fs.readFileSync('books.json'));

  const filteredBook = books.filter((book) => book.id == id)[0];

  return filteredBook;
}

function insertBook(newBook) {
  const books = JSON.parse(fs.readFileSync('books.json'));

  const newBooksList = [...books, newBook];

  fs.writeFileSync('books.json', JSON.stringify(newBooksList));
}

export { getAllBooks, getBookWithId, insertBook };
