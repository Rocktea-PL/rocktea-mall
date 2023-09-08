import { useEffect, useState } from 'react';
import UserDetails from '../src/Components/Forms/SignUp/UserDetails';
import StoreDetails from '../src/Components/Forms/SignUp/StoreDetails';
import BankDetails from '../src/Components/Forms/SignUp/BankDetails';
import ProgressBar from "../src/Components/Forms/SignUp/ProgressBar";
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { register } from './auth/auth';
import emailjs from '@emailjs/browser';

function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    // Define initial user data state
    first_name: '',
    last_name:'',
    username:'',
    email: '',
    contact: '',
    password: '',
    profile_image: '',
  });

  //This is used to change the background images for each steps and show their various headings and sub headings
    const steps = [
        {background :'../src/assets/login-bg.png', heading:'Become a Dropshipper', subHeading: 'User Profile'  },
        {background :'../src/assets/signup-bg2.png', heading:'Let’s setup your store', subHeading: 'Store Details'  },
        {background :'../src/assets/signup-bg3.png', heading:'Your money is yours', subHeading: 'Payment Details'  },
    ]
//Declared this in order to use it swiftly when changing the background using inline styling
let background = steps[currentStep].background;

  const [error, setError] = useState(null);

  // Function to handle form submission and move to the next step
  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
  
  // Create a FormData object to send the form data including the image
  const formData = new FormData();
  formData.append('first_name', userData.first_name);
  formData.append('last_name', userData.last_name);
  formData.append('username', userData.username);
  formData.append('email', userData.email);
  formData.append('contact', userData.contact);
  formData.append('password', userData.password);
  formData.append('profile_image', userData.profile_image);
    
    try {
      // Add logic here to submit userData to the server
      // For example, you can call the register function from auth.js
      const response = await register(formData,{
      headers: {
        'Content-Type': 'multipart/form-data', // Important for sending file data
      },
    });

    // Send an email notification to the user using EmailJS
      // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual EmailJS values
      const emailParams = {
        to_email: userData.email,
        to_name: userData.first_name, // User's email address
        // Add any other template variables here
      };

      // Send the email
      emailjs
        .send('service_5hulf9r', 'template_nk9rq5h', emailParams, 'Sb11MyaNpQEgE-cBn')
        .then((response) => {
          console.log('Email sent:', response);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
        });
      // Handle successful registration
      // For now, let's just log the user data
      console.log('Registration successful', userData);
   console.log(response)
      // Move to the next step
      if (currentStep < 2) {
        setCurrentStep(currentStep + 1);
      } else {
        // User has completed all steps, handle accordingly (e.g., redirect to dashboard)
        alert('You have completed the registration process.');
      }
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('FormData'));
    if (savedFormData) {
      setUserData(savedFormData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('FormData', JSON.stringify(userData));
  }, [userData]);


  return (
    <div className="h-full p-10 md:p-20 transition duration-500 ease-in-out"
    style={{ backgroundImage: `url(${background})`, 
    backgroundSize:'cover',
    backgroundPosition:'100%',
    backgroundRepeat:'no-repeat'
    }}
    >
      <div className='form '>
        <ProgressBar currentStep={currentStep} />
        {currentStep === 0 ? <h5 className="flex items-center gap-1 font-semibold text-[var(--deep-blue) text-sm"> Step {currentStep + 1} </h5> : <h5 className="flex items-center gap-1 font-semibold text-[var(--deep-blue) text-sm cursor-pointer"><FaAngleLeft onClick={() => setCurrentStep((step) => step - 1 )}/> Step {currentStep + 1} </h5> }
        <h2 className="mt-0 text-center leading-[1.5rem]">{steps[currentStep].heading}</h2>
        <h4 className="text-center text-[var(--yellow)] mb-7">{steps[currentStep].subHeading}</h4>
        <div>
          {/* Render the appropriate form component based on the current step */}
          {currentStep === 0 ? (
            <UserDetails
              userData={userData}
              setUserData={setUserData}
              error={error}
            />
          ) : currentStep === 1 ? (
            <StoreDetails />
          ) : (
            <BankDetails />
          )}
        </div>

        <div className='flex items-center justify-center md:mt-8'>
          <button className='flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg mt-6 md:mt-8' onClick={handleFormSubmit}>
            {currentStep === 2 ? 'Submit' : 'Continue'}
          </button>
        </div>

        {currentStep === 0 ? (
          <p className='text-[15px] text-center mt-5'>
            Already have an account?{' '}
            <NavLink to='/login' style={{ color: 'var(--deep-blue)', fontWeight: 'bold' }}>
              Sign In
            </NavLink>{' '}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default SignUp;
