//import { useGlobalContext } from "../../Hooks/Context"
import { useEffect, useState } from "react";
//import { useStoreContext } from "../../Hooks/UserAuthContext";
import { useGlobalContext } from "../../Hooks/Context";
import toast from "react-hot-toast";
//import updateUserProfile from "../../Helpers/UpdateImages";

function Home({ userData }) {
  // const { userData } = useStoreContext();
  const { updateProfile, loading } = useGlobalContext();
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    // Populate the form fields with the initial data when userData changes
    setUpdateData({
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      contact: userData.contact,
      address: userData.address,
    });
  }, [userData]);
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    updateProfile(updateData);
    setUpdateData(updateData);
    toast.success("Profile Updated successfully");
    // Save the updated data to local storage
    localStorage.setItem("userData", JSON.stringify(updateData));
  };

  return (
    <>
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <div className="mt-4">
          <h3 className="text-darkblue bg-white py-3 px-9 text-[22px] font-medium rounded-md">
            Profile Settings
          </h3>
          <form action="" onSubmit={handleProfileUpdate}>
            <div className="bg-white mt-5 p-4 rounded-md">
              <h4 className="mb-5 mx-5 text-[20px] text-darkblue text-center lg:text-start whitespace-nowrap font-medium">
                Personal Information
              </h4>
              <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                <label htmlFor="">
                  First Name
                  <input
                    type="text"
                    name="first_name"
                    value={updateData.first_name}
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        first_name: e.target.value,
                      })
                    }
                    placeholder="First Name"
                  />
                </label>
                <label htmlFor="">
                  Last Name
                  <input
                    type="text"
                    name="last_name"
                    value={updateData.last_name}
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        last_name: e.target.value,
                      })
                    }
                    placeholder="Last Name"
                  />
                </label>
                <label htmlFor="">
                  Email
                  <input
                    type="text"
                    name="email"
                    value={updateData.email}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, email: e.target.value })
                    }
                    placeholder="Email"
                  />
                </label>
                <label htmlFor="">
                  Phone
                  <input
                    type="text"
                    name="contact"
                    value={updateData.contact}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, contact: e.target.value })
                    }
                    placeholder="Phone"
                  />
                </label>
              </div>
            </div>

            <div className="bg-white mt-5 p-4 rounded-md">
              <h4 className="mb-5 mx-5 text-[20px] text-darkblue font-medium">
                Shipping Information
              </h4>
              <div className="gap-x-5 px-5 profile-input">
                <label htmlFor="">
                  Address
                  <input
                    type="text"
                    name="address"
                    value={updateData.address}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, address: e.target.value })
                    }
                    placeholder="Shipping Address"
                  />
                </label>
                <button className="common h-12 w-[150px] rounded-md mt-5 ml-[65%] lg:ml-[80%]">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Home;
