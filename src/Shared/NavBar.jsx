import React from "react";
import logo from "../../public/nike.png";
import headLogo from "../assets/Project-Photo/Jumpman_logo.svg.png";
import headLogo2 from "../assets/Project-Photo/head-logo-2.jpg";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const NavBar = () => {
    
  // Nav Items Start
  const navLink = (
    <>
      <span>
        <Link className="font-sans" title=" New & Featured" to="/">
          New & Featured
        </Link>
      </span>
      <span>
        <Link className="font-sans" title="Men" to="/">
          Men
        </Link>
      </span>
      <span>
        <Link className="font-sans" title="Women" to="/">
          Women
        </Link>
      </span>
      <span>
        <Link className="font-sans" title="Kids" to="/">
          Kids
        </Link>
      </span>
      <span>
        <Link className="font-sans" title="Accessories" to="/">
          Accessories
        </Link>
      </span>
      <span>
        <Link className="font-sans" title="Sale" to="/">
          Sale
        </Link>
      </span>
    </>
    // Nav Items End
  );

  return (
    <>
    {/* Top Menu section Start */}
      <div className="navbar min-h-[36px] max-w-[1920px] px-[36px] bg-[#f5f5f5] flex justify-between ">
        <div className="flex gap-5  ">
          <img className="h-6 w-6 cursor-pointer" src={headLogo} alt="" />
          <img className="h-6 w-6 cursor-pointer" src={headLogo2} alt="" />
        </div>
        <div className="top-navbar hidden sm:block">
          <ul className="flex gap-3">
            <li>
              <a href="#">Nike Refurbished</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Find a Store</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Help</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Join Us</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    {/* Top Menu section End */}

    {/* Main Menu Section Start */}
      <div className="navbar max-w-[1920px] px-[36px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <a href="/">
            <img className="h-16 w-16 ml-2" src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold main-menu">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end items-center">
          <div className="relative">
            <input className="bg-gray-100 text-gray-600 p-2 rounded-2xl hidden md:block" type="text" name="Search" placeholder="Search..." id="" />
            <FaSearch className="absolute -top-2 md:top-3 right-4 text-gray-700 text-xl cursor-pointer"  />
          </div>
          <button className="btn btn-ghost btn-circle">
            <FaRegHeart className="text-xl"/>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingBag className="text-xl"/>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    {/* Main Menu Section End */}

    </>
  );
};

export default NavBar;