import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import MyPhoto from "./image/MyPhoto.jpg";
import UseProps from "./Component/UseProps";
import ICardGallery from "./Component/ICardGallery";
import ImbdCard from "./Component/ImbdCard";
import UseReactState from "./Component/UseReactState";
import ImageManupulation from "./Component/ImageManupulation";

function App() {
  // const Name = "Abhishek Kumar";
  // const Roll_No = 2400320100048;
  // const Branch = "CSE";
  // const college = "ABES";
  return (
    <div>
      {/* <UseProps/> */}
      {/* <ICardGallery/> */}
      {/* <ImbdCard/> */}
      {/* <UseReactState /> */}
      <ImageManupulation />
    </div>
  );
}

export default App;
