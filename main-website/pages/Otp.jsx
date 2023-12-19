//import Button from "../src/Components/Button"
import { ImageWithLoading } from "../src/Components/ImageLoader";
//import { PaystackButton } from 'react-paystack';
import { useGlobalContext } from "../src/hooks/context";

function Otp() {
  const { initiatePayment } = useGlobalContext();

  /* const handlePaymentInitiation = () => {
    const owner =  localStorage.getItem("ownerId"); // Get the owner from localStorage
   // const user = location.getItem("serviceId");
   console.log(owner)
    if (!owner ) {
      console.error("Owner information not found.");
      return;
    }
    console.log(owner)
    const formData = new FormData();
    formData.append("store_owner", owner) ;
    initiatePayment(formData); // Pass the owner information to initiatePayment
  };*/
  return (
    <section className="relative h-screen w-full gap-20 flex flex-col md:flex-row items-center justify-center md:justify-start p-0  md:overflow-hidden">
      <figure className="hidden lg:max-w-[50%]   w-[570px] lg:block lg:h-screen  ">
        <ImageWithLoading
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961328/rocktea-main-website/assets/IMG_7813_mtdsgq.jpg"
          alt=""
          className=" h-auto object-cover"
        />
      </figure>
      <div className="form flex flex-col gap-y-10 justify-center mx-auto items-center mt-10 ">
        <figure className="flex items-center justify-center mt-2  mb-6">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421637/rocktea-main-website/assets/rocktea-logo_qlaflj.png"
            width={120}
            height={120}
            alt="logo"
          />
        </figure>
        <h2 className="mt-0 text-center leading-[1.5rem]">One Time Payment</h2>
        <p className="text-center">
          Make a one time payment of N5000 that will be used to host your store
          URL.
        </p>
        <button
          onClick={initiatePayment}
          className="flex items-center justify-center bg-[var(--yellow)] py-3 px-5 rounded-lg"
        >
          Procceed to payment
        </button>
      </div>
    </section>
  );
}

export default Otp;
