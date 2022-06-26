import React ,{lazy , Suspense}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./pages/header'));
const Footer = lazy(() => import('./pages/footer'));
const Academy = lazy(() => import('./pages/Academy'));
const Contact = lazy(() => import('./pages/contact'));
const Products = lazy(() => import('./pages/Products'));
function App() {
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
 </AnimatePresence>
  </Router>
    </div>
  );
}

export default App;
