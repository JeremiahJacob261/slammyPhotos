import React from "react"
import {Button,Stack} from 'react-bootstrap';
import { Link } from "react-router-dom";
function Selector(){
 return(
    <div>
    <Stack direction="horizontal" gap={3}>
   <Link to="add"><Button variant="dark-outline">Add Product</Button></Link> 
   <Link to="sendemail"><Button variant="dark-outline">Send Email to Subscribed Clients</Button></Link>
   <Link to="edit"><Button variant="dark-outline">Edit Products</Button></Link>
    </Stack>
    </div>
 );
}
export default Selector;