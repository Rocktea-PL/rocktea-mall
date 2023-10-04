/*eslint no-useless-escape: "off"*/

import { useGlobalContext } from "../src/hooks/context";
import FileInput from "../src/Components/Forms/SignUp/FormImage";
import { NavLink } from "react-router-dom";
import { ImageWithLoading } from "../src/Components/ImageLoader";
import EmailVerification from "../src/Components/Forms/SignUp/EmailVerification";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useState } from "react";
//import {useState} from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

function UserDetails() {
  const {
    userData,
    setUserData,
    error,
    setError,
    handleFormSubmit,
    verifyEmail,
    setVerifyEmail,
    isLoading,
  } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    const storedVerifyEmail = localStorage.getItem("verifyEmail");
    if (storedVerifyEmail) {
      setVerifyEmail(JSON.parse(storedVerifyEmail));
    }
  }, [setVerifyEmail]);

  function isPasswordValid(password) {
    // Regular expressions for password validation
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const specialSymbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    return (
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password) &&
      specialSymbolRegex.test(password)
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...error, [name]: "" };
    if (name === "password") {
      if (!isPasswordValid(value)) {
        updatedErrors.password =
          "Password must  include at least one special symbol, one lowercase letter, and one uppercase letter.";
      }
    }
    setUserData({
      ...userData,
      [name]: value,
    });

    setError(updatedErrors);
  };

  useEffect(() => {
    localStorage.setItem("verifyEmail", JSON.stringify(verifyEmail));
  }, [verifyEmail]);

  return (
    <>
      {verifyEmail ? (
        <EmailVerification email={userData.email} />
      ) : (
        <section className="relative h-screen w-full gap-20 flex flex-col md:flex-row items-center justify-center md:justify-start p-0 m-0 md:overflow-hidden">
          <figure className="hidden  lg:max-w-[50%] w-[570px] lg:block lg:h-screen  ">
            <ImageWithLoading
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961328/rocktea-main-website/assets/IMG_7813_mtdsgq.jpg"
              alt=""
              className=" h-auto object-cover"
            />
          </figure>
          <div className="form">
            <div className=" ">
              <figure className="flex items-center justify-center mt-2  mb-6">
                <img
                  src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421637/rocktea-main-website/assets/rocktea-logo_qlaflj.png"
                  width={120}
                  height={120}
                  alt="logo"
                />
              </figure>

              <h2 className="mt-0 text-center leading-[1.5rem]">
                Become a Dropshipper
              </h2>
              <h4 className="text-center text-[var(--yellow)] mt-2 mb-7">
                Users Profile
              </h4>
              <div className="scrollable-container">
                <form
                  action=""
                  className="flex flex-col text-sm"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="">
                    <label className="">
                      First Name
                      <input
                        type="text"
                        placeholder="First name"
                        name="first_name"
                        value={userData.first_name}
                        onChange={handleInputChange}
                      />
                      {error && error.first_name && (
                        <div className="text-red-500">{error.first_name}</div>
                      )}
                    </label>
                    <label className="">
                      Last Name
                      <input
                        type="text"
                        placeholder="Last name"
                        name="last_name"
                        value={userData.last_name}
                        onChange={handleInputChange}
                      />
                      {error && error.last_name && (
                        <div className="text-red-500">{error.last_name}</div>
                      )}
                    </label>
                    <label className="flex flex-col">
                      Email
                      <input
                        type="email"
                        placeholder="example@mail.com"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                      {error && error.email && (
                        <div className="text-red-500">{error.email}</div>
                      )}
                    </label>
                    <label className="">
                      UserName
                      <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                      />
                      {error && error.username && (
                        <div className="text-red-500">{error.username}</div>
                      )}
                    </label>
                    <label className="relative">
                      Phone Number
                      <input
                        type="tel"
                        placeholder="+234123456789"
                        name="contact"
                        value={userData.contact}
                        onChange={handleInputChange}
                      />
                      {error && error.contact && (
                        <div className="text-red-500">{error.contact}</div>
                      )}
                    </label>

                    <label className="relative">
                      Password
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="***************"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                      />
                      <span
                        onClick={handlePasswordVisibility}
                        className="absolute top-12 right-8 flex items-center pr-4 cursor-pointer"
                      >
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      {error && (
                        <div className="text-red-500">
                          {error && error.password}
                        </div>
                      )}
                    </label>
                    <FileInput
                      userData={userData}
                      setUserData={setUserData}
                      error={error}
                      setError={setError}
                    />
                  </div>
                </form>

                <div className="flex items-center justify-center ">
                  <button
                    className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg mt-6"
                    onClick={handleFormSubmit}
                    disabled={isLoading} // Disable the button when loading
                  >
                    {isLoading ? (
                      <Oval
                        height={30}
                        width={30}
                        color="#fff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#f6f6f6"
                        strokeWidth={7}
                        strokeWidthSecondary={7}
                      />
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center text-center mt-5 mb-5">
              <p className="text-[15px] text-center">
                Already have an account?{" "}
              </p>{" "}
              <NavLink
                to="/login"
                style={{ color: "var(--deep-blue)", fontWeight: "bold" }}
              >
                Sign In
              </NavLink>{" "}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default UserDetails;
