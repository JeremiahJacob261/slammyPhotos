import React,{useState,useEffect,useRef} from "react";
import '../pages/style.css';
import {Form,Button,Stack,FloatingLabel} from "react-bootstrap";
import { db } from "../pages/firebase-config";
import { collection, getDocs } from "firebase/firestore";
export default function SendEmail(){
  const [emails ,setEmails] = useState();
  useEffect(() => {
    const usersCollectionRef = collection(db, "subscribe");
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setEmails(data.docs.map((pro) => ({ ...pro.data(), id: pro.id })));
    };
    getUsers();
  }, []);
    return(
        <div className="sendEmailCover">
        <h3 className="page-title">email sender</h3>
        <Form className="sendEmail">
            <Stack direction="vertical" gap={1}>
    <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Title</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Title"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="Name" name="from_name"/>
    </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>Type of Announcement</Form.Label>
    <Form.Select>
      <option>Update on new Products</option>
      <option>Reminders</option>
      <option>Others</option>
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Send to all users EXCEPT;" />
  </Form.Group>
    <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Enter your Messages</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Message"
    className="mb-3"
  >
    <Form.Control as="textarea" placeholder="Message" rows={10} name="message" />
    </FloatingLabel>
    </Form.Group>
    <Button type="submit" variant="light"><span class="material-symbols-outlined">
send
</span></Button>
    </Stack>
    </Form>
        </div>
    );
}