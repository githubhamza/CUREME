import React from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
const LandingPage = () => {
  return (
    <>
      <Carousel style={{ marginTop: "4%" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../src/images/caro1.jpg")}
            alt="First slide"
            style={{ height: "50%", width: "100%", display: "inline-block" }}
          />
          <Carousel.Caption>
            <a href="/Doc" style={{ textDecoration: "none", color: "inherit" }}>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                style={{ borderRadius: "10px", marginRight: "1%" }}
                color="error"
              >
                Doctors Here !
              </Button>
            </a>
            <a
              href="/docSignup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                style={{ borderRadius: "10px" }}
                color="error"
              >
                Are You A Doctor
              </Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../src/images/caro2.jpg")}
            alt="Second slide"
            style={{ height: "50%", width: "100%", display: "inline-block" }}
          />

          <Carousel.Caption>
            <Button
              sx={{ marginLeft: "auto" }}
              variant="contained"
              style={{ borderRadius: "10px" }}
              color="error"
            >
              Find Hospitals !
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../src/images/caro3.jpg")}
            alt="Third slide"
            style={{ height: "50%", width: "100%", display: "inline-block" }}
          />

          <Carousel.Caption>
            <Button
              sx={{ marginLeft: "auto" }}
              variant="contained"
              style={{ borderRadius: "10px" }}
              color="error"
            >
              Health Blog !
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*  */}
      <div style={{ textAlign: "center", marginTop: "2%" }}>
        <h1
          style={{
            color: "#025766",
          }}
        >
          Top Specialities
        </h1>
      </div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/s1.jpg")}
              />
              <Card.Body>
                <Card.Title>Dermatologist</Card.Title>
                <a
                  href="/Dermatologist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/s2.jpg")}
              />
              <Card.Body>
                <Card.Title>Gastroenterilogist</Card.Title>
                <a
                  href="/Gastroenterilogist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/s3.jpg")}
              />
              <Card.Body>
                <Card.Title>Urologist</Card.Title>
                <a
                  href="/Urologist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/s4.jpg")}
              />
              <Card.Body>
                <Card.Title>Child Specialist</Card.Title>
                <a
                  href="/childSpecialist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/s5.jpg")}
              />
              <Card.Body>
                <Card.Title>Gynecologist</Card.Title>
                <a
                  href="/Gynecologist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/s6.jpg")}
              />
              <Card.Body>
                <Card.Title>General Physician</Card.Title>
                <a
                  href="/generalPhysician"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/*  */}
      <div style={{ textAlign: "center", marginTop: "2%" }}>
        <h1
          style={{
            color: "#025766",
          }}
        >
          Top Diseases
        </h1>
      </div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d1.jpg")}
              />
              <Card.Body>
                <Card.Title>Acne</Card.Title>
                <a
                  href="/Dermatologist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d2.jpg")}
              />
              <Card.Body>
                <Card.Title>Heart Burn</Card.Title>
                <a
                  href="/Gastroenterilogist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d3.jpg")}
              />
              <Card.Body>
                <Card.Title>Kidney Stones</Card.Title>
                <a
                  href="/Urologist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d4.jpg")}
              />
              <Card.Body>
                <Card.Title>Chickenpox </Card.Title>
                <a
                  href="/childSpecialist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d5.jpg")}
              />
              <Card.Body>
                <Card.Title>Dysmenorrhea</Card.Title>
                <a
                  href="/Gynecologist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d6.jpg")}
              />
              <Card.Body>
                <Card.Title>Allergies</Card.Title>
                <a
                  href="/generalPhysician"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d7.jpg")}
              />
              <Card.Body>
                <Card.Title>Heart Attack</Card.Title>
                <a
                  href="/generalPhysician"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "2rem" }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={require("../../src/images/d8.jpg")}
              />
              <Card.Body>
                <Card.Title>Diarrhea</Card.Title>
                <a
                  href="/Gastroenterilogist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    style={{ borderRadius: "10px" }}
                  >
                    Click Me!
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/*  */}
      <Container style={{ marginTop: "2rem" }}></Container>
    </>
  );
};

export default LandingPage;
