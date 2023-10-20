//import { useGlobalContext } from "../../../Public/hooks/context";

import StoreImage from "./StoreImage";
//import {MdDateRange} from 'react-icons/md'
import { Oval } from "react-loader-spinner";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from "../../../../hooks/context";
//import { useState } from "react";
function Store({ handleStoreInputChange, storeError, setStoreError }) {
  const { storeData, handleStoreFormSubmit, setStoreData, isLoading } =
    useGlobalContext();
    
    const handleDateChange = (date) => {
      // Ensure date is a valid Date object or null
      const formattedDate = date ? date.toISOString().split('T')[0] : null;
     
      handleStoreInputChange({
        target: {
          name: 'year_of_establishment',
          value: formattedDate,
        },
       
      });
    };
    
    
  return (
    <div className="px-5 md-px-2 ">
      <h2 className="text-black text-[1.3rem] md:text-lg leading-tight">
        Register your Online Store
      </h2>
      <p className="text-orange mt-2 text-sm md:text-[20px]">
        Business Information
      </p>
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        className="w-full main-form"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:mt-3 md:mb-6 md:w-[90%] w-full">
          <label htmlFor="name" className="md:col-span-2">
            Store Name
            <input
              type="text"
              name="name"
              value={storeData?.name}
              placeholder="Example & sons stores"
              onChange={handleStoreInputChange}
            />
            {storeError?.name && (
              <p className="text-red-500 text-sm">{storeError.name}</p>
            )}
          </label>
          <label htmlFor="email" className="flex flex-col md:col-span-2">
            Store Email
            <input
              type="email"
              name="email"
              placeholder="storeemail@gmail.com"
              value={storeData?.email}
              onChange={handleStoreInputChange}
            />
            {storeError?.email && (
              <p className="text-red-500 text-sm">{storeError.email}</p>
            )}
          </label>

          <label htmlFor="TIN_number">
            TIN (Tax Identification Number)
            <input
              type="text"
              name="TIN_number"
              value={storeData?.TIN_number}
              placeholder="Tin"
              onChange={handleStoreInputChange}
            />
            {storeError?.TIN_number && (
              <p className="text-red-500 text-sm">{storeError?.TIN_number}</p>
            )}
          </label>
          <label htmlFor="domain_name" >
            Domain
            <div className="flex items-center country">
            <input
              type="text"
              name="domain_name"
              value={storeData?.domain_name }
              placeholder="Domain"
              onChange={handleStoreInputChange}
              
            />
           <span className="border-l px-2 border-gray-600">.com.ng</span>
            </div>
            
            {storeError?.domain_name && (
              <p className="text-red-500 text-sm">{storeError?.domain_name}</p>
            )}
          </label>
          {/*<label htmlFor="year_of_establishment">
            Year of Establishment
            <input
              type="text"
              name="year_of_establishment"
              placeholder="YYYY-MM-DD"
              value={storeData?.year_of_establishment}
              onChange={handleStoreInputChange}
            />
            {storeError?.year_of_establishment && (
              <p className="text-red-500 text-sm">
                {storeError?.year_of_establishment}
              </p>
            )}
            </label>*/}
<label htmlFor="year_of_establishment" className="relative">
        Year of Establishment 
        <DatePicker
          selected={storeData?.year_of_establishment ? new Date(storeData.year_of_establishment) : null}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="cursor-pointer"
          placeholderText="YYYY-MM-DD"
      
          
        />
        {storeError?.year_of_establishment && (
          <p className="text-red-500 text-sm">
            {storeError?.year_of_establishment}
          </p>
        )}
       
      </label>
          <StoreImage
            storeData={storeData}
            setStoreData={setStoreData}
            error={storeError}
            setError={setStoreError}
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg my-6"
            onClick={handleStoreFormSubmit}
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
  );
}

export default Store;
