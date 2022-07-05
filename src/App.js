import React ,{lazy , Suspense,useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pages/style.css';
import { Navigate, Outlet } from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//context
import { CartContext,CheckOutContext } from './Context';

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
const Cart = lazy(() => import('./pages/cart'));
const CheckOut = lazy(() => import('./pages/checkout'));
//end of lazy imports

function App() {
 const [items,setItems] = useState([
  {
  "title":null,
  "image":null,
  "desc":null,
  "price":0
  }
 ]);
const [checkin ,setCheckin] = useState(false);
const CartToCheck=()=>{
 return (
     checkin ? <Outlet/> : <Navigate to='/cart'/>
   )
}
  return (
    <div className="App">
      <CartContext.Provider value={{items, setItems}}>
      <CheckOutContext.Provider value={{checkin, setCheckin}}>
  <Router>
    <AnimatePresence>
    <Header/>
   <Suspense fallback={<div>Loading...</div>}>
 <Routes>
   <Route path="/" element={<Home/>}/>
  <Route path="gallery" element={<Academy/>}/>
   <Route path='contact' element={<Contact/>}/>
   <Route path="product" element={
    <Products/>}/>
     <Route path='/cart' element={<Cart/>}/>
   <Route element={<CartToCheck/>}>
   <Route path='checkout' element={<CheckOut/>}/>
   </Route>
   <Route path='login' element={<AdminLogin/>}/>
   <Route element={<AdminLogin/>}>
   <Route path='admin' element={<Admin/>}>
   <Route path='sendemail' element={<SendEmail/>}/>
   <Route path='/admin' element={<Add/>}/>
   <Route path='login' element={<AdminLogin/>}/>
   <Route path='edit' element={<Edit/>}/>
   </Route>
   </Route>
    </Routes>
 </Suspense>
 <Footer/>
 </AnimatePresence>
 <Action/>
  </Router>
  </CheckOutContext.Provider>
  </CartContext.Provider>
  </div>
  );
}
export default App;