import React from "react";
import HotelSlier from "./HotelSlier";

const Hotel = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 py-10">
        <div className="space-y-3">
          <h1 className="font-bold lg:font-extrabold md:text-4xl text-xl">
          Best Hotels for Your Next Trip
          </h1>
          <p className="text-slate-500 text-sm">
          Luxurious or budget-friendly hotels, villas or resorts, browse accommodations at ShareTrip <br /> that meet the need. Book Long-term or short-term accommodation from our hotel deals
          </p>
        </div>
        <div className="py-4">
            <HotelSlier/>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
