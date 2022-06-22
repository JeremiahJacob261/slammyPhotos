import React,{useState} from "react";
import './components-style/header.css';
import {Link} from 'react-router-dom';
import {Collapse,Button} from 'react-bootstrap';
function Header(){
    const [open, setOpen] = useState(false);
    return(
        <div>
           <div class="mainHeader">
    
  <div class="pages">
   <Link to="/" ><div class="tnk">Home</div></Link> 
   <Link to="product" ><div class="tnk">Products</div></Link> 
   <Link to="Academy"><div  class="tnk">Academy</div></Link>  
   <Link to="Prints" ><div class="tnk">Buy Prints</div></Link> 
   <Link to="Contact" ><div class="tnk">Contact</div></Link> 
  </div>
<Button id="cart" onClick={() => setOpen(!open)}>setOpen</Button>

    </div>
    <Collapse in={open}>
        <div id="example-collapse-text">
        <Link to="/" ><div class="tnv">Home</div></Link> 
   <Link to="product" ><div class="tnv">Products</div></Link> 
   <Link to="Academy"><div  class="tnv">Academy</div></Link>  
   <Link to="Prints" ><div class="tnv">Buy Prints</div></Link> 
   <Link to="Contact" ><div class="tnv">Contact</div></Link> 
        </div>
      </Collapse>
        </div>
    );
}
export default Header;