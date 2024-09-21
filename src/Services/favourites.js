import fs from 'fs';

function getAllFavourites() {
  return JSON.parse(fs.readFileSync('favourites.json'));
}

function postOneFavourite(idBook) {
  const listBooks = JSON.parse(fs.readFileSync('books.json'));
  const newFavouriteBook = listBooks.find((book) => book.id == idBook);

  const listFavourites = JSON.parse(fs.readFileSync('favourites.json'));
  const newFavouriteList = [...listFavourites, newFavouriteBook];
  fs.writeFileSync('favourites.json', JSON.stringify(newFavouriteList));
}

function deleteFavourites(id) {
  const listFavourites = JSON.parse(fs.readFileSync('favourites.json'));
  let filteredFavourites = listFavourites.filter((book) => book.id != id);
  fs.writeFileSync('favourites.json', JSON.stringify(filteredFavourites));
}

export { getAllFavourites, deleteFavourites, postOneFavourite };
