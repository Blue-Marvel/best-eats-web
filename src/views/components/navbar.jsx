import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* {left side} */}
      {leftSide(setNav, nav)}
      {/* search input */}
      {searchInput()}
      {/* cart button */}
      {cart()}
      {/* overlay */}
      <div
        className={
          !nav
            ? " hidden"
            : " bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        }
      ></div>
      {mobileDrawer(nav, setNav)}
    </div>
  );

  function searchInput() {
    return (
      <div className=" bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2 w-[150px] focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
    );
  }
};

function leftSide(setNav, nav) {
  return (
    <div>
      {/* {left side} */}
      <div className=" flex items-center">
        <div onClick={() => setNav(!nav)} className=" cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Best <span className=" font-bold">Eats</span>
        </h1>
        <div className=" hidden lg:flex bg-gray-200 items-center rounded-full p-1 text-[14px]">
          <p className=" bg-black text-white rounded-full p-2">Delivery</p>
          <p className=" p-2">Pickup</p>
        </div>
      </div>
    </div>
  );
}

function cart() {
  return (
    <div>
      <button className=" bg-black text-white md:flex items-center py-2 rounded-full hidden">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
    </div>
  );
}

function mobileDrawer(isDrawer, setDrawer) {
  return (
    <div
      className={
        !isDrawer
          ? " fixed top-0 left-[-100%] h-screen w-[300px] bg-white duration-300 z-10"
          : " fixed top-0 left-0 h-screen w-[300px] bg-white duration-300 z-10"
      }
    >
      <AiOutlineClose
        size={30}
        onClick={() => setDrawer(!isDrawer)}
        className=" absolute right-4 top-4 cursor-pointer"
      />
      <h1 className=" text-2xl p-4 ">
        Best <span className=" font-bold">Eats</span>
      </h1>
      <nav>
        <ul className=" flex flex-col p-4 text-gray-800">
          <li className=" text-lg py-4 flex">
            <TbTruckDelivery size={30} className=" mr-4" />
            Order
          </li>
          <li className=" text-lg py-4 flex">
            <MdFavorite size={30} className=" mr-4" />
            Favorites
          </li>
          <li className=" text-lg py-4 flex">
            <FaWallet size={30} className=" mr-4" />
            Wallet
          </li>
          <li className=" text-lg py-4 flex">
            <MdHelp size={20} className=" mr-4" />
            Help
          </li>
          <li className=" text-lg py-4 flex">
            <AiFillTag size={20} className=" mr-4" />
            Promotions
          </li>
          <li className=" text-lg py-4 flex">
            <BsFillSaveFill size={20} className=" mr-4" />
            Best One
          </li>
          <li className=" text-lg py-4 flex">
            <FaUserFriends size={20} className=" mr-4" />
            Invite Friends
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
