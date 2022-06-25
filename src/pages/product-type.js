import React from "react";
import {Col,Row,Container,Button,Stack} from 'react-bootstrap';
import shop from "./photos/hang_over.jpg";
import './style.css';
function Type(){
return(
    <div className="type">
<Container>
<Stack direction="horizontal" gap={3}>
    <Col> <div id="typesa"></div></Col>
    <Col><div  id="typesb"></div></Col>
    <Col><div  id="typesc"></div></Col>
        </Stack>
</Container>
    </div>
);
}
export default Type;