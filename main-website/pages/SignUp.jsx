import { useState } from "react"
//import UserDetails from "../src/Components/Forms/SignUp/UserDetails"
import ProgressBar from "../src/Components/Forms/SignUp/ProgressBar";
import {FaAngleLeft} from 'react-icons/fa'
//import image from '../src/assets'
import UserDetails from "../src/Components/Forms/SignUp/UserDetails";
import StoreDetails from "../src/Components/Forms/SignUp/StoreDetails";
import BankDetails from "../src/Components/Forms/SignUp/BankDetails";
//import { FormButton } from "../src/Components/Button";
import { NavLink } from "react-router-dom";

function SignUp() {
    const [currentStep, setCurrentStep] = useState(0);
    
    //This is used to change the background images for each steps and show their various headings and sub headings
    const steps = [
        {background :'../src/assets/login-bg.png', heading:'Become a Dropshipper', subHeading: 'User Profile'  },
        {background :'../src/assets/signup-bg2.png', heading:'Let’s setup your store', subHeading: 'Store Details'  },
        {background :'../src/assets/signup-bg3.png', heading:'Your money is yours', subHeading: 'Payment Details'  },
    ]

    //Declared this in order to use it swiftly when changing the background using inline styling
    let background = steps[currentStep].background;

    //This are the  various forms we want to display so they are conditioned to show one after another once the button is clicked
    const PageDisplay = () => {
      if (currentStep === 0){
        return <UserDetails  />
      }else if (currentStep === 1){
        return <StoreDetails />
      }else{
        return <BankDetails  />
      }
    }

    const FormSteps = () => {
      if(currentStep === steps.length - 1){
      alert('You have reached the end of the form')
      }else{
        setCurrentStep((step) => step + 1)
      }
      

    }

    
    return (
      <div className=" h-screen p-10 md:p-20 transition duration-500 ease-in-out"
      style={{ backgroundImage: `url(${background})`, 
      backgroundSize:'cover',
      backgroundPosition:'100%',
      backgroundRepeat:'no-repeat'
      }}>
       
        <div className='form '>
        <ProgressBar currentStep={currentStep} />
        {currentStep === 0 ? <h5 className="flex items-center gap-1 font-semibold text-[var(--deep-blue) text-sm"> Step {currentStep + 1} </h5> : <h5 className="flex items-center gap-1 font-semibold text-[var(--deep-blue) text-sm cursor-pointer"><FaAngleLeft onClick={() =>   setCurrentStep((step) => step - 1 )}/> Step {currentStep + 1} </h5> }
             <h2 className="mt-0 text-center leading-[1.5rem]">{steps[currentStep].heading}</h2>  
             <h4 className="text-center text-[var(--yellow)] mb-7">{steps[currentStep].subHeading}</h4>
             <div>
              {PageDisplay()}
             </div>

             <div className='flex items-center justify-center md:mt-8'> 
             <button className='flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg md:mt-8' onClick={FormSteps}>
       {currentStep === steps.length - 1 ? 'Submit':'Continue'}
    </button>
             </div>
             {currentStep === 0 ? <p className='text-[15px] text-center mt-5'>Already have an account? <NavLink to='/login' style={{color:'var(--deep-blue)',fontWeight:'bold'}}> Sign In</NavLink> </p> : null}
      
        </div>
        
        </div>
      
            
        
        
    )
}

export default SignUp
