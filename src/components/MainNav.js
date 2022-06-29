import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";
import useAuth from "../hooks/useAuth";
import classes from "./MainNav.module.css";

function MainNav() {
  const favCtx = useContext(FavoritesContext);
  const numFavs = favCtx.totalFavorites;
  const { setAuth } = useAuth();
  const isAuth = useAuth();
  console.info(isAuth);
  const navigate = useNavigate();
  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth(false);
    navigate("/");
  };

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
        <li>
          <Link to='/cms'>CMS</Link>
        </li>
        <li>
          <Link to='/demolist'>Demos</Link>
        </li>
        <li>
          {isAuth.auth && (
            <a href='#' onClick={logout}>
              Log Out
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default MainNav;
