function Modal(props) {
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button onClick={props.onClick}>Close</button>
    </div>
  );
}

export default Modal;
