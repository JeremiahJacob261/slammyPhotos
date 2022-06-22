import React, { useState } from "react";
import { db, storage } from "../components/firebase-config";
import { Form, Button, Alert } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import './admin.css';
function Admin(){
    const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [imageUpload, setImageUpload] = useState(null);
  const Lick = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `slammy/${v4() + imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(async () => {
      alert("uploading images...");
      getDownloadURL(ref(storage, imageRef)).then(async (url) => {
        /*slammy is a collection */
        await addDoc(collection(db, "slammy"), {
          imageUrl: url,
          product: product,
          price: price
        });
        return (
          <div>
            <Alert variant="secondary">Product Uploaded</Alert>
          </div>
        );
      });
    });
  };
  return (
    <div>
      <h2>Add Products</h2>
      <Form class="product-info">
        <input
        id="drop-image"
          type="file"
          onChange={(imageUpload) => {
            setImageUpload(imageUpload.target.files[0]);
          }}
        />
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            type="text"
            value={product}
            onChange={(product) => {
              setProduct(product.target.value);
            }}
            placeholder="product name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Control
            type="number"
            value={price}
            onChange={(price) => {
              setPrice(price.target.value);
            }}
            placeholder="price in dollars"
          />
        </Form.Group>
        <Button variant="secondary" onClick={Lick}>
          Add Product
        </Button>
      </Form>
    </div>
  );
}
export default Admin;