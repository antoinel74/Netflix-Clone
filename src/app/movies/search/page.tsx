"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchSearchResults, Movie } from "@/utils/request";
import Card from "@/components/Card";

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const queryParams = useSearchParams();

  useEffect(() => {
    const query = queryParams.get("query") || "";

    if (query) {
      fetchSearchResults(query)
        .then((data: Movie[]) => {
          setSearchResults(data);
        })
        .catch((error) => {
          console.error("Error fetching results:", error);
        });
    }
  }, [queryParams]);

  return (
    <div className="mt-12 mx-4 py-12">
      <h2 className="text-xl mb-6 font-medium">Search results :</h2>
      <div className="flex overflow-x-scroll hide-scrollbar w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 w-full hide-scrollbar cursor-pointer mb-8 lg:mb-16">
        {searchResults.map((result) => (
          <Card key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
