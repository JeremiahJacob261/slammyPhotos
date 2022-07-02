import React from "react";
import './style.css';
import {motion} from 'framer-motion';
import {photos} from "./json/jsonOfPhotos";
function Academy(){
return(
    <motion.div  initial={{width:0,opacity:0}}
    animate={{width:"100%",opacity:1}}
    exit={{x:window.innerWidth,transition:{duration:0.4},opacity:0}}>
<h2>Gallery Of Photos</h2>
<div className="gall-cover">
     {photos.map((pic) => {
 return(
<motion.img alt="gallery-arrange" className="gall" src={ require("./photos/IMG_"+pic.image+".JPG")}
 whileHover={{ scale:1.07 }}/>
 );})}
</div>
    </motion.div>
);
}
export default Academy;