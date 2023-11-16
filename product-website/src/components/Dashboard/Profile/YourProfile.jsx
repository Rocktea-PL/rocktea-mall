import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../Hooks/Context";
import { useStoreContext } from "../../../Hooks/UserAuthContext";
import toast from "react-hot-toast";
import BankDetails from "./BankDetails";
import ProfileSide from "./Profile-Side";

function YourProfile() {
  const { storeUser,store } = useStoreContext();
  
  const { updateStoreProfile,updateStoreDetailsProfile, loading } = useGlobalContext();
  const [updateData, setUpdateData] = useState({});
  const [updateStoreData, setUpdateStoreData] = useState({});
  const [filledFields, setFilledFields] = useState(0);
  const [totalFields, setTotalFields] = useState(0);

  useEffect(() => {
    // Populate the form fields with the initial data when userData changes
    setUpdateData({
      first_name: storeUser.first_name,
      last_name: storeUser.last_name,
      email: storeUser.email,
      contact: storeUser.contact,
      address: storeUser.address,
    });

    setUpdateStoreData({
      name: store.name,
      email: store.email,
     
      year_of_establishment: store.year_of_establishment,
      TIN_number: store.TIN_number
      ,
    });
    // Count the total number of fields
    setTotalFields(Object.keys(updateData).length + Object.keys(updateStoreData).length);

  }, [storeUser,store]);
  const handleProfileUpdate = (e) => {
    e.preventDefault();
   
    updateStoreProfile(updateData);
    setUpdateData(updateData);
    toast.success("Profile Updated successfully");
    // Save the updated data to local storage
    localStorage.setItem("storeUserData", JSON.stringify(updateData));
  };

  const handleStoreUpdate = (e) => {
    e.preventDefault();
   
    updateStoreDetailsProfile(updateData);
    setUpdateStoreData(updateData);
    toast.success("Profile Updated successfully");
    // Save the updated data to local storage
    localStorage.setItem("storeUserData", JSON.stringify(updateData));
  };

  useEffect(() => {
    // Count the number of filled fields
    const filledFieldsCount = Object.values(updateData).filter((value) => !!value).length +
      Object.values(updateStoreData).filter((value) => !!value).length;
    setFilledFields(filledFieldsCount);
  }, [updateData, updateStoreData]);

  // Calculate the percentage of filled fields
  const filledPercentage = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

 // console.log(store)
  return (
    <div className="mb-10 w-full flex flex-col lg:flex-row gap-10">
      
      <div className="mt-4 lg:w-[50%]">
        <h3 className="text-darkblue bg-white py-3 px-9 text-[22px] font-medium rounded-md">
          Profile Settings
        </h3>
        {loading ? (
        <h3>Loading....</h3>
      ) : (
        <article className="bg-white p-2  rounded-md mt-5 ">
          <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
            Personal Information
          </h4>
          <hr />
          <div className="flex items-center px-5 gap-5 mt-8">
            <div className="relative">
              <img
                className=" w-[150px] h-[150px] object-cover rounded-full "
                src={storeUser.profile_image}
                alt=""
              />
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
            </div>
            <div>
              <h4 className="text-md font-semibold">
                {storeUser.first_name} {storeUser.last_name}
              </h4>
              <h4>{storeUser.email}</h4>
            </div>
          </div>

          <form action="">
            <div className="bg-white mt-5 p-4 rounded-md">
              <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                <label htmlFor="">
                  First Name
                  <input type="text" 
                    value={updateData.first_name}
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        first_name: e.target.value,
                      })
                    } placeholder="First Name" />
                </label>
                <label htmlFor="">
                  Last Name
                  <input type="text" 
                  
                   value={updateData.last_name}
                   onChange={(e) =>
                     setUpdateData({
                       ...updateData,
                       last_name: e.target.value,
                     })
                   }
                  placeholder="Last Name" />
                </label>
                <label htmlFor="">
                  Email
                  <input type="text" 
                    value={updateData.email}
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        email: e.target.value,
                      })
                    } placeholder="Email" />
                </label>
                <label htmlFor="">
                  Phone
                  <input type="text" 
                  
                   value={updateData.contact}
                   onChange={(e) =>
                     setUpdateData({
                       ...updateData,
                       contact: e.target.value,
                     })
                   }
                  placeholder="Phone" />
                </label>
              </div>
            </div>

            <button className="bg-orange h-12 w-[150px] rounded-md flex items-center justify-center mx-auto" onClick={handleProfileUpdate}>
              Save Changes
            </button>
          </form>
        
        </article>
          )}

        <article className="bg-white p-2  rounded-md mt-5 ">
          <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
            Store Information
          </h4>
          <hr />
          <div className="flex items-center px-5 gap-5 mt-8">
            <div className="relative">
              <img
                className=" w-[150px] h-[150px] object-cover rounded-full "
                src={store?.logo}
                alt=""
              />
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
            </div>
            <div>
              <h4 className="text-md font-semibold">
                {store.name}
              </h4>
              <h4>{store.email}</h4>
            </div>
          </div>

          <form action="">
            <div className="bg-white mt-5 p-4 rounded-md">
              <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                <label htmlFor="">
                  Store Name
                  <input type="text"
                  value={updateStoreData.name}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                     name: e.target.value,
                    })
                  } 
                   placeholder="First Name" />
                </label>
                <label htmlFor="">
                  Store Email
                  <input type="text"
                  value={updateStoreData.email}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                     email: e.target.value,
                    })
                  } 
                   placeholder="Last Name" />
                </label>
                <label htmlFor="">
                Year Of Establishment
                  <input type="text" 
                  value={updateStoreData.year_of_establishment}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                      year_of_establishment: e.target.value,
                    })
                  } 
                  placeholder="Email" />
                </label>
                <label htmlFor="">
                  TIN 
                  <input type="text"
                  value={updateStoreData.TIN_number}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                      TIN_number: e.target.value,
                    })
                  } 
                   placeholder="TIN" />
                </label>
              </div>
            </div>

            <button onClick={handleStoreUpdate} className="bg-orange h-12 w-[150px] rounded-md flex items-center justify-center mx-auto">
              Save Changes
            </button>
           
          </form>
         
        </article>

        <article className="bg-white p-2  rounded-md mt-5 ">
          <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
            Bank Information
          </h4>
          <hr />
          

          <form action="">
          <BankDetails/>
            
            
          </form>
        </article>

        <article className="bg-white p-2  rounded-md mt-5 ">
          <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
            Social Media
          </h4>
          <hr />
         
          <form action="">
            <div className="bg-white mt-5 p-4 rounded-md">
              <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                <label htmlFor="">
                 Facebook
                  <input type="text"
                  value={updateStoreData.name}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                     name: e.target.value,
                    })
                  } 
                   placeholder="First Name" />
                </label>
                <label htmlFor="">
                  Twitter
                  <input type="text"
                  value={updateStoreData.email}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                     email: e.target.value,
                    })
                  } 
                   placeholder="Last Name" />
                </label>
                <label htmlFor="">
               Instagram
                  <input type="text" 
                  value={updateStoreData.year_of_establishment}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                      year_of_establishment: e.target.value,
                    })
                  } 
                  placeholder="Email" />
                </label>
                <label htmlFor="">
                 Whatsapp
                  <input type="text"
                  value={updateStoreData.TIN_number}
                  onChange={(e) =>
                    setUpdateStoreData({
                      ...updateStoreData,
                      TIN_number: e.target.value,
                    })
                  } 
                   placeholder="TIN" />
                </label>
              </div>
            </div>

            <button onClick={handleStoreUpdate} className="bg-orange h-12 w-[150px] rounded-md flex items-center justify-center mx-auto">
              Save Changes
            </button>
           
          </form>
         
        </article>

      </div>
      <div className="lg:w-[28%] lg:mt-5">
          <ProfileSide profileCompletion = {filledPercentage} />
        </div>
    </div>
  );
}

export default YourProfile;
