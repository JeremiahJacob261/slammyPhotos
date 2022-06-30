import React ,{lazy , Suspense}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pages/style.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//lazy imports
const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./pages/header'));
const Footer = lazy(() => import('./pages/footer'));
const Academy = lazy(() => import('./pages/Academy'));
const Contact = lazy(() => import('./pages/contact'));
const Products = lazy(() => import('./pages/Products'));
const Action = React.lazy(() => import('./pages/floating_action'));
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
 <Action/>
  </Router>
  </div>
  );
}
export default App;