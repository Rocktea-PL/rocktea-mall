//import { useState } from "react";
//import Button from "../../Button";
import { NavLink } from "react-router-dom";
import { Oval } from "react-loader-spinner";
//import { useGlobalContext } from "../../../Public/hooks/context";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImageWithLoading } from "../../ImageLoader";
import { useAuthContext } from "../../../../hooks/AuthContext";
//import { ImageWithLoading } from "../../ImageLoader";

//https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961296/rocktea-main-website/assets/IMG_7812_eibblj.jpg
function Login() {
  const {
    credentials,
    setCredentials,
    isLoading,
    loginError,
    setLoginError,
    handleLoginFormSubmit,
  } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...loginError, [name]: "" };
    setCredentials({
      ...credentials,
      [name]: value,
    });
    setLoginError(updatedErrors);
  };

  return (
    <div className="flex items-center justify-center gap-x-14 lg:justify-start lg:h-screen lg:overflow-hidden">
      <div className="hidden w-full max-w-[45%] lg:flex ">
            <ImageWithLoading
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961328/rocktea-main-website/assets/IMG_7813_mtdsgq.jpg"
              alt=""
            />
          </div>

      <div className="  lg:max-w-[50%] block mt-[20%] lg:mt-[0]  w-full md:w-[500px] px-10 sm:px-5">
        <h2 className="text-black text-md font-semibold">Sign In</h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <p className="yippie text-[36px] text-orange">Yippie! </p>
          <div className="flex items-end md:items-center gap-x-1">
            <p className="text-[1.2rem] whitespace-nowrap">
              we’re very excited <br className="sm:hidden" />
              to have you back{" "}
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M15.6771 16.7708L25.9948 6.45312C26.2865 6.16146 26.6267 6.01562 27.0156 6.01562C27.4045 6.01562 27.7448 6.16146 28.0365 6.45312C28.3281 6.74479 28.474 7.08507 28.474 7.47396C28.474 7.86285 28.3281 8.20312 28.0365 8.49479L17.7552 18.8125L15.6771 16.7708ZM19.2865 20.3802L28.5469 11.0833C28.8385 10.7917 29.1849 10.6458 29.5859 10.6458C29.987 10.6458 30.3333 10.7917 30.625 11.0833C30.9167 11.375 31.0625 11.7214 31.0625 12.1224C31.0625 12.5234 30.9167 12.8698 30.625 13.1615L21.3646 22.4219L19.2865 20.3802ZM7.69271 27.3073C5.4809 25.0955 4.375 22.434 4.375 19.3229C4.375 16.2118 5.4809 13.5503 7.69271 11.3385L12.0677 6.96354L14.2188 9.11458C14.3889 9.28472 14.5347 9.46094 14.6562 9.64323C14.7778 9.82552 14.8993 10.0139 15.0208 10.2083L20.4167 4.77604C20.7083 4.48438 21.0547 4.33854 21.4557 4.33854C21.8568 4.33854 22.2031 4.48438 22.4948 4.77604C22.7865 5.06771 22.9323 5.41406 22.9323 5.8151C22.9323 6.21615 22.7865 6.5625 22.4948 6.85417L16.1875 13.1615L13.0885 16.224L13.7812 16.9167C14.8993 18.0347 15.434 19.3715 15.3854 20.9271C15.3368 22.4826 14.7413 23.8316 13.599 24.974L11.5208 22.9323C12.0799 22.3733 12.3898 21.7109 12.4505 20.9453C12.5113 20.1797 12.2622 19.5174 11.7031 18.9583L9.98958 17.2812C9.69792 16.9896 9.55208 16.6432 9.55208 16.2422C9.55208 15.8411 9.69792 15.4948 9.98958 15.2031L12.0677 13.1615C12.3594 12.8698 12.5052 12.5234 12.5052 12.1224C12.5052 11.7214 12.3594 11.375 12.0677 11.0833L9.73438 13.4167C8.0816 15.0694 7.25521 17.0443 7.25521 19.3411C7.25521 21.638 8.0816 23.6128 9.73438 25.2656C11.3872 26.9184 13.3681 27.7448 15.6771 27.7448C17.9861 27.7448 19.967 26.9184 21.6198 25.2656L30.3333 16.5156C30.625 16.224 30.9714 16.0781 31.3724 16.0781C31.7734 16.0781 32.1198 16.224 32.4115 16.5156C32.7031 16.8073 32.849 17.1536 32.849 17.5547C32.849 17.9557 32.7031 18.3021 32.4115 18.5938L23.6615 27.3073C21.4497 29.5191 18.7882 30.625 15.6771 30.625C12.566 30.625 9.90451 29.5191 7.69271 27.3073ZM24.7917 33.5781V30.625C26.3958 30.625 27.7691 30.0538 28.9115 28.9115C30.0538 27.7691 30.625 26.3958 30.625 24.7917H33.5781C33.5781 27.2222 32.7214 29.2943 31.0078 31.0078C29.2943 32.7214 27.2222 33.5781 24.7917 33.5781ZM1.42188 10.2083C1.42188 7.77778 2.27865 5.70573 3.99219 3.99219C5.70573 2.27865 7.77778 1.42188 10.2083 1.42188V4.375C8.60417 4.375 7.2309 4.94618 6.08854 6.08854C4.94618 7.2309 4.375 8.60417 4.375 10.2083H1.42188Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        <form action="" className=" ">
          <label htmlFor="" className="flex flex-col mt-2">
            Email
            <input
              type="email"
              placeholder="example@mail.com"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              className="bg-[var(--white)] border border-solid border-[var(--input-border)] w-[100%] h-10 rounded-lg px-2 mt-3  outline-none"
            />
            {loginError && loginError.email && (
              <div className="text-red-500">{loginError.email}</div>
            )}
          </label>

          <label className="relative flex flex-col mt-2 ">
            Password
            <input
              type={showPassword ? "text" : "password"}
              placeholder="***************"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="bg-[var(--white)] border border-solid border-[var(--input-border)] w-[100%] h-10 rounded-lg px-2 mt-3  outline-none"
            />
            <span
              onClick={handlePasswordVisibility}
              className="absolute top-12 right-2 flex items-center pr-4 cursor-pointer opacity-[0.66]"
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {loginError && loginError.password && (
              <div className="text-red-500">{loginError.password}</div>
            )}
          </label>
          <div className="flex items-center justify-between   mt-3 w-full">
            <label className="flex flex-row-reverse items-center justify-center whitespace-nowrap text-[15px] xxsm:text-[12px] sm:text-sm -mt-1">
              Remember me
              <input
                type="checkbox"
                className=" xxsm:w-[20px] w-[30px] h-3 mt-0 px-1"
              />
            </label>
            <div>
              <p className="text-orange whitespace-nowrap  xxsm:text-[12px] text-[15px] sm:text-sm">
                Forgot Password?
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8">
            <button
              className="flex items-center justify-center text-white bg-[var(--yellow)] w-[170px] p-3 rounded-lg mt-3 text-[20px] mb-5"
              onClick={handleLoginFormSubmit}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? (
                <Oval
                  height={30}
                  width={30}
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#f6f6f6"
                  strokeWidth={7}
                  strokeWidthSecondary={7}
                />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
        <p className="text-sm text-center mt-3 hover:underline">
          Do not have an account?{" "}
          <NavLink
            to="/personal_details"
            style={{ color: "var(--deep-blue)", fontWeight: "bold" }}
          >
            Sign Up
          </NavLink>{" "}
        </p>
      </div>

      {/*<div className="flex flex-col items-center justify-center w-full gap-4 px-5 lg:mt-5">
          <label>
            Email
            <input
              type="email"
              placeholder="example@mail.com"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
            {loginError && loginError.email && (
              <div className="text-red-500">{loginError.email}</div>
            )}
          </label>
          <label className="relative">
            Password
            <input
              type={showPassword ? "text" : "password"}
              placeholder="***************"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
            <span
              onClick={handlePasswordVisibility}
              className="absolute top-12 right-8 flex items-center pr-4 cursor-pointer"
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {loginError && loginError.password && (
              <div className="text-red-500">{loginError.password}</div>
            )}
          </label>
          <div className="flex items-center justify-between w-[90%]">
            <label className="flex flex-row-reverse items-center justify-center whitespace-nowrap text-[14px] -mt-1">
              Remember me
              <input type="checkbox" className="w-[30px] h-3 mt-0 px-1" />
            </label>
            <div>
              <p className="text-[var(--deep-blue)] whitespace-nowrap text-[14px]">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg mt-6"
            onClick={handleLoginFormSubmit}
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? (
              <Oval
                height={30}
                width={30}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#f6f6f6"
                strokeWidth={7}
                strokeWidthSecondary={7}
              />
            ) : (
              "Sign In"
            )}
          </button>
        </div>
        <p className="text-[15px] text-center mt-5">
          Do not have an account?{" "}
          <NavLink
            to="/personal_details"
            style={{ color: "var(--deep-blue)", fontWeight: "bold" }}
          >
            Sign Up
          </NavLink>{" "}
            </p>*/}
    </div>
  );
}

export default Login;
