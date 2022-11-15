import CMSFilmItem from "./CMSFilmItem";

function CMSFilmList(props) {
  return (
    <ul>
      {props.data.map((film) => (
        <CMSFilmItem
          key={film._id}
          filmTitle={film.filmTitle}
          myObject={film}
        ></CMSFilmItem>
      ))}
    </ul>
  );
}

export default CMSFilmList;
