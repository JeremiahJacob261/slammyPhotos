import React from "react";
import {motion} from 'framer-motion';
function Academy(){
return(
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth}}
    >
        <h2>learn</h2>
    </motion.div>
);
}
export default Academy;