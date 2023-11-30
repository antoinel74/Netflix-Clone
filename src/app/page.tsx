"use client";
import { useEffect, useState } from "react";
import { Movie, fetchTrendingMovies } from "@/utils/request";
import Card from "./components/Card";
import Hero from "./components/Hero";

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

  return (
    <div className="w-full">
      {firstMovie && <Hero {...firstMovie} />}
      <h2 className="text-xl lg:-mt-44 mb-4 mx-6 font-medium">
        Trending Movies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto w-full hide-scrollbar cursor-pointer">
        <div className="flex whitespace-nowrap mx-6">
          {movies.map((movie: Movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
