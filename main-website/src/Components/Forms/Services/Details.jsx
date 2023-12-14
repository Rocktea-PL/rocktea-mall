import { useGlobalContext } from "../../../hooks/context";
import { Oval } from "react-loader-spinner";
import ServiceImage from "./servicesImage";
import PhoneInput from "react-phone-number-input";
//import "antd/dist/antd.css";
function Details({ handleStoreInputChange, storeError, setStoreError }) {
  const { serviceInfo, handleServiceInfoSubmit, setServiceInfo, isLoading } =
    useGlobalContext();

  return (
    <div className="px-5 md-px-2 ">
      <h2 className="text-black text-[1.3rem] md:text-lg leading-tight">
        Tell us a bit about yourself
      </h2>
      <p className="text-orange mt-2 text-sm md:text-[20px]">
        Business Information
      </p>
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:mt-3 md:mb-6 md:w-[90%] w-full">
          <label htmlFor="name" className="md:col-span-2">
            Business Name
            <input
              type="text"
              name="name"
              value={serviceInfo?.name}
              placeholder="Example & sons stores"
              onChange={handleStoreInputChange}
            />
            {storeError?.name && (
              <p className="text-red-500 text-sm">{storeError.name}</p>
            )}
          </label>
          <label htmlFor="email" className="flex flex-col md:col-span-2">
            Business Email
            <input
              type="email"
              name="email"
              placeholder="storeemail@gmail.com"
              value={serviceInfo?.email}
              onChange={handleStoreInputChange}
            />
            {storeError?.email && (
              <p className="text-red-500 text-sm">{storeError.email}</p>
            )}
          </label>

          <label htmlFor="contact">
            Business Contact
            <PhoneInput
              defaultCountry="NG"
              international
              countryCallingCodeEditable={false}
              className="country focus:border focus:border-solid focus:border-orange"
              withCountryCallingCode
              name="contact "
              placeholder="Enter phone number"
              value={serviceInfo?.contact}
              onChange={(e) =>
                setServiceInfo({
                  ...serviceInfo,
                  [serviceInfo.contact]: e,
                })
              }
            />
            {storeError?.TIN_number && (
              <p className="text-red-500 text-sm">{storeError?.TIN_number}</p>
            )}
          </label>
          <label htmlFor="years_of_experience">
            Years of Experience
            <select
              name="years_of_experience"
              id="years_of_experience"
              onChange={handleStoreInputChange}
            >
              <option value="1">0 Years</option>
              <option value="1">1-2 Years </option>
              <option value="1">3-4 Years</option>
              <option value="1">5-6 Years</option>
              <option value="1">7 Years & above</option>
            </select>
          </label>
          <label htmlFor="" className="flex flex-col md:col-span-2">
            Tell us about your business?
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="!h-[200px] p-1"
            ></textarea>
          </label>
          {/* Input for the first image 
           <label htmlFor="image1" className="flex flex-col md:col-span-2">
            Photograph 1 capturing you while providing the services you offer
            <input
              type="file"
              accept="image/*"
              name="business_photograph"
              onChange={handleStoreInputChange}
              multiple
            />
          </label>

          {/* Input for the second image 
          <label htmlFor="image2" className="flex flex-col md:col-span-2">
            Photograph 2 capturing you while providing the services you offer
            <input
              type="file"
              accept="image/*"
              name="business_photograph2"
              onChange={handleStoreInputChange}
              multiple
            />
          </label>

          {/* Input for the third image 
          <label htmlFor="image3" className="flex flex-col md:col-span-2">
            Photograph 3 capturing you while providing the services you offer
            <input
              type="file"
              accept="image/*"
              name="business_photograph3"
              onChange={handleStoreInputChange}
              multiple
            />
          </label>*/}
        </div>
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          className="w-full max-w-[90%]"
        >
          {/* ... (your existing fields) */}

          {/* First Image Field */}
          <div className="grid col-span-2">
            <ServiceImage
              storeData={serviceInfo}
              setStoreData={setServiceInfo}
              error={storeError}
              setError={setStoreError}
              label="Photograph 1 capturing you while providing the services you offer"
              imageIdentifier="business_photograph"
            />
          </div>

          {/* Second Image Field */}
          <div className="grid col-span-2">
            <ServiceImage
              storeData={serviceInfo}
              setStoreData={setServiceInfo}
              error={storeError}
              setError={setStoreError}
              label="Photograph 2 capturing you while providing the services you offer"
              imageIdentifier="business_photograph2"
            />
          </div>
          {/* Third Image Field */}
          <div className="grid col-span-2">
            <ServiceImage
              storeData={serviceInfo}
              setStoreData={setServiceInfo}
              error={storeError}
              setError={setStoreError}
              label="Photograph 3 capturing you while providing the services you offer"
              imageIdentifier="business_photograph3"
            />
          </div>
        </form>

        <div className="flex items-center justify-center ">
          <button
            className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg my-6"
            onClick={handleServiceInfoSubmit}
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

export default Details;
