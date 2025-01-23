import Signup from "./Components/Signup";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";
import "./main.css"

import Getbycategory from "./Components/Getbycategory";
import Cart from "./Components/Cart";
import Addtocart from "./Components/Addtocart";
function App() {
 
  const mensClothCategory="men's clothing"
  const womenCLothCategory="women's clothing"
  const electronicsCategory="electronics";
  const JeweleriesCategory="jewelery"
  return (
    <div >
    <BrowserRouter>
    <Routes>
<Route path="/Home" element={<Home />}/>
    <Route path='/' element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/ResetPassword" element={<ResetPassword/>}/>
    <Route path="/Addtocart" element={<Addtocart/>}/>
    <Route path="/Mens" element={<Getbycategory  category={mensClothCategory} />}/>
    <Route path="/Womens" element={<Getbycategory category={womenCLothCategory}/>}/>
    <Route path='/Electronics' element={<Getbycategory category={electronicsCategory}/>}/>
    <Route path="/Jeweleries" element={<Getbycategory category={JeweleriesCategory}/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    
    </Routes>
    </BrowserRouter>
  
    <ToastContainer position="top-center"/>
   
    </div>
  );
}

export default App;
