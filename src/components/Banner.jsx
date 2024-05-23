import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-full  object-cover h-[200px] md:h-[300px]  bg-center"
          src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/banner/flight-banner-image.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto items-center">
          <div className="text-white space-y-2 px-4">
            <h1 className="text-xl md:text-4xl  font-semibold">Where to Fly?</h1>
            <p className="text:lg md:text-xl  font-semibold">
              Find Cheap Flights, Airline Tickets in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
