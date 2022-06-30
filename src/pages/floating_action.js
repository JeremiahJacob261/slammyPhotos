import React from "react";
import "./style.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {flas} from './json/country-by-flag';
import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
 function Action(){
 
return(
   <div>
      <Button variant="secondary" className="currency_change"><AttachMoneyIcon/>
      <DropdownButton drop="up" ><div className="drop_currency">
        {flas.map((flag) => {
         
         return(
           
      <Dropdown.Item>
         <img src={flag.flag_base64} id="flag" alt=""/>
         <i>{flag.country}</i>  <i>{flag.currency_code}</i>
      </Dropdown.Item>
     
         );
        })}</div>
      </DropdownButton>
      </Button>
   </div>
);
}
export default Action;