import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import FilmList from "../components/FilmList";

function FavoritesPage() {
  const favCtx = useContext(FavoritesContext);
  console.dir(favCtx);
  console.info(favCtx.favorites);
  let content;
  if (favCtx.totalFavorites === 0) {
    content = <p>Not chosen.</p>;
  } else {
    content = <FilmList data={favCtx.favorites}></FilmList>;
  }
  return (
    <div>
      <h2>My Favs</h2>
      {content}
    </div>
  );
}
export default FavoritesPage;
