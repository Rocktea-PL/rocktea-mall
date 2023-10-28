import Hero from "../src/Components/Home/Hero";
import HomeDetails from "../src/Components/Home/HomeDetails";
import HowItWorks from "../src/Components/Home/HowItWorks";
import LogoAnimation from "../src/Components/Home/LogoAnimation";
import Members from "../src/Components/Home/Members";
import Newsletter from "../src/Components/Home/Newsletter";

function Home() {
  return (
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
  );
}

export default Home;
