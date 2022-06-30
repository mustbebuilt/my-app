import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";
import useAuth from "../hooks/useAuth";
import classes from "./MainNav.module.css";

function MainNav() {
  const favCtx = useContext(FavoritesContext);
  const numFavs = favCtx.totalFavorites;
  const { auth, setAuth } = useAuth();
  console.dir(auth);
  const navigate = useNavigate();
  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
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
          {auth.user && (
            <a href='#' onClick={logout}>
              Log Out ({auth.user})
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default MainNav;
