import React,{useState} from "react";
import './style.css'
import {Button,InputGroup,FormControl,Stack,Form} from 'react-bootstrap';
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer(){
  const [emails ,setEmails] = useState();
  const sub =()=>{
     addDoc(collection(db, "subscribe"), {
      email: emails,
    }).then(()=>{
  alert("you have successfully subscribed for Slammy Studios newsletter")
    })
  }
    return(
        <div class="footer">
        <div class="newsletter">
          <Stack direction="vertical" gap={2}>
        <h3 className="page-title"><i>#Slammy PhotoGraphe newsletter</i></h3>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Email Address"
      aria-label="Email Address"
      aria-describedby="basic-addon2"
      value={emails}
      onChange={(emails) => {
        setEmails(emails.target.value);
      }}
    />
    <Button variant="dark" id="button-addon2" onClick={sub}>
      Subscribe
    </Button>
  </InputGroup>
  <Form.Text className="basic-addon2">Input your Email to Subscribe for our continuos message</Form.Text>
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