import React, { useState } from "react";

function ImageManupulation() {
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  function enhanceHeight() {
    setCatHeight(catHeight + 10);
  }
  function enhanceWidht() {
    setCatWidth(catWidth + 10);
  }
  function changeColor() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>ImageManipulation</h1>
      <div
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          border: "2px solid black",
          height: "400px",
          width: "400px",
          marginLeft: "320px",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXHlIWwNlozgmkjciRkTxQkh82HHLZLTKoxKqQamEgw&s"
          alt=""
          height={catHeight}
          width={catWidth}
        />
      </div>
      <div onClick={enhanceHeight}>
        <button>enhanceHeight</button>
        <button onClick={changeColor} style={{ margin: 4 }}>
          ChangeColor
        </button>
      </div>
      <div onClick={enhanceWidht}>
        <button>enhanceWidth</button>
        <button onClick={changeColor} style={{ margin: 4 }}>
          ChangeColor
        </button>
      </div>
    </div>
  );
}

export default ImageManupulation;
