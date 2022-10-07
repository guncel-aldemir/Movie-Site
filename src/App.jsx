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


import TvListGeneral from "./Components/TvList/TvListGeneral";

function App() {
  const URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [search,setSearch] = useState("");
  const [searchTv,setSearchTv] = useState("");
  const [open,setOpen] = useState(false);
  const[openModal,setOpenModal]=useState(false)
  const[modalData,setModalData]=useState(null)
  const[selectedMovie,setSelectedMovie]=useState({})
  const [list,setList]=useState({})
  const [tvList,setTvList]=useState({})
  const [searchArray,setSearchArray] = useState([])
  const [videos, setVideos] = useState("");
  const fetchMovies = async () => {
    const data = await axios(
      `${URL}/discover/movie/?api_key=28f5c7cf8dad0f5aa725c0f4951949ba&with_genres`
    ).then((response) => response.data.results);
    setMovies(data);
  

  };

  
  const fetchTv = async () => {
    const data = await axios(
      `${URL}/discover/tv?api_key=28f5c7cf8dad0f5aa725c0f4951949ba&with_genres`
    ).then((response) => response.data.results);
    setTv(data);
  };


  useEffect(() => {
    fetchMovies();
    fetchTv();
   
  }, []);
 
  const contextData = { movies, tv,search,setSearch,open,setOpen,searchTv,setSearchTv,openModal,setOpenModal,modalData,setModalData,selectedMovie,setSelectedMovie,list,setList,tvList,setTvList,searchArray,setSearchArray,videos, setVideos};
  // console.log("movies", movies);
  // console.log("tv", tv);


  return (
    <MovieContext.Provider value={contextData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TvListGeneral" element={<TvListGeneral />} />
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
