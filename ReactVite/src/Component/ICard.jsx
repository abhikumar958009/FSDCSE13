import React from "react";

function ICard({ data }) {
  return (
    <div style={{ border: "2px solid", width: "300px", height: "400px" }}>
      <img src={data.pic} height={150} width={150} alt=""></img>
      <h2>Name: {data.name}</h2>
      <h2>Roll_No: {data.Roll_No}</h2>
      <h2>Branch : {data.Branch}</h2>
      <h2>College: {data.College}</h2>
    </div>
  );
}

export default ICard;
