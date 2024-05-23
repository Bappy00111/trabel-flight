import React from "react";
import { BsJournalMinus } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { FaAmazonPay, FaMobileRetro, FaRegCircle } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuPalmtree } from "react-icons/lu";
import { MdFlight } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import OrderSlider from "./OrderSlider";

const Order = () => {
  return (
    <div className="px-4">
      <div className="relative sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto  bg-white shadow-2xl h-[450px]  md:h-[300px] -mt-10  md:-mt-20   rounded-xl  py-2 md:py-4 px-4 md:px-8">
        <div className=" lg:hidden gap-4 ">
          <OrderSlider/>
        </div>

        <div className="hidden lg:flex gap-4 ">
          <div className="flex gap-2 items-center">
            <span>
              <MdFlight className="w-6 h-6 transform rotate-45 text-blue-600" />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">Flight</h1>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <RiHotelLine className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">Hotel</h1>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <LuPalmtree className="w-6 h-6  " />
            </span>
            <h1 className="text-sm font-bold">Holiday</h1>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <BsJournalMinus className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-smtext-gray-600 font-sm">
              Visa
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <FaMobileRetro className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">
              Mobile Recharge
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <FaAmazonPay className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">
              Pay Bill
            </h1>
          </div>
        </div>

        <div className="py-4">
          <hr />
        </div>

        <div>
          <ul className="flex gap-2 lg:hidden">
            <li className="flex gap-2 items-center">
              <span>
                <FaRegCircle className="h-3 w-3 text-gray-400" />
              </span>
              <p className="text-sm font-bold text-gray-600">One way</p>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <FaRegDotCircle className="h-3 w-3 text-blue-500" />
              </span>
              <p className="text-sm font-bold text-gray-600">Round Trip</p>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <FaRegCircle className="h-3 w-3 text-gray-400" />
              </span>
              <p className="text-sm font-bold text-gray-600">Multi City</p>
            </li>
          </ul>
        </div>

        <div className=" justify-between items-center py-4 hidden lg:flex">
          <div className="  flex gap-4 items-center">
            <button className="text-sm font-bold text-gray-600 font-smtext-gray-600 flex items-center gap-2 bg-gray-200 px-2 md:px-6 py-2 rounded">
              <span>
                <FaRegCircle className="h-4 w-4 text-gray-400" />
              </span>
              One way
            </button>
            <button className="text-sm font-bold text-white font-smtext-gray-600 flex items-center gap-2 bg-[#1882ff] px-6 py-2 rounded">
              <span>
                <FaRegDotCircle className="h-4 w-4 text-white" />
              </span>
              Round Trip
            </button>
            <button className="text-sm font-bold text-gray-600 font-smtext-gray-600 flex items-center gap-2 bg-gray-200 px-6 py-2 rounded">
              <span>
                <FaRegCircle className="h-4 w-4 text-gray-400" />
              </span>
              Multi City
            </button>
          </div>
          <div>
            <div className="flex gap-2 ">
              <button className="flex items-center gap-2 bg-blue-200 px-4 py-2 text-blue-700 font-bold text-sm">
                1 Traveller
                <span>
                  <IoIosArrowDown className="w-4 h-4" />
                </span>
              </button>
              {/* <button className="font-boldd text-sm bg-blue-200">1 Traveller</button> */}
              <button className="flex items-center gap-2 bg-blue-200 px-4 py-2 text-blue-700 font-bold text-sm">
                Economy
                <span>
                  <IoIosArrowDown className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:hidden py-4">
        <div className="flex gap-2 items-center border px-4 rounded-lg divide-x">
            <h2 className="font-bold text-gray-900">DAC</h2>
            <div className="pl-2">
              <h2 className="font-bold text-gray-600">Dhaka</h2>
              <p className="text-sm">Bangladesh,Hazrat Shahjal...</p>
            </div>
          </div>
          <div className="flex gap-2 items-center border px-4 rounded-lg divide-x">
            <h2 className="font-bold text-gray-900">CXB</h2>
            <div className="pl-2">
              <h2 className="font-bold text-gray-600">Cox's Bazar</h2>
              <p className="text-sm">Bangladesh,Cox's Bazar Ai...</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-2 items-center border px-4 rounded-lg divide-x">
            <h2 className="font-bold text-gray-900">25</h2>
            <div className="pl-2">
              <h2 className="font-bold text-gray-600">May</h2>
              <p className="text-sm">Saturday,2024</p>
            </div>
          </div>
          <div className="flex gap-2 items-center border px-4 rounded-lg  divide-x">
            <h2 className="font-bold text-gray-900">27</h2>
            <div className="pl-2">
              <h2 className="font-bold text-gray-600">May</h2>
              <p className="text-sm">Monday,2024</p>
            </div>
          </div>
          </div>
          <div>
            <button className="bg-[#f78e1e] w-full py-2 rounded">
             <p className="text-white font-bold text-sm">Search Flight</p>
            </button>
          </div>
        </div>

        <div className=" gap-3 items-center py-4 hidden lg:flex">
          <div className="flex gap-2 items-center border p-2 rounded-lg w-5/6 divide-x">
            <h2 className="font-bold text-gray-900">DAC</h2>
            <div className="pl-4">
              <h2 className="font-bold text-gray-600">Dhaka</h2>
              <p className="text-sm">Bangladesh,Hazrat Shahjal...</p>
            </div>
          </div>
          <div className="flex gap-2 items-center border p-2 rounded-lg w-5/6 divide-x">
            <h2 className="font-bold text-gray-900">CXB</h2>
            <div className="pl-4">
              <h2 className="font-bold text-gray-600">Cox's Bazar</h2>
              <p className="text-sm">Bangladesh,Cox's Bazar Ai...</p>
            </div>
          </div>
          <div className="flex gap-2 items-center border p-2 rounded-lg w-5/6 divide-x">
            <h2 className="font-bold text-gray-900">25</h2>
            <div className="pl-4">
              <h2 className="font-bold text-gray-600">May</h2>
              <p className="text-sm">Saturday,2024</p>
            </div>
          </div>
          <div className="flex gap-2 items-center border p-2 rounded-lg w-5/6 divide-x">
            <h2 className="font-bold text-gray-900">27</h2>
            <div className="pl-4">
              <h2 className="font-bold text-gray-600">May</h2>
              <p className="text-sm">Monday,2024</p>
            </div>
          </div>
          <div>
            <button className="bg-[#f78e1e] py-4 px-4 rounded-xl">
              <IoSearchOutline className="h-8 w-8" />
            </button>
          </div>
        </div>

        <div className="py-4">
          <ul className="flex gap-4">
            <li className="flex gap-2 items-center">
              <span>
                <FaRegDotCircle className="h-4 w-4 text-blue-600" />
              </span>
              <p className="text-sm font-bold text-gray-600">Regular Fare</p>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <FaRegCircle className="h-4 w-4 text-gray-400" />
              </span>
              <p className="text-sm font-bold text-gray-600">Student Fare</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Order;
