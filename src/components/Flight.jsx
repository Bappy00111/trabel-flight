import React from "react";
import Card from "./Card";

const Flight = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 py-10">
        <div className="text-center space-y-3">
          <h1 className="font-bold md:text-4xl text-xl">
            Popular Flight Destinations from BD
          </h1>
          <p className="text-slate-500 text-sm">
            Expand your travel horizons with new facets! Diversify your journey
            to explore local <br /> destinations or global marvels around Asia,
            Europe, America, Canada or anywhere
          </p>
          <div className="pt-5 flex px-5 gap-4 justify-center">
            <button className="btn  bg-[#1882ff] rounded-md hover:bg-sky-500 text-white  px-10">
              Domestic
            </button>
            <button className="btn bg-gray-300 hover:bg-slate-400 hover:text-white rounded-md text-gray-500 px-6">International</button>
          </div>
        </div>
        <Card/>
      </div>
    </div>
  );
};

export default Flight;
