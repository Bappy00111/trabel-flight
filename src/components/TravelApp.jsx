import React from "react";
import logo from "../../src/image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xX3N0X2xvZ28iIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1OTIuNjEgMTYxLjIzIj48c3R5bGU+LnN0MHtmaWxsOiMxODgyZmZ9LnN0.svg";

const TravelApp = () => {
  return (
    <div className="py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <div className="text-center space-y-3">
        <h3 className="font-semibold md:text-4xl text-xl">
          Your all-in-one Travel App
        </h3>
        <p className="text-slate-500">
          Get flights, hotels, holidays and visa assistance in just a few taps.
          Enjoy real-time flight <br /> updates, schedules, travel info, play
          games, win trip coins and much more.
        </p>
        <div className="flex justify-center gap-3 pt-5">
          <img
            src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/App-Store.svg"
            alt=""
          />
          <img
            src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/QR-Code.svg"
            alt=""
          />
          <img
            src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/Play-Store.svg"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/app-screen.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 py-10 ">
        <div>
          <img className="w-[130px]" src={logo} alt="" />
          <p className="text-gray-500">
            ShareTrip is the country’s first and leading online travel
            aggregator (OTA). Since our inception, we have dreamt of making
            travel easier for people of all ages and we move forward to make
            that dream into reality.
          </p>
        </div>
        <div>
          <ul className="space-y-3 text-gray-600">
            <li className="font-bold text-lg">Explore</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Hotel Sitemap</li>
            <li>Medical Tourism</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-gray-600">
            <li className="font-bold text-lg">Services</li>
            <li>Flight</li>
            <li>Hotel</li>
            <li>Holiday</li>
            <li>Visa</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-gray-600">
            <li className="font-bold text-lg">Useful Links</li>
            <li>Travel Guide</li>
            <li>Travel Advisory</li>
            <li>Visa Guide</li>
            <li>Visa Application</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-gray-600">
            <li className="font-bold text-lg">Promotions</li>
            <li>News</li>
            <li>Promotions</li>
            <li>VAS</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TravelApp;
