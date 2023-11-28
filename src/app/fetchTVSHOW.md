      {/*       <h2 className="text-xl mb-2">Trending TV Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto w-full hide-scrollbar cursor-pointer">
        <div className="flex whitespace-nowrap">
          {tvShows.map((tvShow: TVShow) => (
            <Card key={tvShow.id} {...tvShow} />
          ))}
        </div>
      </div> */}

      const [tvShows, setTVShows] = useState<TVShow[]>([]);

useEffect(() => {
const fetchTVShows = async () => {
try {
const fetchedTVShows: TVShow[] = await fetchTrendingTVShows();
setTVShows(fetchedTVShows);
} catch (error) {
console.error("Error fetching movies:", error);
}
};

    fetchTVShows();

}, []);

export interface TVShow {
id: number;
title: string;
overview: string;
poster_path: string;
popularity: number;
vote_average: number;
first_air_date: string;
}
