import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
//import "./assets/css/styles.css";

const styles = {
  fontSize: "15px",
  color: "blue",
  border: "2px solid black",
};
const imgprod = {
  height: "100px",
  width: "100px",
};

export const Product = ({ item }) => {
  const { title, image, price } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div style={styles}>{title}</div>
        </Col>
        <Col xs={4}>
          <Button variant="primary">
            Precio <Badge bg="secondary">{price}</Badge>
            <span className="visually-hidden">$</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img height={ imgprod.height } width={ imgprod.width } alt="" src={image}></img>
        </Col>
      </Row>
    </Col>
  );
};
