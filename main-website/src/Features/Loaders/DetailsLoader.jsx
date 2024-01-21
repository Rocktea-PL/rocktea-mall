import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCardDetails = () => {
  return (
    <SkeletonTheme color="#f0f0f0" highlightColor="#e0e0e0">
      <div className="flex gap-5 max-w-[1350px] mx-auto">
        <div className="w-1/2 mt-10">
          <Skeleton height={400} count={1} />
          <Skeleton height={200} count={1} />
        </div>
        <div className="w-1/2 mt-10">
          <Skeleton height={150} count={4} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCardDetails;
