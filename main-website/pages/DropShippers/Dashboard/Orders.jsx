import Footer from "../../../src/Dropshippers/Features/Footer";
import Navbar from "../../../src/Dropshippers/Features/Navbar";
import OrderStatus from "../../../src/Dropshippers/components/Dashboard/Orders";
//import ProfileCompletion from "../../../src/Dropshippers/components/Dashboard/ProfileCompletion";
import Sidebar from "../../../src/Dropshippers/components/Dashboard/Sidebar";


export default function Orders() {
  return (
    <>
    <Navbar/>
    <main className="flex mt-20">
    <Sidebar />
    <div className=" block gap-x-6 w-full px-5">
       
      <OrderStatus />
        </div>
        </main>
        <Footer />
    </>
    
  )
}
