

  import React, { useEffect, useState } from 'react'
  import { getProducts } from '../apis/apis';
import Productcard from './Productcard';

  export default function Products({filteredData}) {
    const[isLoading,setIsLoading]=useState(true);
    const[products,setProducts]=useState([]);
    console.log(filteredData,"filtered Data in products page")
    // useEffect(()=>{
    //     const getAllProducts=async()=>{
    //       const result =await getProducts();
    //       setProducts(result.data);
    //       setIsLoading(false);
    
    //     }
    //     getAllProducts();
        
    
    
    //   },[])
   

  
    return (
      
   <div className='flex  justify-center items-center flex-wrap gap-[30px] ml-[100px] mt-[100px]'>

   {filteredData.length>0?filteredData.map((product)=>( <Productcard productid={product.id}  title={product.title} price={product.price} rating={product.rating.rate} image={product.image}/>)):<p className='font-bold text-xl mt-[60px]'>No products found </p>}

   </div>
    )
  }
  