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
import Buttons from "./Buttons";

export default function Nav({ isVisible,setIsVisible,radiovalue,setRadioValue }) {
  const navigate = useNavigate();
  const badge = useContext(CartBadgeContext);
  const cartBadge = badge.cartBadge;
console.log("isVisible",isVisible);
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
    
      setIsVisible(true);
    }
  };
  console.log("radiovalue",radiovalue)
  const check = () => {
    if (radiovalue === "hightolow") {
      console.log("high to low")
      const sortedData = [...filteredData].sort((a, b) => b.price - a.price); 
      data.setFilteredData(sortedData);
    }
    else if (radiovalue === "lowtohigh") {
      console.log("running")
      const sortedData = [...filteredData].sort((a, b) => a.price - b.price); 
      data.setFilteredData(sortedData);
    }
    else {
      getAllProducts();
    }
}

  useEffect(()=>{check()},[radiovalue])

  const handleRadioBtnChange = (e) => {
    setRadioValue(e.target.value);
 
     
    }
    const handleClear=()=>{
      setRadioValue(null);
      getAllProducts();
      setIsVisible(false);

    }

  return (
    <div className="flex items-center justify-between px-6 bg-black h-[10vh] fixed top-0 right-0 left-0 z-50" >
      <div className="flex gap-[30px] justify-center text-xl cursor-pointer" >
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
            <div className="absolute top-5 right-0 h-[120px] w-[200px] bg-white border-[1px] border-black flex flex-col items-center ">
              <div className="flex items-center gap-[15px] m-[10px] ">
                <p>Price:-Low to High</p>
                <input
                  type="radio"
                  onChange={handleRadioBtnChange}
                  name="radiobtn"
                  value="lowtohigh"
                  checked={radiovalue === "lowtohigh"} 
               
                />
             
              </div>
              <div className="flex items-center gap-[15px] m-[10px] ">
              <p>Price:-High to Low</p>
              <input
                type="radio"
                onChange={handleRadioBtnChange}
                name="radiobtn"
                value="hightolow"
                checked={radiovalue === "hightolow"} 
             
              />
           
            </div>
            <Buttons text="clear all" onClick={handleClear} />
            
            </div>
          )}
        </div>
        <Link className="cursor-pointer relative" to="/Cart">
          <img src={cart} alt="cart" class="h-[45px]" />
          <span class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full h-[20px] w-[20px] flex items-center justify-center ">
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
