import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Chhoto devices-e ekta kore slide dakhanor jonno
      } else {
        setSlidesPerView(5); // Boro devices-e 5 ta slide dekhanor jonno
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Prathomik bhabe current window size-er upor bhitti kore value set korar jonno

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // image data
  const imagesData = [
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FMaafushi.jpg&w=750&q=75",
      header: "Maafushi",
      text: "36 Hotels Available36 Hotels Available",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKuala_Lumpur.jpg&w=750&q=75",
      header: "Kuala Lumpur",
      text: "2,464 Hotels Available2",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FBangkok.jpg&w=750&q=75",
      header: "Bangkok",
      text: "4,351 Hotels Available4",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKathamandu.jpg&w=750&q=75",
      header: "Kathmandu",
      text: "1,152 Hotels Available",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKolkata.jpg&w=750&q=75",
      header: "Kolkata",
      text: "1,319 Hotels Available",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FSingapore.jpg&w=750&q=75",
      header: "Singapore",
      text: "813 Hotels Available",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FDubai.jpg&w=750&q=75",
      header: "Dubai",
      text: "813 Hotels Available",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FBangkok.jpg&w=750&q=75",
      header: "Bangkok",
      text: "4,351 Hotels Available4",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKolkata.jpg&w=750&q=75",
      header: "Kolkata",
      text: "1,319 Hotels Available",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKathamandu.jpg&w=750&q=75",
      header: "Kathmandu",
      text: "1,152 Hotels Available",
    },
  ];

  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto py-10 px-4">
      <div className="text-center space-y-3 pb-6">
        <h1 className="text-xl md:text-4xl font-bold ">
          Most Popular Destinations
        </h1>
        <p className="text-slate-500 text-sm">
          Expand your travel horizons with new facets! Explore the world by
          choosing  your ideal travel <br /> destinations in Asia, Europe, America,
          Australia and more with ShareTrip.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView ? slidesPerView : 5}
        // slidesPerView={5}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2000, // 2 seconds
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imagesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content relative overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.header}
                className="swiper-img w-full sm:w-auto h-[400px] object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white   text-center ">
                <h2 className="font-bold">{item.header}</h2>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
