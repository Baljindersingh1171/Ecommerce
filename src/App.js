import Signup from "./Components/Signup";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
<Route path="/Home" element={<Home/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/ResetPassword" element={<ResetPassword/>}/>
    
    </Routes>
    </BrowserRouter>
  
    <ToastContainer position="top-center"/>
   
    </div>
  );
}

export default App;
