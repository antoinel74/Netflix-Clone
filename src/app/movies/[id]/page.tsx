"use client";
import { useEffect, useState } from "react";
import { fetchMovieDetails, fetchSimilarMovies } from "@/utils/request";
import { useParams } from "next/navigation";
import { convertDateFormat } from "@/utils/convertDate";
import Card from "@/app/components/Card";

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetailsProps {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  poster_path: string;
  genres: Genre[];
}

const MovieDetailsView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(
    null
  );
  const [similarMovies, setSimilarMovies] = useState<MovieDetailsProps[]>([]);

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
      const similarMoviesData = await fetchSimilarMovies(movieDetailsId);

      console.log("Movie Details:", details); // TESTING //
      console.log("Similar Movies", similarMoviesData);
      setMovieDetails(details);
      if (similarMoviesData && similarMoviesData.results) {
        setSimilarMovies(similarMoviesData.results);
      }
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
    <div className="relative w-full">
      <figure className="relative w-full h-screen flex justify-center items-center">
        {" "}
        <img
          className="absolute w-full h-full bg-cover bg-center object-cover opacity-60"
          src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
          style={maskStyle}
        ></img>
      </figure>

      <div className="absolute z-2 absolute top-1/3 left-4 transform -translate-y-1/3 mx-2 sm:mx-10">
        <h2 className="text-4xl font-semibold">
          {movieDetails.original_title}
        </h2>
        <p className="font-semibold text-lime-600 mb-4 mt-2">
          {(movieDetails.vote_average * 10).toFixed()}% Positive
          <span className="font-light ml-1 text-white opacity-70">
            | {convertDateFormat(movieDetails.release_date)}
          </span>
          <span className="font-light ml-1 text-white opacity-70">
            | {movieDetails.runtime} min
          </span>
        </p>
        <p className="w-full text-sm xl:text-base sm:w-4/6 hidden lg:block">
          {movieDetails.overview}
        </p>
        <p className="mt-6">
          Genre :{" "}
          <span className="font-light ml-1 text-white opacity-70">
            {movieDetails.genres[0].name}
          </span>
        </p>
        <button className="mt-8 bg-white hover:bg-slate-200 text-black font-medium py-2 px-4 mr-2 rounded">
          Rate This
        </button>
        <button className="bg-slate-800 opacity-90 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded">
          + Add To Your List
        </button>
      </div>
      <div className="absolute w-full -mt-36">
        <h3 className="text-xl mx-6 mb-4">Similar Movies</h3>
        <div className="mb-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto w-full hide-scrollbar cursor-pointer">
          <div className="flex whitespace-nowrap mx-6">
            <Card
              title={similarMovies[0].original_title}
              key={similarMovies[0].id}
              {...similarMovies[0]}
            />
            <Card
              title={similarMovies[1].original_title}
              key={similarMovies[1].id}
              {...similarMovies[1]}
            />
            <Card
              title={similarMovies[2].original_title}
              key={similarMovies[2].id}
              {...similarMovies[2]}
            />
            <Card
              title={similarMovies[3].original_title}
              key={similarMovies[3].id}
              {...similarMovies[3]}
            />
            <Card
              title={similarMovies[4].original_title}
              key={similarMovies[4].id}
              {...similarMovies[4]}
            />
            <Card
              title={similarMovies[5].original_title}
              key={similarMovies[5].id}
              {...similarMovies[5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsView;
