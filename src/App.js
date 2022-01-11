import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp";
import { ListProducts } from "./components/Products/ListProducts";

const App = () => {
  return (
    <Container>
      <div className="App">
        <HeaderApp /> 
        <ListProducts />
      </div>
    </Container>
  );
};

export default App;
