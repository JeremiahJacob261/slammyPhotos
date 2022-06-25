import React from 'react';
import  Button from 'react-bootstrap/Button';
import  {Container,Row,Col} from 'react-bootstrap';
import './style.css';
import landing from "./photos/landing.JPG"

function Home () {
    
  return(
  <div>
    <div class="landing">
   <Container>
   <div id="home-image-top">
    <img id="top" src={landing} alt=''/>
    </div>
    <Row class="home-start">
    <Col class="home-start-text" sm={6}>
    <h2>Want to learn How to Light, Shoot & Colorgrade In-Studio Portraits like Amazing Klef?? This is for you!!</h2>
    <p>A Comprehensive Video Course designed by Amazing Klef to help improve your studio lighting skills and empower you to create clean & creative images.
  
  This course will take you from "Amateur" to "Beast" in the studio using simple tricks and setups.</p>
  <div>  <Button variant="dark" id="started">Get Started!</Button></div>
    </Col>
    <Col class="home-image-side-col" sm={4}>
    <div id="home-image-side">
    <img id="side" src="https://cdn.mos.cms.futurecdn.net/yL3oYd7H2FHDDXRXwjmbMf.jpg" alt="landing"/>
    </div>
    </Col>
    </Row>
  </Container>
  </div>
  
  </div>
  );
  }
  
export default Home;