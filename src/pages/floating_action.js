import React from "react";
import Fab from '@mui/material/Fab';
import './style.css';
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
export default function Action(){
return(
    <>
     <DropdownButton drop="up" variant="secondary">
<DropdownItem>hojh</DropdownItem>
<DropdownItem>bomn</DropdownItem>
    </DropdownButton>
    <Fab variant="primary" color="dark" aria-label="go">
   setProduct
    </Fab>
    </>
);
}