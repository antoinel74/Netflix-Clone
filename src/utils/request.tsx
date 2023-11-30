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
  release_date: string;
  backdrop_path: string;
  genres: Genre[];
}

export interface MovieDetails {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
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

export interface TVShows {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  first_air_date: string;
}

// FETCHING //
export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week",
      options
    );
    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    const movies: Movie[] = data.results;
    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const fetchMovieDetails = async (
  movieId: number
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();
    return data as MovieDetails;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const fetchSimilarMovies = async (
  movieId: number
): Promise<SimilarMovies> => {
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
    throw new Error("Failed to fetch data");
  }
};

export const fetchTrendingTVShows = async (): Promise<TVShows[]> => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day",
      options
    );
    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    const tvShows: TVShows[] = data.results;
    console.log(tvShows);
    return tvShows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};
