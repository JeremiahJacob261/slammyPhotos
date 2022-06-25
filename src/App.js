import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './pages/header';
import Footer from './pages/footer';
function App() {
  return (
    <div className="App">
  <Router>
    <Header/>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product" element={<Products/>}/>
 </Routes>
 <Footer/>
  </Router>
    </div>
  );
}

export default App;
