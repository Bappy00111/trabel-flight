import React from "react";
import img from "../../src/image/Chittagong.jpeg";
import img2 from "../../src/image/c0b1xm5GAwlT_57OF0UOcCaHknWWzIDg.jpeg";
import img3 from "../../src/image/Sylhet.jpeg";

import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10 text-sm">
        <Link to="detels">
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
        </Link>
        <Link to='detels'>
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
        </Link>
        <Link to='detels'>
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
        </Link>
        <Link to='detels'>
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
        </Link>
      </div>
    </div>
  );
};

export default Card;
