import React, { useContext } from "react";
import { Envelope, Lock } from "phosphor-react";
import { Button, Icon, Input, Label } from "keep-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { CgProfile } from "react-icons/cg";

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
    <div className="px-4">
      <form
        onSubmit={handleSubmite}
        className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md"
      >
      <h2 className="text-center font-bold text-lg md:text-2xl">Create a new account</h2>
      
        <fieldset className="space-y-1">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <Input placeholder="Enter Name" name="name" className="ps-11" />
            <Icon>
            <CgProfile />
            </Icon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="name">Email</Label>
          <div className="relative">
            <Input placeholder="Enter email" name="email" className="ps-11" />
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
              name="password"
              type="password"
              className="ps-11"
            />
            <Icon>
              <Lock size={19} color="#AFBACA" />
            </Icon>
          </div>
        </fieldset>
        <Button size="sm" color="secondary" type="submit">
          Regester
        </Button>
        <p className="font-bold text-sm">
          Alredy have a account{" "}
          <Link to="/login">
            <span className="text-blue-600">Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Regester;
