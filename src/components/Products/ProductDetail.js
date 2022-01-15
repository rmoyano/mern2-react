import React from "react";
import { Card, ListGroup, ListGroupItem, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductDetail = ({ item }) => (
  <Table bordered hover>
    <tbody>
      <tr>
          <td><h1><b>Product detail</b></h1></td>
          <td><Link to={"/"}><Button variant='primary' >Go back</Button></Link></td>
      </tr>
      <tr>
          <th>Product</th>
          <td>{item.title}</td>
      </tr>
      <tr>
          <th>Id</th>
          <td>{item.id}</td>
      </tr>
      <tr>
          <th>Category</th>
          <td>{item.category}</td>
      </tr>
      <tr>
          <th>Price</th>
          <td>$ {item.price}</td>
      </tr>
    </tbody>
  </Table>
  );