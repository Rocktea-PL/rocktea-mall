import Footer from "../../../src/Dropshippers/Features/Footer";
import Navbar from "../../../src/Dropshippers/Features/Navbar";
import BestSelling from "../../../src/Dropshippers/components/Dashboard/BestSelling";
import Cards from "../../../src/Dropshippers/components/Dashboard/Cards";
import Chart from "../../../src/Dropshippers/components/Dashboard/NewChart";
import ProductTracker from "../../../src/Dropshippers/components/Dashboard/ProductTracker";
import ProfileCompletion from "../../../src/Dropshippers/components/Dashboard/ProfileCompletion";
import Sidebar from "../../../src/Dropshippers/components/Dashboard/Sidebar";


export default function DashboardHome() {
  return (
    <>
    <Navbar/>
    <main className="flex mt-20">
    <Sidebar />
    <div className=" block lg:flex gap-x-6 w-full px-5">
        <div className="lg:w-[70%]">
            <ProfileCompletion />
        <Cards />
    <Chart />
        </div>
    
    <div className="lg:w-[30%]">
<ProductTracker />
<BestSelling/>
    </div>
    </div>
    
   </main>

    <Footer />
    </>
    
  )
}
