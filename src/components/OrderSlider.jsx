import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

import { MdFlight } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { LuPalmtree } from "react-icons/lu";
import { BsJournalMinus } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";
import { FaAmazonPay } from "react-icons/fa";

const OrderSlider = () => {
  return (
    <>
    <div className="p-4 max-w-md mx-auto"></div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="flex gap-2 items-center">
            <span>
              <MdFlight className="w-6 h-6 transform rotate-45 text-blue-600" />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">Flight</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 items-center">
            <span>
              <RiHotelLine className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">Hotel</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 items-center">
            <span>
              <LuPalmtree className="w-6 h-6  " />
            </span>
            <h1 className="text-sm font-bold">Holiday</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 items-center">
            <span>
              <BsJournalMinus className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-smtext-gray-600 font-sm">
              Visa
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 items-center">
            <span>
              <FaMobileRetro className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">
              Mobile Recharge
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 items-center">
            <span>
              <FaAmazonPay className="w-6 h-6 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">
              Pay Bill
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrderSlider;
