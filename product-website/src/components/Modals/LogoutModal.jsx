import { Link } from "react-router-dom";
export default function LogoutModal({
  heading,
  subheading,
  buttonText1,
  buttonText2,
  handleChangeText,
  image,
  changeBtnText,
}) {
  return (
    <div className="flex h-screen  overflow-hidden">
      <figure className=" hidden md:block max-w-[50%] h-screen overflow-hidden">
        <img src={image} alt="" />
      </figure>
      <div className="flex items-center justify-center flex-col gap-y-12 mx-auto my-[20%] md:my-[10%]">
        <figure>
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422691/rocktea-product-website/assets/logo_wvpiif.svg"
            width={50}
            height={50}
            alt=""
          />
        </figure>
        <p className="text-[2rem] font-[600]">{heading}</p>
        {subheading && (
          <p className={changeBtnText ? "text-2xl" : ""}>{subheading}</p>
        )}
        <div className="flex gap-5 ">
          <Link to={buttonText1 === "Sign In" ? "/login" : ""}>
            <button
              className=" border border-solid border-[var(--orange)] w-[150px] h-10 rounded-md"
              onClick={handleChangeText}
            >
              {buttonText1}
            </button>
          </Link>
          <Link to={buttonText2 === "Sign Up" ? "/register" : "/"}>
            <button className="bg-[var(--orange)] w-[150px] h-10 rounded-md">
              {buttonText2}
            </button>
          </Link>
        </div>
        {subheading && (
          <Link to="/">
            <button className="flex items-center justify-center mx-auto hover:underline text-xl">
              Go back to home
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
