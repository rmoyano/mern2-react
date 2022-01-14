import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
//import { Container } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp";
//import { ListProducts } from "./components/Products/ListProducts";
import { Home } from "./views/Home";
import { ProductView } from "./views/ProductView";
import { PurchaseView } from "./views/PurchaseView";


const App = () => {
  return (
    <>
      <HeaderApp />
      <Switch>
        <Route path={"/product/:id"} exact component={ProductView} />
        <Route path={"/purchase/"} exact component={PurchaseView} />
        <Route path={"/"} exact component={Home} />

      </Switch>
    </>
  );
};
export default App;
