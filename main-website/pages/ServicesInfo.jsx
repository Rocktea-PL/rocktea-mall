import { useGlobalContext } from "../src/hooks/context";
import { ImageWithLoading } from "../src/Components/ImageLoader";
import Otp from "../src/Components/Forms/SignUp/Otp";
import Details from "../src/Components/Forms/Services/Details";

//import { useEffect } from "react";
function ServicesInfo() {
  const {
    //handleStoreFormSubmit,
    serviceInfo,
    setServiceInfo,
    storeError,
    setStoreError,
    //setCurrentStep,
    //isLoading,
    //getCategories,

    currentStep,
  } = useGlobalContext();

  //const [emailError, setEmailError] = useState(false);
  //const [selectedCategory, setSelectedCategory] = useState("");
  const emailIsValid = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateEmail = (email) => {
    // Add your email validation logic here
    if (!emailIsValid(email)) {
      return "Invalid email address";
    }
    return ""; // No error
  };

  const handleStoreInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...storeError };

    if (value.trim() !== "") {
      updatedErrors[name] = "";
    }

    if (name === "email") {
      updatedErrors.email = validateEmail(value);
    }

    if (name === "domain_name") {
      if (value.includes(".") || value.includes(".com")) {
        updatedErrors.domain_name = "Please remove '.' from the domain name.";
        // Disable the input when "." is included
      } else {
        updatedErrors.domain_name = "";
        e.target.disabled = false; // Enable the input when "." is removed
      }
    }

    // Add similar validation for other fields
    setServiceInfo({
      ...serviceInfo,
      [name]: value,
    });

    setStoreError(updatedErrors);
  };

  console.log(serviceInfo.category);

  /*useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep));
    }
  }, []);*/ // Empty dependency array to run this effect only once on mount

  /* useEffect(() => {
    const owner = localStorage.getItem("owner");
    if (owner) {
      setStoreData((prevStoreData) => ({
        ...prevStoreData,
        owner: owner,
      }));
    } else {
      setStoreData((prevStoreData) => ({
        ...prevStoreData,
        owner: "", // Set a default value if owner is not in localStorage
      }));
    }
  }, []);

  console.log("storeDetails", storeData.owner);
  useEffect(() => {
    getCategories();
  }, []);*/
  // console.log(storeData.category);
  const PageDisplay = () => {
    if (currentStep === 0) {
      return (
        <Details
          handleStoreInputChange={handleStoreInputChange}
          storeError={storeError}
          setStoreError={setStoreError}
        />
      );
    } else {
      return <Otp />;
    }
  };
  return (
    <div className=" flex items-center gap-16 justify-center lg:justify-start lg:h-screen lg:overflow-hidden">
      <div className="hidden w-full max-w-[45%] lg:flex ">
        <ImageWithLoading
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698348705/rocktea-main-website/assets/rocktea-signin_ncsai9.jpg"
          alt=""
        />
      </div>
      <div className="mt-10 lg-mt-0 lg:max-w-[50%] h-full overflow-auto">
        <div className="relative px-10 md-px-2 flex items-center justify-start gap-2 mb-5">
          <div className=" bg-gray-300 w-[130px] h-2 top-0 left-0 rounded-md"></div>
          <h5 className=" flex items-center justify-center gap-1 font-semibold  text-sm bg-orange w-[30px] h-[30px] text-white rounded-full">
            {" "}
            {currentStep + 1}{" "}
          </h5>
        </div>
        <div className="w-full ">{PageDisplay()}</div>
      </div>
    </div>
  );
}

export default ServicesInfo;
