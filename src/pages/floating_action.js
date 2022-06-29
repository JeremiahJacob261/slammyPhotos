import React from "react";
import "./style.css";
import AbcIcon from "@mui/icons-material/AbcOutlined";
import ChatIcon from '@mui/icons-material/Chat';

import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
 function Action(){
return(
   <div>
      <Button variant="dark" className="currency_change"><AbcIcon/>
      <DropdownButton drop="up">
         <Dropdown.Item>Nigeria</Dropdown.Item>
         <Dropdown.Item>Algeria</Dropdown.Item>
         <Dropdown.Item>Tanzania</Dropdown.Item>
         <Dropdown.Item>Argentina</Dropdown.Item>
      </DropdownButton>
      </Button>
  <ChatIcon className="customerCare"/>
   </div>
);
}
export default Action;