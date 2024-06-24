import React from 'react';
import { Tooltip } from "flowbite";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from 'react-icons/fa6';

const CoustomerDetels = () => {
    const [age, setAge] = React.useState("");
    
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <div className="my-10 border rounded py-5 space-y-4">
          <h3 className="text-xl font-bold bg-slate-50 py-2 px-2">
            Customer Details
          </h3>
          <div className="p-5 space-y-5">
            <div className="flex md:gap-4 items-center ">
              <span>
                <HiMiniUserGroup className="w-6 h-6 hidden lg:flex" />
              </span>

              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Select Travellers from your Favourties List
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"(My Selef)"}
                  label="selet taravel"
                  // onChange={handleChange}
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <MenuItem value={"(My Selef)"}>(My Selef)</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg">
                Coustomer Name <sup>*</sup>
              </h3>
              <div className="md:flex items-center gap-4 space-y-3">
                <FaUser className="h-16 w-16 hidden lg:flex" />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Mr</MenuItem>
                    <MenuItem value={20}>Ms</MenuItem>
                    <MenuItem value={30}>Mrs</MenuItem>
                    <MenuItem value={30}>Mrst</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Fast Name"
                  variant="outlined"
                  className="w-full"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  className="w-full"
                />
              </div>
              <div className="md:flex items-center gap-4 ">
                <FaPhoneAlt className="h-6 w-6 hidden lg:flex" />
                <TextField
                  id="outlined-basic"
                  label="Mobile Phone Number"
                  variant="outlined"
                  className="w-full"
                />
              </div>
            </div>
            <div className="md: flex gap-4 items-center">
              <MdEmail className="h-6 w-6 hidden lg:flex" />
              <TextField
                className="w-full "
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
            </div>
          </div>
        </div>
    );
};

export default CoustomerDetels;