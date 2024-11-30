import products from "./data/products";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <h2 className="text-secondary text-center fw-bold text-uppercase mb-4">
          Products Store
        </h2>
      </Row>
      <Row className="g-4">
        {products.map((product) => {
          return (
            <Col key={product.id} md={6} lg={4}>
              <Card className="shadow">
                {/* Card Image */}
                <Card.Img
                  variant="center"
                  src={product.image}
                  alt="Product"
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />

                {/* Card Body */}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="fw-bold">{product.price}</Card.Text>
                  <Button variant="warning" className="w-100">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
