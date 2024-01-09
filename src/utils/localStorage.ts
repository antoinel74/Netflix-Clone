import { MovieDetails, Movie } from "./request";

type MovieData = MovieDetails | Movie;

export const addToLocalStorage = (movie: MovieData) => {
  const existingList = JSON.parse(localStorage.getItem("movieList") || "[]");
  const isMovieInList = existingList.some((item: MovieData) => item.id === movie.id);

  if (!isMovieInList) {
    existingList.push(movie);
    localStorage.setItem("movieList", JSON.stringify(existingList));
  }
  console.log("Movie already in list");
};

export const emptyLocalStorage = (setMovieList: any) => {
  localStorage.clear();
  setMovieList([]);
};
