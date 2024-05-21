import React from "react";
import img from "../../src/image/Chittagong.jpeg";
import img2 from "../../src/image/c0b1xm5GAwlT_57OF0UOcCaHknWWzIDg.jpeg";
import img3 from "../../src/image/Sylhet.jpeg";
import img4 from "../../src/image/tanveer-prachurjo-BsHCalALiMw-unsplash-min.jpeg";

const Flight = () => {
  return (
    <div className="py-10 bg-gray-100 ">
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-2">
        <div className="text-center space-y-3">
          <h1 className="font-bold md:text-4xl text-xl">
            Popular Flight Destinations from BD
          </h1>
          <p className="text-slate-500">
            Expand your travel horizons with new facets! Diversify your journey
            to explore local <br /> destinations or global marvels around Asia,
            Europe, America, Canada or anywhere
          </p>
          <div className="pt-5 ">
            <button className="btn btn-info text-white mr-3 px-10">Domestic</button>
            <button className="btn bg-slate-300 px-10">International</button>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-5">
            <div className="card">
              <div className=" relative overflow-hidden   rounded-lg ">
                <img
                  className="transform transition-transform duration-500 hover:scale-110"
                  src={img}
                  alt="Image 1"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white  text-lg">
                  <p>Chittagong</p>
                  <p>36 Hotel Available</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className=" relative overflow-hidden   rounded-lg ">
                <img
                  className="transform transition-transform duration-500 hover:scale-110"
                  src={img2}
                  alt="Image 1"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white  text-lg">
                  <p>Sylhet</p>
                  <p>97 Hotel Available</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className=" relative overflow-hidden   rounded-lg ">
                <img
                  className="transform transition-transform duration-500 hover:scale-110"
                  src={img3}
                  alt="Image 1"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white  text-lg">
                  <p>Chittagong</p>
                  <p>36 Hotel Available</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className=" relative overflow-hidden   rounded-lg ">
                <img
                  className="transform transition-transform duration-500 hover:scale-110"
                  src={img2}
                  alt="Image 1"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white  text-lg">
                  <p>Sylhet</p>
                  <p>97 Hotel Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
