import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../logo.svg'
import { Cart } from "./Shopping/Cart";
import { Link } from "react-router-dom";

const style = {
  marginBottom: '30px'
}

export const HeaderApp = () => (
  <Navbar bg="black" variant="dark" style={style}>
    <Container>
    <Link to={"/"}>
      <Navbar.Brand href="#home">
        <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        />{' '}
         LR Shop My E-Commerce
      </Navbar.Brand>
    </Link>
      <Cart /> 
    </Container>
</Navbar>
);