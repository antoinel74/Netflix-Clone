import { MovieDetails, Movie } from "./request";

type MovieData = MovieDetails | Movie;

export const onAdd = (movie: MovieData) => {
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

export const onRemove = (movie: MovieData | null): MovieData[] => {
  if (!movie) {
    return [];
  }
  const existingList: MovieData[] = JSON.parse(localStorage.getItem("movieList") || "[]");
  const updatedList: MovieData[] = existingList.filter((item: MovieData) => item.id !== movie.id);

  localStorage.setItem("movieList", JSON.stringify(updatedList));
  return updatedList;
};
