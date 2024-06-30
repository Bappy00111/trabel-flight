import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import Input from "./ui/Input";
import { register } from 'swiper/element';
import { useForm } from "react-hook-form";

const Regester = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [number,setNumber] = useState("")
  
  const {
    register,
    handleSubmit

  } =useForm()

  

  const handleClick = (data) =>{
    console.log(data)
  }
  return (
    <div className="bg-[#eff6ff]  px-4 py-20">
      <div className="md:w-2/3 lg:w-1/3 bg-white shadow-2xl flex flex-col mx-auto p-5 md:p-10 rounded-xl">
        <div className="text-center space-y-2">
          <h1 className="font-bold text-2xl md:text-3xl">Let’s Get Started</h1>
          <p className="text-sm text-gray-600">
            Create an account and get the Deals & Promotions news
          </p>
        </div>
        <div className="flex justify-between pt-6">
          <button className="bg-blue-50 flex items-center gap-2 px-6 md:px-14 lg:px-16  py-3 rounded-lg text-sm  font-bold">
            <FcGoogle />
            <span className="font-bold text-gray-700">Google</span>
          </button>
          <button className="bg-blue-50 flex items-center gap-2 px-6 md:px-14 lg:px-16  py-3 rounded-lg text-sm  font-bold">
            <BiLogoFacebook className="text-blue-600" />
            <span className="font-bold text-gray-700">Facebook</span>
          </button>
        </div>
        <p className="text-center pt-4 text-gray-600 text-sm">
          Or Sign In with
        </p>

        <form onSubmit={handleSubmit(handleClick)} className="space-y-2">
          
            
            <Input label="Email" placeholder="Emter your email" type="email" {...register('email')}/>
            <Input label="Number" placeholder="Emter your number" type="number" {...register('number')}/>
            <Input label="Password" placeholder="Emter your password" type="password" {...register('password')} />
         
          
        <button onClick={handleClick} className="bg-[#1882ff] w-full hover:bg-blue-600 text-white py-2 rounded-lg mt-4 text-sm font-semibold">
          Sing Up
        </button>
        </form>

        <p className="pt-4 text-center font-bold text-sm">
          Already have an account ?{" "}
          <Link to="/login">
            <span className="text-blue-600 ">Sing In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regester;
