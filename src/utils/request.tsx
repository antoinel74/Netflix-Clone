const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface Options {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  release_date: string;
}

const options: Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

const fetchTrendingMovies = async (): Promise<Movie[]> => {
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

export default fetchTrendingMovies;
