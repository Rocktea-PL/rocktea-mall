//import { useState } from "react";
import {
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
  FaTimesCircle,
} from "react-icons/fa";
import ProfileImage from "./SignupImage";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
//import { Form } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
export function UserSignupForm({
  formData,
  handleInputChange,
  showPassword,
  handlePasswordVisibility,
  setFormData,
  error,
  isTypingPassword,
  isPasswordValid,
  handlePasswordValidation,
}) {
  return (
    <div className="w-full">
      <label htmlFor="first_name" className=" flex flex-col items-start">
        <input
          type="text"
          name="first_name"
          value={formData?.first_name}
          onChange={handleInputChange}
          placeholder="First Name"
          className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full  outline-none"
        />
        {error && error?.first_name && (
          <div className="text-red-500">{error.first_name}</div>
        )}
      </label>

      <label htmlFor="last_name" className=" flex flex-col items-start">
        <input
          type="text"
          name="last_name"
          value={formData?.last_name}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="border-2 border-solid border-[var(--form-border)] py-2 px-4  rounded w-full outline-none"
        />
        {error && error?.last_name && (
          <div className="text-red-500">{error.first_name}</div>
        )}
      </label>

      <label htmlFor="email" className=" flex flex-col items-start">
        <input
          type="email"
          name="email"
          value={formData?.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full outline-none"
        />
        {error && error?.email && (
          <div className="text-red-500">{error.first_name}</div>
        )}
      </label>

      <label htmlFor="contact" className=" items-start">
        <PhoneInput
          defaultCountry="NG"
          international
          countryCallingCodeEditable={false}
          className="country border-2 border-solid border-[var(--form-border)] py-2   px-4 h-12 bg-white mt-3  rounded !outline-0  flex"
          withCountryCallingCode
          name="contact "
          placeholder="Enter phone number"
          value={formData.contact}
          onChange={handleInputChange}
        />
        {error && error.contact && (
          <div className="text-red-500">{error.first_name}</div>
        )}
      </label>

      <div className="relative  flex flex-col items-start">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData?.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full outline-none"
        />
        <span
          onClick={handlePasswordVisibility}
          className="absolute  right-0  top-7 flex items-center pr-4 cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        {error && error?.password && (
          <div className="text-red-500 text-left">{error.first_name}</div>
        )}
      </div>
      {isTypingPassword && error && !isPasswordValid && (
        <PasswordChecklist
          rules={["capital", "specialChar", "minLength", "number"]}
          minLength={8}
          value={formData?.password}
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
            minLength: "The minimum length of the password should be 8.",
            specialChar:
              "The password should contain at least one special character.",
            number: "The password should contain at least one numeric letter.",
            capital:
              "The password should contain at least one uppercase letter.",
            lowercase:
              "The password should contain at least one lowercase letter.",
          }}
          onChange={handlePasswordValidation}
        />
      )}
      <ProfileImage
        error={error}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
