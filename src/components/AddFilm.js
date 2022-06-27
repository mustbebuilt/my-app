import { useRef } from "react";

function AddFilm(props) {
  const titleInputRef = useRef();
  const certInputRef = useRef();
  const descInputRef = useRef();
  const imgInputRef = useRef();
  const priceInputRef = useRef();
  const starsInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(ev) {
    ev.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredCert = certInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredImg = imgInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredStars = starsInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const newFilm = {
      filmTitle: enteredTitle,
      filmCertificate: enteredCert,
      filmDescription: enteredDesc,
      filmImage: enteredImg,
      filmPrice: enteredPrice,
      stars: enteredStars,
      releaseDate: enteredDate,
    };

    console.dir(newFilm);
    props.onAddFilm(newFilm);
  }

  return (
    <div>
      <h1>Add Film</h1>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='FilmTitle'>Film Title</label>
          <input type='text' id='FilmTitle' ref={titleInputRef} />
        </div>

        <div>
          <label htmlFor='FilmCertificate'>Film Certificate</label>
          <input type='text' id='FilmCertificate' ref={certInputRef} />
        </div>

        <div>
          <label htmlFor='FilmDescription'>Film Description</label>
          <textarea id='FilmDescription' ref={descInputRef}></textarea>
        </div>

        <div>
          <label htmlFor='FilmImage'>Film Image</label>
          <input id='FilmImage' ref={imgInputRef} />
        </div>

        <div>
          <label htmlFor='FilmPrice'>Film Price</label>
          <input type='text' id='FilmPrice' ref={priceInputRef} />
        </div>

        <div>
          <label htmlFor='Stars'>Stars</label>
          <input type='text' id='Stars' ref={starsInputRef} />
        </div>

        <div>
          <label htmlFor='ReleaseDate'>Release Date</label>
          <input type='date' id='ReleaseDate' ref={dateInputRef} />
        </div>

        <div>
          <input type='submit' value='Add' className='add' />
        </div>
      </form>
    </div>
  );
}

export default AddFilm;
