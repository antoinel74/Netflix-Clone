"use client";
import { useEffect, useState } from "react";
import {
  Movie,
  fetchMovieByGender,
  fetchTrendingMovies,
} from "@/utils/request";
import Card from "./components/Card";
import Hero from "./components/Hero";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: Movie[] = await fetchTrendingMovies();
        const fetchedActionMovies: Movie[] = await fetchMovieByGender(28);
        const fetchedDocumentaries: Movie[] = await fetchMovieByGender(99);

        setMovies(fetchedMovies);
        setActionMovies(fetchedActionMovies);
        setDocumentaries(fetchedDocumentaries);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const randIndex = movies.length > 0 ? Math.floor(Math.random() * 20) : null;
  const randMovie = randIndex !== null ? movies[randIndex] : null;

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <div
            className="w-12 h-12 rounded-full animate-spin
        border border-solid border-gray-600 border-t-transparent"
          ></div>
        </div>
      ) : (
        <>
          <Hero {...movies[0]} />
          <div className="mx-6">
            <h2 className="text-xl lg:-mt-44 mb-4 font-medium">
              Trending Movies
            </h2>
            <div className="flex whitespace-nowrap sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1/2 overflow-x-auto w-full hide-scrollbar cursor-pointer mb-8 lg:mb-16">
              {movies.map((movie: Movie) => (
                <Card key={movie.id} {...movie} />
              ))}
            </div>
          </div>
          <div className="mx-6">
            <h2 className="text-xl mb-4 font-medium">Action Movies</h2>
            <div className="flex whitespace-nowrap sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1/2 overflow-x-auto w-full hide-scrollbar cursor-pointer mb-8 lg:mb-16">
              {actionMovies.map((movie: Movie) => (
                <Card key={movie.id} {...movie} />
              ))}
            </div>
          </div>
          <div>{randMovie && <Hero {...randMovie} />}</div>
          <div className="mx-6">
            <h2 className="text-xl mb-4 font-medium">Documentaries</h2>
            <div className="flex whitespace-nowrap sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1/2 overflow-x-auto w-full hide-scrollbar cursor-pointer mb-8 lg:mb-16">
              {documentaries.map((movie: Movie) => (
                <Card key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
