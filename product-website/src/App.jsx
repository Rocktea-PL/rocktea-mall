import "./App.css";
import { UserProductProvider } from "./Hooks/UserProductContext";
import { UserAuthProvider } from "./Hooks/UserAuthContext";
import { AppProvider } from "./Hooks/Context";
import Layout from "./routes/Layout";
import { useEffect, useState } from "react";
import Loader from "./Features/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
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
    }, 2000);
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <AppProvider>
        <UserAuthProvider>
          <UserProductProvider>
            {isOnline ? ( // Check the network status here
              isLoading ? (
                <Loader />
              ) : (
                <Layout />
              )
            ) : (
              <div>
                <p>Your network connection is bad. Please check your network and try refreshing the page.</p>
                <button onClick={refreshPage}>Refresh</button>
              </div>
            )}
          </UserProductProvider>
        </UserAuthProvider>
      </AppProvider>
    </>
  );
}

export default App;
