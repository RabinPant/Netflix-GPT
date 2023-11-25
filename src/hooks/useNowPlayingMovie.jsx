import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../Utils/constant";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  //fetch data form TMDB API
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIE_API, API_OPTIONS);

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
