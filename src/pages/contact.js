import React from "react";
import {motion} from 'framer-motion';
import "./style.css"
import {Form,Button,Stack,FloatingLabel} from "react-bootstrap";
function Contact(){
return(
    <motion.div initial={{width:0,opacity:0}}
    animate={{width:"100%",opacity:1}}
    exit={{x:window.innerWidth,transition:{duration:0.1},opacity:0}} className="contact">
        <h2>Contact</h2>
        <Form>
            <Stack direction="vertical" gap={3}>
            <Stack direction="horizontal" gap={1}>
    <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Name</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="Name"/>
    </FloatingLabel>
    </Form.Group>
   <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Phone</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Phone"
    className="mb-3"
  >
    <Form.Control type="phone" placeholder="Phone Number" />
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
    <Form.Control type="email" placeholder="Enter email" aria-describedby="text-muted"/>
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
    <Form.Control as="textarea" placeholder="Description" rows={5} />
    </FloatingLabel>
    </Form.Group>
    <Button type="submit" variant="dark">Submit</Button>
    </Stack>
    </Form>
    </motion.div>
);
}
export default Contact;