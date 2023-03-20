import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import loginIcon from "../images/login.png";
import uiImg from "../images/ui.jpg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const DocLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Container style={{ marginTop: "10%" }}>
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center">
            <img className="icon-img" src={loginIcon} alt="icon" />
            <Form>
              <Form.Group className="mb-3" controlId="docEmailId">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="docPassId">
                <Form.Control
                  type="password"
                  placeholder="Password"
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
                    .post("http://localhost:4000/api/doctors/login", {
                      email,
                      password,
                    })
                    .then((token) => {
                      localStorage.setItem("token", token.data);
                      navigate("/docHome");
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Login
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

export default DocLogin;
