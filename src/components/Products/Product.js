import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import { saveLastInterestProduct } from "../../app/storageServices";
//import "./assets/css/styles.css";
import db from "../../app/db";

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

  const addProductToCart = ({title, price, category}) => {
      db.cart.add({
      title: title,
      price: price,
      category: category
    })
  }

  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div style={styles}>{title}</div>
        </Col>
        <Col xs={4}>
        
          <Button variant="primary" onClick={()=> saveLastInterestProduct(title)}> 
            Precio <Badge bg="secondary">$ {price}</Badge>
            <span className="visually-hidden">$</span>
          </Button>
          <Button variant="secondary" onClick={()=> addProductToCart(item)}> 
            Agregar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <img height={ imgprod.height } width={ imgprod.width } alt="" src={image}></img>
        </Col>
      </Row>
    </Col>
  );
};
