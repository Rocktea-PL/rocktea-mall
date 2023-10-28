//import {Link} from 'react-router-dom'

import { ImageWithLoading } from "../../ImageLoader";
import { FaRegEnvelope } from "react-icons/fa";
function EmailVerification() {
  const openEmailInbox = () => {
    window.open("https://mail.google.com/", "_blank");
  };

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
            <span className="text-[#3978AA]"> Resend mail</span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default EmailVerification;
