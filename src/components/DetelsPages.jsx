import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DetelsPages = () => {
  const datas = [
    {
      name: "Hotel Sunshine",
      price: 4999,
      location: "Los Angeles, CA",
      rating: 4.5,
      description:
        "A luxurious hotel in the heart of Los Angeles with stunning city views and excellent amenities.",
      image:
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcMEnftewIugbBotUNk2rjFsMaUorGVN2cNzloVssJB/ZTl8vy2nCx2g3UVUSEsG94w==",
    },
    {
      name: "Seaside Resort",
      price: 4999,
      location: "Miami, FL",
      rating: 4.7,
      description:
        "A beautiful beachfront resort with spacious rooms, a large pool, and direct access to the beach.",
      image:
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcDtxd1TT/FppAmUnGTrzfpJvhuPSlurZqFnflMQyk7z8KTiR2brBCe+v5YTgYN2txw==",
    },
    {
      name: "Mountain Escape",
      price: 4999,
      location: "Aspen, CO",
      rating: 4.8,
      description:
        "A charming hotel located in the mountains, perfect for a winter getaway or summer retreat.",
      image:
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcGBTAMuKIkvNGhm5aAmHagj7QlYxgOY1sJbsNenloq/iVpDxNZqCK1DOGTuNGSyfgw==",
    },
    {
      name: "Urban Retreat",
      price: 4999,
      location: "New York, NY",
      rating: 4.6,
      description:
        "An elegant hotel in downtown New York offering modern amenities and close proximity to popular attractions.",
      image:
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcHi24sFxm+TFZ5/yA+MYIRt6NpNOjjaAVLi1UwRhfhOIbLYx6ho8BmHpgS+VGCvTsA==",
    },
    {
      name: "Desert Oasis",
      price: 4999,
      location: "Phoenix, AZ",
      rating: 4.4,
      description:
        "A relaxing oasis in the desert with beautiful gardens, a spa, and multiple dining options.",
      image:
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcASid3BJ5mMqZG4ApheOoNIdMCsHUYhKL15gS2x7tNI9xBeRfp3BlqlA5VO/sgidbg==",
    },
    {
      name: "Lakeside Inn",
      price: 4999,
      location: "Lake Tahoe, NV",
      rating: 4.7,
      description:
        "A cozy inn located on the shores of Lake Tahoe, offering stunning lake views and outdoor activities.",
      image:
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcGM/oWfK5GLReBUMc66GQeC6fUOFQldB/jGiaxrggFihiuObuKnC8NAgc9vjN3V8UA==",
    },
  ];

  return (
    <>
      <div className="sm:max-w-xl  md:max-w-full lg:max-w-screen-xl mx-auto py-10 px-10 ">
        {datas.map((data) => (
          <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
          <figure><img className="lg:h-full lg:w-60" src={data.image} alt="Album"/></figure>
          <div className="card-body">
            <Link to='/cardDetels'><h2 className="card-title text-lg font-bold lg:text-2xl">{data.name}</h2></Link>
            <p className="text-sm font-bold text-gray-600">{data.description}</p>
            <span className="flex items-center gap-2">
            <FaLocationDot/>
            <p className="text-sm font-bold text-gray-600">{data.location}</p>
            </span>
            <p className="text-sm font-bold text-gray-600">rating : {data.rating}</p>
            <p className="text-sm font-bold text-gray-600">BDT : {data.price} / per nighht</p>
            <div className="card-actions justify-center md:justify-end pt-2">
              <button className="btn bg-[#1882ff] text-white hover:bg-sky-600">BOOK NOW</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default DetelsPages;
