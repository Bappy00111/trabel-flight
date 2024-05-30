import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";


const Regester = () => {
  const { createUser } = useContext(AuthContext);

//   console.log(createUser);   

  const handleSubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const regult = { name, email, password };
    console.log(regult);

    createUser(email, password)
      .then((regult) => {
        const singInUser = regult.user;
        console.log(singInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });

    form.reset();
  };
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
        <button className="bg-blue-50 flex items-center gap-2 px-10 md:px-14 lg:px-16  py-3 rounded-lg text-sm  font-bold">
          <FcGoogle />
          <span className="font-bold text-gray-700">Google</span>
        </button>
        <button className="bg-blue-50 flex items-center gap-2 px-10 md:px-14 lg:px-16  py-3 rounded-lg text-sm  font-bold">
          <BiLogoFacebook className="text-blue-600" />
          <span className="font-bold text-gray-700">Facebook</span>
        </button>
      </div>
      <p className="text-center pt-4 text-gray-600 text-sm">Or Sign In with</p>

      <form className="space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm font-bold text-gray-800">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered bg-[#eff6ff] border-none h-10"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm font-bold text-gray-800">Mobile Number</span>
          </label>
          <input
            type="number"
            placeholder="017xxxxxxxx"
            className="input input-bordered bg-[#eff6ff] border-none h-10"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm font-bold text-gray-800">password</span>
          </label>
          <input
            type="email"
            placeholder="Your password"
            className="input input-bordered bg-[#eff6ff] border-none h-10"
            required
          />
        </div>
      </form>
      
        <button className="bg-[#1882ff] hover:bg-blue-600 text-white py-2 rounded-lg mt-4 text-sm font-semibold">
          Sing Up
        </button>
        <p className="pt-4 text-center font-bold text-sm">Already have an account ? <Link to='/login'><span className="text-blue-600 ">Sing In</span></Link></p>
      
    </div>
  </div>
  );
};

export default Regester;
