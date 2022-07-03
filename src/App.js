import React ,{lazy , Suspense, useState}from 'react';
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
const SendEmail = lazy(() => import('./admin/sendEmail'));
const Action = React.lazy(() => import('./pages/floating_action'));
const Admin = lazy(() => import('./admin/Admin'));
const Edit = lazy(() => import('./admin/edit_products'));
const Add = lazy(() => import('./admin/addproduct'));
const AdminLogin = lazy(() => import('./admin/admin_login'));
function App() {

  return (
    <div className="App">
  <Router>
    <AnimatePresence>
    <Header/>
   <Suspense fallback={<div>Loading...</div>}>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="product" element={<Products/>}/>
   <Route path="gallery" element={<Academy/>}/>
   <Route path='contact' element={<Contact/>}/>
   <Route path='login' element={<AdminLogin/>}/>
   <Route path='admin' element={<Admin/>}>
   <Route path='sendemail' element={<SendEmail/>}/>
   <Route path='/admin' element={<Add/>}/>
   <Route path='login' element={<AdminLogin/>}/>
   <Route path='edit' element={<Edit/>}/>
   </Route>
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