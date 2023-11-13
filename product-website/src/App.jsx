import "./App.css";
import { UserProductProvider } from "./Hooks/UserProductContext";
import { UserAuthProvider } from "./Hooks/UserAuthContext";
import { AppProvider } from "./Hooks/Context";
import Layout from "./routes/Layout";
import { useEffect, useState } from "react";
import GlobalLoader from "./Helpers/Loaders/GlobalLoader";
import { ColorThemePicker } from "./Helpers/ColorTheme";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selectedTheme') || '#f5f5f51a'); // Set the initial theme

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
    }, 2000);
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  // Apply the theme on page load
  useEffect(() => {
    document.body.style.backgroundColor = selectedTheme;
  }, [selectedTheme]);

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
                  <ColorThemePicker
                    themes={['#f5f5f51a', '#ffcccb', '#add8e6', '#90ee90', '#ffc0cb', '#dda0dd', '#000']}
                    onThemeChange={handleThemeChange}
                  />
                  <Layout />
                </>
              )
            ) : (
              <div>
                <p>
                  Your network connection is bad. Please check your network and
                  try refreshing the page.
                </p>
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
