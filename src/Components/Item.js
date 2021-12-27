import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import Data from "./data.json";

const Item = () => {
  return (
    <Col className="justify-content-center">
      {Data.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../../public/img/descarga.jpg" />
            <Card.Body>
              <Card.Title> Nombre : {product.name} </Card.Title>
              <Card.Text> Precio : {product.price} </Card.Text>
            </Card.Body>
            <Button> Add to cart</Button>
          </Card>
        );
      })}
    </Col>
  );
};

export default Item;
