import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";

const Login = () => {
  return (
    <div className="bg-blue-50 px-4 py-10">
      <div className="md:w-2/3 lg:w-1/3 bg-white shadow-2xl flex flex-col mx-auto p-5 md:p-10 rounded-xl">
        <div className="text-center space-y-2">
          <h1 className="font-bold text-3xl">Please Sign in</h1>
          <p className="text-sm text-gray-600">
            You need to Sign in first to continue
          </p>
        </div>
        <div className="flex gap-5 justify-center pt-6">
          <button className="bg-blue-50 flex items-center gap-2 px-4 md:px-12 py-2 rounded-lg">
            <FcGoogle />
            <span className="font-bold text-gray-700">Google</span>
          </button>
          <button className="bg-blue-50 flex items-center gap-2 px-4 md:px-12  py-2 rounded-lg">
            <BiLogoFacebook className="text-blue-600" />
            <span className="font-bold text-gray-700">Facebook</span>
          </button>
        </div>
        <p className="text-center pt-4 text-gray-600">Or Sign In with</p>

        <form className="space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your email"
              className="input input-bordered bg-blue-50"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">password</span>
            </label>
            <input
              type="email"
              placeholder="Enter your password"
              className="input input-bordered bg-blue-50"
              required
            />
          </div>
        </form>
        
          <p className="flex justify-end pt-4 text-blue-600 cursor-pointer">
            Forgot Password?
          </p>
          <button className="bg-[#1882ff] hover:bg-blue-600 text-white py-4 rounded-lg mt-4">
            Sing In
          </button>
          <p className="pt-4 text-center">Don't have an account ? <Link to='/regester'><span className="text-blue-600 ">Sing Up</span></Link></p>
        
      </div>
    </div>
  );
};

export default Login;
