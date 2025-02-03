import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cart from "../assests/images/cart.png";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import { CartBadgeContext } from "../Context/CartBadge";
import { Filterdatacontext } from "../Context/FilteredData";
import { FaFilter } from "react-icons/fa";
import Home from "./Home";

import { getProducts } from "../apis/apis";

export default function Nav({ isChecked, setIsChecked }) {
  const navigate = useNavigate();
  const badge = useContext(CartBadgeContext);
  const cartBadge = badge.cartBadge;
  const [isVisible, setIsVisible] = useState(false);
  const data = useContext(Filterdatacontext);
  const filteredData = data.filteredData;
  console.log("filtered data", filteredData);

  const [allproducts, setAllProducts] = useState([]);

  //
  // let badgeResult;
  // const Display=async()=>{
  //   let result= await getBadge();
  //   badgeResult=result?.data?.cartBadge;
  //   console.log(badgeResult)

  // }

  //  useEffect(()=>{
  //   Display();

  //  },[badge])

  console.log("data", data);
  // useEffect(() => {}, [isChecked]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const result = await getProducts();
    data.setFilteredData(result.data);
    setAllProducts(result.data);
  };

  const handleClick = () => {
    navigate("/login");
  };
  const handleFilterClick = () => {
    console.log("filter");
    if (isVisible) {
      setIsVisible(false);
    } else {
      console.log("else condition");
      setIsVisible(true);
    }
  };
  const handleCheckBoxChange = () => {
    if (isChecked) {
      getAllProducts();
      setIsChecked(false);
    } else {
      data.setFilteredData(filteredData.sort((a, b) => a.price - b.price));
      setIsChecked(true);
    }
    console.log("changed");
  };
  console.log("filtered data after sorting", filteredData);
  return (
    <div className="flex items-center justify-between px-6 bg-black h-[10vh] fixed top-0 right-0 left-0 z-50">
      <div className="flex gap-[30px] justify-center text-xl cursor-pointer">
        <Link className="text-white" to="/Home">
          Home
        </Link>
        <Link className="text-white" to="/Mens">
          Mens
        </Link>
        <Link className="text-white" to="/Womens">
          Womens
        </Link>
        <Link className="text-white" to="/Electronics">
          Electronics
        </Link>
        <Link className="text-white" to="/Jeweleries">
          Jeweleries
        </Link>
        <Searchbar allproducts={allproducts} getAllProducts={getAllProducts} />
      </div>

      <div className="flex gap-[50px]  items-center ">
        <div className="relative">
          <FaFilter
            color="white"
            size="25px"
            cursor="pointer"
            onClick={handleFilterClick}
          />
          {isVisible && (
            <div className="absolute top-5 right-0 h-[200px] w-[200px] bg-white">
              <div className="flex items-center gap-[30px] m-[10px]">
                <p>Price:Low to High</p>
                <input
                  type="checkbox"
                  onChange={handleCheckBoxChange}
                  checked={isChecked}
                />
              </div>
            </div>
          )}
        </div>
        <Link className="cursor-pointer relative" to="/Cart">
          <img src={cart} alt="cart" class="h-[45px]" />
          <span class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full h-[20px] w-[20px] flex items-center justify-center">
            {cartBadge}
          </span>
        </Link>

        <button
          className="bg-[#fbbf24] text-white p-[5px] h-[40px] rounded-md  font-bold"
          onClick={() => handleClick()}
        >
          Signup/login
        </button>
      </div>
    </div>
  );
}
