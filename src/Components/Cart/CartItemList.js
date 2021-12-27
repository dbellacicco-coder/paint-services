import React from "react";



const CartItemList = ({productsOnCart}) => {

  return (
    <div>
     {productsOnCart.length === 0 ? <h1> No hay productos en el carrito</h1> : null}
    </div>
  );
};

export default CartItemList;
