import { useEffect } from "react";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const ImageWithLoading = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay for content loading

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <SkeletonTheme color="#f0f0f0">
      <div className="image-container relative m-auto">
        {loading && (
          <Skeleton height={1000} width={500} count={1} className="m-auto" />
        )}

        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          loading="lazy"
          style={{ display: loading ? "none" : "block" }}
          className=" h-auto object-cover"
        />
      </div>
    </SkeletonTheme>
  );
};
