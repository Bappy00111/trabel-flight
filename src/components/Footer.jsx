import React from "react";

const Footer = () => {
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto  px-2 flex md:justify-between py-6 text-sm ">
      <div>
        <ul className="md:flex hidden gap-5 text-gray-600">
          <li>Support Center</li>
          <li>Payment Security</li>
          <li>Privacy Policy</li>
          <li>EMI</li>
        </ul>
      </div>
      <div className="text-center">
        <p>Copyright © 2024. <span className="text-blue-500">ShareTrip.</span> All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
