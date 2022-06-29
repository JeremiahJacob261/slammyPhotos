import React from "react";
import './style.css'
import {Form,Button} from 'react-bootstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
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
        <div class="corporates">Home
        <div className="social">
          <TwitterIcon/>
          <YouTubeIcon/>
          <InstagramIcon/>
        </div>
        </div>
          </div>
    );
}
export default Footer;