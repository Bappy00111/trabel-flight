import { Radio } from "@mui/material";
import React from "react";
import { LiaBedSolid, LiaSmokingBanSolid } from "react-icons/lia";
import {
  MdBed,
  MdOutlineBedroomChild,
  MdOutlineSmokingRooms,
} from "react-icons/md";

const RoomsReqerments = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="border rounded my-5 p-5">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Let us know what you need</h2>
        <p>
          Requests are fulfilled on a first come, first served basis. We’ll send
          yours right after you book.
        </p>
      </div>
      <div className="py-8">
        <h2 className=" font-extrabold">Do you have a smoking preference?</h2>
        <div className="md:flex gap-5">
          <div className="flex items-center gap-2">
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <LiaSmokingBanSolid className="w-6 h-6" />
            No-smoking room
          </div>
          <div className="flex items-center gap-2">
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            <MdOutlineSmokingRooms className="w-6 h-6" />
            smoking room
          </div>
        </div>
        <h2 className="font-extrabold">
          What bed configuration do you prefer?
        </h2>
        <div className="md:flex gap-5">
          <div className="flex items-center gap-2">
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <MdOutlineBedroomChild className="w-6 h-6" />
            I’d like a large bed
          </div>
          <div className="flex items-center gap-2">
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            <MdBed className="w-6 h-6" />
            I’d like twin beds
          </div>
        </div>
        <h2 className="text-lg font-extrabold text-blue-500">Click here for more requests</h2>
      </div>
    </div>
  );
};

export default RoomsReqerments;
