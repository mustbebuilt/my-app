import AddFilm from "../components/AddFilm";
import FilmList from "../components/FilmList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AllFilmsPage() {
  const navigate = useNavigate();
  const api = "http://localhost:3001/api/film";
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
      <h1>All Films React</h1>
      <FilmList data={loadedFilms} />
    </div>
  );
}

export default AllFilmsPage;
