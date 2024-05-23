import React from "react";
import Flight from "./Flight";
import SearchFlight from "./SearchFlight";
import Members from "./Members";
import Banner from "./Banner";
import TravelApp from "./TravelApp";
import Contact from "./Contact";
import MemberSection from "./MemberSection";
import Footer from "./Footer";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Flight />
      <Slider/>
      <SearchFlight />
      <Members />
      <TravelApp />
      <Contact />
      <MemberSection />
      <Footer />
    </div>
  );
};

export default Home;
