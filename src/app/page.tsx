"use client";
import { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchTrendingTVShows } from "@/utils/request";
import Card from "./components/Card";
import Hero from "./components/Hero";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
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

  const firstMovie = movies.length > 0 ? movies[0] : null;
  console.log(firstMovie);

  return (
    <div className="w-full">
      {firstMovie && (
        <div className="w-full">
          <Hero {...firstMovie} />
        </div>
      )}
      <h2 className="text-xl xl:-mt-40 mb-2">Trending Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto w-full hide-scrollbar cursor-pointer">
        <div className="flex whitespace-nowrap">
          {movies.map((movie: Movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
