import React from "react";
import { FaBottleWater, FaLocationDot, FaStar, FaWifi } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { GiCoffeeCup, GiMirrorMirror } from "react-icons/gi";
import { BsFillEaselFill, BsTelephoneFill } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

const CardDetels = () => {
  return (
    <div className="my-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div>
          <img
            className="rounded-lg h-full"
            src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcDtxd1TT/FppAmUnGTrzfpJvhuPSlurZqFnflMQyk7z8KTiR2brBCe+v5YTgYN2txw=="
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-4 box-border">
          <img
            className="rounded-lg"
            src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcJHvrlbzGy0kd0xT3U1xYXEED+UIAOlSsxy8rzQy4vUKt6UrVUofFt2clOCbt+VF6g=="
            alt=""
          />
          <img
            className="rounded-lg"
            src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcPXlZMouyylksPL0rcCC18FODlK+XRwZ4cSOTIDgXpQH84812xw1DqqVF7dsXIpbig=="
            alt=""
          />
          <img
            className="rounded-lg "
            src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcJFvYaL1Fu7XkHm7ib24nN+UgrxkvChN0IZORgRZkljD7PLeG7hAKNPZlUJbXF2PrQ=="
            alt=""
          />
          <img
            className="rounded-lg"
            src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcPPvhfbG9hXXk7un0or8PnmWUxYl3LDVFTxC6z7jf3xD2/BTBwiAY0P9UsrIPEznOA=="
            alt=""
          />
        </div>
      </div>
      <div className="py-5 md:flex justify-between items-center">
        <div className="space-y-3">
          <h2 className="text-xl md:text-3xl">Long Beach Hotel Cox's Bazar</h2>
          <p className="py-1">
            <ul className="flex gap-3">
              <li>
                <FaStar className="text-yellow-400" />
              </li>
              <li>
                <FaStar className="text-yellow-400" />
              </li>
              <li>
                <FaStar className="text-yellow-400" />
              </li>
              <li>
                <FaStar className="text-yellow-400" />
              </li>
              <li>
                <FaStar className="text-yellow-400" />
              </li>
            </ul>
          </p>
          <span className="flex items-center gap-3">
            <FaLocationDot className="text-sky-400" />
            <p className="text-sm text-gray-600 font-bold">
              14 Kalatoli, Hotel-Motel Zone, Cox's Bazar, Bangladesh
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <HiOutlineCurrencyDollar className="text-yellow-600" />
            <p className="text-sm text-gray-600 font-bold">
              Earn or Redeem TripCoin: 0
            </p>
          </span>
        </div>
        <div className="space-y-3 pt-5">
          <p className="text-sm text-gray-400 font-bold ">Price starts from</p>
          <p className="line-through text-sm">BDT 10,121</p>
          <p className="text-xl">BDT 4,748</p>
        </div>
      </div>
      <div>
        <h1 className="py-4 text-2xl">Select Your Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 px-4  py-5 md:gap-4 shadow rounded shadow-slate-300">
          <div className="col-span-1">
            <img
              className="rounded"
              src="https://api.sharetrip.net/api/v1/hotel/image/?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcDYaykYLTlQbRfjVtXlPQctxzfZcrWmZKAIv7zJL4NHWAn9jKdHBAhQvrVL1tC340g=="
              alt=""
            />
            <div className="grid grid-cols-2 py-2 gap-2">
              <div className="">
                <img
                  className="rounded"
                  src="https://api.sharetrip.net/api/v1/hotel/image/?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcJUiuQhPSPg9VN1opryloGRaFcnt4P/imxssY9jI9KRGTEj0MCHwcRAWUcRUjwg5PA=="
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded"
                  src="https://api.sharetrip.net/api/v1/hotel/image/?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcHU6qvnXgCBBCbOjonMmP2FrUv1h+5d4A2bQVzF07yEM3Yamqp69JYOVZcD/t69e4Q=="
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-xl md:text-2xl py-2">Superior Twin</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 space-y-2 ">
              <li className="flex items-center gap-2">
                <FaBottleWater />
                <span className="text-sm">Bottled water</span>
              </li>
              <li className="flex items-center gap-2">
                <GiCoffeeCup />
                <span className="text-sm">Kettle or coffee maker</span>
              </li>
              <li className="flex items-center gap-2">
                <FaWifi />
                <span className="text-sm">Free Wi-Fi</span>
              </li>
              <li className="flex items-center gap-2">
                <BsFillEaselFill />
                <span className="text-sm">Safe</span>
              </li>
              <li className="flex items-center gap-2">
                <GiMirrorMirror />
                <span className="text-sm">Mirror</span>
              </li>
              <li className="flex items-center gap-2">
                <BsTelephoneFill />
                <span className="text-sm">Telephone</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3  my-2 text-sm  text-gray-600 ">
              <div>
                <p className="bg-slate-200 px-2">Benefits</p>
                <span className="flex items-center gap-2 ">
                  <IoMdCheckmark className="text-green-500" />
                  <p>Breakfast</p>
                </span>
                <span className="flex items-center gap-2">
                  <IoMdCheckmark className="text-green-500" />
                  <p>Non-smoking room</p>
                </span>
                <button className="py-5 text-blue-400 font-bold">
                  Cancellation Policy
                </button>
              </div>
              <div>
                <p className="bg-slate-200">Room(s)</p>
                <p>1 room</p>
              </div>
              <div>
                <p className="bg-slate-200">Price per night</p>
                <span>
                  <p className="text-gray-500">Price per night as low as</p>
                  <p className="line-through">BDT 15,180</p>
                  <p className="text-lg font-medium">BDT 13,966</p>
                </span>
                <button className="bg-[#1882ff] px-4 py-2 text-white rounded text-sm font-bold">RESERVE</button>
              </div>
            </div>
            <hr />
            <div>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  my-2 text-sm  text-gray-600 ">
              <div>
                <span className="flex items-center gap-2 ">
                  <IoMdCheckmark className="text-green-500" />
                  <p>Breakfast</p>
                </span>
                <span className="flex items-center gap-2">
                  <IoMdCheckmark className="text-green-500" />
                  <p>Non-smoking room</p>
                </span>
                <button className="py-5 text-blue-400 font-bold">
                  Cancellation Policy
                </button>
              </div>
              <div>
                <p>1 room</p>
              </div>
              <div>
                <span>
                  <p className="text-gray-500">Price per night as low as</p>
                  <p className="line-through">BDT 11385</p>
                  <p className="text-lg font-medium">BDT 10,474</p>
                </span>
                <button className="bg-[#1882ff] px-4 py-2 text-white rounded text-sm font-bold">RESERVE</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetels;
