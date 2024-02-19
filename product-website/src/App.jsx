import "./App.css";
import { UserProductProvider } from "./Hooks/UserProductContext";
import { UserAuthProvider } from "./Hooks/UserAuthContext";
import { AppProvider } from "./Hooks/Context";
import Layout from "./routes/Layout";
import { useEffect, useState } from "react";
import GlobalLoader from "./Helpers/Loaders/GlobalLoader";
//import { ColorThemePicker } from "./Helpers/ColorTheme";
import { useLocation } from "react-router-dom/dist";
import BadNetwork from "./assets/bad-network.svg";
import CookieBanner from "./components/CookieBanner";
import Cookies from "js-cookie";
function App() {
  const location = useLocation(); // Use the location hook to get the query parameters
  const queryParams = new URLSearchParams(location.search);
  const idFromQuery = queryParams.get("store_id");
  const searchParams = new URLSearchParams(location.search);
  const userStoreId = searchParams.get("id");

  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [storeId, setStoreId] = useState(() => Cookies.get("storeId") || null);
  const [userParamId, setUserParamId] = useState(
    localStorage.getItem("storeUid") || null,
  );

  
  // Dropshippers store id so they can have access to teir store and dashboard
  //user store id so that they can have access to the stores they want to reagister
  useEffect(() => {
    setIsLoading(true);

    // Check if the query parameters are present before updating state
    if (idFromQuery !== null) {
      setStoreId(idFromQuery);
      Cookies.set("storeId", idFromQuery, { secure: true, sameSite: "strict" }); // Set store_id to local storage
    }

    if (userStoreId !== null) {
      setUserParamId(userStoreId);
      localStorage.setItem("storeUid", userStoreId); // Set store_id to local storage
    }

    // Set loading to false after a timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Adjust the duration as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [idFromQuery, userStoreId]);

  //Loading animation for the pages
  useEffect(() => {
    setIsOnline(navigator.onLine);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <AppProvider>
        <UserAuthProvider>
          <UserProductProvider>
            {isOnline ? (
              isLoading ? (
                <GlobalLoader />
              ) : (
                <>
                  <Layout storeId={storeId} userParamId={userParamId} />
                  <CookieBanner />
                </>
              )
            ) : (
              <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-10 max-w-[80%] lg:h-[700px] lg:mt-[80px] mx-auto bg-primary px-5 pb-5 rounded-lg my-10">
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg flex flex-col">
                    Whoops!
                    <span className="text-[3rem] font-semibold leading-tight">
                      Something broke!
                    </span>
                  </p>
                  <p className="text-[#79747E] ">
                    Slow or no internet connection
                  </p>
                  <button
                    className="bg-black text-white h-14 w-[200px] rounded-md mt-5 lg:mt-7"
                    onClick={refreshPage}
                  >
                    Refresh
                  </button>
                </div>
                <img
                  src={BadNetwork}
                  alt="bad network"
                  className=" w-[70%]  h-full max-w-[50%]"
                />
              </div>
            )}
          </UserProductProvider>
        </UserAuthProvider>
      </AppProvider>
    </>
  );
}

export default App;
