import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { RiFlagFill } from "react-icons/ri";

const TravellarsRooms = () => {
  const [age, setAge] = React.useState("");

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  return (
    <div className="border rounded py-5 space-y-4">
      <h3 className="text-xl font-bold bg-slate-50 py-2 px-2">
        Travellers of Room 1
      </h3>
      <h2 className="px-10 font-bold">Adult 1</h2>
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
              <MenuItem className="font-bold" value={"(My Selef)"}>
                (My Selef)
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="space-y-4">
          <div className="md:flex items-center gap-4 space-y-3">
            <FaUser className="h-12 w-12 hidden lg:flex" />
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Title
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Age"
              >
                <MenuItem value={10}>Mr</MenuItem>
                <MenuItem value={21}>Ms</MenuItem>
                <MenuItem value={22}>Mrs</MenuItem>
                <MenuItem value={22}>Mrst</MenuItem>
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
          <div className="flex gap-4 items-center ">
            <RiFlagFill className="w-6 h-6" />

            <div className="w-full">
              <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  Nation
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  //   open={open}
                  //   onClose={handleClose}
                  //   onOpen={handleOpen}
                  value={age}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <h2 className="px-10 font-bold">Adult 2</h2>
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
              <MenuItem className="font-bold" value={"(My Selef)"}>
                (My Selef)
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="space-y-4">
          <div className="md:flex items-center gap-4 space-y-3">
            <FaUser className="h-12 w-12 hidden lg:flex" />
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Title
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Age"
              >
                <MenuItem value={10}>Mr</MenuItem>
                <MenuItem value={21}>Ms</MenuItem>
                <MenuItem value={22}>Mrs</MenuItem>
                <MenuItem value={22}>Mrst</MenuItem>
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
        </div>
      </div>
    </div>
  );
};

export default TravellarsRooms;
