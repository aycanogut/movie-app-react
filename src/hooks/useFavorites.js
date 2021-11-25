import { useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    const existingFavorite = favorites.find(
      (favoriteItem) => favoriteItem.id === favorite.id
    );

    if (!existingFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, favorite]);
    }
  };

  const removeFavorite = (favorite) => {
    const filteredFavorites = favorites.filter(
      (favoriteItem) => favoriteItem.id !== favorite.id
    );
    setFavorites(filteredFavorites);
  };

  return {
    favorites,
    addFavorite,
    setFavorites,
    removeFavorite,
  };
};

export default useFavorites;
