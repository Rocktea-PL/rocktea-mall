import { useGlobalContext } from "../src/hooks/context";
import { ImageWithLoading } from "../src/Components/ImageLoader";
//import {Link} from 'react-router-dom'
function BankDetails() {
  const { handleFormSubmit } = useGlobalContext();
  return (
    <section className="relative h-screen w-full gap-20 flex flex-col md:flex-row items-center justify-center md:justify-start p-0 m-0 md:overflow-hidden">
      <figure className=" relative hidden lg:max-w-[50%] w-[570px] lg:block lg:h-screen ">
        <ImageWithLoading
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694961328/rocktea-main-website/assets/IMG_7813_mtdsgq.jpg"
          alt=""
          className=" h-auto object-cover"
        />
      </figure>
      <div className="form">
        <figure className="flex items-center justify-center mt-2  mb-5">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421637/rocktea-main-website/assets/rocktea-logo_qlaflj.png"
            width={120}
            height={120}
            alt="logo"
            loading="lazy"
          />
        </figure>
        <h2 className="mt-0 text-center leading-[1.5rem]">
          Your money is yours
        </h2>
        <h4 className="text-center text-[var(--yellow)] mb-4 mt-3">
          Payment Details
        </h4>
        <div className="scrollable-container">
          <form>
            <div className="grid md:grid-cols-1 gap-2 px-5  mb-10">
              <label className="">
                <span className="flex items-center gap-2 mt-3">
                  Name on Card
                  <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg" />
                </span>
                <input type="text" placeholder="John Doe" />
              </label>
              <label className="">
                <span className="flex items-center gap-2 mt-2">
                  Card Number
                  <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg" />
                </span>
                <input type="text" placeholder="1234/5678/9012/3456" />
              </label>
              <label className="">
                <span className="flex items-center gap-2 mt-2">
                  CVV/CVC
                  <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg" />
                </span>
                <input type="text" placeholder="123" />
              </label>
              <label className="">
                <span className="flex items-center gap-2 mt-3">
                  Expiry date
                  <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg" />
                </span>
                <input type="text" placeholder="19/04" />
              </label>
            </div>
          </form>
          <div className="flex items-center justify-center ">

            <a
            href='http://localhost:5173/dashboard'
              className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg"
              onClick={handleFormSubmit}
            >
              continue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BankDetails;
