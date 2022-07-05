import React, { useState } from "react";
import Button from "react-bootstrap/Button"
import { v4 } from "uuid";
import { db, storage } from "../pages/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
function Edit(){
    const[multiple ,setMultiple] = useState([]);
    const handler =(multiple)=>{
            setMultiple(multiple.target.files[0]);
           
    }
    const uploader=()=>{
       const imageRef = ref(storage, `slammy/${v4() + multiple.name}`);
            uploadBytes(imageRef, multiple).then(async () => {
                alert("image uploaded")
                setMultiple(null);
                getDownloadURL(ref(storage, imageRef)).then(async (url) => {
                    await addDoc(collection(db, "gallery"), {
                        imageUrl: url,
                      });
                })})
    }
return(
    <div>
        <h3 className="page-title">
          Upload Pictures to Gallery
        </h3>
      <input type="file" required onChange={handler}/>
          <Button variant="danger" onClick={uploader}>Upload</Button>
    </div>
);
}
export default Edit;