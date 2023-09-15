import { useState } from "react";
import LogoutModal from "../src/components/Modals/LogoutModal";
//import {useState} from 'react'
export default function Logout() {
   const [changeBtnText,setChangeBtnText] = useState(false);
   const handleChangeText =() => {
    setChangeBtnText(true)
   }
  return (
    <>
{!changeBtnText ? (
 < LogoutModal heading='Are you sure you
 want to log out?'
   buttonText1='Yeah i am out'
   buttonText2='Nahh, not yet'
   handleChangeText={handleChangeText}
 
  />
) : (
  < LogoutModal heading='You are logged out'
  subheading='Hope to see you soon!'
   buttonText1='Sign In'
   buttonText2='signUp'
   handleChangeText={handleChangeText}
 
  />
)}
 
        
          </>
    )
   
  
}

