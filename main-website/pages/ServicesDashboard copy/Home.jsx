import ServiceCards from "../../src/Components/Dashboard/Cards";

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
        <div className="lg:w-[70%] mx-10">
          <ServiceCards />
        </div>

        <div className="lg:w-[25%] lg:mt-5"></div>
      </main>
    </>
  );
}
