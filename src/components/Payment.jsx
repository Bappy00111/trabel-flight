import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const Payment = () => {
  return (
    <div className="m-2">
      <h2 className=" bg-slate-100 font-extrabold p-4">Your price summary</h2>
      <div className="p-4 text-sm font-bold bg-slate-200 flex justify-between">
        <p>Detels</p>
        <p>Amount</p>
      </div>
      <div className="flex justify-between items-cente pt-2 px-4 text-sm font-bold">
        <p>1 Superior Twin X 3 nights</p>
        <p>11,385</p>
      </div>
      <div className="flex justify-between items-cente pt-2 px-4 text-sm ">
        <p>Discount</p>
        <p className="font-bold">- BDT 17,419</p>
      </div>
      <div className="flex justify-between items-cente pt-2 px-4 text-sm pb-4">
        <p>Coupon Discount</p>
        <p className="font-bold">- BDT 1,339</p>
      </div>
      <hr className=" border " />
      <div className="flex justify-between items-cente pt-2 px-4 text-sm pb-4">
        <p className="text-gray-600 font-extrabold">Total Amount</p>
        <p className="font-bold">BDT 15,397</p>
      </div>
      <div className="flex items-center gap-4 px-4">
        <FaRegCalendarCheck className="h-6 w-6" />
        <div>
          <p className="font-bold text-sm">4 Jul, 2024 - 7 Jul, 2024</p>
          <p className="text-sm">3 nights</p>
        </div>
      </div>
      <div className="flex items-center gap-4 px-4 mt-4">
        <IoPeopleSharp className="h-6 w-6" />
        <p className="text-sm font-bold ">2 Adult 1 Rooms</p>
      </div>
      <div className="px-4 flex gap-4 items-center mt-20 md:mt-32 ">
        <input
          className="border-2 border-gray-400 rounded-sm"
          type="checkbox"
        />
        <p className="text-sm">
          Agree to the <span className="text-blue-500">Terms & Condition</span>{" "}
          and <span className="text-blue-500">Privacy Policy</span>
        </p>
      </div>
      
        <button className="btn bg-[#1882ff] w-full mt-4 text-white hover:bg-blue-600">PLAY NOW</button>
      
    </div>
  );
};

export default Payment;
