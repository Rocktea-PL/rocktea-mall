import ServiceBestSelling from "../../src/Components/Dashboard/BestSelling";
import ServiceCards from "../../src/Components/Dashboard/Cards";
import ServiceChart from "../../src/Components/Dashboard/NewChart";
import ServiceProfileCompletion from "../../src/Components/Dashboard/ProfileCompletion";
import ProfileCompletion from "../../src/Components/Dashboard/ProfileCompletion";
import ServiceSidebar from "../../src/Components/Dashboard/Sidebar";

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
        <ServiceSidebar />

        <div className=" block lg:flex lg:relative lg:left-[320px] w-full lg:gap-x-10 lg:w-[80%] px-5">
          <div className="lg:w-[65%]">
            <ProfileCompletion />
            <ServiceCards />
            <ServiceChart />
          </div>

          <div className="lg:w-[28%] lg:mt-5">
            <ServiceProfileCompletion />
            <ServiceBestSelling />
          </div>
        </div>
      </main>
    </>
  );
}
