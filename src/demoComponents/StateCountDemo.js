import { useState } from "react";
function StateCountDemo() {
  const [myCounter, setMyCounter] = useState(0);
  const incrementCount = () => {
    setMyCounter(myCounter + 1);
    console.info(myCounter);
  };
  return (
    <>
      <h2>Count Demo</h2>
      <button onClick={incrementCount}>Increment Value</button>
      <p>{myCounter}</p>
    </>
  );
}
export default StateCountDemo;
