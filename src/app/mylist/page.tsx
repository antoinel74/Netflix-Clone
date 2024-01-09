"use client";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Movie } from "@/utils/request";

const MyList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const retrieveMovieList = () => {
      const movieListJSON = localStorage.getItem("movieList");

      if (movieListJSON) {
        const parsedMovieList = JSON.parse(movieListJSON);
        setMovieList(parsedMovieList);
      }
    };
    retrieveMovieList();
  }, []);

  console.log(movieList);

  return (
    <div className="flex flex-col justify-center min-h-[500px] py-12 px-6">
      {movieList && movieList.length > 0 ? (
        <>
          <h2 className="text-xl mb-6 font-medium">My List :</h2>
          <div className="flex overflow-x-scroll hide-scrollbar w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 w-full hide-scrollbar cursor-pointer mb-8 lg:mb-16">
            {movieList.map((movie: React.JSX.IntrinsicAttributes & Movie) => (
              <Card key={movie.id} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-xl text-center">Your list is empty</p>
      )}
    </div>
  );
};

export default MyList;
