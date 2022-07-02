import React from "react"
import {Button,Stack} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../pages/style.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
function Selector(){
   const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        ADD Product
      </Tooltip>
    );
 return(
    <div>
    <Stack direction="horizontal" gap={3} className="selectro">
   <Link to="add">
   <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >

      <Button className="select-control" variant="dark-outline"><span class="material-symbols-outlined">
add_circle
</span></Button>
</OverlayTrigger>
</Link> 
   <Link to="sendemail"><Button className="select-control" variant="dark-outline"><span class="material-symbols-outlined">
outgoing_mail
</span></Button></Link>
   <Link to="edit"><Button className="select-control" variant="dark-outline"><span class="material-symbols-outlined">
change_circle
</span></Button></Link>
    </Stack>
    </div>
 );
}
export default Selector;