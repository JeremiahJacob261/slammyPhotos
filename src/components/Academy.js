import React from "react";
import {motion} from 'framer-motion'
function Academy(){
return(
    <motion.div
    initial={{width:0,opacity:0}}
      animate={{width:"100%",opacity:1}}
      exit={{x:window.innerWidth,transition:{duration:0.1},opacity:0}}
    >
        <h2>learn</h2>
    </motion.div>
);
}
export default Academy;