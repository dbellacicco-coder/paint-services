import React from "react";
import { Badge } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";

const CartWidget = ({ contador }) => {
  return (
    <Badge bg="success">
      <BsCart2 /> <Badge bg="success"> {contador} </Badge>
      <span className="visually-hidden">unread messages</span>
    </Badge>
  );
};

export default CartWidget;
