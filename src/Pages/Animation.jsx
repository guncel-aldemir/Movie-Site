import React,{useContext,useState} from "react";
import { MovieContext } from "../MovieContext/MovieContext";
import Navbar from "../Components/Navbar/Navbar";
import{ GrReturn} from "react-icons/gr"
import { Link } from "react-router-dom";
import HeaderCategory from "../Components/Header/HeaderCategory";
const Animation = () => {
    const {movie}=useContext(MovieContext);
    const categoryDatas = movie.filter((item) => item.genre_ids.includes(16));
    const [animation,setAnimation] =useState(categoryDatas);
    
  return <div className="bg-[#FDFFBC]">
  <Navbar/>
  <HeaderCategory/>
  <div className="flex flex-row font-bold text-xl py-4 px-8 text-[#142850] hover:text-[#E50914] font-georgia">
  <GrReturn size={30} color="#C21010"/>
  <Link to="/">Turn Back Home Page</Link>
  </div>

  <h2 className=" font-bold text-3xl py-4 px-8 w-max text-[#E50914] font-georgia  ">
         Animation Movies
        </h2>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8 bg-[#FDFFBC]">
          {animation
            .map((item) => (
              <div
                className="mx-auto flex flex-col justify-between h-full p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#FFC1B6]"
                key={item.id}
              >
                <div className="my-0 flex  flex-col justify-center ">
                  {item.poster_path ? (
                    <img className="rounded-xl"
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt=""
                    />
                  ) : null}
                  <h2 className="text-[#fff] font-sans text-xl font-bold uppercase mt-4">
                    {item.title}
                  </h2>
                  <p className="text-[#fff] font-sans text-lg italic">
                    {item.overview}
                  </p>
                  <p className="text-[#fff] font-sans text-lg italic">
                    <span className="text-[#fff] font-sans text-lg font-bold">
                      Release Date:
                    </span>{" "}
                    {item.release_date.slice(0, 4)}
                  </p>
                </div>
                <div className="flex items-center justify-end  ">
                  <button className="border-2 border-[#fff] rounded-md px-4 py-2 bg-[#fff] hover:scale-105  ease-in duration-300 text-[#27496D] font-sans font-bold text-lg">
                    Watch!
                  </button>
                </div>
              </div>
            ))}
        </div>
</div>
};

export default Animation;
