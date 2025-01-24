import React, { useEffect, useState } from 'react'
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { deleteCartProduct, getCartProducts, updateCartData } from '../apis/apis';




export default function Quantityprice({price,id,setCartProducts,quantity,display}) {
    const [count , setCount] = useState(1)
    console.log("productid",id);
  
    const[total,setTotal]=useState('');
    
    const update=async()=>{
    await updateCartData(count,id);

     await  display();
   


    }
    console.log("quantity",quantity);
   
   function handleIncrement (){
        setCount(count+1);
        setTotal(price*(count+1));
      update()
      }

    //   useEffect(()=> {
    //     update();
    // }, [count])
    
    console.log("count outside",count);
    function handleDecrement (){

        if(count>1)
        {
        setCount(count - 1);
        setTotal(price*(count-1))
        }
       update();
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
    <div>{quantity}</div>
    <div onClick={handleIncrement}>
    <FaCirclePlus/>
    </div>
    <div className='ml-[30px] absolute left-[166px]'>{count===1?price+"$":total+"$"}</div>
    <div className='absolute left-[300px] cursor-pointer ' onClick={()=>handleDelete(id)}> <ImCross/></div>
  
    </div>
  )
}
 