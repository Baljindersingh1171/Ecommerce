import React, { useEffect, useState } from 'react';
import googleImg from '../assests/images/google.png'
import {ThreeDots } from 'react-loader-spinner'


import { getProductsByCategory } from '../apis/apis';
import Productcard from './Productcard';

export default function Getbycategory({ category, filteredData }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log("filtered data in category", filteredData);

    useEffect(() => {
        const display = async () => {
            console.log(category);
            const result = await getProductsByCategory(category);
            console.log(isLoading);
          
            if (filteredData.length < 20) {
          
                setData(filteredData);
               
            }
          
             else {
                setData(result.data);
            }
            
            setIsLoading(false);
            console.log("result", result.data);
            console.log("I am in category page");
        }
        
        display();
    }, [category, filteredData]); 

    console.log("data", data);
  

    return (
        <div>
            <div className='flex ml-[100px] gap-[30px] flex-wrap mt-[100px]'>
                {!isLoading?(data.length>0 ? (
                    data.map((product) => (
                        <Productcard 
                            productid={product.id} 
                            price={product.price} 
                            rating={product.rating.rate} 
                            image={product.image} 
                            title={product.title} 
                        />
                    ))
                ) : ( 
                    <p className='ml-[600px] mt-[60px] text-xl font-bold'>No products found</p>
                )):<p>Loading...</p>}
            </div>
        </div>
    );
}
