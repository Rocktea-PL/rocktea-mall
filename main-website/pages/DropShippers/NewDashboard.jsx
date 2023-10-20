import Footer from "../../src/Dropshippers/Features/Footer";
import Navbar from "../../src/Dropshippers/Features/Navbar";
import Cards from "../../src/Dropshippers/components/Dashboard/Cards";
import Sidebar from "../../src/Dropshippers/components/Dashboard/Sidebar";


export default function NewDashboard() {
  return (
    <>
    <Navbar />

    <main className="flex mt-20">
    <Sidebar />
    <div>
    <Cards />
    </div>
    
   </main>
    <Footer />
    </>
   
  )
}
