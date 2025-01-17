
import { useLocation } from 'react-router-dom';
import "../home.css"
import {  useNavigate } from 'react-router-dom'
import cart from "../assests/images/cart.png"
import Products from './Products';


export default function Home() {
    const navigate=useNavigate()
  //   const location = useLocation();
  // const username = location.state?.displayName;
  // console.log("username",{username})
  // const imgurl=location.state?.Profileurl
  // console.log("image url",imgurl)

  const handleClick=()=>{
    navigate("/login")

  }
  return (
    <>
    
    <div className='flex items-center justify-end pr-6 bg-black h-[65px] gap-10'>
    
    <img  className='h-[50px]'src={cart} alt='cart'/>
    <button className="bg-[#fbbf24] text-white p-[5px] h-[40px] rounded-md  font-bold"onClick={()=>handleClick()}>LOGOUT</button>
    
   
    </div>
    <Products/>
    </>

  )
}




  