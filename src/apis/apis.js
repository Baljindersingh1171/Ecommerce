import axios from "axios";
export const signup = async (username, confirmpassword) => {
  try {
    const result = await axios.post(
      "https://d324-2401-4900-1c70-501a-9691-1c54-de95-feae.ngrok-free.app/register",
      {
        username: username,
        password: confirmpassword,
      }
    );
    console.log(result);
    return result;
  } catch (err) {}
};
export const login = async ({ username, password }) => {
  const result = await axios.post("", {
    username: username,
    password: password,
  });
};

export const getProducts = async () => {
  const result = await axios.get("https://fakestoreapi.com/products");

  // console.log(result);
  return result;
};
export const getProduct = async (id) => {
  const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return result;
};
export const getProductsByCategory = async (category) => {
  const result = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return result;
};
export const addToCart = async (
  productid,
  title,
  price,
  image,
  quantity,
  category
) => {
  console.log("productid", productid);
  try {
    const response = await axios.post(`http://localhost:3000/products`, {
      productid: productid,
      title: title,
      price: price,
      image: image,
      totalprice: price,
      quantity: quantity,
      category: category,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
// export const addToBadge = async (cartBadge) => {
//   console.log(cartBadge, "cartbade");
//   try {
//     await axios.patch(`http://localhost:3000/cartBadge/908`, {
//       cartBadge: cartBadge+1 ,
//     });
//   } catch (err) {
//     throw err;
//   }
// };
// export const getBadge=async()=>{
//   try{
//     const result=await axios.get(`http://localhost:3000/cartBadge`)

//     return result
//   }
//   catch(err){
//     throw(err)
//   }
// }
export const getCartProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/products`);
    return response;
  } catch (err) {
    throw err;
  }
};
export const deleteCartProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/products/${id}`);
    return response;
  } catch (err) {
    throw err;
  }
};
export const updateCartData = async (count, id, total) => {
  try {
    await axios.patch(`http://localhost:3000/products/${id}`, {
      quantity: count,
      totalprice: total,
    });
  } catch (err) {
    throw err;
  }
};
