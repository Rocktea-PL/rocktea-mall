import Chart from "../src/components/Dashboard/Chart";
import OrderStatus from "../src/components/Dashboard/OrderStatus";
import ProductInStock from "../src/components/Dashboard/ProductInStock";
import Sidebar from "../src/components/Dashboard/Sidebar";
import TopCards from "../src/components/Dashboard/TopCards";

function Dashboard() {
  return <main className="mt-20 mb-5">
    <TopCards />
    <div className="flex flex-col lg:flex-row  justify-center lg:justify-between w-full">
      <Sidebar />
      <Chart />
    </div>
    <OrderStatus />
    <ProductInStock />
    </main>;
}

export default Dashboard;
