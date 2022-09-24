import React from "react";
import HeaderCategory from "../Components/Header/HeaderCategory";
import MovieList from "../Components/MovieList/MovieList";
import Navbar from "../Components/Navbar/Navbar";
import TvList from "../Components/TvList/TvList";

const Home = () => {
  return (
    <div className="">
        <Navbar/>
        <HeaderCategory/>
        <MovieList/>
        <TvList/>
    </div>
  )
};

export default Home;
