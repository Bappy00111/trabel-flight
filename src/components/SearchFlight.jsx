import React from "react";

const SearchFlight = () => {
  return (
    <div className="py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto ">
      <div className="text-center space-y-3">
        <h1 className="font-semibold md:text-4xl text-xl">
          Search Cheapest Flight By Destination
        </h1>
        <p className="text-slate-500">
          Effortlessly find cheap flight and air tickets to various destinations
          on ShareTrip. Explore <br /> routes, book online air tickets, and plan
          your next travel adventure.
        </p>
        <div className="pt-5 ">
            <button className="btn btn-info text-white mr-3 px-10">Domestic</button>
            <button className="btn bg-slate-300 px-10">International</button>
          </div>
      </div>
      <div className="grid  grid-col-2 md:grid-cols-3 gap-4 py-5 px-2">
      <div className="borer border-2 p-3 flex gap-5 rounded-xl">
         <div>
            <p>Dhaka</p>
            <p>Hazrat shahjalal international airport</p>
         </div>
        <div>
            <p>Cox's Bazar</p>
            <p>Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-5 rounded-xl">
         <div>
            <p>Dhaka</p>
            <p>Hazrat shahjalal international airport</p>
         </div>
        <div>
            <p>Cox's Bazar</p>
            <p>Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-5 rounded-xl">
         <div>
            <p>Dhaka</p>
            <p>Hazrat shahjalal international airport</p>
         </div>
        <div>
            <p>Cox's Bazar</p>
            <p>Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-5 rounded-xl">
         <div>
            <p>Dhaka</p>
            <p>Hazrat shahjalal international airport</p>
         </div>
        <div>
            <p>Cox's Bazar</p>
            <p>Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-5 rounded-xl">
         <div>
            <p>Dhaka</p>
            <p>Hazrat shahjalal international airport</p>
         </div>
        <div>
            <p>Cox's Bazar</p>
            <p>Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-5 rounded-xl">
         <div>
            <p>Dhaka</p>
            <p>Hazrat shahjalal international airport</p>
         </div>
        <div>
            <p>Cox's Bazar</p>
            <p>Cox's Bazar Airport</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SearchFlight;
