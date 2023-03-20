import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

function getLoggedInUser() {
  try {
    let token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (ex) {
    return null;
  }
}
const DocHome = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [education, setEducation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [days, setDays] = useState("");
  const [imglink, setImgLink] = useState("");
  const [password, setPassword] = useState("");
  const [fees, setFees] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const id = getLoggedInUser()._id;

  React.useEffect(() => {
    axios
      .get("htttp://localhost:4000/api/doctors/" + id)
      .then((res) => {
        setName(res.data.name);
        setContact(res.data.contact);
        setEducation(res.data.education);
        setSpecialization(res.data.setSpecialization);
        setStartTime(res.data.setStartTime);
        setEndTime(res.data.endTime);
        setDays(res.data.setDays);
        setImgLink(res.data.imglink);
        setPassword(res.data.password);
        setFees(res.data.fees);
        setEmail(res.data.email);
        setRole(res.data.role);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <Container style={{ marginTop: "5%" }}>
        <h1>{name}</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
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
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Education"
              value={education}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSpecialization">
            <Form.Label>Specialization</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Specialization"
              value={specialization}
              onChange={(e) => {
                setSpecialization(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSpecialization">
            <Form.Label>Days</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Specialization"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStartTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Start Time"
              value={startTime}
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEndTime">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter End Time"
              value={endTime}
              onChange={(e) => {
                setEndTime(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImageLink">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image Link"
              value={imglink}
              onChange={(e) => {
                setImgLink(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFees">
            <Form.Label>Fees</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Fees"
              value={fees}
              onChange={(e) => {
                setFees(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
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
              axios
                .put("http://localhost:4000/api/doctors/" + id, {
                  name,
                  contact,
                  education,
                  specialization,
                  startTime,
                  endTime,
                  days,
                  imglink,
                  password,
                  fees,
                  email,
                  role,
                })
                .then((response) => {
                  console.log("updated");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default DocHome;
