import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp";
import { ListProducts } from "./components/Products/ListProducts";
import React from "react";

const App = () => {
  return (
    <>
      <HeaderApp />
      <Container>
        <div className="App">
          <ListProducts />
        </div>
      </Container>
    </>
  );
};
export default App;
