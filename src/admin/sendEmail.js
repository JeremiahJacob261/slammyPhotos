import React from "react";
import '../pages/style.css';
import {Form,Button,Stack,FloatingLabel} from "react-bootstrap";
export default function SendEmail(){
    return(
        <div>
        <h2>email sender</h2>
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