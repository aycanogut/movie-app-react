import { useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);
  };

  const removeFavorite = (favorite) => {
    setFavorites(favorites.filter((f) => f.id !== favorite.id));
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};

export default useFavorites;
