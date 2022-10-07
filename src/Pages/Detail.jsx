import React, { useContext, useEffect } from "react";
import { MovieContext } from "../MovieContext/MovieContext";
import { AiFillCloseCircle } from "react-icons/ai";
import YouTube from "react-youtube";
import axios from "axios";

const Detail = ({ onClose }) => {
  const { list, setList, videos, setVideos } = useContext(MovieContext);
  //  console.log("list detail ",list);
  const ids = list.id;
  console.log("ids", ids);
  const fetchMovie = async () => {
    const data = await axios(
      `https://api.themoviedb.org/3/movie/${ids}/videos?api_key=28f5c7cf8dad0f5aa725c0f4951949ba`
    )
      .then((response) => response.data.results)
      .catch((error) => error);
    console.log("data", data);
    setVideos(data[0].key);
  };
  const fetchTv = async () => {
    const data = await axios(
      `https://api.themoviedb.org/3/tv/${ids}/videos?api_key=28f5c7cf8dad0f5aa725c0f4951949ba`
    )
      .then((response) => response.data.results)
      .catch((error) => error);
    console.log("data", data);
    setVideos(data[0].key);
  };
  useEffect(() => {
    fetchMovie();
    fetchTv();
  }, []);
  const opts = {
    height: "290",
    width: "640",
    origin: window.location.origin,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  console.log("videos", videos);
  return (
    <div className="fixed flex flex-col flex-start items-center left-0 z-50 top-50 w-full h-full bg-black/60">
      <div className="flex flex-col justify-center">
        <AiFillCloseCircle size={40} color="#fff" onClick={onClose} />

        {
          <div>
            <YouTube videoId={videos} opts={opts} id={ids} />
            {list.title ? (
              <h1 className="text-[white]">{list.title}</h1>
            ) : (
              <h1 className="text-[white]">{list.name}</h1>
            )}

            <p className="text-[white]">{list.overview}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Detail;
