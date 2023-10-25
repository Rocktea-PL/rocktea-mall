import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft,  } from "react-icons/fa";
//import axios from "axios";
//import { Step1, Step2 } from "../../src/Users/UserSignupForm";
import { Oval } from "react-loader-spinner";
//import { UserSignupForm } from "../../src/Users/UserSignupForm";
//import toast from "react-hot-toast";
import { UserSignupForm } from "../src/components/Forms/UserSignupForm";
import { useGlobalContext } from "../src/Hooks/Context";

//import { useGlobalContext } from "../../src/hooks/context";
function Signup() {
  const navigate = useNavigate();
  const {store_id} = useParams()
  const {loading,formData,setFormData,error,setError,handleUserForm} = useGlobalContext()
  localStorage.setItem('storeId', store_id)
 // const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //const [step, setStep] = useState(1);
 
  //const [isFormValid, setIsFormValid] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...error };
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
    <div className="logout flex items-center justify-center h-screen lg:overflow-hidden">
      <figure className="w-full hidden lg:flex h-screen overflow-hidden max-w-[50%]">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694882647/rocktea-product-website/assets/image_109_wy4a6a.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col items-center justify-center mx-auto text-center w-full overflow-auto h-full lg:py-10">
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
            
              We just need some vital details
          </p>

          <form className="flex user-form flex-col items-center justify-center w-[350px]" encType="multipart/form-data">
         
          <UserSignupForm handleInputChange={handleInputChange} error={error} setFormData={setFormData} showPassword={showPassword} formData={formData} handlePasswordVisibility={handlePasswordVisibility}/>
        <button
          className="bg-orange flex items-center justify-center mx-auto py-2 px-4 rounded mb-4 mt-3 w-full"
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

        <p className="w-[55%] text-sm mt-5">
          For further support, you may visit the Help Center or contact our
          customer service team
        </p>
      </div>
    </div>
  );
}

export default Signup;
