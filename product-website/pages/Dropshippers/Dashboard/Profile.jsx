import Sidebar from "../../../src/components/Dashboard/Sidebar";
import YourProfile from "../../../src/components/Dashboard/Profile/YourProfile";
import ProfileSide from "../../../src/components/Dashboard/Profile/Profile-Side";


export default function Profile() {
  return (
    <main className="flex lg:justify-between gap-20 mt-20 w-full  mx-auto">
     
     <Sidebar   />
  
      
    
    <div className=" block lg:flex lg:relative lg:left-[320px] w-full lg:gap-x-10 lg:w-[80%] px-5">
        <div className="lg:w-[65%]">
           <YourProfile /> 
        </div>
        <div className="lg:w-[28%] lg:mt-5">
<ProfileSide />

    </div>
        </div>
        </main>
  )
}
