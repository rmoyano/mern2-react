import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import db from "../../app/db";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => { return totalPrice + currentProduct.price;}, 0);
    setTotalPrice(total);
  };

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray();
    setProductsCart(productsDB);
  }, []);

  useEffect(() => {
    if (productsCart.length > 0) {
      getTotalPrice();
    }
  }, [productsCart]);

  return (
    <>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
           <NavDropdown
              id="nav-dropdown-dark-example"
              title="Carrito"
              menuVariant="dark"
           >
              {productsCart?.map((product) => {
                return <CartItem key={product.id} item={product} />
              })}
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to={"/purchase"}>Total: ${totalPrice} </Link>
            </NavDropdown.Item>
           </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};