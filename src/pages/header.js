import React,{useState} from "react";
import './style.css';
import {Link} from 'react-router-dom';
import {Collapse} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'
import Logo from './photos/favicon.jpg'

function Header(){
    const [open, setOpen] = useState(false);
    return(
        <div>
          <div
          >
<Stack direction="horizontal" gap={2}>
           <div class="mainHeader">
          <img src={Logo} id="logo" alt="logo"/> 
  <div class="pages">
   <Link to="/" ><div class="tnk">Home</div></Link> 
   <Link to="product" ><div class="tnk">Products</div></Link> 
   <Link to="gallery"><div  class="tnk">Gallery</div></Link>  
   <Link to="Prints" ><div class="tnk">About US</div></Link> 
   <Link to="Contact" ><div class="tnk">Contact</div></Link> 
  </div>
<span id="cart" class="material-symbols-outlined" onClick={() => setOpen(!open)}>
menu
</span>
<span id="icons" class="material-symbols-outlined">
search
</span>
<Link to="cart"><span class="material-symbols-outlined">
shopping_bag
</span></Link>
    </div>
    </Stack>
    <Collapse in={open}>
        <div id="example-collapse-text">
        <Link to="/" ><div class="tnv"  onClick={() => setOpen(!open)}>Home</div></Link> 
   <Link to="product" ><div class="tnv"  onClick={() => setOpen(!open)}>Products</div></Link> 
   <Link to="gallery"><div  class="tnv"  onClick={() => setOpen(!open)}>Gallery</div></Link>  
   <Link to="Prints" ><div class="tnv"  onClick={() => setOpen(!open)}>About Us</div></Link> 
   <Link to="Contact" ><div class="tnv"  onClick={() => setOpen(!open)}>Contact</div></Link> 
        </div>
      </Collapse>
      </div>
        </div>
    );
}
export default Header;