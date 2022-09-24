import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiMovie2Line } from "react-icons/ri";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#142850] ">
        <div className="flex flex-row gap-2 items-center">
          <RiMovie2Line size={40} color="#C21010"  />
          <Link to="/">
            <h2 className="font-serif font-bold text-2xl text-[#C21010] hover:border-b-4 border-[#fff] cursor-pointer">
              Movie House
            </h2>
          </Link>
        </div>

        <ul className="hidden md:flex">
        <Link to="/search">
            <li className="ml-10 text-lg uppercase font-serif font-bold text-[#C21010] hover:border-b-4 border-[#fff] cursor-pointer ">
              Search
            </li>
          </Link>
          <Link to="/">
            <li className="ml-10 text-lg uppercase font-serif font-bold text-[#C21010] hover:border-b-4 border-[#fff] cursor-pointer ">
              Movie
            </li>
          </Link>
          <Link to="/">
            <li className="ml-10 text-lg uppercase font-serif font-bold text-[#C21010] hover:border-b-4 border-[#fff] cursor-pointer">
              Tv
            </li>
          </Link>
        </ul>
        <div className="md:hidden" onClick={handleNav}>
          <AiOutlineMenu size={20} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#142850] p-10 ease-in duration-700  "
              : "fixed left-[-400%] top-0 p-10  ease-in duration-500"
          }
        >
          <div className="flex flex-col w-full items-center justify-between">
            <div
              className=" rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer"
              onClick={handleNav}
            >
              <AiOutlineClose color="#fff"/>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
              <Link to="/search">
                  <li className="py-4 text-lg font-serif font-bold text-[#C21010] hover:border-b-4 border-[#fff]">Search</li>
                </Link>
                <Link to="/">
                  <li className="py-4 text-lg font-serif font-bold text-[#C21010] hover:border-b-4 border-[#fff]">Movie</li>
                </Link>
                <Link to="/">
                  <li className="py-4 text-lg font-serif font-bold text-[#C21010] hover:border-b-4 border-[#fff] cursor-pointer">Tv</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="tracking-widest text-[#C21010] cursor-pointer">
                  PHOTOGRAPHY IS TRUTH.THE CINEMA IS TRUTH 24 FRAMES PER SECOND{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
