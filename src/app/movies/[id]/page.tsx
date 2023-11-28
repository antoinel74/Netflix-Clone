"use client";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "@/utils/request";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  release_date: string;
}

function MovieDetailsView() {
  const [movieDetails, setMovieDetails] = useState<Movie>();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");

    if (idParam) {
      const id = parseInt(idParam, 10);
      fetchDetails(id);
    }
  }, []);

  const fetchDetails = async (id: number) => {
    try {
      const fetchedDetails: Movie = await fetchMovieDetails(id);
      setMovieDetails(fetchedDetails);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title } = movieDetails;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default MovieDetailsView;
