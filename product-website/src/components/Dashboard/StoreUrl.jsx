//import React from 'react'

import { IoIosCopy } from "react-icons/io";
import toast from "react-hot-toast";
import { useState } from "react";
import { useStoreContext } from "../../Hooks/UserAuthContext";
function StoreUrl() {
  const { store } = useStoreContext();
  //const store_id = localStorage.getItem("storeId");
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  //const [profileCompletion, setProfileCompletion] = useState(0);

  const storeUrl = `https://rocktea-mall-product.vercel.app/register?id=${store?.id}`;

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(storeUrl);
      setIsLinkCopied(true);
      toast.success("Link copied Successfully");
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };

  return (
    <div>
      {/** <div className="text-sky-950 text-[20px] mb-3 font-medium font-['Poppins'] flex  items-center gap-x-2">
            Store Url
          </div> */}
      <div className="flex items-center mb-3 px-5 justify-between gap-2 bg-white shadow-lg  rounded-md h-14">
        <p className=" truncate p-2  max-w-[70%]  rounded-md">{storeUrl}</p>
        <span className="bg-blue w-10 rounded-md h-10 flex items-center justify-center ">
          <IoIosCopy
            className={`text-[20px]   cursor-pointer ${
              isLinkCopied ? "text-green-500" : "text-white"
            }`}
            onClick={copyLinkToClipboard}
          />
        </span>
      </div>
    </div>
  );
}

export default StoreUrl;
