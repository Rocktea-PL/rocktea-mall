import axios from "axios";
import { useQuery } from "react-query";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

export default function Cards() {
  const fetchProductCount = async () => {
    const store_id = localStorage.getItem("storeId");
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/mall/count/?store=${store_id}`,
    );
    console.log(response.data);
    return response.data;
  };
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const {
    data: productCount,
    isLoading,
    isError,
  } = useQuery("productCount", fetchProductCount, {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: twentyFourHoursInMs, // Fetch only when 'id' is available
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading product count</p>;
  }

  const totalOrders = productCount?.Orders || 0;
  const orderPercentage = (totalOrders / 200) * 100;

  const totalProducts = productCount?.Listed_Products || 0;
  const productPercentage = (totalProducts / 1000) * 100;

  const totalCustomers = productCount?.Customers || 0;
  const customerPercentage = (totalCustomers / 100) * 100;

  //console.log(data)
  return (
    <div className=" flex gap-2 flex-col md:flex-row">
      <article className="bg-white flex flex-col gap-y-5 lg:gap-y-0  py-3 px-5 shadow-md rounded-md w-full   gap-3">
        <div>
          <p className="flex items-center text-[20px] mt-5 leading-tight">
            Total <br /> Orders
          </p>

          <div className="flex items-center gap-3 leading-tight mt-2">
            <h3 className="font-bold  text-[1.4rem]">
              {productCount?.Orders || 0}{" "}
            </h3>
          </div>
          <div
            className={`italic flex gap-x-2 text-[#017601] font-[300] ${
              orderPercentage < 100 && "text-red-500"
            }`}
          >
            {orderPercentage}%
            {orderPercentage < 100 ? (
              <span className="text-red-600 text-md">
                <AiOutlineFall />
              </span>
            ) : (
              <span className="text-[#017601] text-md">
                <AiOutlineRise />
              </span>
            )}
          </div>
        </div>
      </article>

      <article className="bg-white flex flex-col gap-y-5 py-3 px-5 shadow-md rounded-md w-full   gap-3">
        <div>
          <p className="flex items-center text-[20px] mt-5 leading-tight">
            Total <br /> Products
          </p>

          <div className="flex items-center gap-3 mt-2">
            <h3 className="font-bold  text-[1.4rem]">
              {productCount?.Listed_Products || 0}
            </h3>
          </div>
          <div
            className={`italic flex gap-x-2 text-[#017601] font-[300] ${
              productPercentage < 100 && "text-red-500"
            }`}
          >
            {productPercentage}%
            {productPercentage < 100 ? (
              <span className="text-red-600 text-md">
                <AiOutlineFall />
              </span>
            ) : (
              <span className="text-[#017601] text-md">
                <AiOutlineRise />
              </span>
            )}
          </div>
        </div>
      </article>
      <article className="bg-white flex flex-col gap-y-5 py-3 px-5 shadow-md rounded-md w-full   gap-3">
        <div>
          <p className="flex items-center text-[20px] mt-5 leading-tight">
            Total <br /> Customers
          </p>

          <div className="flex items-center gap-3 mt-2">
            <h3 className="font-bold  text-[1.4rem]">
              {productCount?.Customers || 0}{" "}
            </h3>
          </div>
          <div
            className={`italic flex gap-x-2 text-[#017601] font-[300] ${
              customerPercentage < 100 && "text-red-500"
            }`}
          >
            {customerPercentage}%
            {customerPercentage < 100 ? (
              <span className="text-red-600 text-md">
                <AiOutlineFall />
              </span>
            ) : (
              <span className="text-[#017601] text-md">
                <AiOutlineRise />
              </span>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

/*  <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M19.2422 24.0234H5.76562C5.32699 24.0214 4.90691 23.8462 4.59675 23.5361C4.28659 23.2259 4.11143 22.8058 4.10938 22.3672V13.5781C4.11144 13.1381 4.28767 12.7169 4.59952 12.4065C4.91137 12.0961 5.33345 11.9219 5.77344 11.9219H19.2422C19.6835 11.9219 20.1068 12.0972 20.4189 12.4093C20.7309 12.7213 20.9062 13.1446 20.9062 13.5859V22.3672C20.9042 22.8072 20.728 23.2284 20.4161 23.5388C20.1043 23.8492 19.6822 24.0234 19.2422 24.0234ZM5.76562 13.0859C5.63645 13.088 5.51326 13.1407 5.42264 13.2328C5.33202 13.3249 5.28123 13.4489 5.28125 13.5781V22.3672C5.28125 22.4977 5.33311 22.6229 5.42541 22.7152C5.51771 22.8075 5.6429 22.8594 5.77344 22.8594H19.2422C19.3714 22.8594 19.4954 22.8086 19.5875 22.718C19.6796 22.6274 19.7323 22.5042 19.7344 22.375V13.5781C19.7324 13.4503 19.6807 13.3283 19.5903 13.2378C19.4999 13.1474 19.3778 13.0958 19.25 13.0938L5.76562 13.0859Z"
                  fill="#FF0000"
                />
                <path
                  d="M18.5547 13.0859H6.44531V7.03125C6.44531 5.42545 7.08322 3.88541 8.21869 2.74994C9.35416 1.61447 10.8942 0.976563 12.5 0.976562C14.1058 0.976563 15.6458 1.61447 16.7813 2.74994C17.9168 3.88541 18.5547 5.42545 18.5547 7.03125V13.0859ZM7.61719 11.9141H17.3828V7.03125C17.3828 5.73625 16.8684 4.49429 15.9527 3.57858C15.037 2.66288 13.795 2.14844 12.5 2.14844C11.205 2.14844 9.96304 2.66288 9.04733 3.57858C8.13163 4.49429 7.61719 5.73625 7.61719 7.03125V11.9141Z"
                  fill="#FF0000"
                />
                <path
                  d="M19.2422 12.5H5.76565C5.62378 12.499 5.48312 12.5262 5.35185 12.58C5.22057 12.6338 5.10131 12.7132 5.00099 12.8135C4.90067 12.9138 4.82129 13.0331 4.76748 13.1643C4.71367 13.2956 4.68649 13.4363 4.68753 13.5782V22.3672C4.68752 22.5084 4.71547 22.6483 4.76974 22.7786C4.82402 22.909 4.90356 23.0273 5.00377 23.1268C5.10399 23.2263 5.2229 23.305 5.35366 23.3583C5.48442 23.4116 5.62444 23.4386 5.76565 23.4375H19.2422C19.5261 23.4375 19.7983 23.3248 19.999 23.124C20.1998 22.9233 20.3125 22.6511 20.3125 22.3672V13.5782C20.3136 13.4369 20.2866 13.2969 20.2333 13.1662C20.18 13.0354 20.1013 12.9165 20.0018 12.8163C19.9023 12.7161 19.784 12.6365 19.6536 12.5822C19.5233 12.528 19.3834 12.5 19.2422 12.5ZM13.0938 18.8125V20.711C13.0938 20.8664 13.032 21.0154 12.9222 21.1253C12.8123 21.2352 12.6632 21.2969 12.5078 21.2969C12.3524 21.2969 12.2034 21.2352 12.0935 21.1253C11.9836 21.0154 11.9219 20.8664 11.9219 20.711V18.8125C11.423 18.6711 10.9921 18.354 10.7087 17.9197C10.4253 17.4855 10.3085 16.9634 10.3799 16.4497C10.4513 15.9361 10.706 15.4657 11.0971 15.1252C11.4882 14.7847 11.9893 14.5971 12.5078 14.5971C13.0264 14.5971 13.5275 14.7847 13.9186 15.1252C14.3097 15.4657 14.5644 15.9361 14.6358 16.4497C14.7072 16.9634 14.5904 17.4855 14.307 17.9197C14.0236 18.354 13.5927 18.6711 13.0938 18.8125Z"
                  fill="#FF0000"
                />
              </svg>
            </span> */
