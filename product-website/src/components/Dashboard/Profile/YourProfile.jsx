import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../Hooks/Context";
import { useStoreContext } from "../../../Hooks/UserAuthContext";
//import toast from "react-hot-toast";
import BankDetails from "./BankDetails";
import ProfileSide from "./Profile-Side";

import StoreUpdate from "./StoreUpdate";
import PersonalDataUpdate from "./PersonalDataUpdate";
import { useQuery } from "react-query";
import axios from "axios";

function YourProfile() {
  const { storeUser, store } = useStoreContext();

  const { updateStoreProfile, updateStoreDetailsProfile, loading } =
    useGlobalContext();
  const [updateData, setUpdateData] = useState({});
  const [updateStoreData, setUpdateStoreData] = useState({});
  const [filledFields, setFilledFields] = useState(0);
  const [totalFields, setTotalFields] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState("");

  useEffect(() => {
    // Populate the form fields with the initial data when userData changes
    setUpdateData({
      first_name: storeUser.first_name,
      last_name: storeUser.last_name,
      email: storeUser.email,
      contact: storeUser.contact,
      address: storeUser.address,
    });
  }, [storeUser]);

  useEffect(() => {
    // Populate the form fields with the initial data when store changes
    setUpdateStoreData({
      name: store.name,
      email: store.email,
      year_of_establishment: store.year_of_establishment,
      TIN_number: store.TIN_number,
      facebook: store.facebook,
      whatsapp: store.whatsapp,
      instagram: store.instagram,
      twitter: store.twitter,
      theme: store.theme,
    });
    // console.log('facebook',updateStoreData.facebook)
  }, [store]);

  const handleThemeChange = (theme) => {
    setUpdateStoreData({
      ...updateStoreData,
      theme,
    });
    setSelectedTheme(theme);

    console.log(theme);
  };
  useEffect(() => {
    // Count the total number of fields
    setTotalFields(
      Object.keys(updateData).length + Object.keys(updateStoreData).length,
    );
  }, [updateData, updateStoreData]);

  const { data: bankDetails } = useQuery(["accountDetails"], async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/wallet/${store?.id}/`,
    );
    return response.data;
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    updateStoreProfile(updateData);
    setUpdateData(updateData);
    //toast.success("Profile Updated successfully");
    // Save the updated data to local storage
    localStorage.setItem("storeStoreProfile", JSON.stringify(updateData));
  };

  const handleStoreUpdate = (e) => {
    e.preventDefault();

    updateStoreDetailsProfile(updateStoreData);
    setUpdateStoreData(updateStoreData);
    if (selectedTheme) {
      setInterval(() => {
        window.location.reload();
      }, 100);
    }
    //toast.success("Profile Updated successfully");
    // Save the updated data to local storage
    localStorage.setItem("storeStoreData", JSON.stringify(updateData));
  };
  // console.log(bankDetails)

  useEffect(() => {
    // Count the number of filled fields for updateData, updateStoreData, and bankDetails
    const updateDataCount = Object.values(updateData).filter(
      (value) => !!value,
    ).length;
    const updateStoreDataCount = Object.values(updateStoreData).filter(
      (value) => !!value,
    ).length;
    const bankDetailsCount =
      bankDetails?.nuban && bankDetails?.bank_code ? 1 : 0;

    // Calculate total filled fields count
    const filledFieldsCount =
      updateDataCount + updateStoreDataCount + bankDetailsCount;

    setFilledFields(filledFieldsCount);
  }, [updateData, updateStoreData, bankDetails]);

  // Calculate the percentage of filled fields
  const filledPercentage =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  // console.log(store)
  return (
    <div className="mb-10 w-full flex flex-col lg:flex-row  gap-6">
      <div className="mt-4 lg:w-[65%]">
        <h3 className="text-darkblue bg-white py-3 px-9 text-[22px] font-medium rounded-md">
          Profile Settings
        </h3>
        {loading ? (
          <h3>Loading....</h3>
        ) : (
          <PersonalDataUpdate
            updateData={updateData}
            storeUser={storeUser}
            handleProfileUpdate={handleProfileUpdate}
            setUpdateData={setUpdateData}
          />
        )}

        <StoreUpdate
          store={store}
          updateStoreData={updateStoreData}
          setUpdateStoreData={setUpdateStoreData}
          handleThemeChange={handleThemeChange}
          selectedTheme={selectedTheme}
          handleStoreUpdate={handleStoreUpdate}
        />

        <article className="bg-white p-2  rounded-md mt-5 ">
          <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
            Bank Information
          </h4>
          <hr />

          <form action="">
            <BankDetails store={store} />
          </form>
        </article>

        <article className="bg-white p-2  max-md:pb-5 rounded-md mt-5 ">
          <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
            Social Media
          </h4>
          <hr />

          <form action="">
            <div className="bg-white mt-5 p-4 rounded-md">
              <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                <label htmlFor="">
                  Facebook
                  <input
                    type="url"
                    name="facebook"
                    value={updateStoreData.facebook}
                    onChange={(e) =>
                      setUpdateStoreData({
                        ...updateStoreData,
                        facebook: e.target.value,
                      })
                    }
                    placeholder="https://facebook.com/yourusername"
                  />
                </label>
                <label htmlFor="">
                  Twitter
                  <input
                    type="url"
                    name="twitter"
                    value={updateStoreData.twitter}
                    onChange={(e) =>
                      setUpdateStoreData({
                        ...updateStoreData,
                        twitter: e.target.value,
                      })
                    }
                    placeholder="https://twitter.com/yourusername"
                  />
                </label>
                <label htmlFor="">
                  Instagram
                  <input
                    type="url"
                    name="instagram"
                    value={updateStoreData.instagram}
                    onChange={(e) =>
                      setUpdateStoreData({
                        ...updateStoreData,
                        instagram: e.target.value,
                      })
                    }
                    placeholder="https://instagram.com/yourusername/"
                  />
                </label>
                <label htmlFor="">
                  Whatsapp
                  <input
                    type="url"
                    name="whatsapp"
                    value={updateStoreData.whatsapp}
                    onChange={(e) =>
                      setUpdateStoreData({
                        ...updateStoreData,
                        whatsapp: e.target.value,
                      })
                    }
                    placeholder="https://wa.me/yournumber"
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
      </div>
      <div className="lg:w-[28%] lg:mt-5 lg:pr-10">
        <ProfileSide
          profileCompletion={filledPercentage}
          store={store}
          bankDetails={bankDetails}
        />
      </div>
    </div>
  );
}

export default YourProfile;
