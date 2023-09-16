import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAdditionalFields = (e) => {
    e.preventDefault();
    setShowAdditionalFields(!showAdditionalFields);
  };

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
        <div className="flex items-center justify-start w-full mb-4 px-5">
          <span className="cursor-pointer text-xl" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </span>
        </div>

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
          <h3 className=" text-2xl mb-2">Personal Details</h3>
          <p>
            {showAdditionalFields
              ? "Almost there"
              : "We just need some vital details"}
          </p>

          <form className="flex flex-col w-[350px]">
            {!showAdditionalFields ? (
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full my-7 outline-none"
                />
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border-2 border-solid border-[var(--form-border)] py-2 px-4 mb-7 rounded w-full outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full outline-none"
                  />
                </div>
                <button
                  className="bg-[var(--orange)] py-2 px-4 rounded mb-4 mt-3 w-full"
                  onClick={toggleAdditionalFields}
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Date of Birth"
                  className="border-2 border-solid border-[var(--form-border)] py-2 px-4 my-7 rounded w-full outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border-2 border-solid border-[var(--form-border)] py-2 px-4 mb-7 rounded w-full outline-none"
                />
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border-2 border-solid border-[var(--form-border)] py-2 px-4 rounded w-full outline-none"
                  />
                  <span
                    onClick={handlePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button
                  className="bg-[var(--orange)] py-2 px-4 rounded mb-4 mt-3 w-full"
                  onClick={() => alert("Registration Successful")}
                >
                  Finish
                </button>
              </div>
            )}
          </form>
        </div>

        <p className="w-[55%] text-sm mt-5">
          For further support, you may visit the Help Center or contact our
          customer service team
        </p>
      </div>
    </div>
  );
}

export default Signup;
