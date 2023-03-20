import React from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";

function Blog() {
  return (
    <Container
      style={{
        marginTop: "5%",
      }}
    >
      <Row
        style={{
          marginBottom: "30px",
        }}
      >
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://www.healthfitnessrevolution.com/wp-content/uploads/2021/04/iStock-951077694.jpg"
            />
            <Card.Body>
              <Card.Title>Dates and sugar level</Card.Title>
              <Card.Text>
                Dates can help to maintain your body sugar level. A healthy
                snack for every age group
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://media.istockphoto.com/photos/pouring-extra-virgin-olive-oil-picture-id1205979456?b=1&k=20&m=1205979456&s=170667a&w=0&h=s6YPiakQJkP2-arIZJfaaQelynqemJMq5HNAR4RRYoQ="
            />
            <Card.Body>
              <Card.Title>Olive oil's benefit</Card.Title>
              <Card.Text>
                Olive oil has been prescribes by doctors for cholestrol patients
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://wallpaperaccess.com/full/1751309.jpg"
            />
            <Card.Body>
              <Card.Title>Milk and Calcium</Card.Title>
              <Card.Text>A natural calcium deficiency reducer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: "30px",
        }}
      >
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://media.istockphoto.com/photos/homemade-yogurt-picture-id564581946?k=20&m=564581946&s=612x612&w=0&h=csE3bBw19P3rZJveIgRWdJCLp-k2WYstSfwjDiOeuCo="
            />
            <Card.Body>
              <Card.Title>Yogurt! a replacement for milk</Card.Title>
              <Card.Text>
                A rich source of vitamins and protein. Helps overcome calcium
                defeiciency
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://wallpaperaccess.com/full/2317446.jpg"
            />
            <Card.Body>
              <Card.Title>Skin Care</Card.Title>
              <Card.Text>Find homemade remedies for skin issues</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://hdbrows.com/wp-content/uploads/2020/08/MENTAL_HEALTH_BLOG_HEADER.png"
            />
            <Card.Body>
              <Card.Title>Find peace in yourself</Card.Title>
              <Card.Text>Whatever we search for lies within</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: "30px",
        }}
      >
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://c0.wallpaperflare.com/preview/872/342/329/fitness-sports-gym-run.jpg"
            />
            <Card.Body>
              <Card.Title>Maintain your Body</Card.Title>
              <Card.Text>These days it is harder than it seems.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
            />
            <Card.Body>
              <Card.Title>Diet Conscious</Card.Title>
              <Card.Text>
                Find the perfect diet based on your body type
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={8} sm={12}>
          <Card style={{ width: "18rem", borderStyle: "none" }}>
            <Card.Img
              style={{
                height: "200px",
              }}
              variant="top"
              src="https://media.istockphoto.com/photos/portrait-of-boy-eating-food-at-table-in-house-picture-id800433520?b=1&k=20&m=800433520&s=170667a&w=0&h=ZwWfXgXejloUuLrFV3OP9GCgTt34F3br9yWI7GwU8Hg="
            />
            <Card.Body>
              <Card.Title>Your kid needs more</Card.Title>
              <Card.Text>For moms who want best for their toddlers</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
