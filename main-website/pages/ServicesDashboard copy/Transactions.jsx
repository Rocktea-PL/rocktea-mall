//import Footer from "../../../src/Features/Footer";
//import Navbar from "../../../src/Features/UserNavbar";

import ServiceCards from "../../src/Components/Dashboard/Cards";
import ServiceChart from "../../src/Components/Dashboard/NewChart";
import ServiceProfileCompletion from "../../src/Components/Dashboard/ProfileCompletion";
import ServiceSidebar from "../../src/Components/Dashboard/Sidebar";
import ServiceTransaction from "../../src/Components/Dashboard/Transaction";

export default function Transactions() {
  return (
    <>
      <main className="flex mt-20 ">
        <ServiceSidebar />

        <div className=" block lg:flex lg:relative lg:left-[320px] w-full lg:gap-x-10 lg:w-[80%] px-5">
          <div className="lg:w-[65%]">
            <ServiceProfileCompletion />
            <ServiceCards />
            <ServiceChart />
          </div>

          <div className="lg:w-[28%]">
            <ServiceTransaction />
          </div>
        </div>
      </main>
    </>
  );
}
