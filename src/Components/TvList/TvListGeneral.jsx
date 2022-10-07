import React, { useEffect, useContext,useState } from "react";
import axios from "axios";
import { MovieContext } from "../../MovieContext/MovieContext";
import Navbar from "../Navbar/Navbar";
import { FiSearch } from "react-icons/fi";

const TvListGeneral = () => {
  const { tv, searchTv, setSearchTv } = useContext(MovieContext);
  const [searchTvArray, setSearchTvArray] = useState([]);

  const fetchSearchTv = async () => {
    if (searchTv !== "") {
      const data = await axios(
        `https://api.themoviedb.org/3/search/tv?api_key=28f5c7cf8dad0f5aa725c0f4951949ba&query=${searchTv}`
      )
        .then((response) => response.data.results)
        .catch((error) => error.response);
      setSearchTvArray(data);
    } else {
      setSearchTvArray(tv);
    }
  };

  useEffect(() => {
    // fetchTvPopular();
    fetchSearchTv();
  }, [tv]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTv(e.target.value);
    fetchSearchTv();
  };
  return (
    <div>
      <Navbar />
      <div>
        <form
          onSubmit={handleSubmit}
          className=" flex p-6 items-center justify-center bg-[#DBD0C0] "
        >
          <FiSearch size={30} />
          <input
            placeholder="Search Movie,Tv Series"
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
          {searchTvArray.map((item,index) => (
            <div
              className="mx-auto flex flex-col justify-between h-full p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#F9E4C8]"
              key={index.id}
            >
              <div className="my-0 flex flex-col justify-center">
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                    alt=""
                  />
                ) : null}

                {item.name ? (
                  <h2 className="text-[#27496D] font-sans text-xl font-bold uppercase">
                    {item.name}
                  </h2>
                ) : (
                  <p className="text-[#27496D] font-sans text-xl font-bold uppercase">
                    Sorry there is no Title
                  </p>
                )}
                <br></br>
                {item.overview ? (
                  <p className="text-[#27496D] font-sans text-lg italic">
                    {item.overview}
                  </p>
                ) : (
                  <p className="text-[#27496D] font-sans text-lg italic">
                    Sorry there is no overview
                  </p>
                )}

                <p className="text-[#27496D] font-sans text-lg italic">
                  <span className="text-[#27496D] font-sans text-lg font-bold">
                    Average:
                  </span>{" "}
                  {item.vote_average}
                </p>
              </div>
              <div className="flex items-center justify-end  ">
                <button className="border-2 border-[#F9CF93] rounded-md px-4 py-2 bg-[#F9CF93] hover:scale-105  ease-in duration-300 text-[#27496D] font-sans font-bold text-lg">
                  Watch!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvListGeneral;
