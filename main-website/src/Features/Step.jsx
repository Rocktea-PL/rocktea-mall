

const Step = ({ background, children }) => {
  return (
    <div
      className="relative max-w-full min-h-screen mt-[4rem] md:p-10"
      style={{ backgroundImage: `url(${background})`, 
      backgroundSize:'cover',
      backgroundPosition:'100%',
      backgroundRepeat:'no-repeat'}}
    >
      <div className=" absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] mx-auto flex items-center justify-center  bg-[var(--white)] rounded-lg w-[90%] md:w-[80%] pb-7">
      {children}
      </div>
    </div>
  );
};

export default Step;
