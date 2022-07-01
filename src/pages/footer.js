import React from "react";
import './style.css'
import {Button,InputGroup,FormControl,Stack} from 'react-bootstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer(){
    return(
        <div class="footer">
        <div class="newsletter">
          <Stack direction="vertical" gap={2}>
        <h3><i>#Slammy PhotoGraphe newsletter</i></h3>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Email Address"
      aria-label="Email Address"
      aria-describedby="basic-addon2"
    />
    <Button variant="dark" id="button-addon2">
      Button
    </Button>
  </InputGroup>
  </Stack>
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