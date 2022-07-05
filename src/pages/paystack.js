import React from 'react';
import { PaystackButton } from 'react-paystack';
import  logo from './photos/favicon.jpg'

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000,
  publicKey: 'pk_test_ffb9dad50ce0376d309241a4aeeb8f4413dd4419',
};

function Payst() {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Paystack Button Implementation',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <PaystackButton {...componentProps} />
    </div>
  );
}

export default Payst;