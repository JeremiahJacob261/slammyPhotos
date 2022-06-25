import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './pages/header';
import Footer from './pages/footer';
import Contact from './pages/contact';
import Academy from './pages/Academy'; 
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <div className="App">
  <Router>
    <AnimatePresence>
    <Header/>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product" element={<Products/>}/>
   <Route path="/learn" element={<Academy/>}/>
   <Route path='/contact' element={<Contact/>}/>
 </Routes>
 <Footer/>
 </AnimatePresence>
  </Router>
    </div>
  );
}

export default App;
