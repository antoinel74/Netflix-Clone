import React from "react";

function Navbar() {
  return (
    <nav className="gap-1 mt-6 sm:flex justify-between w-full z-10">
      <div className="flex justify-between items-center mx-6">
        <div className="flex gap-8 align-center items-center">
          <a href="/" className="grayscale contrast-200">
            <img src="/logo.svg" className="w-14" alt="logo"></img>
          </a>
          <a href="/" className="opacity-80 hover:opacity-100">
            Movies
          </a>
          <a href="/" className="opacity-80 hover:opacity-100">
            My List
          </a>
        </div>
        <a href="/account" className="ml-8 opacity-80 hover:opacity-100">
          Account
        </a>
      </div>
      <div className=" flex items-stretch mt-6 sm:mt-0 mx-4 border border-solid border-neutral-700">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded-sm  bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] text-neutral-600 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-200 focus:outline-none placeholder:text-neutral-400"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-neutral-200"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
