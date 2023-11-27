"use client";
import { useEffect, useState } from "react";
import fetchTrendingMovies from "@/utils/request";
import { convertDateFormat } from "@/utils/convertDate";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  release_date: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: Movie[] = await fetchTrendingMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-4xl mb-8">Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-6 cursor-pointer">
        {movies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="rounded-sm overflow-hidden shadow-lg bg-dark flex flex-col"
          >
            <img
              className="h-96 w-full object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-2">
              <h2 className="text-xl font-semibold mb-2 h-35 my-3">
                {movie.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {movie.overview}
              </p>
              <div>
                <p className="text-gray-700">Popularity: {movie.popularity}</p>
                <p className="text-gray-700">
                  Vote Average: {movie.vote_average}
                </p>
                <p className="text-gray-700">
                  Release Date: {convertDateFormat(movie.release_date)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
