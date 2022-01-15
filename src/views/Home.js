import React from 'react';
import { Container } from "react-bootstrap";
import { ListProducts } from "../components/Products/ListProducts";

export const Home = () => (
    <Container>
        <div className="App">
          <ListProducts />
        </div>
    </Container>
)