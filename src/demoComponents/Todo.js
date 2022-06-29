import { useState } from "react";

import Modal from "./Modal";

function Todo(props) {
  // hook
  // array with two elements
  // use array destructuring
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function clickHander() {
    setModelIsOpen(true);
  }

  function closeModal() {
    setModelIsOpen(false);
  }

  return (
    <div>
      <p className='todo'>{props.name}</p>
      <div>
        <button onClick={clickHander}>{props.name}</button>
      </div>
      {/* {modalIsOpen ? <Modal /> : null} */}
      {modalIsOpen && <Modal onClick={closeModal} />}
    </div>
  );
}

export default Todo;
