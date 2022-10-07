import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MovieContext } from "../MovieContext/MovieContext";
import Navbar from "../Components/Navbar/Navbar";

import { FiSearch } from "react-icons/fi";
import Detail from "./Detail";


const Search = () => {

  const { movies, search, setSearch,openModal, setOpenModal,list,setList,searchArray,setSearchArray } = useContext(MovieContext);

  // const URL = "https://api.themoviedb.org/3";
console.log("movie",movies);
  const fetchSearch = async () => {

    if(search !== ""){
       const data = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=28f5c7cf8dad0f5aa725c0f4951949ba&query=${search}`
      )
        .then((response) => response.data.results)
        .catch((error) => error.response);
        setSearchArray(data);
    }else{
      console.log("else kısmı");
      setSearchArray(movies)
    }
    }
  useEffect(() => {
    fetchSearch();
  }, [movies]);
  const handleSubmit = (e) => {
   e.preventDefault();
    setSearch(e.target.value)
    fetchSearch();
  
  };
console.log("searcharray",searchArray);

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit} className=" flex p-6 items-center justify-center bg-[#DBD0C0] ">
          <FiSearch size={30} />
          <input
            placeholder="Search Movie"
            className="border  rounded-xl px-30 py-4 w-[50%] uppercase" 
            onChange={handleSubmit}
          />
          
          </form>
        </div>

        <div className="bg-[#DBD0C0]">
      <h2 className="text-[#C21010] font-bold text-xl py-4 border-b-4 w-max border-b-[#fff]">
        Your Search Results
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8 bg-[#DBD0C0]">
    
        {searchArray
          ?.map((item,index) => (
            <div
              className="mx-auto flex flex-col justify-between h-full p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#F9E4C8]"
              key={index.id} onClick={()=>setList(item)}
            >
              <div className="my-0 ">
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                    alt=""
                  />
                ) : null}
                <h2 className="text-[#27496D] font-sans text-xl font-bold uppercase">
                  {item.title}
                </h2>
                <p className="text-[#27496D] font-sans text-lg italic">
                  {item.overview}
                </p>
                <p className="text-[#27496D] font-sans text-lg italic">
                  <span className="text-[#27496D] font-sans text-lg font-bold">
                    Release Date:
                  </span>{" "}
                  {item.release_date.slice(0, 4)}
                </p>
              </div>
              <div className="flex items-center justify-end  ">
                <button className="border-2 border-[#F9CF93] rounded-md px-4 py-2 bg-[#F9CF93] hover:scale-105  ease-in duration-300 text-[#27496D] font-sans font-bold text-lg"   onClick={()=>setOpenModal(true)}>
                  Detail
                </button>
                {openModal && <Detail list={list} onClose={() => setOpenModal(false)} />}
              </div>
            </div>
          ))
          }
      </div>
    </div>
      

      
      

    </>
  );
};

export default Search;
