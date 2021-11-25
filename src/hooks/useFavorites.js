import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    const existingFavorite = favorites.find(
      (favoriteItem) => favoriteItem.id === favorite.id
    );

    if (!existingFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, favorite]);
      toast.success("Item added to the watchlist!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toaster",
      });
    } else {
      toast.warning("Item is already on your list!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toaster",
      });
    }
  };

  const removeFavorite = (favorite) => {
    const filteredFavorites = favorites.filter((favoriteItem) => {
      favoriteItem.id !== favorite.id;

      toast.error("Item removed from the watchlist!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toaster",
      });
    });

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
