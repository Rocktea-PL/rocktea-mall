//import Footer from "../../../src/Features/Footer";
//import Navbar from "../../../src/Features/UserNavbar";

import ServiceOrderStatus from "../../src/Components/Dashboard/Orders";
import ServiceSidebar from "../../src/Components/Dashboard/Sidebar";
//import OrderStatus from "../../../src/components/Dashboard/Orders";

export default function ServiceOrders() {
  return (
    <>
      <main className="flex mt-20  ">
        <ServiceSidebar />
        <div className=" block lg:flex flex-col lg:relative  lg:left-[320px] w-full lg:gap-x-10 lg:w-[75%] px-5">
          <ServiceOrderStatus />
        </div>
      </main>
    </>
  );
}
