import React from "react";
import Card from "./Card";
import { scrollMovies } from "@/utils/scrollMovies";
import { Movie } from "@/utils/request";

export const TrendingMovies: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div className="mx-10 lg:-mt-44 relative">
      <h2 className="text-xl font-medium mb-4">Trending Movies</h2>
      <div
        className="flex whitespace-nowrap sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1/2 overflow-x-auto w-full hide-scrollbar cursor-pointer mb-8 lg:mb-16 scroll-smooth"
        id="trendingMovies"
      >
        {movies.map((movie: Movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 z-10 text-4xl bg-black pb-1 px-2 opacity-50 hover:opacity-90 rounded-sm -ml-8"
        onClick={() => scrollMovies("trendingMovies", -300)}
      >
        &#60;
      </button>
      <button
        className="absolute right-0 top-1/2 z-10 text-4xl bg-black pb-1 px-2 opacity-50 hover:opacity-90 rounded-sm -mr-8"
        onClick={() => scrollMovies("trendingMovies", 300)}
      >
        &#62;
      </button>
    </div>
  );
};
