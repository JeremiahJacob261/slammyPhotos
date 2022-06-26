import React from "react";
import {Col,Container,Row} from 'react-bootstrap';
import lut1 from './photos/lut1.JPG';
import lut2 from './photos/lut2.webp'
import lut3 from './photos/lut3.JPG'
import './style.css';
function Type(){
return(
    <div className="type">
<Container>
<Row>
    <Col sm={3}> <div id="typesa">
      
        <h3 id="h3a">hello</h3>
        <img src={lut1} alt=""/>
        </div> </Col>
    <Col sm={3}><div  id="typesb">
    <h3 id="h3b">hello</h3>
        <img src={lut2} alt=""/>
        </div></Col>
    <Col sm={3}><div  id="typesc">
    <h3 id="h3c">hello</h3>
        <img src={lut3} alt=""/>
        </div></Col>
        </Row>
</Container>
    </div>
);
}
export default Type;