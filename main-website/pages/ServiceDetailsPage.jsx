import DetailsThumbnails from "../src/Components/Services/DetailsThumbnails";
import { FaLocationDot } from "react-icons/fa6";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../src/styles/swiper.css";
function ServiceDetailsPage() {
  const { id } = useParams();
  const fetchCarts = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/business_info/${id}`,
      {},
    );
    // console.log('data', response.data)
    return response.data;
  };
  const { data: servicesDetail, isLoading: isLoading } = useQuery(
    ["details", id],
    fetchCarts,
    { enabled: true, staleTime: 5 * (60 * 1000), cacheTime: 10 * (60 * 1000) },
  );

  if (isLoading) {
    return <p className="mt-20">Loading...</p>;
  }

  const phoneNumber = servicesDetail?.contact; // Replace with your actual phone number

  const handleContactClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };
  return (
    <section className="lg:flex gap-x-4 mt-20">
      <div className="lg:w-1/2 ">
        <DetailsThumbnails servicesDetail={servicesDetail} />
        <article className="bg-white p-4 rounded-md flex flex-col gap-y-2 my-5 w-[95%]">
          <h3 className="text-[1.7rem]">Service Store Details</h3>
          <hr />
          <h3 className="!text-md !mb-1 ">
            {servicesDetail?.name || "Anike La Glamour"}{" "}
          </h3>
          <h4 className="text-[#79747E] text-[18px]">
            {" "}
            {servicesDetail?.name || "Makeup Artist"}
          </h4>
          <div className="flex items-center justify-between max-w-[300px]">
            <h5>
              {servicesDetail?.years_of_experience || "4+ years of experience"}{" "}
              {servicesDetail?.years_of_experience > 1 ? "years" : " year"}
            </h5>
            <span className="flex text-[#79747E] items-center  gap-2 text-[15px] ">
              <FaLocationDot /> Ikoyi, Lagos
            </span>
          </div>
          <p>
            {servicesDetail?.about ||
              `Anike La Glamor: Nigeria&#39;s premier makeup store. Our curated
collection celebrates diversity, offering quality beauty products
inspired by culture. Experience the essence of Nigerian allure
and global glamour.`}{" "}
          </p>
          <h4>
            Address <br /> 135b Ismaila saka Close, princeston estate, Lekki.
          </h4>
          <button
            onClick={handleContactClick}
            className="bg-orange text-white w-full h-14 flex items-center justify-center mx-auto mt-5 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
            >
              <path
                d="M23.9489 24.7942C23.8811 24.5214 23.4492 24.1197 22.6535 23.5899C22.438 23.4228 22.1309 23.1959 21.7335 22.908C21.3357 22.6201 20.9747 22.3547 20.651 22.1123C20.3267 21.8699 20.0228 21.6351 19.7389 21.4081C19.6936 21.3627 19.5515 21.2303 19.3129 21.0101C19.074 20.7906 18.8726 20.6276 18.7075 20.5213C18.5427 20.4157 18.3807 20.3625 18.2216 20.3625C17.9944 20.3625 17.7105 20.5786 17.3697 21.0101C17.0289 21.4422 16.7163 21.9115 16.4323 22.4195C16.1483 22.9273 15.8471 23.3967 15.5292 23.8285C15.2109 24.2605 14.9493 24.4763 14.745 24.4763C14.6424 24.4763 14.5145 24.4382 14.3613 24.3629C14.2081 24.2872 14.0915 24.2224 14.0115 24.1701C13.9322 24.1167 13.7962 24.0109 13.6028 23.8513C13.4092 23.6922 13.3015 23.6051 13.2788 23.5899C11.7219 22.4381 10.3868 21.1199 9.27296 19.6355C8.15951 18.1503 7.17067 16.3703 6.30703 14.2944C6.29569 14.2641 6.23019 14.1201 6.11096 13.8627C5.99155 13.605 5.91196 13.4234 5.8722 13.3171C5.83244 13.2111 5.78413 13.0557 5.72741 12.8512C5.67069 12.6467 5.64221 12.4764 5.64221 12.3399C5.64221 12.0673 5.80419 11.7187 6.1281 11.2944C6.45194 10.8703 6.80432 10.4687 7.18488 10.0902C7.56574 9.71165 7.91776 9.29485 8.24173 8.84048C8.56557 8.38587 8.72749 8.00728 8.72749 7.70432C8.72749 7.49234 8.68772 7.27622 8.60826 7.05659C8.52873 6.83649 8.40657 6.56791 8.24173 6.24958C8.07682 5.93141 7.97741 5.7422 7.94326 5.6813C7.77298 5.30279 7.59703 4.89754 7.41499 4.46569C7.23294 4.03393 7.03424 3.55265 6.81823 3.02242C6.6024 2.49243 6.43206 2.08319 6.30691 1.79535C5.9094 0.734969 5.6083 0.158966 5.40369 0.0683785C5.3241 0.0229255 5.20469 0 5.04576 0C4.73875 0 4.33825 0.0756223 3.84395 0.227344C3.34947 0.378828 2.96037 0.537714 2.67623 0.70464C2.10802 1.02265 1.50577 1.94684 0.86931 3.47687C0.28975 4.9008 0 6.31016 0 7.70392C0 8.11268 0.0198819 8.51037 0.0596456 8.89708C0.0994094 9.28339 0.170459 9.71905 0.272853 10.204C0.375069 10.6888 0.457522 11.0489 0.519854 11.2834C0.582246 11.5181 0.698732 11.9384 0.86925 12.5447C1.03953 13.1508 1.14192 13.5218 1.17602 13.6582C1.57371 15.1431 2.04533 16.4687 2.59073 17.6354C3.48811 19.5747 4.71272 21.5789 6.26387 23.6471C7.81507 25.7152 9.31797 27.3478 10.7726 28.5447C11.6476 29.2718 12.6422 29.9005 13.7558 30.4311C13.8581 30.4763 14.1364 30.6125 14.5909 30.8404C15.0454 31.0675 15.3609 31.2228 15.5369 31.3062C15.713 31.3896 15.9831 31.4996 16.3464 31.6361C16.7105 31.7727 17.037 31.8674 17.3267 31.9208C17.6167 31.9731 17.915 32.0001 18.2217 32.0001C19.267 32.0001 20.3241 31.6135 21.3923 30.8409C22.5398 29.9927 23.2328 29.1896 23.4714 28.4314C23.5969 28.053 23.7158 27.5341 23.8294 26.8748C23.9434 26.2159 24 25.682 24 25.2727C24.0004 25.0599 23.9832 24.9011 23.9489 24.7942Z"
                fill="white"
              />
            </svg>{" "}
            {servicesDetail?.contact || "08123456789"}
          </button>
        </article>
      </div>

      <article className="lg:w-1/2 flex flex-col gap-y-3">
        <div className="bg-white p-4 rounded-md flex flex-col gap-y-2">
          <h3 className="!text-md !mb-1 ">
            {servicesDetail?.name || "Anike La Glamour"}{" "}
          </h3>
          <h4 className="text-[#79747E] text-[18px]">
            {" "}
            {servicesDetail?.name || "Makeup Artist"}
          </h4>

          <h5>
            {servicesDetail?.years_of_experience || "4+ years of experience"}{" "}
            {servicesDetail?.years_of_experience > 1 ? "years" : " year"}
          </h5>
          <span className="flex text-[#79747E] items-center  gap-2 text-[15px] ">
            <FaLocationDot /> Ikoyi, Lagos
          </span>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col gap-y-2">
          <h3 className="!text-[22px] !mb-1 flex items-center gap-x-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
