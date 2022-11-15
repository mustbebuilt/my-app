import AddFilm from "../components/AddFilm";
import CMSFilmList from "../components/CMSFilmList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

function CMSFilms() {
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

  function addFilmHander(data) {
    console.dir(data);

    const dataFeed = JSON.stringify(data);
    fetch(api, {
      method: "POST",
      mode: "cors",
      body: dataFeed,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/cms");
    });
  }

  return (
    <div>
      <h1>All Films React</h1>
      <AddFilm onAddFilm={addFilmHander}></AddFilm>
      <CMSFilmList data={loadedFilms} />
    </div>
  );
}

export default CMSFilms;
