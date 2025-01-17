


  import React, { useEffect, useState } from 'react'
  import { getProducts } from '../apis/apis';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom'
  export default function Products() {
    const[products,setProducts]=useState([]);
    const navigate=useNavigate();
   
    const[id,setId]=useState('');
    

    useEffect(()=>{
        const getAllProducts=async()=>{
          const result =await getProducts();
          setProducts(result.data);
    
        }
        getAllProducts();
    
    
      },[])
    
   
      const handleClick=(myid)=>{
        if(id!==myid)
        {
        setId(myid);
        
        }else{
          setId(null)
      
        }

        console.log(myid)
      
      

      }

  
    
    return (
      
   <div className='flex  flex-wrap gap-[30px] justify-evenly '>

   {products.map((product)=>(
    
    
     <div className='w-[330px]'>
     <img className="mx-auto w-[300px] h-[340px] "src={product.image} alt='product'/>
     <div className='w-full  flex flex-col items-center '>
     <div className='h-[80px] '>

     <div>{product.title.slice(0,60)}</div>

     <div className='text-green-700 font-bold'>{product.id===id?`${product.price}$`:""}</div>
     <Buttons onClick={()=>handleClick(product.id)} productid={product.id} id={id} className='text-blue-600'/>
  

      </div>
     
     <Buttons className='bg-[#fbbf24] p-2 rounded-md w-[150px]  ' text="Buy now"  onClick={()=>navigate('/Buynow')}/>
     </div>
    
     </div>

   

 ))}

   </div>
    )
  }
  