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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 overflow-x-auto w-full hide-scrollbar">
        <div className="">
          <div className="flex whitespace-nowrap">
            {movies.map((movie: Movie) => (
              <div
                key={movie.id}
                className="relative rounded-xl overflow-hidden bg-dark flex flex-col mr-5"
                style={{ minWidth: "250px" }}
              >
                <div className="relative">
                  <img
                    className="h-50 w-auto object-contains object-center rounded-xl"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded">
                    {movie.vote_average.toFixed(2)}
                  </div>
                </div>
                <div className="p-2">
                  <h2 className="text-sm font-semibold h-4 my-2">
                    {movie.title}
                  </h2>
                </div>
                <div className="text-sm flex justify-between p-2">
                  <span>{convertDateFormat(movie.release_date)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
