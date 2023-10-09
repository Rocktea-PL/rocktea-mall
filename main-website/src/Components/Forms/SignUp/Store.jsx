import { useGlobalContext } from "../../../hooks/context";
import StoreImage from "./StoreImage";
import { Oval } from "react-loader-spinner";

function Store({ handleStoreInputChange, storeError, setStoreError }) {
  const { storeData, handleStoreFormSubmit, setStoreData, isLoading } =
    useGlobalContext();
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
        className="w-full"
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
            TIN
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
    </div>
  );
}

export default Store;
