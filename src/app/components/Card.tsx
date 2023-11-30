import React from "react";
import Link from "next/link";
import { convertDateFormat } from "@/utils/convertDate";
import { Movie } from "@/utils/request";

function Card({ id, title, poster_path, release_date, vote_average }: Movie) {
  return (
    <div
      key={id}
      className="relative bg-dark flex flex-col mr-4 min-w-[200px] lg:min-w-[250px]"
    >
      <Link href={"/movies/" + id}>
        <img
          className="h-50 w-auto object-contains object-center transition-opacity duration-220 rounded-sm"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className="absolute inset-0 flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white p-4">
          <h2 className="text-lg font-semibold mb-2 overflow-hidden line-clamp-2">
            {title}
          </h2>
          <div className="flex text-sm justify-between">
            <p className="opacity-50 hover:opacity-90">Learn More</p>
            <p className="opacity-50">
              {(vote_average * 10).toFixed()}%
              <span className="ml-1">| {convertDateFormat(release_date)}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
