"use client";
import { useEffect, useState } from "react";
import { MovieDetails, fetchMovieDetails, fetchSimilarMovies } from "@/utils/request";
import { useParams } from "next/navigation";
import { convertDateFormat } from "@/utils/convertDate";
import Card from "@/components/Card";
import { onAdd, onRemove } from "@/utils/localStorage";
import { Loader } from "@/components/Loader";

const MovieDetailsView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [similarMovies, setSimilarMovies] = useState<MovieDetails[]>([]);
  const [inList, setInList] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!id || Array.isArray(id)) {
        console.error("Invalid ID / Error");
        return;
      }

      const movieDetailsId = parseInt(id, 10);
      const details = await fetchMovieDetails(movieDetailsId);
      const similarMoviesData = await fetchSimilarMovies(movieDetailsId);

      console.log("Movie Details:", details);
      console.log("Similar Movies", similarMoviesData);

      setMovieDetails(details);
      if (similarMoviesData && similarMoviesData.results) {
        setSimilarMovies(similarMoviesData.results);
      }
    };

    getMovieDetails();
  }, [id]);

  useEffect(() => {
    // Check if movie is in local storage
    const movieInLocalStorage = localStorage.getItem("movieList");

    if (movieInLocalStorage) {
      const movies = JSON.parse(movieInLocalStorage);
      const isInStoredList = movies.some((movie: MovieDetails) => movie.id === movieDetails?.id);
      setInList(isInStoredList);
    }
  }, [movieDetails]);

  if (!movieDetails) {
    return <Loader />;
  }

  const toggleMovieInList = () => {
    if (inList) {
      onRemove(movieDetails);
      setInList(false);
    } else {
      onAdd(movieDetails);
      setInList(true);
    }
  };

  return (
    <div className="relative w-full">
      <figure className="relative w-full h-screen flex justify-center items-center">
        <img
          className="absolute w-full h-full bg-cover bg-center object-cover opacity-60 maskStyle"
          src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
        ></img>
      </figure>

      <div className="absolute z-2 absolute top-1/4 left-4 transform -translate-y-1/4 mx-2 sm:mx-10">
        <h2 className="text-4xl font-semibold">{movieDetails.original_title}</h2>
        <p className="font-semibold text-lime-600 mb-4 mt-2">
          {(movieDetails.vote_average * 10).toFixed()}% Positive
          <span className="font-light ml-1 text-white opacity-70">
            | {convertDateFormat(movieDetails.release_date)}
          </span>
          <span className="font-light ml-1 text-white opacity-70">| {movieDetails.runtime} min</span>
        </p>
        <p className="w-full text-sm xl:text-base sm:w-4/6 hidden lg:block">{movieDetails.overview}</p>
        <p className="mt-6">
          Genre : <span className="font-light ml-1 text-white opacity-70">{movieDetails.genres[0].name}</span>
        </p>
        <button className="mt-8 bg-white hover:bg-slate-200 text-black font-medium py-2 px-4 mr-2 rounded">
          Rate This
        </button>
        <button
          onClick={toggleMovieInList}
          className="bg-slate-800 opacity-90 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded"
        >
          {inList ? "- Remove From My List" : "+ Add To My List"}
        </button>
      </div>
      <div className="w-full px-10 -mt-36">
        <h3 className="text-xl mb-4">Similar Movies</h3>
        <div className="mb-4 flex whitespace-nowrap sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto w-full hide-scrollbar cursor-pointer">
          {similarMovies.slice(0, 10).map((movie: MovieDetails) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsView;
