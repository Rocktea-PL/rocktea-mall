//import { useGlobalContext } from "../../Hooks/Context"
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useGlobalContext } from "../../../hooks/context";

function Business() {
  const { user } = useGlobalContext();
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    // Populate the form fields with the initial data when userData changes
    setUpdateData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      contact: user.contact,
      address: user.address,
    });
  }, [user]);
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Capture the updated profile data from the form
    // Call the updateProfile function with the updated data
    // updateProfile(updateData);
    setUpdateData(updateData);
    toast.success("Profile Updated successfully");
    // Save the updated data to local storage
    localStorage.setItem("serviceData", JSON.stringify(updateData));
  };

  return (
    <>
      {!user ? (
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
              <div className="grid lg:grid-cols-1 gap-x-5 px-5 profile-input">
                <label htmlFor="">
                  First Name
                  <input
                    type="text"
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
                    value={updateData.contact}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, contact: e.target.value })
                    }
                    placeholder="Phone"
                  />
                </label>
              </div>
            </div>

            <button className="bg-orange h-12 w-[150px] rounded-md mt-5 ml-[65%] lg:ml-[80%]">
              Update Profile
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Business;
