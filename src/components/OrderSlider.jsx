import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { MdFlight } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { LuPalmtree } from "react-icons/lu";
import { BsJournalMinus } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";
import { FaAmazonPay } from "react-icons/fa";

const OrderSlider = () => {
  return (
    <>
      <div className="py-2 "></div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="">
            <span>
              <MdFlight className="w-4 h-4 transform rotate-45 text-blue-600" />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">Flight</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>
              <RiHotelLine className="w-4 h-4 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">Hotel</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>
              <LuPalmtree className="w-4 h-4  " />
            </span>
            <h1 className="text-sm font-bold">Holiday</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>
              <BsJournalMinus className="w-4 h-4 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-smtext-gray-600 font-sm">
              Visa
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>
              <FaMobileRetro className="w-4 h-4 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">
              Recharge
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>
              <FaAmazonPay className="w-4 h-4 " />
            </span>
            <h1 className="text-sm font-bold text-gray-600 font-sm">
              Pay Bill
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 24px; /* Adjust the width of navigation arrows */
          height: 24px; /* Adjust the height of navigation arrows */
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px; /* Adjust the size of the arrow icon */
        }
        
      `}</style>
    </>
  );
};

export default OrderSlider;
