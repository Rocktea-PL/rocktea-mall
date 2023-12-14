import { IoIosCopy, IoIosShareAlt } from "react-icons/io";
//import { useStoreContext } from "../../../Hooks/UserAuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ServiceProfileSide({ profileCompletion }) {
  // const { storeUser } = useStoreContext();
  const store_id = localStorage.getItem("storeId");
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  //const [profileCompletion, setProfileCompletion] = useState(0);

  const storeUrl = `https://rocktea-mall-product.vercel.app/register/${store_id}`;

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(storeUrl);
      setIsLinkCopied(true);
      toast.success("Link copied Successfully");
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my store !",
          text: "Explore amazing products in my store",
          url: storeUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      // Fallback for browsers that do not support the Share API
      console.log("Share API not supported");
    }
  };

  return (
    <div className="hidden lg:block lg:w-[373px] h-[820px] relative bg-white rounded-xl  px-16 py-5">
      <div className=" text-sky-950 text-[22px] my-5 font-semibold font-['Poppins'] leading-tight">
        Complete your profile
      </div>
      <div
        className="flex items-center justify-center text-center mx-auto mb-5"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `
      radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(orange ${profileCompletion}%, rgb(235, 235, 235) 0)
    `,
        }}
      >
        <progress
          value={profileCompletion}
          min="0"
          max="100"
          style={{ visibility: "hidden", height: 0, width: 0 }}
        >
          {`${profileCompletion}%`}
        </progress>

        <div>
          <p className="font-semibold capitalize">
            {`${profileCompletion}%`} <br /> complete
          </p>
        </div>
      </div>
      <article className="flex flex-col gap-y-10">
        <div className="text-sky-950 text-[20px] whitespace-nowrap font-medium font-['Poppins'] flex items-center gap-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
            >
              <path
                d="M2 9L10 19.5C11.3333 14.6667 17.2 4.4 30 2"
                stroke="#00AE00"
                strokeOpacity="0.85"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Personal Information
        </div>
        <div className="text-sky-950 text-[20px] font-medium font-['Poppins'] flex items-center gap-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
            >
              <path
                d="M2 9L10 19.5C11.3333 14.6667 17.2 4.4 30 2"
                stroke="#00AE00"
                strokeOpacity="0.85"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Store Details
        </div>
        <div className="text-sky-950 text-[20px] font-medium font-['Poppins'] flex items-center gap-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 27"
              fill="none"
            >
              <path
                d="M20.5 2.5C14.8333 12.5 7.2 23 2 25"
                stroke="#F81000"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M5 2C10.6667 12 16.8 23.5 22 25.5"
                stroke="#F81000"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Bank Details
        </div>
        <div className="text-sky-950 text-[20px] font-medium font-['Poppins'] flex items-center gap-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 27"
              fill="none"
            >
              <path
                d="M20.5 2.5C14.8333 12.5 7.2 23 2 25"
                stroke="#F81000"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M5 2C10.6667 12 16.8 23.5 22 25.5"
                stroke="#F81000"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Social Media
        </div>
        <div>
          <div className="text-sky-950 text-[20px] mb-3 font-medium font-['Poppins'] flex  items-center gap-x-2">
            Store Url
          </div>
          <div className="flex items-center gap-2">
            <p className="shadow-lg truncate p-2 border max-w-[70%] border-gray-300 rounded-md">
              {storeUrl}
            </p>
            <IoIosCopy
              className={`text-[20px] cursor-pointer ${
                isLinkCopied ? "text-green-500" : ""
              }`}
              onClick={copyLinkToClipboard}
            />
            <IoIosShareAlt
              className="text-[20px] cursor-pointer"
              onClick={shareLink}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
/**
 * <div className="w-[203px] h-[204px] left-[86px] top-[86px] absolute">
        <img
          src={storeUser.profile_image}
          className="rounded-full w-[150px] h-[150px]"
          alt=""
        />
      </div>
 * <div className="text-sky-950 text-[20px] font-medium font-['Poppins'] flex items-center gap-x-2">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 32 23" fill="none">
  <path d="M2 9L10 19.5C11.3333 14.6667 17.2 4.4 30 2" stroke="#00AE00" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
</svg></span> Social Media
        </div> */
