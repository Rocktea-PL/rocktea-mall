import { useStoreContext } from "../../../Hooks/UserAuthContext";

export default function ProfileSide() {
  const { storeUser } = useStoreContext();
 const store_id = localStorage.getItem('storeId')
  return (
    <div className="lg:w-[373px] h-[820px] relative bg-white rounded-xl shadow">
      <div className="left-[54px] top-[43px] absolute text-sky-950 text-2xl font-semibold font-['Poppins'] leading-tight">
        Complete your profile
      </div>
      <div className="left-[39px] top-[290px] absolute justify-start items-center gap-5 inline-flex">
        <div className="px-[9px] py-[11px] flex-col justify-center items-center gap-2.5 inline-flex" />
        <div className="text-sky-950 text-[22px] font-medium font-['Poppins']">
          Personal Information
        </div>
      </div>
      <div className="left-[39px] top-[357px] absolute justify-start items-center gap-5 inline-flex">
        <div className="px-[9px] py-[11px] flex-col justify-center items-center gap-2.5 inline-flex" />
        <div className="text-sky-950 text-[22px] font-medium font-['Poppins']">
          Store Details
        </div>
      </div>
      <div className="left-[39px] top-[424px] absolute justify-start items-center gap-7 inline-flex">
        <div className="px-[9px] py-[11px] flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="w-5 h-[23.50px] relative"></div>
        </div>
        <div className="text-sky-950 text-[22px] font-medium font-['Poppins']">
          Bank Details
        </div>
      </div>
      <div className="left-[39px] top-[497px] absolute justify-start items-center gap-7 inline-flex">
        <div className="px-[9px] py-[11px] flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="w-5 h-[23.50px] relative"></div>
        </div>
        <div className="text-sky-950 text-[22px] font-medium font-['Poppins']">
          Social Media
        </div>
      </div>
      <div className="left-[132px] top-[586px] absolute text-sky-950 text-2xl font-medium font-['Poppins']">
        Store URL <br />
        <a href={`https://rocktea-mall-product.vercel.app/register/${store_id}`} >Click to share link</a>
      </div>
      <div className="left-[110px] top-[705px] absolute text-sky-950 text-2xl font-medium font-['Poppins']">
        Social Media
      </div>
      <div className="left-[46px] top-[623px] absolute justify-start items-center gap-5 inline-flex">
        
        <div className="w-8 h-8 relative" />
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute"></div>
        </div>
      </div>
      <div className="w-[203px] h-[204px] left-[86px] top-[86px] absolute">
        <img
          src={storeUser.profile_image}
          className="rounded-full w-[150px] h-[150px]"
          alt=""
        />
      </div>
      <div className="left-[64px] top-[754px] absolute justify-start items-start gap-10 inline-flex">
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute"></div>
        </div>
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute"></div>
        </div>
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute"></div>
        </div>
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-[-0px] top-0 absolute"></div>
        </div>
      </div>
    </div>
  );
}
