import React, { useEffect, useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { CartBadgeContext } from "../Context/CartBadge";
import {
  deleteCartProduct,
  getCartProducts,
  updateCartData,
} from "../apis/apis";

export default function Quantityprice({
  price,
  id,
  setCartProducts,
  quantity,
  display,
}) {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(price);
  const badge = useContext(CartBadgeContext);
  const cartBadge = badge.cartBadge;
  const update = async () => {
    
    await updateCartData(count, id, total, cartBadge);
    await display();
  };
  console.log("quantity of product", quantity);

  function handleIncrement() {

    setCount(quantity + 1);
    setTotal(price * (quantity + 1));
  }

  useEffect(() => {
  
    update();
  
  }, [count]);


  function handleDecrement() {
    if (quantity > 1) {
      setCount(quantity - 1);
      setTotal(price * (quantity - 1));
    }
  }
  const handleDelete = async (myid) => {
    try {
      await deleteCartProduct(myid);
      const result = await getCartProducts();
      const totalCartItems= result.data.reduce((acc, currentvalue) => acc + currentvalue.quantity, 0);
   badge.setCartBadge(totalCartItems);
      setCartProducts(result.data);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="flex relative items-center gap-[5px] ">
      <div onClick={handleDecrement}>
        <FaCircleMinus />
      </div>
      <div>{quantity}</div>
      <div onClick={handleIncrement}>
        <FaCirclePlus />
      </div>
      <div className="ml-[30px] absolute left-[166px]">{total}$</div>
      <div
        className="absolute left-[300px] cursor-pointer "
        onClick={() => handleDelete(id)}
      >
        {" "}
        <ImCross />
      </div>
    </div>
  );
}
