import DeleteFilm from "../components/DeleteFilm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CMSOneFilm() {
  const { id } = useParams();
  console.info(id);
  const api = "http://localhost:3001/api/film/" + id;
  const [isLoading, setIsLoading] = useState(false);
  const [loadedFilms, setLoadedFilms] = useState([]);

  const newNav = `/edit/${loadedFilms._id}`;

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
      <p>{loadedFilms.filmCertificate}</p>
      <p>{loadedFilms.filmDescription}</p>
      <p>{loadedFilms.filmImage}</p>
      <p>{loadedFilms.filmPrice}</p>
      <p>{loadedFilms.stars}</p>
      <p>{loadedFilms.releaseDate}</p>
      <p>{new Date(loadedFilms.releaseDate).toDateString()}</p>
      {/* <p>{format(loadedFilms.releaseDate, "dd/mm/yyyy")}</p> */}
      <Link to={newNav}>Edit</Link>
      <DeleteFilm filmID={loadedFilms._id}></DeleteFilm>
    </div>
  );
}

export default CMSOneFilm;
