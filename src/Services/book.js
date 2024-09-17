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

function modifyBook(modifications, id) {
  let currentBooks = JSON.parse(fs.readFileSync('books.json'));

  const modifiedIndex = currentBooks.findIndex((book) => book.id == id);

  const modifiedContent = { ...currentBooks[modifiedIndex], ...modifications }; //create an object with the current attributes, and modify it based in the object 'modifications'

  currentBooks[modifiedIndex] = modifiedContent;

  fs.writeFileSync('books.json', JSON.stringify(currentBooks));
}

export { getAllBooks, getBookWithId, insertBook, modifyBook };
