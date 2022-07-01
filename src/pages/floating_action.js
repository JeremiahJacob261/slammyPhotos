import React, { useState} from "react";
import "./style.css";
import {flas} from './json/country-by-flag';
import {motion} from "framer-motion";
import {Button,Dropdown,DropdownButton} from 'react-bootstrap';
 function Action(){
   const [responseData,setResponseData] =useState('');
 if(navigator.geolocation){
      //get userlocation for currency
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }else{
          alert("your browser does not support location")
        }
        function onSuccess(position){
          const {latitude , longitude} = position.coords;
          fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1322fae34ae14e7a83707e2c0ab12f0c`)
          .then(response => response.json()).then(result => {
            let all = result.results[0].components;
            const userlocations = all.country;
            setResponseData(userlocations);
            console.log(userlocations);
             })
          }
        function onError(error){
           console.log(error);
        }
        return(
          <motion.div  initial={{width:0,opacity:0}}
          animate={{width:"100%",opacity:1}}>
             <Button variant="secondary" className="currency_change">
               <i className="loc">{responseData}</i>
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
          </motion.div>
       );
}
export default Action;