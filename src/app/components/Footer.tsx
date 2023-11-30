import React from "react";

function Footer() {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4 leading-8 border-zinc-700 border-b my-24">
      {" "}
      <div className="md:col-span-4 ml-6 lg:ml-0 py-4">
        <div className="flex gap-2">
          <img
            src="/social_icons/square-facebook.svg"
            className="w-7 cursor-pointer opacity-70 hover:opacity-90"
            alt="logo"
          ></img>
          <img
            src="/social_icons/square-instagram.svg"
            className="w-7 cursor-pointer opacity-70 hover:opacity-90"
            alt="logo"
          ></img>
          <img
            src="/social_icons/x-twitter.svg"
            className="w-7 cursor-pointer opacity-70 hover:opacity-90"
            alt="logo"
          ></img>
          <img
            src="/social_icons/youtube.svg"
            className="w-7 cursor-pointer opacity-70 hover:opacity-90"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="md:col-span-1 ml-6 lg:ml-0">
        <ul>
          <li>
            <a href="/" className="opacity-70 hover:opacity-90">
              Terms of use
            </a>
          </li>
          <li>
            <a href="/" className="opacity-70 hover:opacity-90">
              About TMDb API
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-1 hidden lg:block">
        <ul>
          <li>
            <a href="/" className="opacity-70 hover:opacity-90">
              Github
            </a>
          </li>
          <li>
            <a href="/" className="opacity-70 hover:opacity-90">
              About Next.js
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-1 hidden lg:block  pb-12">
        <ul>
          <li>
            <a href="/" className="opacity-70 hover:opacity-90">
              Account
            </a>
          </li>
          <li>
            <a href="/" className="opacity-70 hover:opacity-90">
              Subscribtion plan
            </a>
          </li>
          <li>
            <a href="/" className="opacity-70 hover:opacity-90">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-1 hidden lg:block mx-auto">
        <button className="border p-1 rounded-sm opacity-70 hover:bg-zinc-800">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Footer;
