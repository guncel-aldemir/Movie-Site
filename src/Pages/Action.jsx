import React,{useContext,useState} from "react";

import { MovieContext } from "../MovieContext/MovieContext";
import{ GrReturn} from "react-icons/gr"
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import HeaderCategory from "../Components/Header/HeaderCategory";
const Action = () => {
    const {movie}=useContext(MovieContext);
    

    const data = movie.filter((item) => item.genre_ids.includes(28));

    const [action,setAction]=useState(data);
  
    
      
    return (
      
      <div className="bg-[#000]">
        <Navbar/>
        <HeaderCategory/>
        <div className="flex flex-row font-bold text-xl py-4 px-8  text-[#fff] hover:text-[#E50914] font-georgia">
  <GrReturn size={30} />
  <Link to="/">Turn Back Home Page</Link>
  </div>
        <h2 className=" font-bold text-3xl py-4 px-8 w-max text-[#E50914] font-georgia  ">
          Action Movies
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8 bg-[#000]">
          {action
            .map((item) => (
              <div
                className="mx-auto flex flex-col justify-between h-full p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#142850]"
                key={item.id}
              >
                <div className="my-0 flex  flex-col justify-center ">
                  {item.poster_path ? (
                    <img className="rounded-xl"
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt=""
                    />
                  ) : null}
                  <h2 className="text-[#E50914] font-sans text-xl font-bold uppercase mt-4">
                    {item.title}
                  </h2>
                  <p className="text-[#E50914] font-sans text-lg italic">
                    {item.overview}
                  </p>
                  <p className="text-[#E50914] font-sans text-lg italic">
                    <span className="text-[#E50914] font-sans text-lg font-bold">
                      Release Date:
                    </span>{" "}
                    {item.release_date.slice(0, 4)}
                  </p>
                </div>
                <div className="flex items-center justify-end  ">
                  <button className="border-2 border-[#fff] rounded-md px-4 py-2 bg-[#fff] hover:scale-105  ease-in duration-300 text-[#E50914] font-sans font-bold text-lg">
                    Watch!
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  

export default Action;
