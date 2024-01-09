import { MovieDetails } from "./request";

export const addToLocalStorage = (movie: MovieDetails) => {
  const existingList = JSON.parse(localStorage.getItem("movieList") || "[]");
  const isMovieInList = existingList.some((item: MovieDetails) => item.id === movie.id);

  if (!isMovieInList) {
    existingList.push(movie);
    localStorage.setItem("movieList", JSON.stringify(existingList));
  }
  console.log("Movie already in list");
};
