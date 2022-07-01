import React from "react";
import {Col,Container,Row} from 'react-bootstrap';
import lut1 from './photos/lut1.JPG';
import lut2 from './photos/lut2.webp'
import lut3 from './photos/lut3.JPG'
import './style.css';
import {motion} from 'framer-motion';
function Type(){
return(
    <div className="type">
<Container fluid="md">
<Row className="types">
    <Col sm={4}><motion.div  id="typesb" whileHover={{ scale:1.05 }}>
    <h3 id="h3b">PDF</h3>
        <img src={lut2} alt=""/>
        </motion.div></Col>
        <Col sm={4}> <motion.div id="typesa" whileHover={{ scale:1.05 }}>
       <h3 id="h3a">Vidoes</h3>
      <img src={lut1} alt=""/>
      </motion.div> </Col>
    <Col sm={4}><motion.div  id="typesc" whileHover={{ scale:1.05 }}>
    <h3 id="h3c">Presets</h3>
        <img src={lut3} alt=""/>
        </motion.div></Col>
        </Row>
</Container>
    </div>
);
}
export default Type;