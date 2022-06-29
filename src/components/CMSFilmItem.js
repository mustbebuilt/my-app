import { useContext } from "react";
import { Link } from "react-router-dom";

function CMSFilmItem(props) {
  let id = props.myObject.filmID;

  const newNav = `/cmsmone/${props.myObject.filmID}`;
  return (
    <div>
      <h2>{props.filmTitle}</h2>
      <Link to={newNav}>View More</Link>
    </div>
  );
}

export default CMSFilmItem;
