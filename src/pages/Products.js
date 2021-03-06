import React, { useState, useEffect,useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './style.css';
import {motion} from 'framer-motion';
import { CartContext } from '../Context';
import { Link } from "react-router-dom";

function Products(){
    const [product, setProduct] = useState([]);
    const {items,setItems} = useContext(CartContext);
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
            
            return (
             <Col class="product-catalog-col" size="md" md={4}>
                  <img src={pro.imageUrl} id="fire-image" alt="productImage" />
                      <Link to="/cart"><h3  style={{fontFamily: 'Katibeh , cursive',color:'black'}}
                      onClick={(() => {
                        if(items.title === null){
                          setItems([
                            {
                            "title":pro.product,
                            "image":pro.imageUrl,
                            "price":pro.price,
                            "desc":pro.desc
                            }
                           ]);
                        }else{
                          if (items.title === pro.product) {
                            
                          }else{
                            setItems(items.concat({
                              "title":pro.product,
                              "image":pro.imageUrl,
                              "price":pro.price,
                              "desc":pro.desc
                            }));
                          }
                        }
                      })}>{pro.product}</h3></Link>
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