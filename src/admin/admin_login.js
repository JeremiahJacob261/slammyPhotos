import React,{useState} from "react";
import {Link} from 'react-router-dom'
function AdminLogin(){
    const [isAuth,setIsAuth] = useState("me");
return(
    <>
   <Link to="/admin"> <button onClick={()=>{
setIsAuth("nome")
    }}>login</button>
    </Link>
    </>
);
}
export default AdminLogin;