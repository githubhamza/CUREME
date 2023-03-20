import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Modal, Form } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
import { isLoggedIn, getLoggedInUser, isAdmin } from "./check";

const SingleHosp = ({ hosp, onDelete }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => setShow2(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [imglink, setImglink] = useState("");
  return (
    <div>
      <Row style={{ marginBottom: "3%" }}>
        <Col xs={12} md={3} style={{ textAlign: "center" }}>
          <img
            src={hosp.imglink}
            style={{ height: "150px", width: "150px", borderRadius: "100%" }}
          ></img>
        </Col>
        <Col xs={8} md={6} style={{ margin: "auto" }}>
          <h3>{hosp.name}</h3>
          <p>
            <b>Address:</b> {hosp.address}
          </p>
        </Col>
        <Col xs={4} md={3} style={{ textAlign: "center", margin: "auto" }}>
          <Button
            sx={{ marginLeft: "auto" }}
            variant="contained"
            style={{
              borderRadius: "10px",
              width: "75%",
              marginBottom: "5px",
            }}
            onClick={handleShow}
          >
            Call Helpline
          </Button>
          <a
            href={hosp.location}
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
          >
            <Button
              sx={{ marginLeft: "auto" }}
              variant="contained"
              style={{
                borderRadius: "10px",
                width: "75%",
                marginBottom: "5px",
              }}
            >
              Open Location
            </Button>
          </a>
          {isAdmin() && (
            <>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                style={{ borderRadius: "10px", width: "37%" }}
                color="error"
                onClick={(e) => {
                  axios
                    .delete("http://localhost:4000/api/hospitals/" + hosp._id)
                    .then((res) => {
                      console.log(res.data);
                      onDelete();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Delete
              </Button>

              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                style={{
                  borderRadius: "10px",
                  width: "37%",
                  marginLeft: "1%",
                }}
                color="warning"
                onClick={handleShow2}
              >
                Update
              </Button>
            </>
          )}
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} style={{ marginTop: "10%" }}>
        <Modal.Header>
          <Modal.Body style={{ textAlign: "center" }}>
            We are here to help you :) Feel free to call our helpline
          </Modal.Body>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center", backgroundColor: "#e5fffa" }}>
          {hosp.contact}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} style={{ marginTop: "3%" }}>
        <Modal.Header closeButton>
          <Modal.Title>Update Hospital</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={hosp.name}
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
                value={hosp.address}
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
                value={hosp.contact}
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
                value={hosp.location}
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
                value={hosp.imglink}
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
                .put("http://localhost:4000/api/hospitals/" + hosp._id, {
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

export default SingleHosp;
