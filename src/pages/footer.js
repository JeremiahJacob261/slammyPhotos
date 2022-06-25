import React from "react";
import './components-style/footer.css'
import {Form,Button} from 'react-bootstrap'
function Footer(){
    return(
        <div class="footer">
        <div class="newsletter">
        
         <div><Form>
          <Form.Group className="mb-3" controlId="subscribeInput">
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button id="subscribe" variant="dark" size="sm">
            Submit
          </Button>
            </Form></div>
        </div>
        <div class="corporates">Home</div>
          </div>
    );
}
export default Footer;