import React from "react";
import { convertDateFormat } from "@/utils/convertDate";
import { MovieDetails } from "@/utils/request";
import Link from "next/link";
import { onAdd } from "@/utils/localStorage";

function Hero({ id, title, backdrop_path, overview, vote_average, release_date }: MovieDetails) {
  const handleAddToList = (movies: MovieDetails) => {
    onAdd(movies);
  };

  return (
    <div className="relative">
      <figure className="relative aspect-video">
        <img
          className="absolute w-full h-full bg-cover bg-center object-cover opacity-60 maskStyle"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        ></img>
      </figure>
      <div className="absolute top-1/3 left-4 transform -translate-y-1/3 ml-2">
        {" "}
        <h2 className="text-3xl lg:text-6xl font-bold mb-2">{title}</h2>
        <p className="font-semibold text-lime-600 mb-4">
          {(vote_average * 10).toFixed()}% Positive
          <span className="font-light ml-1 text-white">- {convertDateFormat(release_date)}</span>
        </p>
        <p className="w-4/6 mb-6 hidden lg:block ">{overview}</p>
        <Link href={`/movies/${id}`}>
          <button className="bg-white hover:bg-slate-200 text-black font-medium py-2 px-4 mr-2 rounded">
            Rate This
          </button>
        </Link>
        <Link href={`/movies/${id}`}>
          <button className="bg-slate-800 opacity-90 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded">
            + Add To Your List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
