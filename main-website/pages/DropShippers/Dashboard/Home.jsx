import Footer from "../../../src/Dropshippers/Features/Footer";
import Navbar from "../../../src/Dropshippers/Features/Navbar";
import Cards from "../../../src/Dropshippers/components/Dashboard/Cards";
import Chart from "../../../src/Dropshippers/components/Dashboard/NewChart";
import Sidebar from "../../../src/Dropshippers/components/Dashboard/Sidebar";


export default function DashboardHome() {
  return (
    <>
    <Navbar/>
    <main className="flex mt-20">
    <Sidebar />
    <div className="w-[70%] px-5">
    <Cards />
    <Chart />
    </div>
    
   </main>

    <Footer />
    </>
    
  )
}
