import fs from 'fs';

function getAllFavorites() {
  return JSON.parse(fs.readFileSync('favorites.json'));
}

function postOneFavorite(idBook) {
  const listBooks = JSON.parse(fs.readFileSync('books.json'));
  const newFavoriteBook = listBooks.find((book) => book.id == idBook);

  const listFavorites = JSON.parse(fs.readFileSync('favorites.json'));
  const newFavoriteList = [...listFavorites, newFavoriteBook];
  fs.writeFileSync('favorites.json', JSON.stringify(newFavoriteList));
}

function deleteFavorites(id) {
  const listFavorites = JSON.parse(fs.readFileSync('favorites.json'));
  let filteredFavorites = listFavorites.filter((book) => book.id != id);
  fs.writeFileSync('favorites.json', JSON.stringify(filteredFavorites));
}

export { getAllFavorites, deleteFavorites, postOneFavorite };
