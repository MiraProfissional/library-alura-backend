import {
  getAllFavorites,
  postOneFavorite,
  deleteFavorites,
} from '../Services/favorites.js';

function getFavorites(req, res) {
  try {
    const favorites = getAllFavorites();
    res.send(favorites);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorite(req, res) {
  try {
    const bookId = req.params.id;
    if (bookId && Number(bookId)) {
      postOneFavorite(bookId);
      res.send('Favorite post successfully');
    } else {
      res.status(422);
      res.send('Invalid ID');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavoriteBook(req, res) {
  try {
    const favoriteID = req.params.id;
    if (favoriteID && Number(favoriteID)) {
      deleteFavorites(favoriteID);
      res.send('Favorite delete successfully');
    } else {
      res.status(422);
      res.send('Invalid ID');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export { getFavorites, postFavorite, deleteFavoriteBook };
