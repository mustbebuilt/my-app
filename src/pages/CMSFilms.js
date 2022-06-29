import AddFilm from "../components/AddFilm";
import CMSFilmList from "../components/CMSFilmList";
import MainNav from "../components/MainNav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import useAuth from "../hooks/useAuth";

// const data = [
//   {
//     filmID: "1",
//     filmTitle: "Cinema Paradiso",
//     filmCertificate: "15",
//     filmDescription:
//       "A famous film director returns home to a Sicilian village for the first time after almost 30 years. He reminisces about his childhood at the Cinema Paradiso where Alfredo, the projectionist, first brought about his love of films. He is also reminded of his lost teenage love, Elena, who he had to leave before he left for Rome.",
//     filmImage: "cinemaParadiso.jpg",
//     filmPrice: "0.99",
//     stars: "2",
//     releaseDate: "1988-02-23",
//   },
//   {
//     filmID: "2",
//     filmTitle: "Hear My Song",
//     filmCertificate: "15",
//     filmDescription:
//       "Nightclub owner Mickey O'Neill (Adrian Dunbar), a fast-talking charmer, has figured out a way to save his financial sinkhole of a business: book famous Irish tenor Josef Locke (William Hootkins) for a performance. There are several major problems, however -- Locke has been in exile for years and the man O'Neill has been in contact with is a con artist. O'Neill's reputation is destroyed, but, when the real Locke (Ned Beatty) shows up to perform, his luck may turn for the better.",
//     filmImage: "hearMySong.jpg",
//     filmPrice: "1.50",
//     stars: "5",
//     releaseDate: "1991-03-13",
//   },
// ];

function CMSFilms() {
  const navigate = useNavigate();
  const api = "https://mustbebuilt.co.uk/SHU/films-api/api.php";
  const [isLoading, setIsLoading] = useState(false);
  const [loadedFilms, setLoadedFilms] = useState([]);
  const isAuth = useAuth();
  console.dir(isAuth);
  // the array second parameter controls how freqeuently this runs
  // empty array will run once
  useEffect(() => {
    if (isAuth.auth === false) {
      navigate("/login");
    }
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
      <MainNav></MainNav>
      <h1>All Films React</h1>
      <AddFilm onAddFilm={addFilmHander}></AddFilm>
      <CMSFilmList data={loadedFilms} />
    </div>
  );
}

export default CMSFilms;
