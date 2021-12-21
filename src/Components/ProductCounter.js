import React , {useState} from 'react';
import CartWidget from './CartWidget';
import { Button } from 'react-bootstrap';

const ProductCounter = () => {

    const [productsOnCart, setProductsOnCart] = useState(0);

    const addProduct = () => {

        setProductsOnCart( productsOnCart + 1);
    }

    const removeProduct = () => {
        if(productsOnCart === 0){
            return;
        }
        setProductsOnCart( productsOnCart - 1);
    }


    return ( 
        <div>
        <CartWidget
        productsOnCart = {productsOnCart}
        />
        <Button
        onClick={addProduct}
        >Add</Button>
        <Button
        onClick={removeProduct}
        >Remove</Button>
        </div>
        
     );
}
 
export default ProductCounter;