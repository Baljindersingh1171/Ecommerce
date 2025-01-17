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
    
    console.log(result);
    return result;
}
export const getProduct=async(id)=>{
    const result=await axios.get(`https://fakestoreapi.com/products/${id}`);
    return result;
}