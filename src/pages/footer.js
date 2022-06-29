import React from "react";
import './style.css'
import {Form,Button,Stack,ButtonGroup} from 'react-bootstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer(){
    return(
        <div class="footer">
        <div class="newsletter">
        
         <Stack direction="horizontal" gap={2} className="new"><Form>
<ButtonGroup>
          <Form.Group className="mb-3" controlId="subscribeInput" as={ButtonGroup}>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button id="subscribe" variant="dark" size="sm">
            Submit
          </Button>
          </ButtonGroup>
            </Form></Stack>
        </div>
        <div class="corporates">Home
        <div className="social">
          <TwitterIcon id="social-icon"/>
          <YouTubeIcon id="social-icon"/>
          <InstagramIcon id="social-icon"/>
        </div>
        </div>
          </div>
    );
}
export default Footer;