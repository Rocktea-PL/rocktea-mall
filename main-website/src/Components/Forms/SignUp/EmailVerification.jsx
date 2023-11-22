//import {Link} from 'react-router-dom'

import { useEffect } from "react";
import { ImageWithLoading } from "../../ImageLoader";
import { FaRegEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function EmailVerification() {
  const [storeOwner,setStoreOwner] = useState({})
  const [resendTimer, setResendTimer] = useState(null);
  const openEmailInbox = () => {
    window.open("https://mail.google.com/", "_blank");
  };


  useEffect (() => {
    const storedUserDataString = localStorage.getItem("userData");
const storedUserData = JSON.parse(storedUserDataString);
setStoreOwner(storedUserData)
  },[])
 const resendEmail = () => {
  const emailParams = {
    to_email: storeOwner.email,
    to_name: storeOwner.first_name,

    // User's email address
    // Add any other template variables here
  };

  // Send the email
  emailjs
    .send(
      "service_5hulf9r",
      "template_nk9rq5h",
      emailParams,
      "Sb11MyaNpQEgE-cBn",
    )
    .then((response) => {
      console.log("Email sent:", response);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });

  emailjs
    .send(
      "service_5hulf9r",
      "template_nxo03xr",
      emailParams,
      "Sb11MyaNpQEgE-cBn",
    )
    .then((response) => {
      console.log("Email sent:", response);
      toast.success('Email Sent Succesfully')
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
 }
 const handleResendClick = () => {
  // Disable the button during the timeout period
  setResendTimer(10);

  // Start the timer countdown
  const interval = setInterval(() => {
    setResendTimer((prevTimer) => {
      if (prevTimer > 1) {
        return prevTimer - 1;
      } else {
        // Clear the interval when the timer reaches 0
        clearInterval(interval);
        return 0;
      }
    });
  }, 1000);

  // Resend the email after the timer reaches 0
  setTimeout(() => {
    resendEmail();
  }, 60000);
}

//console.log('store owner', storeOwner.email)
  return (
    <div className=" lg:h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-start p-0 m-0 lg::overflow-hidden">
      <div className="hidden w-full max-w-[45%] lg:flex ">
        <ImageWithLoading
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698349267/rocktea-main-website/assets/rocktea-signin-green_bzjy5h.jpg"
          alt="rockteaBg-green"
        />
      </div>
      <article className="flex  flex-col  mx-auto gap-y-10">
        <figure className="w-[80%] h-[300px] m-auto">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696747153/rocktea-main-website/assets/Group_44_m8fwzh.png"
            className="w-full h-full object-contain"
            alt="alert icon"
          />
        </figure>
        <div>
          <h3 className="text-black text-lg">You’re almost there :)</h3>
          <p className="text-[20px] my-5">
            In order to complete your verification process,
            <br />
            Kindly check your Gmail Inbox.
          </p>
          <button
            onClick={openEmailInbox}
            className="border border-black rounded-[10px] shadow-md w-[180px] h-14 flex items-center justify-center gap-3 mx-auto mb-5 text-[20px] whitespace-nowrap"
          >
            {" "}
            <FaRegEnvelope className="text-red-700 text-md" />
            Open Email
          </button>
          <p className="text-center">
            I did not receive any mail?{" "}
            <span className="text-[#3978AA] cursor-pointer font-semibold" onClick={handleResendClick}> {resendTimer ? `Resend in ${resendTimer}s` : "Resend mail"}</span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default EmailVerification;
