import { useState } from "react";
import { useNavigate } from "react-router-dom";
function DeleteFilm(props) {
  const navigate = useNavigate();
  const [visible, setVisibility] = useState(true);
  const [modalVisible, setModalVisibility] = useState(false);
  const showDelete = () => {
    setModalVisibility(true);
    setVisibility(false);
  };
  const yesDelete = () => {
    console.info("kill film" + props.filmID);
    const api =
      "https://mustbebuilt.co.uk/SHU/films-api/api.php?filmID=" + props.filmID;
    fetch(api, {
      method: "DELETE",
      mode: "cors",
    })
      .then((response) => response.status)
      .then((status) => {
        if (status === 202 || status === 200) {
          navigate("/cms");
        }
      });
  };
  const noKeep = () => {
    console.info("keep film" + props.filmID);
    setModalVisibility(false);
    setVisibility(true);
  };
  return (
    <div>
      {visible && <button onClick={showDelete}>Delete</button>}
      {modalVisible && (
        <div>
          <p>Are you sure you'd like to delete the film?</p>
          <p>
            <button onClick={yesDelete}>Yes Delete</button>
            <button onClick={noKeep}>No Keep the film</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default DeleteFilm;
