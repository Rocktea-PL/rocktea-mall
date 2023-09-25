//import { useState } from "react";
import Button from "../../Button";
import { NavLink } from "react-router-dom";

import { useGlobalContext } from "../../../hooks/context";
function Login() {
  const { credentials, setCredentials, handleLoginFormSubmit } =
    useGlobalContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-0 h-screen overflow-hidden">
      <figure className="lg:max-w-[50%] hidden lg:block h-screen w-[570px]">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961296/rocktea-main-website/assets/IMG_7812_eibblj.jpg"
          alt="login"
          className="object-contain h-auto"
          loading="lazy"
        />
      </figure>
      <form
        action=""
        className="form pb-7"
        onSubmit={handleLoginFormSubmit} // Call handleFormSubmit on form submission
      >
        <h2>Welcome!</h2>
        <div className="flex flex-col gap-4 px-5 md:mt-5">
          <label>
            Email
            <input
              type="email"
              placeholder="example@mail.com"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="*******"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </label>
          <div className="flex items-center justify-between w-[90%]">
            <label className="flex flex-row-reverse items-center justify-center -mt-1">
              Remember me
              <input type="checkbox" className="w-[30px] h-3 mt-0 px-1" />
            </label>
            <div>
              <p className="text-[var(--deep-blue)] text-sm">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <Button text="Sign In" />
        </div>
        <p className="text-[15px] text-center mt-5">
          Do not have an account?{" "}
          <NavLink
            to="/personal_details"
            style={{ color: "var(--deep-blue)", fontWeight: "bold" }}
          >
            Sign Up
          </NavLink>{" "}
        </p>
      </form>
    </section>
  );
}

export default Login;
