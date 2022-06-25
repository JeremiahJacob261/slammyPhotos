import React,{useState} from "react";
import './pages.css';
import {Link} from 'react-router-dom';
import {Collapse} from 'react-bootstrap';
function Header(){
    const [open, setOpen] = useState(false);
    return(
        <div>
          <div
          >
           <div class="mainHeader">
           <span id="icons" class="material-symbols-outlined">
shopping_cart
</span>   
  <div class="pages">
   <Link to="/" ><div class="tnk">Home</div></Link> 
   <Link to="product" ><div class="tnk">Products</div></Link> 
   <Link to="learn"><div  class="tnk">Academy</div></Link>  
   <Link to="Prints" ><div class="tnk">Buy Prints</div></Link> 
   <Link to="Contact" ><div class="tnk">Contact</div></Link> 
  </div>
<span id="cart" class="material-symbols-outlined" onClick={() => setOpen(!open)}>
menu
</span>
<span id="icons" class="material-symbols-outlined">
search
</span>
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
        </div>
    );
}
export default Header;