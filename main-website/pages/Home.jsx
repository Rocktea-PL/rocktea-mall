import Hero from "../src/Components/Home/Hero";
import HomeDetails from "../src/Components/Home/HomeDetails";
import HowItWorks from "../src/Components/Home/HowItWorks";
import LogoAnimation from "../src/Components/Home/LogoAnimation";
import Members from "../src/Components/Home/Members";
import Newsletter from "../src/Components/Home/Newsletter";

function Home() {
  return (
    <div>
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
