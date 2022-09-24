import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieContext } from "./MovieContext/MovieContext";
import Search from "./Pages/Search";
import Action from "./Pages/Action";
import Adventure from "./Pages/Adventure";
import Animation from "./Pages/Animation";
import Comedy from "./Pages/Comedy";
import Fantasy from "./Pages/Fantasy";
import ScienceFinction from "./Pages/ScienceFinction";
function App() {
  const URL = "https://api.themoviedb.org/3";
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);
  const [search,setSearch] = useState("");
 
  const [cat,setCat] = useState([]);
  const fetchMovies = async () => {
    const data = await axios(
      `${URL}/discover/movie?api_key=28f5c7cf8dad0f5aa725c0f4951949ba&with_genres`
    ).then((response) => response.data.results);
    setMovie(data);
  };
  const fetchTv = async () => {
    const data = await axios(
      `${URL}/discover/tv?api_key=28f5c7cf8dad0f5aa725c0f4951949ba&with_genres`
    ).then((response) => response.data.results);
    setTv(data);
  };
  // const deneme = async () => {
  //   const data = await axios(
  //     `${URL}/genre/movie/list?api_key=28f5c7cf8dad0f5aa725c0f4951949ba`
  //   ).then((response) => response.data.genres);
  //   setCategories(data)
  //   console.log("deneme data ", data);
  // };
  useEffect(() => {
    fetchMovies();
    fetchTv();
    // deneme();
  }, []);
 
  const contextData = { movie, tv,search,setSearch,cat,setCat};
  console.log("movie", movie);
  console.log("tv", tv);
  return (
    <MovieContext.Provider value={contextData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/action" element={<Action />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/fantasy" element={<Fantasy />} />
          <Route path="/sciencefinction" element={<ScienceFinction />} />
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
