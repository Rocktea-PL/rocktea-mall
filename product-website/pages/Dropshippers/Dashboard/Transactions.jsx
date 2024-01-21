//import Footer from "../../../src/Features/Footer";
//import Navbar from "../../../src/Features/UserNavbar";
import Cards from "../../../src/components/Dashboard/Cards";
//import Chart from "../../../src/components/Dashboard/NewChart";
import ProfileCompletion from "../../../src/components/Dashboard/ProfileCompletion";
import Sidebar from "../../../src/components/Dashboard/Sidebar";
import Transaction from "../../../src/components/Dashboard/Transaction";
import TransactionTable from "../../../src/components/Dashboard/TransactionTable";

export default function Transactions() {
  return (
    <>
      <main className="flex mt-20 ">
        <Sidebar />

        <div className=" block lg:flex lg:relative lg:left-[320px] w-full lg:gap-x-10 lg:w-[80%] px-5">
          <div className="lg:w-[65%]">
            <ProfileCompletion />
            <Cards />
            <TransactionTable />
          </div>

          <div className="lg:w-[28%]">
            <Transaction />
          </div>
        </div>
      </main>
    </>
  );
}
