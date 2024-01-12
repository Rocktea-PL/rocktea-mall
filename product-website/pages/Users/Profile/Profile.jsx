//import Footer from "../../src/Features/Footer";
import Footer from "../../../src/Features/Footer";
import { useStoreContext } from "../../../src/Hooks/UserAuthContext";

//import Navbar from "../../src/Features/UserNavbar";
import Home from "../../../src/components/Profile/Home";
import ProfileSidebar from "../../../src/components/Profile/ProfileSidebar";
import "../../../src/styles/profile.css";

export default function Profile() {
  const {userData} = useStoreContext()
  return (
    <div className="max-md:mt-32">
      <section className="flex   gap-3 items-start  max-w-[1300px] mx-auto mb-5">
        <ProfileSidebar userData={userData} />
        <div className="w-[70%]">
          <Home userData={userData} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
