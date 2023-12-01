import React from "react";
import Searchbar from "./Searchbar";

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
          <a href="/mylist" className="opacity-80 hover:opacity-100">
            My List
          </a>
        </div>
        <a href="/account" className="ml-8 opacity-80 hover:opacity-100">
          Account
        </a>
      </div>
      <Searchbar />
    </nav>
  );
}

export default Navbar;
