import React from "react";
import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import SingleDermatologists from "./SingleDermatologist";
import axios from "axios";
const Dermatologist = () => {
  const [doc, setDoc] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/api/doctors")
      .then((res) => {
        setDoc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(doc.length);
  React.useEffect(getData, []);
  return (
    <>
      <h1
        style={{
          paddingTop: "100px",
          textAlign: "center",
          marginBottom: "3%",
          color: "#025766",
        }}
      >
        Dermatologists
      </h1>
      <Container
        style={{
          backgroundColor: "#e5fffa",
          padding: "2%",
        }}
      >
        {doc.map((doc) => (
          <SingleDermatologists doc={doc} />
        ))}
      </Container>
    </>
  );
};

export default Dermatologist;
