import MainNav from "../components/MainNav";
import DeleteFilm from "../components/DeleteFilm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function OneFilmPage() {
  const { id } = useParams();
  console.info(id);
  const api = "https://mustbebuilt.co.uk/SHU/films-api/api.php?filmID=" + id;
  const [isLoading, setIsLoading] = useState(false);
  const [loadedFilms, setLoadedFilms] = useState([]);

  const newNav = `/edit/${loadedFilms.filmID}`;

  // the array second parameter controls how freqeuently this runs
  // empty array will run once
  useEffect(() => {
    setIsLoading(true);
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedFilms(data);
      });

    if (isLoading) {
      return <div>Loading</div>;
    }
  }, []);

  return (
    <div>
      <MainNav></MainNav>
      <h1>{loadedFilms.filmTitle}</h1>
      <p>{loadedFilms.filmCertificate}</p>
      <p>{loadedFilms.filmDescription}</p>
      <p>{loadedFilms.filmImage}</p>
      <p>{loadedFilms.filmPrice}</p>
      <p>{loadedFilms.stars}</p>
      <p>{loadedFilms.releaseDate}</p>
      <p>{new Date(loadedFilms.releaseDate).toDateString()}</p>
      {/* <p>{format(loadedFilms.releaseDate, "dd/mm/yyyy")}</p> */}
      <Link to={newNav}>Edit</Link>
      <DeleteFilm filmID={loadedFilms.filmID}></DeleteFilm>
    </div>
  );
}

export default OneFilmPage;
