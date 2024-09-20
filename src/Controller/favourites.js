import { getAllFavourites, deleteFavourites } from '../Services/favourites.js';

function getFavourite(req, res) {
  try {
    const favourites = getAllFavourites();
    res.send(favourites);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavouriteBook(req, res) {
  try {
    const favouriteID = req.params.id;
    if (favouriteID && Number(favouriteID)) {
      deleteFavourites(favouriteID);
      res.send('Favourite delete successfully');
    } else {
      res.status(422);
      res.send('Invalid ID');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export { getFavourite, deleteFavouriteBook };
