import React, { Fragment, useState } from "react";
import NavBar from "./Components/NavBar";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Data from "./Components/data.json";
import CartItemList from "./Components/Cart/CartItemList";

function App() {
  const titleWeb = " Santa Ana Alimentos";

  const [products, setProducts] = useState([]);
  const [productsOnCart, setProductOnCart] = useState([])

  const obtenerDatos = new Promise((res, rej) => {
    res(Data);
  });
  obtenerDatos.then((Data) => {
    setProducts(Data);
  });
  obtenerDatos.catch(() => {});

  return (
    <Fragment>
      <NavBar titleWeb={titleWeb} />

      <Container>
        <Row>
          
          <Col xs={12} md={8} lg={9}>
            <Main products={products} />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <CartItemList
            productsOnCart = {productsOnCart}
             />
          </Col>
        </Row>
      </Container>

      <Footer titleWeb={titleWeb} />
    </Fragment>
  );
}

export default App;
