import fs from 'fs';

function getAllFavourites() {
  return JSON.parse(fs.readFileSync('favourites.json'));
}

function deleteFavourites(id) {
  let listFavourites = JSON.parse(fs.readFileSync('favourites.json'));
  let filteredFavourites = listFavourites.filter((book) => book.id != id);
  fs.writeFileSync('favourites.json', JSON.stringify(filteredFavourites));
}

export { getAllFavourites, deleteFavourites };
