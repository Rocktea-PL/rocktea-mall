import ServiceSidebar from "../../src/Components/Dashboard/Sidebar";
//import ProfileSide from "../../../src/components/Dashboard/Profile/Profile-Side";

export default function ServiceProfile() {
  return (
    <main className="flex lg:justify-between gap-20 mt-20 w-full  mx-auto">
      <ServiceSidebar />

      <div className=" block w-full  lg:ml-[320px]  lg:gap-x-10  px-5">
        <ServiceProfile />
      </div>
    </main>
  );
}
