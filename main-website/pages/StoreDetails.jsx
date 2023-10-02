import { useGlobalContext } from "../src/hooks/context";
//import {useState} from 'react'
import StoreImage from "../src/Components/Forms/SignUp/StoreImage";
import { ImageWithLoading } from "../src/Components/ImageLoader";
import { useEffect } from "react";
//import Select from 'react-select';
//import 'react-select/dist/react-select.css';
import {Oval} from 'react-loader-spinner'
import { useState } from "react";
function StoreDetails() {
  const {
    handleStoreFormSubmit,
    storeData,
    setStoreData,
    storeError,
    setStoreError,
    isLoading,
    getCategories,
    categories
  } = useGlobalContext();
  //const [emailError, setEmailError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
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
    if (name === "email") {
      updatedErrors.email = validateEmail(value);
    }
    // Add similar validation for other fields

    setStoreData((prevStoreData) => ({
      ...prevStoreData,
      [name]: value,
      category: selectedCategory, 
    }));

    setStoreError(updatedErrors);
  };

  useEffect(() => {
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
  }, []);
  console.log(storeData.category)
  return (
    <section className="relative h-screen w-full gap-20 flex flex-col md:flex-row items-center justify-center md:justify-start p-0 m-0 md:overflow-hidden">
      <figure className="hidden lg:max-w-[50%]   w-[570px] lg:block lg:h-screen  ">
        <ImageWithLoading
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961328/rocktea-main-website/assets/IMG_7813_mtdsgq.jpg"
          alt=""
          className=" h-auto object-cover"
        />
      </figure>
      <div className="form">
        <figure className="flex items-center justify-center mt-2  mb-6">
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
              <label >
  Category
  <select
    name="category"
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
  >
    <option value="">Select a category</option>
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
    disabled={isLoading}  // Disable the button when loading
  >
    {isLoading ? <Oval
  height={30}
  width={30}
  color="#fff"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#f6f6f6"
  strokeWidth={7}
  strokeWidthSecondary={7}

/> : 'Continue'}
  </button>
             
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default StoreDetails;
