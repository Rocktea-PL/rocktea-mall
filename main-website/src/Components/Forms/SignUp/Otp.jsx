//import Button from "../src/Components/Button"

//import { PaystackButton } from 'react-paystack';
import { Oval } from "react-loader-spinner";
import { useGlobalContext } from "../../../hooks/context";

function Otp() {
  const { initiatePayment, isLoading } = useGlobalContext();
  //console.log(componentProps.email)
  const handlePaymentInitiation = () => {
    const owner = localStorage.getItem("owner"); // Get the owner from localStorage

    if (!owner) {
      console.error("Owner information not found.");
      return;
    }
    const formData = new FormData();
    formData.append("store_owner", owner);
    initiatePayment(formData); // Pass the owner information to initiatePayment
  };
  return (
    <div className="px-10 mt-7 overflow-auto h-full mb-10">
      <h2 className="text-black text-[1.3rem] md:text-lg leading-tight">
        Complete Store Creation
      </h2>
      <p className="text-orange mt-2 text-sm md:text-[20px]">Payment Process</p>
      <figure className="m-auto w-[250px] h-[250px]">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696738400/rocktea-main-website/assets/credit-card_1_mpkfjr.png"
          alt="credit card"
          className="w-full"
        />
      </figure>
      <p className="text-sm md:text-[18px] my-7 tracking-normal leading-[1.6]">
        To complete your store creation process, you’d need to make a payment of{" "}
        <span className="font-semibold">NGN 150,000. </span>
        This payment covers your domain hosting for 2 years, custom branding
        services for your store (e.g Custom Delivery Bags, Custom souvenir
        packages e.t.c) and many more. You’ll receive samples of these within a
        week, which starts counting a day after you make this payment.
      </p>

      <button
        onClick={handlePaymentInitiation}
        className=" text-white  bg-[var(--yellow)] w-[160px] h-14 text-[22px] rounded-lg mx-auto flex items-center justify-center gap-3"
      >
        {isLoading ? (
          <Oval
            height={30}
            width={30}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#f6f6f6"
            strokeWidth={7}
            strokeWidthSecondary={7}
          />
        ) : (
          <>
            Pay
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M40.3125 11.3702V33.6297C40.3125 34.4356 40.0251 35.1258 39.4505 35.7005C38.8759 36.2751 38.1856 36.5624 37.3798 36.5624H7.62023C6.81436 36.5624 6.12411 36.2751 5.54948 35.7005C4.97486 35.1258 4.68755 34.4356 4.68755 33.6297V11.3702C4.68755 10.5643 4.97486 9.87406 5.54948 9.29944C6.12411 8.72481 6.81436 8.4375 7.62023 8.4375H37.3798C38.1856 8.4375 38.8759 8.72481 39.4505 9.29944C40.0251 9.87406 40.3125 10.5643 40.3125 11.3702ZM7.04325 15.9664H37.9567V11.3702C37.9567 11.2259 37.8966 11.0937 37.7764 10.9735C37.6562 10.8533 37.524 10.7932 37.3798 10.7932H7.62023C7.47598 10.7932 7.34376 10.8533 7.22358 10.9735C7.10336 11.0937 7.04325 11.2259 7.04325 11.3702V15.9664ZM7.04325 21.2355V33.6297C7.04325 33.774 7.10336 33.9062 7.22358 34.0264C7.34376 34.1466 7.47598 34.2067 7.62023 34.2067H37.3798C37.524 34.2067 37.6562 34.1466 37.7764 34.0264C37.8966 33.9062 37.9567 33.774 37.9567 33.6297V21.2355H7.04325Z"
                fill="white"
              />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}

export default Otp;
/** <button
          onClick={handlePaymentInitiation}
          className="flex items-center justify-center bg-[var(--yellow)] py-3 px-5 rounded-lg"
        >
          Procceed to payment
        </button> */
