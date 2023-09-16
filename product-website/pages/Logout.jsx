// Logout.js
import { useState } from "react";
import LogoutModal from "../src/components/Modals/LogoutModal";

export default function Logout() {
  const [changeBtnText, setChangeBtnText] = useState(false);

  const handleChangeText = () => {
    setChangeBtnText(true);
  };

  const modalProps = {
    heading: changeBtnText
      ? "You are logged out"
      : "Are you sure you want to log out?",
    image: changeBtnText
      ? "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694681249/rocktea-product-website/assets/image_97_jkyx9o.png"
      : "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694681251/rocktea-product-website/assets/image_96_zcauuh.png",
    subheading: changeBtnText ? "Hope to see you soon!" : "",
    buttonText1: changeBtnText ? "Sign In" : "Yeah, I am out",
    buttonText2: changeBtnText ? "Sign Up" : "Nahh, not yet",
    handleChangeText: handleChangeText,
  };

  return (
    <div className="logout">
      <LogoutModal {...modalProps} changeBtnText={changeBtnText} />
    </div>
  );
}
