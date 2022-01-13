import React from "react";
import { NavDropdown } from "react-bootstrap";
//import { Link } from "react-router-dom";

export const CartItem = ({item}) => (
  <NavDropdown.Item>{item.title} - {item.category} - ${item.price} </NavDropdown.Item>
);

/*
export const CartItem = ({ item }) => (
  <NavDropdown.Item>
    <Link to={`/product/${item.id}`}>
      {item.title} - {item.category} - ${item.price}{" "}
    </Link>
  </NavDropdown.Item>
);
*/
