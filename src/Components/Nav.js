import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "../home.css";
import cart from "../assests/images/cart.png";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import { CartBadgeContext } from "../Context/CartBadge";

export default function Nav() {
  const navigate = useNavigate();
  const badge = useContext(CartBadgeContext);

  const cartBadge = badge.cartBadge;

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between px-6 bg-black h-[65px] fixed top-0 right-0 left-0 z-50">
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
        <Searchbar />
      </div>

      <div className="flex gap-[50px] ">
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
