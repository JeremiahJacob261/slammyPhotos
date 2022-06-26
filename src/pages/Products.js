import React, { useState, useEffect } from "react";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './style.css';
import {motion} from 'framer-motion';


function Products(){
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
      const usersCollectionRef = collection(db, "slammy");
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setProduct(data.docs.map((pro) => ({ ...pro.data(), id: pro.id })));
      };
      getUsers();
    }, []);
    const [proTitle, setProTitle]=useState();
    const [proPrice, setProPrice]=useState();
  
    return (
      <motion.div  initial={{width:0,opacity:0}}
      animate={{width:"100%",opacity:1}}
      exit={{x:window.innerWidth,transition:{duration:0.1},opacity:0}}>
        <div class="Products-div">
          <h1>Products</h1>
        </div>
        <div class="filter-box">
          Filter By
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              All Products
            </Dropdown.Toggle>
  
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          Sort By
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Alphabetically A-Z
            </Dropdown.Toggle>
  
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Best Selling</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Featured </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Alphabetically</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          {product.map((pro) => {
           
            return (
              <div>
                <Container>
                  <Row class="product-catalog">
                    <div>
                    <Col class="product-catalog-col">
                    
                        <img src={pro.imageUrl} id="fire-image" alt="productImage" />
                     
                        <h5  value={proTitle}
              onChange={(proTitle) => {
                setProTitle(proTitle.target.value);
              }}>{pro.product}</h5>
                    
                        <p  value={proPrice}
              onChange={(proPrice) => {
                setProPrice(proPrice.target.value);
              }}>{pro.price}</p>
                     
                    </Col>
                    </div>
                  </Row>
                </Container>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
}
export default Products;