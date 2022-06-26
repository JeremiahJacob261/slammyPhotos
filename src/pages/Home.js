import React from 'react';
import  Button from 'react-bootstrap/Button';
import  {Container,Row,Col} from 'react-bootstrap';
import './style.css';
import landing from "./photos/landing.webp"
import {motion} from 'framer-motion';
import Print from './prints';
function Home () {
    
  return(
  <motion.div  initial={{width:0,opacity:0}}
  animate={{width:"100%",opacity:1}}
  exit={{x:window.innerWidth,transition:{duration:0.1},opacity:0}}>
    <div class="landing">
   <Container>
   <div id="home-image-top">
    <motion.img id="top" src={landing} alt='picture'/>
    </div>
    <Row class="home-start">
    <Col class="home-start-text" >
    <h2>Want to learn How to Light, Shoot & Colorgrade In-Studio Portraits like Amazing Klef?? This is for you!!</h2>
    <p>A Comprehensive Video Course designed by Amazing Klef to help improve your studio lighting skills and empower you to create clean & creative images.
  
  This course will take you from "Amateur" to "Beast" in the studio using simple tricks and setups.</p>
  <motion.div whileTap={{ scale: 1.1 }}>  <Button variant="dark" id="started" >Get Started!</Button></motion.div>
    </Col>
    <Col class="home-image-side-col" sm={5}>
    <div id="home-image-side">
    <img id="side" src={landing} alt="landing"  whileHover={{ scale: 1.1 }}/>
    </div>
    </Col>
    </Row>
  </Container>
  </div>
  <div><Print/></div>
  </motion.div>
  );
  }
  
export default Home;