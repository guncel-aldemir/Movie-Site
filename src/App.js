import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieContext } from "./MovieContext/MovieContext";
function App() {
  const URL = "https://api.themoviedb.org/3";
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);
  const fetchMovies = async () => {
    const data = await axios(
      `${URL}/discover/movie?api_key=28f5c7cf8dad0f5aa725c0f4951949ba`
    ).then((response) => response.data.results);
    setMovie(data);
  };
  const fetchTv = async () => {
    const data = await axios(
      `${URL}/discover/tv?api_key=28f5c7cf8dad0f5aa725c0f4951949ba`
    ).then((response) => response.data.results);
    setTv(data);
  };
  useEffect(() => {
    fetchMovies();
    fetchTv();
  }, []);

  const contextData = { movie, tv };
  console.log("movie", movie);
  console.log("tv", tv);
  return (
    <MovieContext.Provider value={contextData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
