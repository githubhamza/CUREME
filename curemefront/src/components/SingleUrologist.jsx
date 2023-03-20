import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import { isLoggedIn } from "./check";
import { useNavigate } from "react-router-dom";

const SingleUrologist = ({ doc }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  if (doc.specialization == "Urologist") {
    return (
      <div>
        <Row style={{ marginBottom: "3%" }}>
          <Col xs={12} md={3} style={{ textAlign: "center", margin: "auto" }}>
            <img
              src={doc.imglink}
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "100%",
              }}
            ></img>
          </Col>
          <Col xs={8} md={6} style={{ margin: "auto" }}>
            <h3>{doc.name}</h3>
            <p>
              <b>Education:</b> {doc.education}{" "}
              <b style={{ marginLeft: "2%" }}>Specialization:</b>{" "}
              {doc.specialization}
            </p>
            <p>
              <b>Fee:</b> {doc.fees} <b style={{ marginLeft: "2%" }}>Days:</b>{" "}
              {doc.days}
            </p>
            <p>
              <b>From:</b> {doc.startTime}{" "}
              <b style={{ marginLeft: "2%" }}>Till:</b> {doc.endTime}
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
              Call Doctor
            </Button>
            {isLoggedIn() ? (
              <a href="/">
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  style={{ borderRadius: "10px", width: "75%" }}
                >
                  Book Appointment
                </Button>
              </a>
            ) : (
              <a href="/Login">
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  style={{ borderRadius: "10px", width: "75%" }}
                >
                  Book Appointment
                </Button>
              </a>
            )}
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} style={{ marginTop: "10%" }}>
          <Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
              Call Your Doctor Right Away
            </Modal.Body>
          </Modal.Header>
          <Modal.Body
            style={{ textAlign: "center", backgroundColor: "#e5fffa" }}
          >
            {doc.contact}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" color="error" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  return <></>;
};

export default SingleUrologist;
