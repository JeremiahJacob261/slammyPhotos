import React from "react";
import {Col,Container,Button,Stack} from 'react-bootstrap';
import shop from "./photos/hang_over.jpg";
import './style.css';
function Prints(){
return(
    <div className="print">
<Container>
<Stack direction="horizontal" gap={2}>
    <Col> <img src={shop} alt="pic"/></Col>
    <Col><Stack direction="vertical" gap={3}>
        <h2>You'd totally love my prints shop.</h2>
        <p>Imagine owning a copy of one of my viral & epic images for your wall. Beautiful right?

Visit my print shop now & have your favorite image delivered to you anywhere in the world.</p>
<Button variant="dark">Shop Now!</Button>
        </Stack></Col>
        </Stack>
</Container>
    </div>
);
}
export default Prints;