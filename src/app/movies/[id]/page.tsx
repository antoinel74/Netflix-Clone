import { fetchMovieDetails } from "@/utils/request";

interface MovieDetailsProps {
  params: {
    id: string;
    poster_path: string;
    title: string;
  };
}

const MovieDetailsView: React.FC<MovieDetailsProps> = ({ params }) => {
  const { id, poster_path, title } = params;
  if (!id) {
    return <div>No movie ID provided!</div>;
  }

  const RenderMovieDetails = async () => {
    try {
      const movieDetails = await fetchMovieDetails(parseInt(id));
      console.log(movieDetails);
      return (
        <div>
          <img
            className="h-50 w-auto object-contains object-center transition-opacity duration-220"
            src={`https://image.tmdb.org/t/p/w500/${id}`}
            alt={title}
          />
          <h2>{title}</h2>
          <h2>{id}</h2>
        </div>
      );
    } catch (error) {
      console.error("Failed to fetch movie details", error);
      return (
        <div>
          <p>An error has occured</p>
        </div>
      );
    }
  };
  return <>{RenderMovieDetails()}</>;
};

export default MovieDetailsView;
