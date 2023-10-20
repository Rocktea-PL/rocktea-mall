
//import { useState } from "react";
import {  FaEye, FaEyeSlash } from "react-icons/fa";
import ProfileImage from "./SignupImage";

export  function UserSignupForm({formData,handleInputChange,showPassword,handlePasswordVisibility,setFormData,error}) {
    return (
        <div className="w-full">
            <label htmlFor="first_name" className=" flex flex-col items-start">
        <input
                  type="text"
                  name='first_name'
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full  outline-none"
                />
                {error && error.first_name && (
                      <div className="text-red-500">{error.first_name}</div>
                    )}
        </label>
               
                
                    <label htmlFor="last_name" className=" flex flex-col items-start">
                    <input
                    type="text"
                    name='last_name'
                    value={formData.last_name}
                  onChange={handleInputChange}
                    placeholder="Last Name"
                    className="border-2 border-solid border-[var(--form-border)] py-2 px-4  rounded w-full outline-none"
                  />
                   {error && error.last_name && (
                      <div className="text-red-500">{error.first_name}</div>
                    )}
                    </label>
                 
                 
                    <label htmlFor="email" className=" flex flex-col items-start">
                    <input
                    type="email"
                    name='email'
                    value={formData.email}
                  onChange={handleInputChange}
                    placeholder="Email"
                    className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full outline-none"
                  />
                  {error && error.email && (
                      <div className="text-red-500">{error.first_name}</div>
                    )}
                    </label>
                  
             <label htmlFor="contact" className=" flex flex-col items-start">
             <input
          type="tel"
          name='contact'
          value={formData.contact}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="border-2 border-solid border-[var(--form-border)] py-2 px-4   rounded w-full outline-none"
        />
             {error && error.contact && (
                      <div className="text-red-500">{error.first_name}</div>
                    )}
                </label>   
        
        <div className="relative  flex flex-col items-start">
          <input
            type={showPassword ? "text" : "password"}
            name='password'
            value={formData.password}
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
          {error && error.password && (
                      <div className="text-red-500 text-left">{error.first_name}</div>
                    )}
         
        </div>
        < ProfileImage error={error} formData={formData} setFormData={setFormData}/>
      </div>
    )
  }
