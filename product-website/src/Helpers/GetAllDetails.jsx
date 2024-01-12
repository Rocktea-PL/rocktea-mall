import axios from "axios";
 const Base_Url = import.meta.env.VITE_BASE_URL
 const store_id =
 localStorage.getItem("storeId") || localStorage.getItem("storeUid");

 export const getStoreDetails = async () => {

   const response = await axios.get(
     `${Base_Url}/rocktea/create/store/${store_id}`,
   );
  
   let owner = response.data.owner;
   localStorage.setItem("owner", owner);
   localStorage.setItem("category_id", response.data.category);
   
   return response.data;
 
};

 export const getStoreProfile = async () => {
 // console.log("store owner id", owner_id);
 const owner_id = localStorage.getItem("owner");
 
   const response = await axios.get(
     `${Base_Url}/rocktea/storeowner/${owner_id}`,
   );
   if (response.status === 404) {
     console.log("store does not exist");
   }
   //console.log(response.data);
   localStorage.setItem("storeUserId", response.data.id);
   localStorage.setItem("storeOwner", response.data.is_store_owner);
  return response.data;
 }


//console.log('store owner id', owner)

//rocktea/storeowner

 export const getUserDetails = async () => {
    const user_id = localStorage.getItem("user_id");
   const response = await axios.get(
     `${Base_Url}/rocktea/signup/user/${user_id}/`,
   );
   return response.data

};
