import React, { useState } from "react";
import { FaArrowRightLong, FaUser } from "react-icons/fa6";

import CoustomerDetels from "./CoustomerDetels";
import TravellarsRooms from "./TravellarsRooms";
import RoomsReqerments from "./RoomsReqerments";
import Payment from "./Payment";

const BookingDetels = () => {
  const [isClick, setIsClick] = useState(-1);
  

  const handleClick = (index) => {
    setIsClick(index);
  };


  const images = [
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-STpay.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-skytrip2.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-visa.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-mastercard.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-Panel-Partners-logos.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-bkash.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-nagad%282%29.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-ebl-new.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-sc.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-brb.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-city-amex.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-mtb.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-lb.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-nexuspaydbbl.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-nccbank_logo.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-dinerclub.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-abbanklogo.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-midlandbank.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-city-visa.png",
    },
    {
      image:
        "https://sharetrip-payment.s3.ap-southeast-1.amazonaws.com/logo/small-SEB.png",
    },
  ];
  return (
    <div className="my-container grid  md:grid-cols-3 gap-5 ">
      <div className="grid col-span-2 text-sm">
        <div className="py-5 border rounded-lg">
          <div className="md:flex justify-between ">
            <div className="flex items-center gap-2 bg-[#1882ff] py-4 w-full px-4">
              <input
                type="radio"
                name="radio-1"
                className="radio h-4 w-4"
                checked
              />
              <p className="text-white text-sm">I want to Earn Trip Coin</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-200 py-4 w-full px-4">
              <input
                type="radio"
                name="radio-1"
                className="radio h-4 w-4 radio-info"
                checked
              />
              <p className="text-sm text-gray-500">I want to Earn Trip Coin</p>
            </div>
          </div>
          <div className="my-10 mx-5 border bg-[#e2e8f0] rounded-lg px-5 py-5 space-y-3">
            <p className="text-sm font-bold">Please enter a valid coupon</p>
            <span className="flex gap-2">
              <input
                className="w-full py-1 rounded  border border-orange-200 focus:outline-none focus:border-blue-500 ps-4"
                type="text"
              />
              <button className="bg-orange-400 px-4 rounded">
                <FaArrowRightLong className="text-white" />
              </button>
            </span>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                data-tooltip-target="tooltip-bottom2"
                data-tooltip-placement="bottom"
                className="py-2 px-2 bg-white text-start hover:bg-[#d4e8ff] rounded"
              >
                <p className="text-sm font-bold">BKASHSTAY</p>
                <button
                  type="button"
                  className="mb-2 md:mb-0 rounded-lg text-sm  "
                >
                  Get up to 80% discount on ST Pay payment
                </button>

                <div
                  id="tooltip-bottom2"
                  role="tooltip"
                  className="absolute  z-10 invisible inline-block px-3 py-2 text-sm  text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Get up to 80% discount on ST Pay payment
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </button>
              <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                className="py-2 px-2 bg-white text-start hover:bg-[#d4e8ff] rounded"
              >
                <p className="text-sm font-bold">STPAYROOMS</p>
                <button
                  type="button"
                  className="mb-2 md:mb-0 rounded-lg text-sm  "
                >
                  Get up to 80% discount on ST Pay payment
                </button>

                <div
                  id="tooltip-bottom"
                  role="tooltip"
                  className="absolute  z-10 invisible inline-block px-3 py-2 text-sm  text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Get up to 80% discount on ST Pay payment
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </button>
              <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                className="py-2 px-2 bg-white text-start hover:bg-[#d4e8ff] rounded"
              >
                <p className="text-sm font-bold">SKYTRIP75</p>
                <button
                  type="button3"
                  className="mb-2 md:mb-0 rounded-lg text-sm  "
                >
                  Up to 75% discount for SkyTrip cardholders
                </button>

                <div
                  id="tooltip-bottom3"
                  role="tooltip"
                  className="absolute  z-10 invisible inline-block px-3 py-2 text-sm  text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Get up to 80% discount on ST Pay payment
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </button>
              <button
                data-tooltip-target="tooltip-bottom3"
                data-tooltip-placement="bottom"
                className="py-2 px-2 bg-white text-start hover:bg-[#d4e8ff] rounded"
              >
                <p className="text-sm font-bold">STMVROOMS</p>
                <button
                  type="button4"
                  className="mb-2 md:mb-0 rounded-lg text-xs  "
                >
                  Up to 74% discount for Brac Bank, The City Bank, Eastern ....
                </button>

                <div
                  id="tooltip-bottom4"
                  role="tooltip"
                  className="absolute  z-10 invisible inline-block px-3 py-2 text-sm  text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Up to 74% discount for Brac Bank, The City Bank, Eastern Bank
                  Limited, LankaBangla Finance, Mastercard, Mutual Trust Bank
                  Limited, Prime Bank, Southeast Bank, Standard Chartered and
                  United Commercial Bank Ltd cardholders
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </button>
              <button
                data-tooltip-target="tooltip-bottom3"
                data-tooltip-placement="bottom"
                className="py-2 px-2 bg-white text-start hover:bg-[#d4e8ff] rounded"
              >
                <p className="text-sm font-bold">CHECKIN</p>
                <button
                  type="button5"
                  className="mb-2 md:mb-0 rounded-lg text-sm  "
                >
                  Up to 70% discount for Specific Bank Cardholders
                </button>

                <div
                  id="tooltip-bottom5"
                  role="tooltip"
                  className="absolute  z-10 invisible inline-block px-3 py-2 text-sm  text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Up to 70% discount for Specific Bank Cardholders and MFS
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </button>
            </div>
          </div>
          <div className="my-10 mx-5 py-5 space-y-3">
            <p className="text-xl font-bold ">
              Select your preferred method to Pay
            </p>
            <p className="text-sm">
              Convenience Fee may vary depending on the payment method
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
              {images.map((data, index) => (
                <div key={index}>
                  <img
                    style={{
                      filter:
                        isClick === index
                          ? "grayscale(0%) "
                          : "grayscale(100%) ",
                    }}
                    className={`w-20 h-12  border-2 px-1 rounded ${
                      isClick === index ? "border-blue-400" : "border-gray-300"
                    }`}
                    src={data.image}
                    alt=""
                    onClick={() => handleClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <CoustomerDetels/>
        <TravellarsRooms/>
        <RoomsReqerments/>
      </div>

      <div className="grid col-span-2 lg:col-span-1 ">
        <div className="border h-[600px] rounded-lg sticky top-0">
          <Payment/>
        </div>
      </div>
    </div>
  );
};

export default BookingDetels;
