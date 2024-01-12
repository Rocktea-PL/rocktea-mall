//import { useStoreContext } from "../Hooks/UserAuthContext";
import { useEffect, useState } from "react";
import { useStoreContext } from "../Hooks/UserAuthContext";
import Notfound from "../Notfound";
import DropshipperLayout from "./DropshipperLayout";
import UserLayout from "./UserLayout";
import {useLocation} from 'react-router-dom'
//import GlobalLoader from "../Helpers/Loaders/GlobalLoader";

function Layout({ storeId }) {
  //const [loading, setLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userStoreId = searchParams.get("id");
  //localStorage.setItem("storeUid", userStoreId)
   const [userParamId,setUserParamId] = useState(
    localStorage.getItem("storeUid") || null,
  );
  const { store } = useStoreContext();

  useEffect (() => {
    if(userStoreId !== null){
      setUserParamId(userParamId)
      localStorage.setItem("storeUid", userStoreId)
      
    }
  },[userStoreId])

 // console.log(userParamId)
  document.body.style.backgroundColor =
    store.theme !== null ? "#" + store.theme : "#f7fafc";
   // console.log( localStorage.getItem("storeUid"))
  const getRoles = () => {
    if (storeId) {
      return <DropshipperLayout />;
    } 
    if (userParamId) {
     
      return <UserLayout />;
    } 
    else {
      return <Notfound />;
    }
  };

  return (
    <main className={`${store.theme && "-mt-[0.8] pt-2"} `}>{getRoles()}</main>
  );
}

export default Layout;
