import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import signUp from "../images/signup.png";
import uiImg from "../images/ui2.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Container style={{ marginTop: "10%" }}>
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center">
            <img className="icon-img" src={signUp} alt="icon" />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Control
                  type="text"
                  placeholder="Enter contact"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  axios
                    .post("http://localhost:4000/api/users/register", {
                      name,
                      email,
                      contact,
                      password,
                    })
                    .then((res) => {
                      console.log(res.data);
                      navigate("/Login");
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Sign Up
              </Button>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img src={uiImg} className="w-100"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
