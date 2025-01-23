

  import React, { useEffect, useState } from 'react'
  import { getProducts } from '../apis/apis';
import Productcard from './Productcard';

  export default function Products() {
    const[isLoading,setIsLoading]=useState(true);
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        const getAllProducts=async()=>{
          const result =await getProducts();
          setProducts(result.data);
          setIsLoading(false);
    
        }
        getAllProducts();
        
    
    
      },[])
    
  
    return (
      
   <div className='flex  justify-center items-center flex-wrap gap-[30px] ml-[100px] mt-[100px]'>

   {!isLoading?products.map((product)=>(
    
    <Productcard productid={product.id}  title={product.title} price={product.price} rating={product.rating.rate} image={product.image}/>
   

 )):<p className='flex justify-center items-center mt-[200px]'>Loading....</p>}

   </div>
    )
  }
  