import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <h1 className="mt-4">Welcome to My React  App</h1>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Img variant="top" src="https://wordpress-content.vroomly.com/wp-content/uploads/2023/03/koenigsegg.jpg" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is a sample card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="https://media.gqmagazine.fr/photos/653a6785b405923c6a3fe4ef/master/pass/SSC%20Tuatara.jpg" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>Another sample card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="https://www.01net.com/app/uploads/2022/09/jeep-avenger-2022-jaune-avd-mk.jpg" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>Yet another sample card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
