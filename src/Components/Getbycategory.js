import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import {   getProductsByCategory } from '../apis/apis'
import Productcard from './Productcard';



export default function Getbycategory({category}) {
    const[data,setData]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    
    useEffect(()=>{
        const display=async()=>{
            console.log(category);
          const result=await getProductsByCategory(category);
          setData(result.data);
          setIsLoading(false);
          console.log("result",result.data)
          console.log("I am in category page")          
        }
        display();


    },[category])


  return (
    <div>
<Nav/>
<div className='flex ml-[100px] gap-[30px] flex-wrap mt-[100px] '>
{!isLoading?(data.map((product)=>(
  <Productcard productid={product.id} price={product.price} rating={product.rating.rate} image={product.image} title={product.title} />
))):<p className='ml-[700px] mt-[200px] font-bold '>Loading...</p>}

</div>
      
    </div>
  )
}
