import React from "react";
import Link from "next/link";
import MovieDetails from "../movies/[id]/page";
import { convertDateFormat } from "@/utils/convertDate";
import { Movie } from "../page";

interface CardProps {
  movie: Movie;
}

function Card({ movie }: CardProps) {
  return (
    <div
      key={movie.id}
      className="relative bg-dark flex flex-col mr-4"
      style={{ minWidth: "250px" }}
    >
      <Link href={"/movies/" + movie.id}>
        <div className="relative">
          <img
            className="h-50 w-auto object-contains object-center transition-opacity duration-220"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="absolute inset-0 flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white p-4">
            <h2 className="text-lg font-semibold mb-2 overflow-hidden line-clamp-2">
              {movie.title}
            </h2>
            <div className="flex justify-between">
              <a href={"/movies/" + movie.id} className="text-sm font-semibold">
                Learn More
              </a>
              <p className="text-sm opacity-50">
                {(movie.vote_average * 10).toFixed()}%
                <span className="ml-1">
                  - {convertDateFormat(movie.release_date)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
