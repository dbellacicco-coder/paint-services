import React from "react";
import { Button, Badge } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";

const CartWidget = ({productsOnCart}) => {


  return (
    <Button className="bg-dark">
      <BsCart2 /> <Badge bg="success"> {productsOnCart} </Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
};

export default CartWidget;
