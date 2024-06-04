import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const HotelSlier = () => {
  const hotels = [
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2F030420190232061855c7cf0965ad8a.jpg&w=750&q=75",
      title: "Ocean Paradise Hotel & Resort",
      paragraph: "Beautiful hotel with amazing views.",
    },
    {
      img: "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcGOwvbrMzyXPUhc6Ds1wUSpZ9e6b7jT5JZ0I8qwROcofaQW9CCdwk1EWylGPCazZ+A==",
      title: "Sayeman Beach Resort",
      paragraph: "Luxurious stay with world-class amenities.",
    },
    {
      img: "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcMEnftewIugbBotUNk2rjFsMaUorGVN2cNzloVssJB/ZTl8vy2nCx2g3UVUSEsG94w==",
      title: "Seagull Hotels Ltd.",
      paragraph: "Enjoy the stunning sea views from your room.",
    },
    {
      img: "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcDJD1QTvPDJpW5Dy24bmYeTtpLSYDmueDv4QlRSzm2+AETEAmGnETny9w4hzlMwicA==",
      title: "Dream Square Resort",
      paragraph: "Relax in the peaceful mountain surroundings.",
    },
    {
      img: "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcCf4nV59mj+ooKCPK1eLHW5BtLm8h906jXHkgV9PQX2zoCnoLFbOmxOsyRwgWRPRJA==",
      title: "Best Western Heritage",
      paragraph: "Experience the vibrant city life.",
    },
    {
      img: "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcCAtUhYWnMZRtwiny3ZJnG3nYXCxP1Lc6TYQ6EkSSO8CSj76LggclQs5gC7Czw8iUg==",
      title: "Sea Pearl Beach Resort",
      paragraph: "Stay amidst the lush green forests.",
    },
    {
      img: "https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2F1.jpg&w=828&q=75",
      title: "Desert Mirage",
      paragraph: "A serene escape in the heart of the desert.",
    },
    {
      img: "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcMCXc2XiAITqTJRJGuSH0KejFtLejiov2+G3paVtoNQ8CmWVYLerliUofMOz7Y/xOA==",
      title: "Lakeside Inn",
      paragraph: "Enjoy the tranquility of the lakeside.",
    },
    {
      img: "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcEyVpw37NOfVpX0TXlw7J6H5HKJKd6aPcf4xusf9AiE6Y7FWQWP6q9wegvPeCUYz3w==",
      title: "Bhawal Resort & Spa",
      paragraph: "Enjoy the tranquility of the lakeside.",
    },
  ];

  return (
  
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   el: ".swiper-pagination",
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2000, // 2 seconds
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {hotels.map((hotel, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[300px] rounded-lg transition-transform duration-500 hover:scale-110"
              src={hotel.img}
              alt=""
            />
            <div className="space-y-2 pt-2">
              <h2 className="text-sm text-gray-900 text-[18px] font-bold">
                {hotel.title}
              </h2>
              <div className="flex gap-3 items-center">
                <FaStar className="text-yellow-400" />
                <p>5 (345 reviews)</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    
  );
};

export default HotelSlier;
