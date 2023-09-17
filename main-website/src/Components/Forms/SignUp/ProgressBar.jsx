const ProgressBar = ({ currentStep }) => {
  return (
    <div className=" absolute  top-0 left-0 w-[100%] h-5 ">
      <div
        className="  bg-[var(--yellow)] h-3 "
        style={{
          width:
            currentStep === 0 ? "33.3%" : currentStep === 1 ? "66.6%" : "100%",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
