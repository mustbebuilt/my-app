import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function FilmItem(props) {
  const favCtx = useContext(FavoritesContext);

  let id = props.myObject.filmID;
  //console.info(id);
  //console.dir(favCtx);
  const itemIsFav = favCtx.itemFav(id);
  console.dir(itemIsFav);
  function toggleFavHandler() {
    if (itemIsFav) {
      favCtx.removeFav(id);
    } else {
      console.dir(props.myObject);
      favCtx.addFav(props.myObject);
    }
  }
  // function gotoHandler(){
  //       navigate("/");
  // }

  const newNav = `/one/${props.myObject.filmID}`;
  return (
    <div>
      <h2>{props.filmTitle}</h2>
      <p>{props.myObject.filmDescription}</p>
      <Link to={newNav}>View More</Link>
      <button onClick={toggleFavHandler}>
        {itemIsFav ? "Remove from Favourites" : "Save to Favourites"}
      </button>
    </div>
  );
}

export default FilmItem;
