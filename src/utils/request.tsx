// API CONNECT //
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const options: Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

// INTERFACES //
export interface Options {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  backdrop_path: string;
  runtime: number;
  genres: Genre[];
}

export interface MovieDetails {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  backdrop_path: string;
  runtime: number;
  genres: Genre[];
}

export interface SimilarMovies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  original_title: string;
  results: [];
  genres: Genre[];
}

// FETCHING //
export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/week", options);
    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    const movies: Movie[] = data.results;
    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch trending movies");
  }
};

export const fetchMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();
    return data as MovieDetails;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movie details");
  }
};

export const fetchSimilarMovies = async (movieId: number): Promise<SimilarMovies> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();
    return data as SimilarMovies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch similar movies");
  }
};

export const fetchMovieByGender = async (genderId: number): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=%20${genderId}`,
      options
    );
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();
    const moviesByGender: Movie[] = data.results;
    return moviesByGender;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies by gender");
  }
};

export const fetchSearchResults = async (searchInput: string): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();
    const searchResults: Movie[] = data.results;
    console.log(searchResults);
    return searchResults;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies by gender");
  }
};
