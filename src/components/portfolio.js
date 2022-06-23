import React from "react";
import {motion} from 'framer-motion';
function Portfolio(){
return(
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth}}
    >
        <h2>Contact</h2>
    </motion.div>
);
}
export default Portfolio;