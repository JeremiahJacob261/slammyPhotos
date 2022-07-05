import React, { useState } from "react";
import { db, storage } from "../pages/firebase-config";
import { Form, Button, Alert,Stack} from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import '../pages/style.css';
function Add(){
    const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
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
          price: price,
          desc: desc
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
      <h3 className="page-title">Add Products</h3 >
      <Form class="product-info">
        <Stack direction="vertical" gap={3}>
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
            placeholder="price in Naira"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Control
           as="textarea" placeholder="Description" rows={10} name="message"
            value={desc}
            onChange={(desc) => {
              setDesc(desc.target.value);
            }}
            />
        </Form.Group>
        <Button variant="secondary" onClick={Lick}>
          Add Product
        </Button>
        </Stack>
      </Form>
    </div>
  );
}
export default Add;