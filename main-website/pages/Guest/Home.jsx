import Footer from "../../src/Public/Components/Footer";
import Hero from "../../src/Public/Components/Home/Hero";
import HomeDetails from "../../src/Public/Components/Home/HomeDetails";
import HowItWorks from "../../src/Public/Components/Home/HowItWorks";
import LogoAnimation from "../../src/Public/Components/Home/LogoAnimation";
import Members from "../../src/Public/Components/Home/Members";
import Newsletter from "../../src/Public/Components/Home/Newsletter";
import Navbar from "../../src/Public/Components/Navbar";

function Home() {
  return (
    <>
    <Navbar />
    <div className="relative">
      <div className="hidden md:flex absolute -left-[2.5rem] -top-[12rem]  overflow-hidden z-[-1]">
        <img
          width={350}
          height={350}
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399798/rocktea-main-website/assets/Group_12_1_uvllfz.png"
          alt=""
        />
      </div>
      <Hero />
      <HowItWorks />
      <HomeDetails />
      <LogoAnimation />
      <Members />
      <Newsletter />
    </div>
    <Footer />
    </>
    
  );
}

export default Home;
