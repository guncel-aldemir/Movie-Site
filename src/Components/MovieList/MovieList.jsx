import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../MovieContext/MovieContext";

const MovieList = () => {
  const { movie } = useContext(MovieContext);

//   console.log("movie list", movie);
  return (
    <div className="bg-[#FAEEE0]">
        <h2 className="text-[#165f16] font-bold text-xl py-4 border-b-4 w-max border-b-[#fff]">Recommended Movies</h2>
<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8 bg-[#FAEEE0]">

{movie.map((item) => (
  <div className="mx-auto flex flex-col justify-between h-full p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#F9E4C8]" key={item.id}>
      <div className="my-0 ">
        {item.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}  alt=""/>: null}
          <h2 className="text-[#008000] font-sans text-xl font-bold uppercase">{item.title}</h2>
          <p className="text-[#008000] font-sans text-lg italic">{item.overview}</p>
          <p className="text-[#008000] font-sans text-lg italic"><span className="text-[#008000] font-sans text-lg font-bold">Release Date:</span> {item.release_date}</p>
          
      </div>
      <div className="flex items-center justify-end  ">
        <button className="border-2 border-[#F9CF93] rounded-md px-4 py-2 bg-[#F9CF93] hover:scale-105  ease-in duration-300 text-[#165f16] font-sans font-bold text-lg">Watch!</button>
      </div>
  </div>
)).slice(0,12)}
</div>
    </div>
    
  );
};

export default MovieList;
