//import { useStoreContext } from "../Hooks/UserAuthContext";
//import { useEffect, useState } from "react";
import { useStoreContext } from "../Hooks/UserAuthContext";
import Notfound from "../Notfound";
import DropshipperLayout from "./DropshipperLayout";
import UserLayout from "./UserLayout";

function Layout({ storeId, userParamId }) {
  const { store } = useStoreContext();
  let storeTheme = `#${store?.theme}`;
  document.body.style.backgroundColor =
    store.theme !== null ? storeTheme : "#f7fafc";

  const getRoles = () => {
    if (storeId) {
      return <DropshipperLayout />;
    } else if (userParamId) {
      return <UserLayout />;
    } else {
      return <Notfound />;
    }
  };

  // console.log(storeTheme)
  return (
    <main className={`${store?.theme && "-mt-[0.8] pt-2"} `}>{getRoles()}</main>
  );
}

export default Layout;
