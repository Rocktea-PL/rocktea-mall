/*eslint no-useless-escape: "off"*/
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import FileInput from "../src/Components/Forms/SignUp/FormImage";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useState } from "react";
import PasswordChecklist from "react-password-checklist";
//import {useState} from 'react'
import ServiceImg from "../src/assets/services.svg";
import {
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { useGlobalContext } from "../src/hooks/context";
import { ImageWithLoading } from "../src/Components/ImageLoader";

function ServicesSignUp() {
  const {
    serviceData,
    setServiceData,
    error,
    setError,
    //handleFormSubmit,
    handleServiceFormSubmit,
    verifyEmail,
    //setVerifyEmail,
    isLoading,
  } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const isCheckerOpen = true;
  const handlePasswordValidation = (isValid) => {
    setIsPasswordValid(isValid);
  };
  const handlePasswordTyping = () => {
    setIsTypingPassword(true);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /*const handleChecker = () => {
    setIsCheckerOpen(!isCheckerOpen);
  };*/
  /* useEffect(() => {
    const storedVerifyEmail = localStorage.getItem("verifyEmail");
    if (storedVerifyEmail) {
      setVerifyEmail(JSON.parse(storedVerifyEmail));
    }
  }, [setVerifyEmail]);
*/

  const handleInputChange = (e) => {
    let updatedUserData = {};
    let updatedErrors = { ...error };

    if (e && e.target) {
      // Regular input change
      const { name, value } = e.target;
      updatedUserData = {
        ...serviceData,
        [name]: value,
      };

      if (name === "password") {
        handlePasswordTyping(); // Update the typing status for password
      }

      // Add specific validations if needed
    } else {
      // Phone number input change
      updatedUserData = {
        ...serviceData,
        contact: e, // e contains the phone number directly
      };
      updatedErrors.contact = ""; // Reset error for contact
    }

    setServiceData(updatedUserData);
    setError(updatedErrors);
  };
  //console.log(serviceData.type)
  useEffect(() => {
    localStorage.setItem("verifyEmail", JSON.stringify(verifyEmail));
  }, [verifyEmail]);

  return (
    <>
      <div className=" flex items-center justify-center lg:justify-start lg:h-screen lg:overflow-hidden">
        <div className="hidden w-full max-w-[45%] lg:flex ">
          <ImageWithLoading src={ServiceImg} alt="service" />
        </div>
        <div
          className={`${
            isCheckerOpen && "lg:pt-[11rem] overflow-auto"
          } max-w-[85%] lg:w-[450px] mx-auto flex flex-col items-center justify-center py-8 transition-all  px-5  h-full`}
        >
          <div className=" mt-20 lg:mt-0">
            <h2 className="mt-0 text-center  lg:text-start text-black leading-[1.5rem] !text-[32px]">
              Sign Up
            </h2>
            <h4 className="text-center lg:text-start text-[var(--yellow)] !text-[22px] my-5">
              Personal Information
            </h4>
            <form
              action=""
              className="main-form text-sm"
              method="post"
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5  ">
                <label className="">
                  First Name
                  <input
                    type="text"
                    placeholder="First name"
                    name="first_name"
                    value={serviceData.first_name}
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
                    value={serviceData.last_name}
                    onChange={handleInputChange}
                  />
                  {error && error.last_name && (
                    <div className="text-red-500">{error.last_name}</div>
                  )}
                </label>
                <label className="flex flex-col md:col-span-2">
                  Email
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="email"
                    value={serviceData.email}
                    onChange={handleInputChange}
                  />
                  {error && error.email && (
                    <div className="text-red-500">{error.email}</div>
                  )}
                </label>

                <label className="relative ">
                  Phone Number
                  <PhoneInput
                    defaultCountry="NG"
                    international
                    countryCallingCodeEditable={false}
                    className="country focus:border focus:border-solid focus:border-orange"
                    withCountryCallingCode
                    name="contact "
                    placeholder="Enter phone number"
                    value={serviceData.contact}
                    onChange={handleInputChange}
                  />
                  {error && error.contact && (
                    <div className="text-red-500">{error.contact}</div>
                  )}
                </label>
                <FileInput
                  userData={serviceData}
                  setUserData={setServiceData}
                  error={error}
                  setError={setError}
                />

                <label className="flex flex-col md:col-span-2">
                  What Services do you render
                  <select name="type" id="type" onChange={handleInputChange}>
                    <option value="Makeup Artist">MakeUp Artist</option>
                    <option value="Fashion Designer">Fashion Designer</option>
                    <option value="Personal Assistant">
                      Personal Assistant
                    </option>
                  </select>
                </label>

                <label className="relative md:col-span-2">
                  Password
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="*******"
                    name="password"
                    value={serviceData.password}
                    onChange={handleInputChange}
                  />
                  <span
                    onClick={handlePasswordVisibility}
                    className="absolute top-12 right-1 flex items-center pr-4 cursor-pointer opacity-[0.66]"
                  >
                    {!showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </label>
              </div>
              {isTypingPassword && error && !isPasswordValid && (
                <PasswordChecklist
                  rules={["capital", "specialChar", "minLength", "number"]}
                  minLength={8}
                  value={serviceData.password}
                  iconSize={18}
                  iconComponents={{
                    ValidIcon: (
                      <FaCheckCircle className="text-green-500 text-[1.2rem] mt-1 mx-2" />
                    ),
                    InvalidIcon: (
                      <FaTimesCircle className="text-red-600 text-[1.2rem] mt-1 mx-2" />
                    ),
                  }}
                  className="block mx-auto w-full mt-1 p-0"
                  messages={{
                    minLength:
                      "The minimum length of the password should be 8.",
                    specialChar:
                      "The password should contain at least one special character.",
                    number:
                      "The password should contain at least one numeric letter.",
                    capital:
                      "The password should contain at least one uppercase letter.",
                    lowercase:
                      "The password should contain at least one lowercase letter.",
                  }}
                  onChange={handlePasswordValidation}
                />
              )}
              <div className="flex items-center justify-center ">
                <button
                  className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg my-10"
                  onClick={handleServiceFormSubmit}
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSignUp;
