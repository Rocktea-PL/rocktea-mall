import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="logout flex items-center justify-center h-screen overflow-hidden">
      <figure className="w-full hidden md:block h-full overflow-hidden max-w-[50%]">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694882647/rocktea-product-website/assets/image_109_wy4a6a.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col items-center justify-center mx-auto text-center w-full">
        <figure className="mx-auto flex  flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422691/rocktea-product-website/assets/logo_wvpiif.svg"
            width={50}
            height={50}
            alt=""
          />
          <p className="text-xl">Vicolas Mall</p>
        </figure>
        <div className="mt-8">
          <p className="text-xl mb-4">Continue</p>
          <button className="border-2 border-solid border-[var(--form-border)]  py-3 px-5 rounded mb-4 flex items-center justify-center gap-7 mx-auto sm:w-[350px]">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694884400/rocktea-product-website/assets/google.svg"
              width={20}
              height={20}
              alt=""
            />
            Sign in with Google
          </button>
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-t border-t-[var(--form-border)]" />
            <span className="mx-4 ">or</span>
            <hr className="flex-grow border-t border-t-[var(--form-border)]" />
          </div>
          <form className="flex flex-col sm:w-[350px]">
            <input
              type="email"
              placeholder="Email"
              className=" border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded  my-7 outline-none"
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className=" border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full outline-none"
              />
              <span
                onClick={handlePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
              >
                {!showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-x-4">
                <label className="text-gray-700 text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
              </div>
              <a href="#" className="italic text-sm">
                Forgot password
              </a>
            </div>
            <button className="bg-[var(--orange)] py-2 px-4 rounded mb-4 mt-3">
              Sign In
            </button>
            <p>
              Don’t have an account?{" "}
              <a href="/register" className="font-semibold">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
