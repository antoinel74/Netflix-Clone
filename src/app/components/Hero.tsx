import React from "react";

interface CardProps {
  title: string;
  backdrop_path: string;
}

function Hero({ title, backdrop_path }: CardProps) {
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
      <figure className="relative w-full h-full aspect-video">
        <img
          className="absolute w-full h-full bg-cover bg-center object-cover opacity-90"
          src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
          style={maskStyle}
        ></img>
      </figure>
      <h2 className="absolute top-1/2 left-4 transform -translate-y-1/2">
        {title}
      </h2>
    </div>
  );
}

export default Hero;
