import React from "react";
import { Envelope, Lock } from 'phosphor-react'
import { Button, Icon, Input, Label } from 'keep-react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
   <div className="px-4">
     <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
     <h2 className="text-center font-bold text-lg md:text-2xl">Please Login</h2>
      <fieldset className="space-y-1">
        <Label htmlFor="name">Email</Label>
        <div className="relative">
          <Input placeholder="Enter email" className="ps-11" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            placeholder="Enter password"
            type="password"
            className="ps-11"
          />
          <Icon>
            <Lock size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <Button size="sm" color="secondary" type="submit">
        Login
      </Button>
      <p className="font-bold text-sm">New to Website <Link to="/regester"><span className="text-blue-600">Regester</span></Link></p>
    </form>
   </div>
  );
};

export default Login;
