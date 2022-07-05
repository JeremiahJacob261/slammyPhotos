import React, { useState } from "react";
import Button from "react-bootstrap/Button"
import { v4 } from "uuid";
import { db, storage } from "../pages/firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
function Edit(){
    const[multiple ,setMultiple] = useState([]);
    const handler =(multiple)=>{
        for (let i = 0; i < multiple.target.files.length; i++) {
            setMultiple(multiple.target.files[i]);
           
    }}
    const uploader=()=>{
       
            const imageRef = ref(storage, `slammy/${v4() + multiple.name}`);
            uploadBytes(imageRef, multiple).then(async () => {
                alert("uping")
           
        })
    }
return(
    <div>
        <h3 className="page-title">
          Upload Pictures to Gallery
        </h3>
      <input type="file" required multiple onChange={handler}/>
          <Button variant="danger" onClick={uploader}>Upload</Button>
    </div>
);
}
export default Edit;