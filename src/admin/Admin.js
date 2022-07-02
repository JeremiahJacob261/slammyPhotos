import React,{lazy} from "react";
import '../pages/style.css';
import {Outlet} from 'react-router-dom';
import {Stack} from 'react-bootstrap';
const Selector = lazy(() => import('./selector'));
function Admin(){
   return(
    <div>
      <h2>Admin DashBoard</h2>
      <Stack direction="vertical">
  <div>
  <Selector/>
   </div>
  <Outlet/>
  </Stack>
    </div>
   );
}
export default Admin;