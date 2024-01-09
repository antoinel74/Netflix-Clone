"use client";
import React, { useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

function Searchbar() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInputValue = searchInputRef.current?.value;
    if (searchInputValue) {
      router.push(`/movies/search?query=${searchInputValue}`);
      if (searchInputRef.current) {
        searchInputRef.current.value = "";
      }
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex items-stretch mt-6 sm:mt-0 mx-4">
      <input
        type="search"
        ref={searchInputRef}
        className="search-input m-0 block flex-auto rounded-sm bg-transparent bg-clip-padding px-3 py-[0.25rem] text-neutral-600 focus:text-neutral-200 placeholder:text-neutral-400"
        placeholder="Search"
        aria-label="Search"
      />
      <span
        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-neutral-200"
        id="basic-addon2"
      >
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
    </form>
  );
}

export default Searchbar;
