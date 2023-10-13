import { useGlobalContext } from "../src/hooks/context";
//import {useState} from 'react'
//import { toast } from "react-hot-toast";
//import StoreImage from "../src/Components/Forms/SignUp/StoreImage";
import { ImageWithLoading } from "../src/Components/ImageLoader";
//import { useEffect } from "react";
//import Select from 'react-select';
//import 'react-select/dist/react-select.css';
//import { Oval } from "react-loader-spinner";
//import { useState } from "react";
import Store from "../src/Components/Forms/SignUp/Store";
import Categories from "../src/Components/Forms/SignUp/Categories";
import Otp from "../src/Components/Forms/SignUp/Otp";
//import { useEffect } from "react";
function StoreDetails() {
  const {
    //handleStoreFormSubmit,
    storeData,
    setStoreData,
    storeError,
    setStoreError,
    //setCurrentStep,
    //isLoading,
    //getCategories,

    currentStep,
  } = useGlobalContext();

  //const [emailError, setEmailError] = useState(false);
  //const [selectedCategory, setSelectedCategory] = useState("");
  const emailIsValid = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateEmail = (email) => {
    // Add your email validation logic here
    if (!emailIsValid(email)) {
      return "Invalid email address";
    }
    return ""; // No error
  };

  const handleStoreInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...storeError };

    if (value.trim() !== "") {
      updatedErrors[name] = "";
    }

    if (name === "email") {
      updatedErrors.email = validateEmail(value);
    }
    
    if (name === "domain_name") {
      if (value.includes('.') || value.includes('.com')) {
        updatedErrors.domain_name = 'Please remove \'.\' from the domain name.';
          // Disable the input when "." is included
      } else {
        updatedErrors.domain_name = '';
        e.target.disabled = false;  // Enable the input when "." is removed
      }
    }
    // Add similar validation for other fields
    setStoreData({
      ...storeData,
      [name]: value,
    });

    setStoreError(updatedErrors);
  };

  /*useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep));
    }
  }, []);*/ // Empty dependency array to run this effect only once on mount

  /* useEffect(() => {
    const owner = localStorage.getItem("owner");
    if (owner) {
      setStoreData((prevStoreData) => ({
        ...prevStoreData,
        owner: owner,
      }));
    } else {
      setStoreData((prevStoreData) => ({
        ...prevStoreData,
        owner: "", // Set a default value if owner is not in localStorage
      }));
    }
  }, []);

  console.log("storeDetails", storeData.owner);
  useEffect(() => {
    getCategories();
  }, []);*/
  // console.log(storeData.category);
  const PageDisplay = () => {
    if (currentStep === 0) {
      return (
        <Store
          handleStoreInputChange={handleStoreInputChange}
          storeError={storeError}
          setStoreError={setStoreError}
        />
      );
    } else if (currentStep === 1) {
      return <Categories />;
    } else {
      return <Otp />;
    }
  };
  return (
    <div className=" flex items-center gap-16 justify-center lg:justify-start lg:h-screen lg:overflow-hidden">
      <div className="hidden w-full max-w-[45%] lg:flex ">
        <ImageWithLoading
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961328/rocktea-main-website/assets/IMG_7813_mtdsgq.jpg"
          alt=""
        />
      </div>
      <div className="mt-10 lg-mt-0 lg:max-w-[50%] h-full overflow-auto">
        <div className="relative px-10 md-px-2 flex items-center justify-start gap-2 mb-5">
          <div className=" bg-gray-300 w-[130px] h-2 top-0 left-0 rounded-md"></div>
          <h5 className=" flex items-center justify-center gap-1 font-semibold  text-sm bg-orange w-[30px] h-[30px] text-white rounded-full">
            {" "}
            {currentStep + 1}{" "}
          </h5>
        </div>
        <div className="w-full ">{PageDisplay()}</div>

        {/*<figure className="flex items-center justify-center mt-2  mb-6">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421637/rocktea-main-website/assets/rocktea-logo_qlaflj.png"
            width={120}
            height={120}
            alt="logo"
          />
        </figure>
        <h2 className="mt-0 text-center leading-[1.5rem]">
          Let’s setup your store
        </h2>
        <h4 className="text-center text-[var(--yellow)] mb-4 mt-3">
          Store Details
        </h4>
        <div className="scrollable-container">
          <form action="" method="post" encType="multipart/form-data">
            <div className="grid md:grid-cols-1 gap-2 px-5 md:mt-3 md:mb-6">
              <label htmlFor="owner" className="hidden">
                Owner
                <input
                  type="text"
                  name="owner"
                  value={storeData?.owner}
                  placeholder="owner"
                  onChange={handleStoreInputChange}
                />
                {storeError?.owner && (
                  <p className="text-red-500 text-sm">{storeError?.owner}</p>
                )}
              </label>
              <label htmlFor="name" className="">
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
              <label htmlFor="email" className="flex flex-col">
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
                TIN
                <input
                  type="text"
                  name="TIN_number"
                  value={storeData?.TIN_number}
                  placeholder="Tin"
                  onChange={handleStoreInputChange}
                />
                {storeError?.TIN_number && (
                  <p className="text-red-500 text-sm">
                    {storeError?.TIN_number}
                  </p>
                )}
              </label>
              <label htmlFor="year_of_establishment">
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
              </label>
              <label>
                Category
                <select
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((item) => (
                    <option key={item.category_id} value={item.category_id}>
                      {item.category_name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Domain Name
                <input
                  type="text"
                  placeholder="Domain name"
                  name="domain_name"
                  value={storeData?.domain_name}
                  onChange={handleStoreInputChange}
                />
                {storeError?.domain_name && (
                  <p className="text-red-500 text-sm">
                    {storeError?.domain_name}
                  </p>
                )}
              </label>
              <label>
                Store Url
                <input
                  type="text"
                  placeholder="store url"
                  name="store_url"
                  value={storeData?.store_url}
                  onChange={handleStoreInputChange}
                />
                {storeError?.store_url && (
                  <p className="text-red-500 text-sm">
                    {storeError?.store_url}
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
                className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg mt-6"
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
                </div>*/}
      </div>
    </div>
  );
}

export default StoreDetails;
