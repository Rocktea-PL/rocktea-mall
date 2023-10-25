import Footer from "../../../src/Dropshippers/Features/Footer";
import Navbar from "../../../src/Dropshippers/Features/Navbar";
import Cards from "../../../src/Dropshippers/components/Dashboard/Cards";
import Chart from "../../../src/Dropshippers/components/Dashboard/NewChart";
import ProfileCompletion from "../../../src/Dropshippers/components/Dashboard/ProfileCompletion";
import Sidebar from "../../../src/Dropshippers/components/Dashboard/Sidebar";
import Transaction from "../../../src/Dropshippers/components/Dashboard/Transaction";


export default function Transactions() {
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
<Transaction />
    </div>
    </div>
    
   </main>

    <Footer/>
   </>
  )
}
