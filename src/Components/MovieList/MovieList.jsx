import React, { useContext } from "react";



import { MovieContext } from "../../MovieContext/MovieContext";
import Detail from "../../Pages/Detail";

const MovieList = () => {
  const { movies, openModal, setOpenModal,list,setList } =
    useContext(MovieContext);


console.log("list,",list);
  return (
    <div className="bg-[#DBD0C0]">
      
        {/* {openModal && <Detail onClose={() => setOpenModal(false)} />} */}
       
      <h2 className="text-[#C21010] font-bold text-xl py-4 border-b-4 w-max border-b-[#fff]">
        Recommended Movies
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8 bg-[#DBD0C0]" > 
        {movies
          .map((item) => (
            <div
              className="mx-auto flex flex-col justify-between h-full p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#F9E4C8] " key={item.id}  onClick={()=>setList(item)}
             
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
                <button
                  className=" border-2 border-[#F9CF93] rounded-md px-4 py-2 bg-[#F9CF93] hover:scale-105  ease-in duration-300 text-[#27496D] font-sans font-bold text-lg" 
                  
                  onClick={()=>setOpenModal(true)}
                >
                  Detail
                </button>
                
                
              </div>
              
           
            </div>
          ))
          .slice(0, 12)}
         
           {openModal && <Detail list={list} onClose={() => setOpenModal(false)} />} 
      </div>
    </div>
  );
};

export default MovieList;
