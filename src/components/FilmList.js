import FilmItem from "./FilmItem";

function FilmList(props) {
  console.dir(props);
  return (
    <ul>
      {props.data.map((film) => (
        <FilmItem
          key={film._id}
          filmTitle={film.filmTitle}
          myObject={film}
        ></FilmItem>
      ))}
    </ul>
  );
}

export default FilmList;
