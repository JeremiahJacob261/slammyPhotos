import React, { useContext } from 'react'
import { CartContext,CheckOutContext } from '../Context';
import './style.css';
import {Link} from 'react-router-dom';
import {Container,Row ,Col,Button} from 'react-bootstrap';
 function Cart() {
    const removeitem=(itemize)=>{
        const newList = items.filter((item) => item.title !== itemize);
        setItems(newList);
    }
    // eslint-disable-next-line
    const {items,setItems} = useContext(CartContext);
        // eslint-disable-next-line
    const {checkin,setCheckin} = useContext(CheckOutContext);
    return <div>{items.map((items) => {
        if (items.title !== null){
            return(
                <>
                <Container className='cart-contain'>
<Row>
<span class="material-symbols-outlined" style={{cursor:"pointer"}} onClick={(() =>{
    removeitem(items.title);
})}>
close
</span>
    <Col sm={5}> <img src={items.image} id="fire-image" key="title" alt="productImage" />
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
                }else{
            return(<> <h4 className='page-title' style={{color:"red"}}>
                <i>there is no object in this Cart !</i></h4>
               <Link to="/product"> <Button variant="danger-outline">Continue Shopping</Button></Link>
                </>
                );
        
          
        }})}</div>
 }
 export default Cart;