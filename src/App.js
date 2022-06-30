import React ,{lazy , Suspense}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pages/style.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Action from "./pages/floating_action";

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./pages/header'));
const Footer = lazy(() => import('./pages/footer'));
const Academy = lazy(() => import('./pages/Academy'));
const Contact = lazy(() => import('./pages/contact'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  if(navigator.geolocation){
//get userlocation for currency
navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }else{
    alert("your browser does not support location")
  }
  function onSuccess(position){
    console.log(position)
  }
  function onError(error){
     console.log(error);
  }
  return (
    <div className="App">
  <Router>
    <AnimatePresence>
    <Header/>
   <Suspense fallback={<div>Loading...</div>}>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product" element={<Products/>}/>
   <Route path="/learn" element={<Academy/>}/>
   <Route path='/contact' element={<Contact/>}/>
   
 </Routes>
 </Suspense>
 <Footer/>
 <Action/>
 </AnimatePresence>
  </Router>
  
    </div>
  );
}

export default App;
