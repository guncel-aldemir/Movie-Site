import React from "react";


import { Link } from "react-router-dom";

const HeaderCategory = () => {


  return (
    <div className="bg-[#142850]">
      <h2 className="text-[#fff] font-bold text-xl py-4 border-b-4 w-max border-b-[#fff]">
        You can find these categories movies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 py-2 ">
        <div className="rounded-md  bg-[#DBD0C0] m-2 text-center hover:bg-[#fff] ease-out duration-500">
          <Link
            to="/action"
            className="text-[#C21010] font-sans text-md font-bold uppercase py-2 md:text-sm "
          >
            Action
          </Link>
        </div>
        <div className="rounded-md  bg-[#DBD0C0] m-2 text-center hover:bg-[#fff] ease-out duration-500">
          <Link
            to="/adventure"
            className="text-[#C21010] font-sans text-md font-bold uppercase py-2 md:text-sm "
          >
            Adventure
          </Link>
        </div>
        <div className="rounded-md  bg-[#DBD0C0] m-2 text-center hover:bg-[#fff] ease-out duration-500">
          <Link
            to="/animation"
            className="text-[#C21010] font-sans text-md font-bold uppercase py-2 md:text-sm "
          >
            Animation
          </Link>
        </div>
        <div className="rounded-md  bg-[#DBD0C0] m-2 text-center hover:bg-[#fff] ease-out duration-500">
          <Link
            to="/comedy"
            className="text-[#C21010] font-sans text-md font-bold uppercase py-2 md:text-sm "
          >
            Comedy
          </Link>
        </div>
        
        <div className="rounded-md  bg-[#DBD0C0] m-2 text-center hover:bg-[#fff] ease-out duration-500">
          <Link
            to="/fantasy"
            className="text-[#C21010] font-sans text-md font-bold uppercase py-2 md:text-sm "
          >
           Fantasy
          </Link>
        </div>
        
        <div className="rounded-md  bg-[#DBD0C0] m-2 text-center hover:bg-[#fff] ease-out duration-500">
          <Link
            to="/sciencefinction"
            className="text-[#C21010] font-sans text-md font-bold uppercase py-2 md:text-sm "
          >
            Science-finction
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategory;
