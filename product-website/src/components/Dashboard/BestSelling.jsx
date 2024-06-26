import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
export default function BestSelling() {
  const fetchStoreOrders = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/mall/best_selling`,
    );
    console.log(response.data);
    return response.data;
  };
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const {
    data: bestSelling,
    isLoading,
    isError,
  } = useQuery("best", fetchStoreOrders, {
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

  return (
    <div className="bg-white mt-5 p-5 rounded-md mb-5">
      <h3 className="flex items-center text-blue gap-2 text-[20px] font-medium  ">
        Best Selling{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M4.69547 23.0545C4.69547 23.6068 5.14318 24.0545 5.69547 24.0545H9.52644C10.0787 24.0545 10.5264 23.6068 10.5264 23.0545V14.4455C10.5264 13.8932 10.0787 13.4455 9.52644 13.4455H5.69547C5.14318 13.4455 4.69547 13.8932 4.69547 14.4455V23.0545ZM12.0969 23.0545C12.0969 23.6068 12.5446 24.0545 13.0969 24.0545H16.903C17.4553 24.0545 17.903 23.6068 17.903 23.0545V6.94547C17.903 6.39318 17.4553 5.94547 16.903 5.94547H13.0969C12.5446 5.94547 12.0969 6.39318 12.0969 6.94547V23.0545ZM19.4735 23.0545C19.4735 23.6068 19.9212 24.0545 20.4735 24.0545H24.3045C24.8568 24.0545 25.3045 23.6068 25.3045 23.0545V16.9455C25.3045 16.3932 24.8568 15.9455 24.3045 15.9455H20.4735C19.9212 15.9455 19.4735 16.3932 19.4735 16.9455V23.0545ZM4.125 25.6249C3.57272 25.6249 3.125 25.1772 3.125 24.6249V12.875C3.125 12.3227 3.57272 11.875 4.125 11.875H9.52644C10.0787 11.875 10.5264 11.4273 10.5264 10.875V5.375C10.5264 4.82272 10.9742 4.375 11.5264 4.375H18.4735C19.0258 4.375 19.4735 4.82272 19.4735 5.375V13.375C19.4735 13.9273 19.9212 14.375 20.4735 14.375H25.8749C26.4272 14.375 26.8749 14.8227 26.8749 15.375V24.6249C26.8749 25.1772 26.4272 25.6249 25.8749 25.6249H4.125Z"
              fill="#002440"
            />
          </svg>
        </span>
      </h3>
      <article className=" lg:max-h-[200px] max-h-[300px] overflow-y-auto mt-5">
        {bestSelling.map((item, index) => (
          <>
            <Link to={`/product_details/${item?.id}`}>
              <div
                key={index}
                className="text-dashblue h-auto flex items-center gap-x-5 mt-3 bg-primary border border-gray-300 rounded-md p-5 lg:py-2"
              >
                <img
                  src={
                    item?.images[0]?.url ||
                    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422699/rocktea-product-website/assets/ProductDet3_kgdxcf.png"
                  }
                  width={40}
                  height={40}
                  className="object-cover rounded-[5px]"
                  alt="product"
                />
                <div className="">
                  <h3 className="flex font-semibold items-center text-dashblue gap-x-4 lg:-mt-2">
                    {item.name}{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M7.13061 10.4687H7.91584V6.87498H7.13061V10.4687ZM7.4998 5.85177C7.62745 5.85177 7.73472 5.80937 7.82159 5.72458C7.90847 5.6398 7.95191 5.53369 7.95191 5.40625C7.95191 5.27559 7.90853 5.16654 7.82178 5.07909C7.73503 4.99166 7.62783 4.94794 7.50017 4.94794C7.36984 4.94794 7.26191 4.99166 7.17637 5.07909C7.09083 5.16654 7.04806 5.27559 7.04806 5.40625C7.04806 5.53369 7.09144 5.6398 7.17819 5.72458C7.26494 5.80937 7.37214 5.85177 7.4998 5.85177ZM7.5038 13.4375C6.68177 13.4375 5.91094 13.2816 5.19131 12.97C4.47169 12.6583 3.84288 12.2336 3.30489 11.6958C2.7669 11.1581 2.34201 10.5293 2.0302 9.80948C1.7184 9.08966 1.5625 8.31844 1.5625 7.49583C1.5625 6.67588 1.71833 5.90516 2.03 5.18367C2.34167 4.46219 2.76637 3.8342 3.30412 3.29969C3.84188 2.76517 4.47066 2.34201 5.19048 2.0302C5.91031 1.7184 6.68153 1.5625 7.50414 1.5625C8.32409 1.5625 9.09481 1.71833 9.8163 2.03C10.5378 2.34167 11.1658 2.76464 11.7003 3.29891C12.2348 3.83319 12.658 4.46146 12.9698 5.18373C13.2816 5.906 13.4375 6.67681 13.4375 7.49617C13.4375 8.3182 13.2816 9.08903 12.97 9.80866C12.6583 10.5283 12.2353 11.1564 11.7011 11.6932C11.1668 12.2299 10.5385 12.6548 9.81623 12.9678C9.09397 13.2809 8.32316 13.4375 7.5038 13.4375ZM7.50519 12.6522C8.93708 12.6522 10.1529 12.1513 11.1526 11.1494C12.1524 10.1476 12.6522 8.92934 12.6522 7.49478C12.6522 6.06289 12.153 4.84707 11.1546 3.84734C10.1562 2.8476 8.93795 2.34773 7.49998 2.34773C6.06889 2.34773 4.85241 2.84695 3.85055 3.84539C2.84867 4.84382 2.34773 6.06202 2.34773 7.49998C2.34773 8.93108 2.84867 10.1476 3.85055 11.1494C4.85241 12.1513 6.07063 12.6522 7.50519 12.6522Z"
                          fill="black"
                          fillOpacity="0.58"
                        />
                      </svg>
                    </span>
                  </h3>
                  <p className="">
                    {" "}
                    Unit Sold - {item?.sales_count?.sales_count}
                  </p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </article>
    </div>
  );
}
