import React, { useState } from 'react'
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { deleteCartProduct, getCartProducts } from '../apis/apis';



export default function Quantityprice({price,id,setCartProducts}) {
    const [count , setCount] = useState(1)
    console.log("productid",id);
  
    const[total,setTotal]=useState('');
   
    function handleIncrement(){
       
        setCount(count + 1);
        console.log("count",count)
        setTotal(price*(count+1));
        console.log("price")
     
  
       
    }
    function handleDecrement(){
        if(count>1)
        {
        setCount(count - 1);
        setTotal(price*(count-1))
        }
    }
    const handleDelete=async(myid)=>{
      try{
        await deleteCartProduct(myid);
      const result=  await getCartProducts();
      setCartProducts(result.data);


      }
      catch(err)
      {

        throw(err);
      }

      

      console.log("hello");
    

    }
  
  return (
    <div className='flex relative items-center gap-[5px] ' >

    <div onClick={handleDecrement}>
    <FaCircleMinus  />
    </div>  
    <div>{count}</div>
    <div onClick={handleIncrement}>
    <FaCirclePlus/>
    </div>
    <div className='ml-[30px] absolute left-[166px]'>{count===1?price+"$":total+"$"}</div>
    <div className='absolute left-[300px] cursor-pointer ' onClick={()=>handleDelete(id)}> <ImCross/></div>
  
    </div>
  )
}
 