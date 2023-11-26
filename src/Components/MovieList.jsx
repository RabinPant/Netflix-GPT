import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieList = ({ title, movies, id }) => {
  console.log("movies from movieList", movies);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="px-6 bg-black">
      <h1 className=" text-white text-3xl py-4">{title}</h1>
      <MdChevronLeft
        size={40}
        onClick={slideLeft}
        className="bg-red-700 relative top-40 opacity-95 shadow-md rounded-l-lg cursor-pointer hover:opacity-75 right-4"
      />
      <MdChevronRight
        size={40}
        onClick={slideRight}
        className="bg-red-700 relative left-[99%] top-28 opacity-95 shadow-md rounded-r-lg cursor-pointer hover:opacity-75"
      />
      <div
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
        id={id}
      >
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard posterPath={movie.poster_path} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
