import React, { useContext } from 'react'
import { CartContext } from '../Context';
 function Cart() {
    const {items,setItems} = useContext(CartContext);
    return <>{items.map((items) => {
        return(
    <>
     <img src={items.imageUrl} id="fire-image" alt="productImage" />
    <h4>{items.title}</h4>
    <p>{items.price}</p>
    </>
        );
    })}</>
 }
 export default Cart;