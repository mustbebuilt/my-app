import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OneFilmPage() {
  const { id } = useParams();
  console.info(id);
  const api = "https://mustbebuilt.co.uk/SHU/films-api/api.php?filmID=" + id;
  const [isLoading, setIsLoading] = useState(false);
  const [loadedFilms, setLoadedFilms] = useState([]);

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
      <h1>{loadedFilms.filmTitle}</h1>
      <img
        src={"/images/" + loadedFilms.filmImage}
        alt={loadedFilms.filmTitle}
      ></img>
      <p>{loadedFilms.filmCertificate}</p>
      <p>{loadedFilms.filmDescription}</p>
      <p>{loadedFilms.filmImage}</p>
      <p>{loadedFilms.filmPrice}</p>
      <p>{loadedFilms.stars}</p>
      <p>{loadedFilms.releaseDate}</p>
      <p>{new Date(loadedFilms.releaseDate).toDateString()}</p>
    </div>
  );
}

export default OneFilmPage;
