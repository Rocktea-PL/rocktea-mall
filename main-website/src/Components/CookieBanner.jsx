import { useEffect } from 'react';
import { useState } from 'react';
//import { FaTimesCircle } from 'react-icons/fa';

const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  useEffect(() => {
    // Show the banner after 5 seconds
    const timeout = setTimeout(() => {
      setIsBannerVisible(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const handleAccept = () => {
    setIsBannerVisible(false);
    // You can set a cookie or use localStorage to remember the user's choice
    // For simplicity, let's use localStorage in this example
    localStorage.setItem('cookieConsent', 'true');
  };

  return (
    isBannerVisible && (
      <div className="fixed bottom-0 left-0 w-full bg-[rgba(0,0,0,0.7)] text-white p-2 py-3  z-[9999] transition-all duration-700 delay-100">
        <div className='flex flex-col md:flex-row items-center justify-center md:gap-x-10'>
        <p>
          This website uses cookies to ensure you get the best experience on our website.
        </p>
        <button className=' bg-orange w-[100px] h-10  mt-2 text-black mx-2 px-4 cursor-pointer rounded-md  hover:underline' onClick={handleAccept}>Okay</button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
/**useEffect(() => {
    // Check if the banner was already shown today
    const lastShownDate = localStorage.getItem('cookieBannerLastShown');
    const currentDate = new Date().toLocaleDateString();

    if (!lastShownDate || lastShownDate !== currentDate) {
      // Show the banner if it was not shown today
      setTimeout(() => {
        setIsBannerVisible(true);
      }, 5000);
    }

    return () => {
      // Remember the last shown date
      localStorage.setItem('cookieBannerLastShown', currentDate);
    };
  }, []); */