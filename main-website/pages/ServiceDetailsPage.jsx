import DetailsThumbnails from "../src/Components/Services/DetailsThumbnails";
import { FaLocationDot } from "react-icons/fa6";
import "../src/styles/swiper.css";
function ServiceDetailsPage() {
  return (
    <section className="lg:flex mt-20">
      <DetailsThumbnails />
      <article className="lg:w-1/2 flex flex-col gap-y-3">
        <div className="bg-white p-4 rounded-md flex flex-col gap-y-2">
          <h3 className="!text-md !mb-1">Anike La Glamour</h3>
          <h4 className="text-[#79747E] text-[18px]">Makeup Artist</h4>
          <h5>4+ years of experience</h5>
          <span className="flex text-[#79747E] items-center  gap-3 text-[15px] mt-3">
            <FaLocationDot /> Ikoyi, Lagos
          </span>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col gap-y-2">
          <h3 className="!text-[22px] !mb-1 flex items-center gap-x-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M28.2494 13.3423C27.8164 13.0906 27.4273 12.7699 27.0974 12.393C27.1307 11.8682 27.2557 11.3533 27.4667 10.8717C27.8547 9.77701 28.2934 8.53701 27.5894 7.57301C26.8854 6.60901 25.5561 6.63967 24.3894 6.66634C23.8739 6.71938 23.3531 6.68421 22.8494 6.56234C22.581 6.12568 22.3894 5.64632 22.2827 5.14501C21.9521 4.01834 21.5747 2.74501 20.4161 2.36367C19.2987 2.00367 18.2641 2.79567 17.3494 3.49167C16.9547 3.8521 16.4974 4.13724 16.0001 4.33301C15.4975 4.13884 15.0351 3.85362 14.6361 3.49167C13.7241 2.79967 12.6934 1.99967 11.5707 2.36501C10.4147 2.74101 10.0374 4.01834 9.70405 5.14501C9.59756 5.64469 9.4078 6.12292 9.14272 6.55967C8.63808 6.68122 8.11662 6.71727 7.60005 6.66634C6.42939 6.63434 5.11072 6.59967 4.40005 7.57301C3.68939 8.54634 4.13339 9.77701 4.52272 10.8703C4.73664 11.3513 4.8635 11.8664 4.89739 12.3917C4.56816 12.7691 4.17949 13.0902 3.74672 13.3423C2.77072 14.009 1.66272 14.7677 1.66272 15.9997C1.66272 17.2317 2.77072 17.9877 3.74672 18.657C4.17939 18.9087 4.56805 19.2294 4.89739 19.6063C4.86706 20.1314 4.74382 20.647 4.53339 21.129C4.14672 22.2223 3.70939 23.4623 4.41205 24.4263C5.11472 25.3903 6.44005 25.3597 7.61205 25.333C8.12801 25.2799 8.64924 25.3151 9.15339 25.437C9.42056 25.8741 9.61171 26.3533 9.71872 26.8543C10.0494 27.981 10.4267 29.2543 11.5854 29.6357C11.7711 29.6952 11.965 29.7258 12.1601 29.7263C13.0977 29.5918 13.9691 29.1654 14.6507 28.5077C15.0454 28.1473 15.5027 27.8621 16.0001 27.6663C16.5026 27.8605 16.965 28.1457 17.3641 28.5077C18.2774 29.205 19.3121 30.001 20.4307 29.6343C21.5867 29.2583 21.9641 27.981 22.2974 26.8557C22.4042 26.3551 22.5954 25.8762 22.8627 25.4397C23.3654 25.3173 23.8853 25.2812 24.4001 25.333C25.5707 25.361 26.8894 25.3997 27.6001 24.4263C28.3107 23.453 27.8667 22.2223 27.4774 21.1277C27.2649 20.6472 27.1381 20.1332 27.1027 19.609C27.4321 19.2312 27.8213 18.9101 28.2547 18.6583C29.2307 17.9917 30.3387 17.2317 30.3387 15.9997C30.3387 14.7677 29.2267 14.0103 28.2494 13.3423Z"
                fill="#49ADF4"
              />
              <path
                d="M14.6667 19.666C14.5354 19.6663 14.4053 19.6405 14.284 19.5901C14.1627 19.5398 14.0526 19.4659 13.9601 19.3727L11.2934 16.706C11.1168 16.5165 11.0206 16.2657 11.0252 16.0067C11.0298 15.7476 11.1347 15.5004 11.3179 15.3172C11.5011 15.134 11.7483 15.029 12.0074 15.0245C12.2665 15.0199 12.5172 15.116 12.7067 15.2927L14.7601 17.346L19.4001 13.866C19.6123 13.7069 19.879 13.6386 20.1415 13.6761C20.4041 13.7136 20.641 13.8538 20.8001 14.066C20.9592 14.2782 21.0275 14.5449 20.99 14.8074C20.9525 15.07 20.8123 15.3069 20.6001 15.466L15.2667 19.466C15.0936 19.5958 14.8831 19.6659 14.6667 19.666Z"
                fill="white"
              />
            </svg>
            Verified User
          </h3>
          <h4 className=" ">It is safe to transact with this user</h4>
          <h5>
            Charges <br />{" "}
            <span className="text-orange font-semibold text-md">
              ₦20,000/hr
            </span>{" "}
          </h5>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col gap-y-2">
          <h3 className="!text-md !mb-1 text-center">Safety Tips</h3>
          <li>Check Feedback to make sure the person is reliable</li>
          <li>Agree on the scope of work and remuneration</li>
          <li>Meet in person at a safe public place</li>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col gap-y-2">
          <h3 className="!text-md !mb-1 text-center">Report User</h3>
          <button className="bg-orange text-white w-full h-14 flex items-center justify-center mx-auto">
            Report
          </button>
        </div>
      </article>
    </section>
  );
}

export default ServiceDetailsPage;
