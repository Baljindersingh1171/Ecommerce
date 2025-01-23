import axios from 'axios';
export const signup=async(username,email,phoneno,confirmpassword)=>{
    try{
    const result=await axios.post('https://3f4d-2401-4900-1c71-13fc-a0ad-8e89-90af-e998.ngrok-free.app/register',{
        "username":username,
        "email":email,
        "phoneNo":phoneno,
        "password":confirmpassword,
        "name":"baljinder"

    

    })
    console.log(result);
    return result;
}
catch(err)
{

}

}
export const login=async({username,password})=>{
   
        const result=await axios.post('',{
            "username":username,
            "password":password
        })

    }

export const getProducts=async()=>{
    const result=await axios.get('https://fakestoreapi.com/products');
    
    // console.log(result);
    return result;
}
export const getProduct=async(id)=>{
    const result=await axios.get(`https://fakestoreapi.com/products/${id}`);
    return result;
}
export const getProductsByCategory=async(category)=>{
    const result =await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return result;
}
export const addToCart=async(id,title,price,image)=>{
    try{
        const response=await axios.post(`http://localhost:3000/products`,{
            productid:id,
            title:title,
            price:price,
            image:image


        })
        return response;

    }
    catch(err){
        throw(err);

    }

}
export const getCartProducts=async()=>{
    try{
        const response=await axios.get(`http://localhost:3000/products`);
        return response;
       
        
    }
    catch(err)
    {
        throw(err);

    }

}
export const deleteCartProduct=async(id)=>{
    try{
        const response=await axios.delete(`http://localhost:3000/products/${id}`);
        return response;

    }
    catch(err)
    {
        throw(err)
    }
}