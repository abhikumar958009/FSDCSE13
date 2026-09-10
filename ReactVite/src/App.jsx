import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import MyPhoto from "./image/MyPhoto.jpg";

function App() {
  const Name = "Abhishek Kumar";
  const Roll_No = 2400320100048;
  const Branch = "CSE";
  const college = "ABES";
  return (
    <div style={{ border: "10px solid", width: "300px", height: "350px" }}>
      <h2>Welcome to ReactVite</h2>
      <img src={MyPhoto} height={100} width={100}></img>
      <h2 style={{ color: "red" }}>Name = {Name}</h2>
      <h2 style={{ color: "red" }}>Roll_No = {Roll_No}</h2>
      <h2 style={{ color: "red" }}>Branch = {Branch}</h2>
      <h2 style={{ color: "red" }}>College = {college}</h2>
    </div>
  );
}

export default App;
