import React from "react";
import { MdFlight, MdOutlineFlightTakeoff } from "react-icons/md";

const SearchFlight = () => {
  return (
    <div className="py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4">
      <div className="text-center space-y-3">
        <h1 className="font-bold lg:font-extrabold md:text-4xl text-xl">
          Search Cheapest Flight By Destination
        </h1>
        <p className="text-slate-500 text-sm">
          Effortlessly find cheap flight and air tickets to various destinations
          on ShareTrip. Explore <br /> routes, book online air tickets, and plan
          your next travel adventure.
        </p>
        <div className="pt-5 flex px-5 gap-4 justify-center">
            <button className="btn  bg-[#1882ff] rounded-md hover:bg-sky-500 text-white  px-10">
              Domestic
            </button>
            <button className="btn bg-gray-300 hover:bg-slate-400 hover:text-white rounded-md text-gray-500 px-6">International</button>
          </div>
      </div>
      <div className="grid  grid-col-2 md:grid-cols-3 gap-4 pt-10 px-2">
      <div className="borer border-2 p-3 flex gap-2 rounded-xl items-center justify-between">
         <div>
            <p className="font-bold">Dhaka</p>
            <p className="text-sm">Hazrat shahjalal <br /> international airport</p>
         </div>
         <div className="transform rotate-45"><MdFlight className="text-cyan-400 h-6 w-6" /></div>
        <div>
            <p className="font-bold">Cox's Bazar</p>
            <p className="text-sm">Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-2 rounded-xl items-center justify-between">
         <div>
            <p className="font-bold">Dhaka</p>
            <p className="text-sm">Hazrat shahjalal <br /> international airport</p>
         </div>
         <div className="transform rotate-45"><MdFlight className="text-cyan-400 h-6 w-6" /></div>
        <div>
            <p className="font-bold">Cox's Bazar</p>
            <p className="text-sm">Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-2 rounded-xl items-center justify-between">
         <div>
            <p className="font-bold">Dhaka</p>
            <p className="text-sm">Hazrat shahjalal <br /> international airport</p>
         </div>
         <div className="transform rotate-45"><MdFlight className="text-cyan-400 h-6 w-6" /></div>
        <div>
            <p className="font-bold">Cox's Bazar</p>
            <p className="text-sm">Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-2 rounded-xl items-center justify-between">
         <div>
            <p className="font-bold">Dhaka</p>
            <p className="text-sm">Hazrat shahjalal <br /> international airport</p>
         </div>
         <div className="transform rotate-45"><MdFlight className="text-cyan-400 h-6 w-6" /></div>
        <div>
            <p className="font-bold">Cox's Bazar</p>
            <p className="text-sm">Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-2 rounded-xl items-center justify-between">
         <div>
            <p className="font-bold">Dhaka</p>
            <p className="text-sm">Hazrat shahjalal <br /> international airport</p>
         </div>
         <div className="transform rotate-45"><MdFlight className="text-cyan-400 h-6 w-6" /></div>
        <div>
            <p className="font-bold">Cox's Bazar</p>
            <p className="text-sm">Cox's Bazar Airport</p>
        </div>
      </div>
      <div className="borer border-2 p-3 flex gap-2 rounded-xl items-center justify-between">
         <div>
            <p className="font-bold">Dhaka</p>
            <p className="text-sm">Hazrat shahjalal <br /> international airport</p>
         </div>
         <div className="transform rotate-45"><MdFlight className="text-cyan-400 h-6 w-6" /></div>
        <div>
            <p className="font-bold">Cox's Bazar</p>
            <p className="text-sm">Cox's Bazar Airport</p>
        </div>
      </div>
      
      
      
      
      
      </div>
    </div>
  );
};

export default SearchFlight;
