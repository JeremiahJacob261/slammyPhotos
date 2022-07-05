import React from "react"
import {Button,Stack} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../pages/style.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
function Selector(){
   const renderTooltipa = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        ADD Product
      </Tooltip>
    );
    const renderTooltipb = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Send Email
      </Tooltip>
    );
    const renderTooltipc = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Add Photo to Gallery
      </Tooltip>
    );
 return(
    <div>
    <Stack direction="horizontal" gap={3} className="selectro">
   <Link to="/admin">
   <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipa}>
      <Button className="select-control" variant="dark-outline"><span class="material-symbols-outlined">
add_circle
</span></Button>
</OverlayTrigger>
</Link> 
   <Link to="sendemail">
   <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipb}>
      <Button className="select-control" variant="dark-outline"><span class="material-symbols-outlined">
outgoing_mail
</span></Button></OverlayTrigger></Link>
   <Link to="edit">  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltipc}>
      <Button className="select-control" variant="dark-outline"><span class="material-symbols-outlined">
    add_a_photo
    </span></Button></OverlayTrigger></Link>
    </Stack>
    </div>
 );
}
export default Selector;