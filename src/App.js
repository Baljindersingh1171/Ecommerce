import Signup from "./Components/Signup";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";
import "./main.css"
import { useState } from "react";

import Getbycategory from "./Components/Getbycategory";
import Cart from "./Components/Cart";
import Addtocart from "./Components/Addtocart";
import Nav from "./Components/Nav";
function App() {
 
  const mensClothCategory="men's clothing"
  const womenCLothCategory="women's clothing"
  const electronicsCategory="electronics";
  const JeweleriesCategory="jewelery"

 
   const[filteredData,setFilteredData]=useState([]);
   console.log("filtered data i app.js",filteredData)

  return (
    <div >
    <BrowserRouter>
    <Routes>
<Route path="/Home" element={<Home filteredData={filteredData}/>}/>

    <Route path='/' element={<Home filteredData={filteredData}/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/ResetPassword" element={<ResetPassword/>}/>
    <Route path="/Addtocart" element={<Addtocart/>}/>
    <Route path="/Mens" element={<Getbycategory  category={mensClothCategory} filteredData={filteredData} />}/>
    <Route path="/Womens" element={<Getbycategory category={womenCLothCategory} filteredData={filteredData}/>}/>
    <Route path='/Electronics' element={<Getbycategory category={electronicsCategory} filteredData={filteredData}/>}/>
    <Route path="/Jeweleries" element={<Getbycategory category={JeweleriesCategory} filteredData={filteredData}/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    
    </Routes>
    <Nav filteredData={filteredData} setFilteredData={setFilteredData}/>
    </BrowserRouter>

  
    <ToastContainer position="top-center"/>
   
    </div>
  );
}

export default App;
