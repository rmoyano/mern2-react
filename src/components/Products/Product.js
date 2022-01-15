import React from "react";
import { Col, Row, Button, Badge, Card } from "react-bootstrap";
import { saveLastInterestProduct } from "../../app/storageServices";
import "../../assets/css/styles.css";
import db from '../../app/db';

const styles = {
  fontSize: "15px",
  color: "blue",
  border: "2px solid black",
};

const styleImage = {
  height: '100px',
  width: '30%',
  margin: '0 auto',
  marginTop: '10px'
};  

export const Product = ({ item }) => {
  const { title, image, price, category, description } = item;

  const addProductToCart = ({title, price, category}) => {
    db.cart.add({
      title: title,
      price: price,
      category: category
    })
  }
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
    <Card style={{ marginBottom: "15px", padding: 10 }}>
      <Row>
        <Col xs={8}>
          <Card.Img
            className="mx-auto"
            variant="top"
            src={image}
            style={styleImage}
          />
        </Col>
        <Col xs={4}>
          <Badge pill bg="info">
            {category}
          </Badge>{" "}
        </Col>
      </Row>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Row>
        <Col>
          <Button onClick={() => addProductToCart(item) } variant="warning">Agregar</Button>
        </Col>
        <Col>
          <Button onClick={() => saveLastInterestProduct(title) } variant="primary">
            Precio <Badge bg="secondary">$ {price}</Badge>
          </Button>
        </Col>
      </Row>
    </Card>
  </div>
    
  );
};
