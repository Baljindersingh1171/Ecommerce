import React from 'react'
import { useState } from 'react'
import "../signup.css"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ContinueWithgoogle from './ContinueWithgoogle'

import closedEye from "../assests/images/closedeye.png"
import openEye from "../assests/images/openeye.png"

import Buttons from './Buttons'



export default function Login() {
  const navigate=useNavigate()
  const[formData,setFormData]=useState({
      email:"",
      password:"",
   
  
    })
    const[passwordType,setpasswordType]=useState("password");
      const [passwordimgsrc, setpasswordimgsrc] = useState(closedEye);
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
  
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    toast.dismiss();
    if((formData.email===''||formData.password===''))
    {
      toast.error("All fields are required");
    }
    else if(!(emailRegex.test(formData.email)))
    {
      toast.error('Invalid email');

    }else {
      try{
      //  const data= await signInWithEmailAndPassword(auth,formData.email,formData.password);
      //  console.log("data",data);
    
        toast.success("Login Successfully");
 



        // navigate('/home',{ state: { displayName: data?.user?.displayName } })
        navigate('/home')

    

      }
      catch(error)
      {
     let message= error.message;
        toast.error(message);
      }
          setFormData({ 
            email:"",
            password:"", })
          
          
    }
    
    

  }
  function handleChange(e)
  {
const{name,value}=e.target;

    setFormData(prevState=>({
      ...prevState,[name]:value
    }))
  }
    function handeleyeclick()
    {
      if(passwordimgsrc===closedEye)
        {
        
          setpasswordimgsrc(openEye);
          setpasswordType('text');
         
          
        }
        else{
          setpasswordimgsrc(closedEye);
          setpasswordType('password');
        
    
        }

    

    }
  
  return (
    <div className='container'>
    <div className='main'>
    <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <input type="email" onChange={handleChange} className="inputs" placeholder="Email" value={formData.email} name="email"/>

    <div className='password-container'>
    <input type={passwordType} onChange={handleChange} className="inputs" placeholder="Password" value={formData.password}name="password"/>

    <img alt="eye icon" src={passwordimgsrc} class="eye" onClick={handeleyeclick}/>
    </div>
   
    <Buttons text="LOGIN" className="resetbtn"/>
    <p>Not have an account <Link to="/Signup">SignUp</Link></p>
   
   </form>
   <ContinueWithgoogle/>
   <Link to="/ResetPassword">Forgot Password?</Link>
    </div>
    </div>

  )
}
