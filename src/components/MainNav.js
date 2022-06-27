import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import classes from "./MainNav.module.css";

function MainNav() {
  const favCtx = useContext(FavoritesContext);
  const numFavs = favCtx.totalFavorites;

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/all'>All</Link>
        </li>
        <li>
          <Link to='/fav'>Favs {numFavs}</Link>
        </li>
      </ul>
    </nav>
  );
}
export default MainNav;
