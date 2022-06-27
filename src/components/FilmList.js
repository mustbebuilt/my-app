import FilmItem from "./FilmItem";

function FilmList(props) {
  return (
    <ul>
      {props.data.map((film) => (
        <FilmItem
          key={film.filmID}
          filmTitle={film.filmTitle}
          myObject={film}
        ></FilmItem>
      ))}
    </ul>
  );
}

export default FilmList;
