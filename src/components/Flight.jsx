import React from "react";
import Card from "./Card";

const Flight = () => {
  return (
    <div>
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 py-10">
        <div className="space-y-3">
          <h1 className="font-bold lg:font-extrabold md:text-4xl text-xl">
          Explore Bangladesh
          </h1>
          <p className="text-slate-500 text-sm">
          Prepare to experience Bangladesh's rich culture and explore the majestic beauties of Cox’s <br /> Bazar, Sylhet, Bandarban, Sajek Valley, Rangamati etc. Plan your trip now!
          </p>
        </div>
        <Card/>
      </div>
    </div>
  );
};

export default Flight;
