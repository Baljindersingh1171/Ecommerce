import React, { useEffect, useState } from 'react'

import { getCartProducts } from '../apis/apis';
import Nav from './Nav';

import { useNavigate } from 'react-router-dom'


import Quantityprice from './Quantityprice';




export default function Cart() {

  const navigate=useNavigate();
   
 const[cartProducts,setCartProducts]=useState([]);
     useEffect(()=>{
        const display=async()=>{
            const result=await getCartProducts();
            setCartProducts(result.data);
            console.log("cart products",result)

        }
        display();
       
     },[])

     


 
   

  return (
    <div>
    <Nav/>
    <div className=' flex justify-center items-center mt-[100px] ' >
  
 
    {cartProducts.length>0?(<><table className="table-auto text-[24px]">

          <thead>
            <tr className=''>
              <th className=''>ITEM</th>
              <th className=' pl-[50px]'>PRICE</th>
              <th className=' pl-[60px]'>QUANTITY</th>
              <th className=' pl-[70px]'>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <>
                <tr className=''>
                  <td className=' flex justify-start items-center gap-[17px] my-2 cursor-pointer' onClick={() => navigate('/Addtocart', { state: product.productid })}><img src={product.image} alt='' className='w-6' />{product.title.slice(0, 20)}</td>
                  <td className=' pl-[60px]  my-4'>{product.price}$</td>
                  <td className='  pl-[70px]  mt-4'>

                    <Quantityprice price={product.price} id={product.id} setCartProducts={setCartProducts} />

                  </td>

                </tr>

              </>
            ))}
          </tbody>
        </table><table>

          </table></>):"No Products "
    }
    </div>

    </div>
      

  )
}
