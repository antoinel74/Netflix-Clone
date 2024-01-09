import React from "react";

export const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="w-12 h-12 rounded-full animate-spin
  border border-solid border-gray-600 border-t-transparent"
      ></div>
    </div>
  );
};
