import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFav: (favFilm) => {},
  removeFav: (favFilmID) => {},
  itemFav: (favFilmID) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState(() => {
    return getStorageValue("favs");
  });

  function getStorageValue(key) {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : [];
      return initial;
    }
  }

  function addFavoriteHandler(favFilm) {
    console.dir(favFilm);
    setUserFavorites((prevUserFavorites) => {
      let temp = prevUserFavorites.concat(favFilm);
      localStorage.setItem("favs", JSON.stringify(temp));
      return temp;
    });
  }
  function removeFavoriteHandler(favFilmID) {
    setUserFavorites((prevUserFavorites) => {
      let temp = prevUserFavorites.filter(
        (favFilm) => favFilm.filmID !== favFilmID
      );
      localStorage.setItem("favs", JSON.stringify(temp));
      return temp;
    });
  }
  function itemIsFavoriteHandler(favFilmID) {
    return userFavorites.some((favFilm) => favFilm.filmID === favFilmID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFav: addFavoriteHandler,
    removeFav: removeFavoriteHandler,
    itemFav: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
