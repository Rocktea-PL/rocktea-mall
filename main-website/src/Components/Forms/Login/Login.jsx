//import { useState } from "react";
//import Button from "../../Button";
import { NavLink } from "react-router-dom";
import {Oval} from 'react-loader-spinner'
import { useGlobalContext } from "../../../hooks/context";
function Login() {
  const { credentials, setCredentials, isLoading, loginError, setLoginError,
    handleLoginFormSubmit } =
    useGlobalContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...loginError, [name]: "" };
    setCredentials({
      ...credentials,
      [name]: value,
    });
    setLoginError(updatedErrors)
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
             {loginError && loginError.email && (
                        <div className="text-red-500">{loginError.email}</div>
                      )}
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
            {loginError && loginError.password && (
                        <div className="text-red-500">{loginError.password}</div>
                      )}
          </label>
          <div className="flex items-center justify-between w-[90%]">
            <label className="flex flex-row-reverse items-center justify-center whitespace-nowrap text-[14px] -mt-1">
              Remember me
              <input type="checkbox" className="w-[30px] h-3 mt-0 px-1" />
            </label>
            <div>
              <p className="text-[var(--deep-blue)] whitespace-nowrap text-[14px]">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
        <button
    className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg mt-6"
    onClick={handleLoginFormSubmit}
    disabled={isLoading}  // Disable the button when loading
  >
    {isLoading ? <Oval
  height={30}
  width={30}
  color="#fff"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#f6f6f6"
  strokeWidth={7}
  strokeWidthSecondary={7}

/> : 'Sign In'}
  </button>
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
