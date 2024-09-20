import fs from 'fs';

function getAllFavourites() {
  return JSON.parse(fs.readFileSync('favourites.json'));
}

export { getAllFavourites };
