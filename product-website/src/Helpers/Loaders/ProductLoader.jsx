import Skeleton from "react-loading-skeleton";

const CardLoader = () => {
  return (
    <div className="card-container">
      <Skeleton height={150} style={{ borderRadius: "4px" }} count={5} />
      <Skeleton
        height={16}
        style={{ marginTop: "15px", borderRadius: "4px" }}
        count={5}
      />
      <Skeleton
        height={8}
        style={{ marginTop: "10px", borderRadius: "4px" }}
        count={5}
      />
    </div>
  );
};

export default CardLoader;
