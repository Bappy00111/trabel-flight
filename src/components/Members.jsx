import React from "react";

const Members = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-orange-200 py-5">
      <div className=" md:flex items-center justify-between h-[200px] sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-2">
        
          <div className="space-y-2">
            <h3 className="text-4xl font-semibold">
              Members can save on lifestyle
            </h3>
            <p className="text-gray-600">
              Enjoy privileges such as exclusive flight prices, unbelievable
              discounts on thousands of hotels, and much more
            </p>
          </div>
          <div>
            <button className="btn bg-orange-500 border-none rounded-full text-white">
              Find Holiday Savings
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default Members;
