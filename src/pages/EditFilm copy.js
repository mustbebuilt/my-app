import MainNav from "../components/MainNav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

function EditFilmPage() {
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

  const editOnClick = (ev) => {
    ev.preventDefault();
    var formData = new FormData(ev.target);
    var sendObject = {};
    formData.forEach(function (value, key) {
      sendObject[key] = value;
    });
    console.dir(sendObject);
    var sendStr = JSON.stringify(sendObject);
    fetch(api, {
      method: "PUT",
      mode: "cors",
      body: sendStr,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.status)
      .then((status) => {
        console.info(status);
        if (status == 202 || status == 200) {
          document.getElementById("resp").innerText = "Updated";
        }
      });
  };

  return (
    <div>
      <MainNav></MainNav>
      <form>
        <div>
          <label>Film Title</label>
          <input type='text' value={loadedFilms.filmTitle} />
        </div>
        <div>
          <label>Film Certificate</label>
          <input type='text' value={loadedFilms.filmCertificate} />
        </div>
        <div>
          <label>Film Description</label>
          <textarea value={loadedFilms.filmDescription}></textarea>
        </div>
        <div>
          <label>Film Image</label>
          <input type='text' value={loadedFilms.filmImage} />
        </div>
        <div>
          <label>Film Price</label>
          <input type='text' value={loadedFilms.filmPrice} />
        </div>
        <div>
          <label>Stars</label>
          <input type='text' value={loadedFilms.stars} />
        </div>
        <div>
          <label>Release Date</label>
          <input type='date' value={loadedFilms.releaseDate} />
        </div>
        <div>
          <button onClick={editOnClick}>Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditFilmPage;
