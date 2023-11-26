const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from black w-screen aspect-video font-bold">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/6">{overview}</p>
      <div className=" flex">
        <button className="flex bg-white text-black p-4 px-10 text-lg rounded-md hover:opacity-80">
          <img
            className="h-7 w-7"
            src="https://cdn.iconscout.com/icon/free/png-512/free-play-player-arrow-stop-sound-30544.png?f=avif&w=512"
            alt="play"
          />
          Play
        </button>
        <button className="mx-2 flex bg-gray-500 opacity-90 text-white p-4 px-10 text-lg rounded-md hover:opacity-100">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            className="mr-1 h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
