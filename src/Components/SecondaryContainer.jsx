import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  console.log(movies.nowPlayingMovies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-60 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
            id="slider"
          />
        </div>
        <div></div>
      </div>
    )
  );
};

export default SecondaryContainer;
