import React from "react";
import HeaderSearch from "../Components/Header/HeaderSearch";
import MovieList from "../Components/MovieList/MovieList";
import Navbar from "../Components/Navbar/Navbar";
import TvList from "../Components/TvList/TvList";

const Home = () => {
  return (
    <div className="">
        <Navbar/>
        <HeaderSearch/>
        <MovieList/>
        <TvList/>
    </div>
  )
};

export default Home;
