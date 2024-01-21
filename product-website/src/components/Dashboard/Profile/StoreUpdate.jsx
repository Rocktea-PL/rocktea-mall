//import React from 'react'

import useImageUpload from "../../../Helpers/UpdateImages";
import ThemePicker from "./Theme";

export default function StoreUpdate({
  store,
  updateStoreData,
  setUpdateStoreData,
  handleThemeChange,
  selectedTheme,
  handleStoreUpdate,
}) {
  const url = `https://rocktea-mall-api-test.up.railway.app/rocktea/create/store/${store?.id}/`;
  const { image, fileInputRef, handleFileChange, openFileInput } =
    useImageUpload(store?.logo, "logo", url);
  return (
    <article className="bg-white p-2 max-md:pb-5 rounded-md mt-5 ">
      <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
        Store Information
      </h4>
      <hr />
      <div
        onClick={openFileInput}
        className="flex flex-col lg:flex-row items-center px-5 gap-5 mt-8"
      >
        <div className="relative">
          <figure className="border-[1.6px] border-gray-300 w-[150px] h-[150px] rounded-full flex items-center  justify-center">
            <img
              className=" p-2 object-contain block"
              width={130}
              height={130}
              src={image || store?.logo}
              alt="store logo"
            />
          </figure>
          <div className="absolute bottom-0 right-[8px]  bg-white opacity-[0.9] w-[50px] h-[50px] flex items-center justify-center  rounded-full   cursor-pointer border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6V4H21V6H23V8H21V10H19V8H17V6H19ZM6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.24312 5.37261 7.44827 5.03326 7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159C9.15916 6.06908 8.95096 6.41348 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                fill="black"
              />
            </svg>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files)}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </div>
        <div>
          <h4 className="text-md font-semibold">{store.name}</h4>
          <h4>{store.email}</h4>
        </div>
      </div>

      <form action="">
        <div className="bg-white mt-5 p-4 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 px-5 profile-input">
            <label htmlFor="">
              Store Name
              <input
                type="text"
                name="name"
                value={updateStoreData.name}
                onChange={(e) =>
                  setUpdateStoreData({
                    ...updateStoreData,
                    name: e.target.value,
                  })
                }
                placeholder="Store Name"
              />
            </label>
            <label htmlFor="">
              Store Email
              <input
                type="text"
                name="email"
                value={updateStoreData.email}
                onChange={(e) =>
                  setUpdateStoreData({
                    ...updateStoreData,
                    email: e.target.value,
                  })
                }
                placeholder="Store Email"
              />
            </label>
            <ThemePicker
              store={store}
              handleThemeChange={handleThemeChange}
              selectedTheme={selectedTheme}
            />
            <label htmlFor="">
              Year Of Establishment
              <input
                type="text"
                name="year_of_establishment"
                value={updateStoreData.year_of_establishment}
                onChange={(e) =>
                  setUpdateStoreData({
                    ...updateStoreData,
                    year_of_establishment: e.target.value,
                  })
                }
                placeholder="year"
              />
            </label>

            <label htmlFor="">
              TIN
              <input
                type="text"
                name="TIN_number"
                value={updateStoreData.TIN_number}
                onChange={(e) =>
                  setUpdateStoreData({
                    ...updateStoreData,
                    TIN_number: e.target.value,
                  })
                }
                placeholder="TIN"
              />
            </label>
          </div>
        </div>

        <button
          onClick={handleStoreUpdate}
          className="common h-12 w-[150px] rounded-md flex items-center justify-center mx-auto"
        >
          Save Changes
        </button>
      </form>
    </article>
  );
}
