"use client";
import React, { useState, useEffect } from "react";
import { fetchSearchResults, Movie } from "@/utils/request";
import Card from "@/app/components/Card";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryParam = urlParams.get("query") || "";

    setQuery(queryParam);

    const getSearchResults = async () => {
      try {
        if (queryParam) {
          const details = await fetchSearchResults(queryParam);
          setSearchResults(details);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    getSearchResults();
  }, []);

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        if (query) {
          const details = await fetchSearchResults(query);
          setSearchResults(details);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    getSearchResults();
  }, [query]);

  if (!searchResults) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div
          className="w-12 h-12 rounded-full animate-spin
        border border-solid border-gray-600 border-t-transparent"
        ></div>
      </div>
    );
  }

  return (
    <div className="mx-12 mt-12 py-12">
      <h2 className="text-xl mb-4 font-medium">
        Your search for &quot; {query} &quot; :
      </h2>
      <div className="flex sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1/2 overflow-x-auto w-full hide-scrollbar cursor-pointer mb-8 lg:mb-16">
        {searchResults.map((movie: Movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
