import React, { useState } from "react";

function UseReactState() {
  const [counter, setcounter] = useState(0);
  function increaseVlaue() {
    setcounter(counter + 5);
  }
   function decreaseVlaue() {
    setcounter(counter -1);
  }
  return (
    <div>
      <h2 style={{ color: "green" }}>Use React State</h2>
      <h1 style={{ color: "red" }}>Counter = {counter}</h1>
      <button onClick={increaseVlaue}>Increase</button>
      <button onClick={decreaseVlaue}style={{margin:5}}>Decrease</button>
    </div>
  );
}

export default UseReactState;
