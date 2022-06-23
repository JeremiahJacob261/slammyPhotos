import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home.js'
import Header from './components/header.js';
import Footer from './components/footer.js';
import Products from './components/Products';
import Admin from './admin/Admin';
import Flutterwave from './components/flutterwave';

function App() {
  return (
    <div className="App">
  <Router>
  <Header/>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product" element={<Products/>}/>
   <Route path="/admin" element={<Admin/>}/>
   <Route path="/pay" element={<Flutterwave/>}/>
 </Routes>
 <Footer/>
  </Router>
    </div>
  );
}

export default App;
