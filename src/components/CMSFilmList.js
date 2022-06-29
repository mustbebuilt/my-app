import CMSFilmItem from "./CMSFilmItem";

function CMSFilmList(props) {
  return (
    <ul>
      {props.data.map((film) => (
        <CMSFilmItem
          key={film.filmID}
          filmTitle={film.filmTitle}
          myObject={film}
        ></CMSFilmItem>
      ))}
    </ul>
  );
}

export default CMSFilmList;
