import React , {useContext,useState} from "react";
import { MovieContext } from "../MovieContext/MovieContext";
import Navbar from "../Components/Navbar/Navbar";
import HeaderCategory from "../Components/Header/HeaderCategory";
const Adventure = () => {
    const {movie}=useContext(MovieContext);
    const categoryDatas = movie.filter((item) => item.genre_ids.includes(12));
    const [adventure,setAdventure] = useState(categoryDatas);
    
   
  return <div className="bg-[#00A8CC]">
  <Navbar/>
  <HeaderCategory/>
        <h2 className=" font-bold text-3xl py-4 px-8 w-max text-[#E50914] font-georgia  ">
         Adventure Movies
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8 bg-[#00A8CC]">
          {adventure
            .map((item) => (
              <div
                className="mx-auto flex flex-col justify-between h-full p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#62D2A2]"
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

export default Adventure;
