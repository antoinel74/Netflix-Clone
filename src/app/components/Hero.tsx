import React from "react";

interface CardProps {
  title: string;
  backdrop_path: string;
  overview: string;
}

function Hero({ title, backdrop_path, overview }: CardProps) {
  const maskStyle = {
    WebkitMaskImage: `linear-gradient(
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 40%,
              rgba(0, 0, 0, 1) 60%,
              rgba(0, 0, 0, 0) 100%
            )`,
    maskImage: `linear-gradient(
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 40%,
              rgba(0, 0, 0, 1) 60%,
              rgba(0, 0, 0, 0) 100%
            )`,
  };
  return (
    <div className="relative">
      <figure className="relative aspect-video">
        <img
          className="absolute w-full  bg-cover bg-center object-cover opacity-90"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          style={maskStyle}
        ></img>
      </figure>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        {" "}
        <h2 className="text-6xl font-bold mb-2">{title}</h2>
        <p className="w-4/6 mb-6">{overview}</p>
        <button className="bg-white hover:opacity-90 text-black font-semibold py-2 px-4 rounded mr-2">
          Rate This
        </button>
        <button className="bg-white opacity-75 hover:opacity-90 text-black font-semibold py-2 px-4 rounded">
          Add To Your List +
        </button>
      </div>
    </div>
  );
}

export default Hero;
