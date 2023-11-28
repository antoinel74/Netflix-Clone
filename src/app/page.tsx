"use client";
import { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchTrendingTVShows } from "@/utils/request";
import Card from "./components/Card";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  release_date: string;
}

export interface TVShow {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  first_air_date: string;
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

  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const fetchedTVShows: TVShow[] = await fetchTrendingTVShows();
        setTVShows(fetchedTVShows);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl mb-2">Trending Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto w-full hide-scrollbar cursor-pointer">
        <div className="flex whitespace-nowrap">
          {movies.map((movie: Movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </div>
      {/*       <h2 className="text-xl mb-2">Trending TV Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto w-full hide-scrollbar cursor-pointer">
        <div className="flex whitespace-nowrap">
          {tvShows.map((tvShow: TVShow) => (
            <Card key={tvShow.id} {...tvShow} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
