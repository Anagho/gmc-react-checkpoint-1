import "./App.css";
import product from "./data/product";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow rounded-2">
            {/* Card Image */}
            <Card.Img variant="top" src={product.image} className="rounded-top-3" alt="Product" />

            {/* Card Body */}
            <Card.Body>
              <Card.Title className="fw-bold">{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text className="fw-semibold fs-5">{product.price}</Card.Text>
              <Button variant="warning" className="w-100 fw-semibold">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
