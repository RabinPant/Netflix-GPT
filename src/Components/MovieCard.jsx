import { IMG_CDN } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movieBanner" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
