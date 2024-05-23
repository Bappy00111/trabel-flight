import React from "react";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 ">
      <div className="grid  md:grid-cols-3 text-gray-800 py-5 space-y-8">
        <div>
        <p className="text-lg font-bold">Contact Us</p>
        <ul className="space-y-3 pt-3 text-sm">
          <li>
            Email : <span className="text-cyan-400">ask@sharetrip.net</span>
          </li>
          <li>
            Phone : <span className="text-cyan-400">00 9712356789</span>
          </li>
          <li>
            WhatsApp : <span className="text-cyan-400">Message us</span>
          </li>
        </ul>
        <div className="pt-2 flex">
          <ul className="flex gap-2">
            <li>
              {" "}
              <FaFacebookSquare className="w-6 h-6" />
            </li>
            <li>
              <FaFacebookMessenger className="w-6 h-6" />
            </li>
            <li>
              <FaTwitter className="w-6 h-6" />
            </li>
            <li>
              <FaInstagram className="w-6 h-6" />
            </li>
            <li>
              <FaYoutube className="w-6 h-6" />
            </li>
            <li>
              <FaLinkedin className="w-6 h-6" />
            </li>
          </ul>
        </div>
        </div>
        <div>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="text-lg font-bold ">Dhaka Office</li>
            <li>Rangs Pearl Tower, 4th Floor,</li>
            <li>House no. 76, Road 12, Block E, Banani,</li>
            <li>Dhaka 1213, Bangladesh</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="text-lg font-bold">Chattogram Office</li>
            <li>Rangs Pearl Tower, 4th Floor,</li>
            <li>House no. 76, Road 12, Block E, Banani,</li>
            <li>Dhaka 1213, Bangladesh</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    
  );
};

export default Contact;
