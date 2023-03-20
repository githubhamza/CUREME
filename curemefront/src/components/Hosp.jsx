import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleHosp from "./SingleHosp";
import { Container, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { isLoggedIn, getLoggedInUser, isAdmin } from "./check";
const Hosp = () => {
  const [hosp, setHosp] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [imglink, setImglink] = useState("");
  const getData = () => {
    axios
      .get("http://localhost:4000/api/hospitals")
      .then((res) => {
        setHosp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(hosp.length);
  React.useEffect(getData, []);
  console.log(isAdmin());
  return (
    <div>
      <h1
        style={{
          paddingTop: "100px",
          textAlign: "center",
          marginBottom: "3%",
          color: "#025766",
        }}
      >
        Best Hospitals
      </h1>
      <Container
        style={{
          backgroundColor: "#e5fffa",
          padding: "2%",
        }}
      >
        {isAdmin() && (
          <div style={{ textAlign: "center", marginBottom: "2%" }}>
            <Button onClick={handleShow} style={{ width: "50%" }}>
              Add Hosp
            </Button>
          </div>
        )}

        {hosp.map((hosp) => (
          <SingleHosp hosp={hosp} onDelete={getData} />
        ))}
      </Container>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "3%" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Hospital</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image Url"
                value={imglink}
                onChange={(e) => {
                  setImglink(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("http://localhost:4000/api/hospitals", {
                  name,
                  contact,
                  address,
                  location,
                  imglink,
                })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
              handleClose();
            }}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Hosp;
