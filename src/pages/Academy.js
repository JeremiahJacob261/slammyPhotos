import React,{useEffect, useState} from "react";
import './style.css';
import { db } from "./firebase-config";
import {motion} from 'framer-motion';
import { collection, getDocs } from "firebase/firestore";
function Academy(){
    const[gall,setGall] = useState([]);
    useEffect(() => {
        const usersCollectionRef = collection(db, "gallery");
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setGall(data.docs.map((pro) => ({ ...pro.data(), id: pro.id })));
        };
        getUsers();
      }, []);
return(
    <motion.div  initial={{width:0,opacity:0}}
    animate={{width:"100%",opacity:1}}
    exit={{x:window.innerWidth,transition:{duration:0.4},opacity:0}}>
<h2>Gallery Of Photos</h2>
<div className="gall-cover">
     {gall.map((pro) => {
         console.log(pro.imageUrl)
 return(
<motion.img key={ pro.imageUrl} alt="gallery-arrange" className="gall" src={ pro.imageUrl}
 whileHover={{ scale:1.05 }} whileTap={{ scale:1.05 }}/>
 );})}
</div>
    </motion.div>
);
}
export default Academy;