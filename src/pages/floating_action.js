import React from "react";
import "./style.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {flas} from './json/country-by-flag';

import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
 function Action(){
return(
   <div>
      <Button variant="dark" className="currency_change"><AttachMoneyIcon/>
      <DropdownButton drop="up" ><div className="drop_currency">
        {flas.map((flag) => {
         return(
           
      <Dropdown.Item>
         <i>{flag.country}</i>
      </Dropdown.Item>
     
         );
        })}</div>
      </DropdownButton>
      </Button>
   </div>
);
}
export default Action;