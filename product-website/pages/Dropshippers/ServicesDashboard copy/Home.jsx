import BestSelling from "../../../src/components/Dashboard/BestSelling";
import Cards from "../../../src/components/Dashboard/Cards";
import Chart from "../../../src/components/Dashboard/NewChart";
import ProductTracker from "../../../src/components/Dashboard/ProductTracker";
import ProfileCompletion from "../../../src/components/Dashboard/ProfileCompletion";
import Sidebar from "../../../src/components/Dashboard/Sidebar";

export default function ServiceDashboardHome() {
  /* const { storeId } = useParams();
 // const { setRole } = useUserRoleContext();
  useEffect(() => {
    localStorage.setItem("storeId", storeId);
    localStorage.setItem('userRole', 'dropshipper');
   // setRole('dropshipper');
    console.log("store stuff", storeId);
   },[])
  */

  return (
    <>
      <main className="flex lg:justify-between gap-20 mt-20 w-full  mx-auto">
        <Sidebar />

        <div className=" block lg:flex lg:relative lg:left-[320px] w-full lg:gap-x-10 lg:w-[80%] px-5">
          <div className="lg:w-[65%]">
            <ProfileCompletion />
            <Cards />
            <Chart />
          </div>

          <div className="lg:w-[28%] lg:mt-5">
            <ProductTracker />
            <BestSelling />
          </div>
        </div>
      </main>
    </>
  );
}
