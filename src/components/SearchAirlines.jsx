import React from "react";
import SearchAirliensCard from "./SearchAirliensCard";

const SearchAirlines = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 py-10">
        <div className="space-y-3 text-center">
          <h1 className="font-bold lg:font-extrabold md:text-4xl text-xl">Search Top AirlinesSearch </h1>
          <p className="text-slate-500 text-sm">
          ShareTrip's user-friendly platform connects you to top airlines instantly. Enjoy a comfortable <br /> and hassle-free journey on any destination and get tickets of top airlines easily
          </p>
        </div>
        <SearchAirliensCard/>
      </div>
    </div>
  );
};

export default SearchAirlines;
