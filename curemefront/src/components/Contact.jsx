import React from "react";
import { useState } from "react";
import { Container, Form, Row, Col, Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import loginIcon from "../images/login.png";
import contactimg from "../images/contactus.jpg";

import "./login.css";
const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container style={{ marginTop: "10%" }}>
        <Row>
          <Col
            lg={4}
            md={6}
            sm={12}
            className="text-center"
            style={{ margin: "auto" }}
          >
            <h1>Contact Us</h1>
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
              Hi! CALL US
            </Button>
            <a
              href="mailto:support@cureme.com"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                style={{ borderRadius: "10px", width: "75%" }}
              >
                Email Us
              </Button>
            </a>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img src={contactimg} className="w-100"></img>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} style={{ marginTop: "10%" }}>
          <Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
              We are here to help you :) Feel free to call our helpline
            </Modal.Body>
          </Modal.Header>
          <Modal.Body
            style={{ textAlign: "center", backgroundColor: "#e5fffa" }}
          >
            042-111-111-222
          </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" color="error" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Contact;
