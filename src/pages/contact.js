import React, { useRef } from "react";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import "./style.css"
import {Form,Button,Stack,FloatingLabel} from "react-bootstrap";
function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gzw9zut', 'template_59uta0d', form.current, 'iVj1nUtUHrE9MAhPX')
      .then((result) => {
        alert("Your Email has been recieved");
      }, (error) => {
          alert("something went wrong!");
      });
  };
  //send email
return(
    <motion.div initial={{width:0,opacity:0}}
    animate={{width:"100%",opacity:1}}
    exit={{x:window.innerWidth,transition:{duration:0.1},opacity:0}} className="contact">
        <h2>Contact</h2>
        <Form ref={form} onSubmit={sendEmail}>
            <Stack direction="vertical" gap={3}>
            <Stack direction="horizontal" gap={1}>
    <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Name</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="Name" name="from_name"/>
    </FloatingLabel>
    </Form.Group>
   <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Phone</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Phone"
    className="mb-3"
  >
    <Form.Control type="phone" placeholder="Phone Number" name="phone_no"/>
    </FloatingLabel>
    </Form.Group>
    </Stack>
    <Form.Group>
    <Form.Label>Email address</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Email Address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="Enter email" aria-describedby="text-muted" name="client_email"/>
    </FloatingLabel>
    <Form.Text className="text-muted">
      We'll need the Email to be able to reply You.
    </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Describe your compliant</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Description"
    className="mb-3"
  >
    <Form.Control as="textarea" placeholder="Description" rows={5} name="message" />
    </FloatingLabel>
    </Form.Group>
    <Button type="submit" variant="dark">Submit</Button>
    </Stack>
    </Form>
    </motion.div>
);
}
export default Contact;