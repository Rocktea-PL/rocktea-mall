import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import { useStoreContext } from "../Hooks/UserAuthContext";
import DropshipperLayout from "./DropshipperLayout";
import UserLayout from "./UserLayout";
import GlobalLoader from "../Helpers/Loaders/GlobalLoader";

function Layout() {
  const [loading, setLoading] = useState(false);
  const [store_id, setStoreId] = useState(
    () => localStorage.getItem("storeId") || null,
  );

  // Use the location hook to get the query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idFromQuery = queryParams.get("store_id");

  useEffect(() => {
    setLoading(true);
    // Check if the query parameter is present before updating state
    if (idFromQuery !== null) {
      setStoreId(idFromQuery);
      localStorage.setItem("storeId", idFromQuery); // Set store_id to local storage
      setLoading(false);
    }
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [idFromQuery]);

  const getRoles = () => {
    if (store_id) {
      return <DropshipperLayout />;
    } else {
      return <UserLayout />;
    }
  };

  return <main>{loading ? <GlobalLoader /> : getRoles()}</main>;
}

export default Layout;
