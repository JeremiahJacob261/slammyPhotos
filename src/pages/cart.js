import React, { useContext } from 'react'
import { CartContext,CheckOutContext } from '../Context';
import './style.css';
import {Link} from 'react-router-dom';
import {Container,Row ,Col,Button} from 'react-bootstrap';
 function Cart() {
    // eslint-disable-next-line
    const {items,setItems} = useContext(CartContext);
        // eslint-disable-next-line
    const {checkin,setCheckin} = useContext(CheckOutContext);
    return <div>{items.map((items) => {
        if (items.title === null){
            return <h3 className='page-title' style={{color:"red"}}><i>there is no object in this Cart !</i></h3>
        }else{
            return(
                <>
                <Container className='cart-contain'>
<Row>
<span class="material-symbols-outlined" style={{cursor:"pointer"}}>
close
</span>
    <Col sm={5}> <img src={items.image} id="fire-image" alt="productImage" />
                <h4>{items.title}</h4>
                </Col>
    <Col sm={5}><Link to="/checkout"><Button variant="dark" onClick={(()=>{
         setCheckin(true);
    })}>Buy</Button></Link>
    <Button variant="dark-outline">Continue Shopping</Button>
    <p>{items.price}</p>
    <i>{items.desc}</i>
    </Col>
</Row>
                </Container>
                </>
                    );
        }})}</div>
 }
 export default Cart;