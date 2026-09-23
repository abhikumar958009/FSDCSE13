import React from "react";
import ICard from "./ICard";
import MyPhoto from "../image/MyPhoto.jpg";

function ICardGallery() {
  const student = [
    {
      pic: MyPhoto,
      name: "Abhishek",
      Roll_No: "24343532",
      Branch: "CSE",
      College: "ABES EBGINEERING COLLEGE",
    },
    {
      pic: MyPhoto,
      name: "Abhishek",
      Roll_No: "24343532",
      Branch: "CSE",
      College: "ABES EBGINEERING COLLEGE",
    },
    {
      pic: MyPhoto,
      name: "Abhishek",
      Roll_No: "24343532",
      Branch: "CSE",
      College: "ABES EBGINEERING COLLEGE",
    },
    {
      pic: MyPhoto,
      name: "Abhishek",
      Roll_No: "24343532",
      Branch: "CSE",
      College: "ABES EBGINEERING COLLEGE",
    },
    {
      pic: MyPhoto,
      name: "Abhishek",
      Roll_No: "24343532",
      Branch: "CSE",
      College: "ABES EBGINEERING COLLEGE",
    },
    {
      pic: MyPhoto,
      name: "Abhishek",
      Roll_No: "24343532",
      Branch: "CSE",
      College: "ABES EBGINEERING COLLEGE",
    },
    {
      pic: MyPhoto,
      name: "Abhishek",
      Roll_No: "24343532",
      Branch: "CSE",
      College: "ABES EBGINEERING COLLEGE",
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {/* <ICard name="Rahul" Roll_No="123456" Branch="CSE" College="ABES ENGG COLLEGE"/>
      <ICard name="Rahul" Roll_No="123456" Branch="CSE" College="ABES ENGG COLLEGE"/>
      <ICard name="Rahul" Roll_No="123456" Branch="CSE" College="ABES ENGG COLLEGE"/>
      <ICard name="Rahul" Roll_No="123456" Branch="CSE" College="ABES ENGG COLLEGE"/> */}
      {/* <ICard data={student[1]} /> */}
      {student.map((ele) => (
        <ICard data={ele} />
      ))}
    </div>
  );
}

export default ICardGallery;
