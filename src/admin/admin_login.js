import React,{ useContext, useState } from "react";
import { Link } from 'react-router-dom'
import {Button,FormControl} from 'react-bootstrap'
import { EnterAdminContext } from "../Context";
const AdminLogin = () => {
  const access = 'slammy';
 const {enteradmin , setEnteradmin} = useContext(EnterAdminContext);
 const [accessed , setAccessed] = useState();
return (
   <>
   <h3>Enter the Access Code</h3>
   <FormControl type='password' placeholder='access code' style={{width:'50%',margin:'2%'}} value={accessed}
   onChange={(accessed) =>{
    setAccessed(accessed.target.value);
   }}
   />
   <Link to='/admin'><Button variant="warning" style={{marginLeft:'2%'}} onClick={(() =>{
       if(accessed === access){
        setEnteradmin(true);
       }else{
       alert("wrong access code")
       }
    
   })}>Login</Button></Link>
   </>
  )
}
export default AdminLogin;