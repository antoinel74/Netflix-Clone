"use client";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "@/utils/request";
import { useParams } from "next/navigation";
import { convertDateFormat } from "@/utils/convertDate";

export interface MovieDetailsProps {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

const MovieDetailsView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(
    null
  );
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

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!id || Array.isArray(id)) {
        console.error("Invalid ID / Error");
        return;
      }

      const movieDetailsId = parseInt(id, 10);
      const details = await fetchMovieDetails(movieDetailsId);

      console.log("Movie Details:", details);
      setMovieDetails(details);
    };

    getMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Loading ...
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex justify-center items-center px-4">
      <img
        className="absolute w-full h-full bg-cover bg-center object-cover opacity-60"
        src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
        style={maskStyle}
      ></img>
      <div className="absolute z-2">
        <h1 className="text-4xl font-semibold">
          {movieDetails.original_title}
        </h1>
        <p className="font-semibold text-lime-600 mb-4">
          {(movieDetails.vote_average * 10).toFixed()}% Positive
          <span className="font-light ml-1 text-white">
            - {convertDateFormat(movieDetails.release_date)}
          </span>
        </p>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailsView;
