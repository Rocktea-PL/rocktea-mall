import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCard = ({ count }) => {
  return (
    <SkeletonTheme color="#f0f0f0" highlightColor="#e0e0e0">
      <div>
        <Skeleton height={150} count={count} />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
