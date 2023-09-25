import { useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
 export const ImageWithLoading = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);
  
    const handleImageLoad = () => {
      setLoading(false);
    };
  
    return (
      <SkeletonTheme color="#f0f0f0">
      <div className="image-container relative m-auto">
        {loading  && <Skeleton height={1000} width={500} count={1} className="m-auto" />}
        
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          loading='lazy'
          style={{ display: loading ? 'none' : 'block' }}
          className=" h-auto object-cover"
        />
    
      </div>
      </SkeletonTheme>
     
    );
  };
  