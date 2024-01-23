import { useState } from "react";

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
  //const { store_id } = useParams();

  const { loading, formData, setFormData, error, setError, handleUserForm } =
    useGlobalContext();
   // const [touchedFields, setTouchedFields] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  //const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  // const isCheckerOpen = true;
  const handlePasswordValidation = (isValid) => {
    setIsPasswordValid(isValid);
  };
  const handlePasswordTyping = () => {
    setIsTypingPassword(true);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /*const handleChecker = () => {
    setIsCheckerOpen(!isCheckerOpen);
  };*/
  /* useEffect(() => {
    const storedVerifyEmail = localStorage.getItem("verifyEmail");
    if (storedVerifyEmail) {
      setVerifyEmail(JSON.parse(storedVerifyEmail));
    }
  }, [setVerifyEmail]);
*/

  const handleInputChange = (e) => {
    let updatedFormData = {};
    let updatedErrors = { ...error,[name]: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e && e.target) {
      // Regular input change
      const { name, value } = e.target;
      updatedFormData = {
        ...formData,
        [name]: value,
      };

      if (name === "password") {
        handlePasswordTyping(); // Update the typing status for password
      }
      if (name === "email" && !value.match(emailRegex)) {
        updatedErrors.email = "Please enter a valid email address.";
      } else {
        updatedErrors.email = ""; // Clear the error if the user starts typing
      }

      // Reset specific validations if needed
    } else {
      updatedErrors.email = "";
      // Phone number input change
      updatedFormData = {
        ...formData,
        contact: e, // e contains the phone number directly
      };
      updatedErrors.contact = ""; 
     // updatedErrors.first_name = ""; // Reset error for contact
    }
 
    setFormData(updatedFormData);
    setError(updatedErrors);
  };

  /* const handleInputChange = (e) => {
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
  };*/

  return (
    <div className="logout  flex items-center justify-center h-screen lg:overflow-hidden -mt-3">
      <figure className="w-full hidden lg:flex h-screen overflow-hidden max-w-[50%]">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694882647/rocktea-product-website/assets/image_109_wy4a6a.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>
      <div className=" relative flex flex-col items-center justify-center mx-auto text-center w-full overflow-auto h-full lg:py-10 mt-14">
        <div
          className="flex items-center justify-start w-full mb-4 px-5"
          onClick={() => navigate(-1)}
        >
          <span className="absolute left-5 -top-28 cursor-pointer text-xl mt-32">
            <FaArrowLeft />
          </span>
        </div>

        <figure className="mx-auto flex  flex-col items-center justify-center">
          {store.logo ? (
            <img
              src={store?.logo}
              alt="logo"
              width={110}
              height={110}
              className=" object-contain  max-w-[100%] max-h-[70px]"
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
              isTypingPassword={isTypingPassword}
              isPasswordValid={isPasswordValid}
              handlePasswordValidation={handlePasswordValidation}
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
          <Link to="/login" className="font-semibold">
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
