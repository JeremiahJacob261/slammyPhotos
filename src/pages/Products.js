import React, { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './style.css';
import {motion} from 'framer-motion';

export function Products(){
    const [product, setProduct] = useState([]);
    const [proTitle, setProTitle]=useState('');
    const [proPrice, setProPrice]=useState('');
    useEffect(() => {
      const usersCollectionRef = collection(db, "slammy");
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setProduct(data.docs.map((pro) => ({ ...pro.data(), id: pro.id })));
      };
      getUsers();
    }, []);
 return (
      <motion.div  initial={{width:0,opacity:0}}
      animate={{width:"100%",opacity:1}}
      exit={{x:window.innerWidth,transition:{duration:0.1},opacity:0}}>
        <div class="Products-div">
          
                <Container>
                <h1>Products</h1>
                  <Row class="product-catalog">
          {product.map((pro) => {
            setProTitle(pro.product);
            setProPrice(pro.price);
            return (
             <Col class="product-catalog-col" size="md" md={4}>
                  <img src={pro.imageUrl} id="fire-image" alt="productImage" />
                      <h5>{pro.product}</h5>
                     <p>${pro.price}</p>
                     
                    </Col>
                    );
          })}
          </Row>
                </Container>
                </div>
      </motion.div>
    );
}
export default Products;