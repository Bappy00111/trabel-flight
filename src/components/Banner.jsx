import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-full bg-cover  bg-center"
          src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/banner/flight-banner-image.jpg"
          alt=""
        />
         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
    </>
  );
};

export default Banner;
