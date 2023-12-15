//import Footer from "../../src/Features/Footer";
import Footer from "../../../src/Features/Footer";

//import Navbar from "../../src/Features/UserNavbar";
import Home from "../../../src/components/Profile/Home";
import ProfileSidebar from "../../../src/components/Profile/ProfileSidebar";
import "../../../src/styles/profile.css";

export default function Profile() {
  return (
    <div className="">
      <section className="flex   gap-3 items-start  max-w-[1300px] mx-auto mb-5">
        <ProfileSidebar />
        <div className="w-[70%]">
          <Home />
        </div>
      </section>
      <Footer />
    </div>
  );
}
