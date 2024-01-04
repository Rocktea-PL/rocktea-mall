import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import { UserSignupForm } from "../../src/components/Forms/UserSignupForm";
import { useGlobalContext } from "../../src/Hooks/Context";
import { useStoreContext } from "../../src/Hooks/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
//import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const { store } = useStoreContext();
  const { store_id } = useParams();

  const { loading, formData, setFormData, error, setError, handleUserForm } =
    useGlobalContext();
  useEffect(() => {
    // Set store_id in local storage when the component mounts
    localStorage.setItem("storeUid", store_id);
    //setRole('user');
    localStorage.setItem("userRole", "user");
  }, []);
  //console.log(store_id);
  // const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //const [step, setStep] = useState(1);

  //const [isFormValid, setIsFormValid] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...error };
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email if the input name is "email"
    if (name === "email" && !value.match(emailRegex)) {
      updatedErrors.email = "Please enter a valid email address.";
      //toast.error('Please enter a valid email address.')
    } else {
      updatedErrors.email = ""; // Reset email error if valid
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(updatedErrors);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="logout flex items-center justify-center h-screen lg:overflow-hidden -mt-3">
      <figure className="w-full hidden lg:flex h-screen overflow-hidden max-w-[50%]">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694882647/rocktea-product-website/assets/image_109_wy4a6a.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col items-center justify-center mx-auto text-center w-full overflow-auto h-full lg:py-10">
        <div
          className="flex items-center justify-start w-full mb-4 px-5"
          onClick={() => navigate(-1)}
        >
          <span className="cursor-pointer text-xl">
            <FaArrowLeft />
          </span>
        </div>

        <figure className="mx-auto flex  flex-col items-center justify-center">
          {store.logo ? (
            <img
              src={store?.logo}
              alt="logo"
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full"
            />
          ) : (
            <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
              {store?.name?.substring(0, 2)}
            </div>
          )}
          <p className=" capitalize mt-4 font-bold text-[20px]">{store.name}</p>
        </figure>

        <div className="mt-3">
          <h3 className=" text-[18px] mb-2">Personal Details</h3>
          <p>We just need some vital details</p>

          <form
            className="flex user-form flex-col items-center justify-center w-[350px]"
            encType="multipart/form-data"
          >
            <UserSignupForm
              handleInputChange={handleInputChange}
              error={error}
              setFormData={setFormData}
              showPassword={showPassword}
              formData={formData}
              handlePasswordVisibility={handlePasswordVisibility}
            />
            <button
              className="common flex items-center justify-center mx-auto py-2 px-4 rounded mb-4 mt-3 w-full"
              onClick={handleUserForm}
              disabled={loading}
            >
              {loading ? (
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
                "Submit"
              )}
            </button>
          </form>
        </div>
        <p>
        Already have an account?{" "}
          <Link to={`/login`} className="font-semibold">
            Login
          </Link>
        </p>
        <p className="w-[55%] text-sm mt-5">
          For further support, you may visit the Help Center or contact our
          customer service team
        </p>
      </div>
    </div>
  );
}

export default Signup;
