import React, { useContext } from 'react'
import { CartContext } from '../Context';
import './style.css';
import {Container,Row ,Col,Button} from 'react-bootstrap'
 function Cart() {
    const {items,setItems} = useContext(CartContext);
    return <div>{items.map((items) => {
        if (items.title === null){
            return <h3 className='page-title' style={{color:"red"}}><i>there is no object in this Cart !</i></h3>
        }else{
            return(
                <>
                <Container className='cart-contain'>
<Row>
    <Col> <img src={items.image} id="fire-image" alt="productImage" />
                <h4>{items.title}</h4>
                </Col>
    <Col><Button variant="dark">Buy</Button>
    <Button variant="dark-outline">Continue Shopping</Button>
    <p>{items.price}</p>
    </Col>
</Row>
                </Container>
                </>
                    );
        }})}</div>
 }
 export default Cart;