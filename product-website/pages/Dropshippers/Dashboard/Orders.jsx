//import Footer from "../../../src/Features/Footer";
import Navbar from "../../../src/Features/UserNavbar";
import OrderStatus from "../../../src/components/Dashboard/Orders";
import Sidebar from "../../../src/components/Dashboard/Sidebar";
//import OrderStatus from "../../../src/components/Dashboard/Orders";

export default function Orders() {
  return (
    <>
      <Navbar />
      <main className="flex mt-20  ">
        <Sidebar />
        <div className=" block lg:flex flex-col lg:relative  lg:left-[320px] w-full lg:gap-x-10 lg:w-[75%] px-5">
          <OrderStatus />
        </div>
      </main>
    </>
  );
}
