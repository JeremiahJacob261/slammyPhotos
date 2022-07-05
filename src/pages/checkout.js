import React, { useState ,useContext} from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { CartContext } from '../Context';
import {States} from './json/states'
import {Form,Button,Stack,FloatingLabel, DropdownButton,Dropdown} from "react-bootstrap";
//end of imports
function CheckOut() {
    const [email ,setEmail] = useState('');
    const [phone ,setPhone] = useState('');
        // eslint-disable-next-line
    const {items,setItems} = useContext(CartContext);
    const [names ,setNames] = useState('');
    const Flutterconfig = {
        public_key: 'FLWPUBK_TEST-d9e538469fb0704f5cb73af02189bd6d-X',
        tx_ref: Date.now(),
        amount: 2000,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
          phonenumber: phone,
          name: names,
        },
        customizations: {
          title: 'my Payment Title',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    //flutter wave implememntation
    const handleFlutterPayment = useFlutterwave(Flutterconfig);
   
    return(
<>
<Form>
            <Stack direction="vertical" gap={3} style={{margin:"2%"}}>
            <Stack direction="horizontal" gap={1}>
    <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Name</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="Name" value={names}
            onChange={(names) => {
              setNames(names.target.value);
            }}/>
    </FloatingLabel>
    </Form.Group>
   <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Phone</Form.Label>
    <FloatingLabel
    controlId="floatingInput"
    label="Phone"
    className="mb-3"
  >
    <Form.Control type="phone" placeholder="Phone Number" name="phone" value={phone}
            onChange={(phone) => {
              setPhone(phone.target.value);
            }}/>
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
    <Form.Control type="email" placeholder="Enter email" aria-describedby="text-muted" name="email"
     value={email}
            onChange={(email) => {
              setEmail(email.target.value);
            }}/>
    </FloatingLabel>
    <Form.Text className="text-muted">
      We'll need the Email to be able verify your purchase;
    </Form.Text>
    </Form.Group>
   <DropdownButton>
  {States.map((states) =>{    
    return<Dropdown.Item>
      {states.statename}
    </Dropdown.Item>
  })}
   </DropdownButton>
    <Button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay with Flutterwave
      </Button>
    </Stack>
    </Form>

</>
    );
}
export default CheckOut;