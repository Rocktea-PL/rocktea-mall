import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../../src/styles/Dashboard.css";
//import ProfileCompletion from "./ProfileCompletion";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useUserCartContext } from "../../../src/Hooks/CartContext";

function Orders() {
  /*const handleCheckboxChange = (orderId) => {
    // Handle checkbox change if needed
    console.log("Checkbox changed for order ID:", orderId);
  };*/
  const { token } = useUserCartContext();
  const store_id = localStorage.getItem("storeId");
  const fetchStoreOrders = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/my-orders`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response.data);
    return response.data;
  };
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery("order", fetchStoreOrders, {
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
  //console.log(orders)
  return (
    <section className="mt-36 lg:mt-20 w-full  -ml-1 px-3 lg:px-10">
      {orders?.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-spacing-7 border-collapse  ">
              <tr className="order-table   bg-white mt-5 h-10">
                <th>S/N</th>
                <th>Name</th>
                <th>Tracking ID</th>
                <th>Cost</th>
                <th>Payment</th>
                <th> Delivery</th>
                <th>Date</th>
              </tr>
              <tbody className="">
                {orders.map((item, i) => (
                  <tr key={item.id} className="table-content   w-full bg-white">
                    <td className="text-center  text-sm md:text-[1rem] ">
                      {i + 1}.
                    </td>
                    <td className="text-center  text-sm md:text-[1rem] ">
                      {item.buyer}
                    </td>
                    <td className="text-center  text-sm md:text-[1rem]">
                      #{item.order_id}
                    </td>
                    <td className="text-center  text-sm md:text-[1rem]">
                      ₦ {item.total_price}
                    </td>
                    <td className="text-center text-green-700 font-semibold  text-sm md:text-[1rem]">
                      Paid
                    </td>
                    <td
                      className={`text-center font-semibold  w-[100px] capitalize rounded-lg p-2 text-sm md:text-[1rem] flex items-center justify-center mx-auto gap-5  ${
                        item.status === "Pending"
                          ? " text-red-600 my-2 "
                          : " text-green-700 my-2"
                      }`}
                    >
                      {item.status}
                    </td>
                    <td className="text-center p-2 text-sm md:text-[1rem]">
                      {item.created_at}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white flex items-end justify-end py-7  mt-5 p-5 rounded-lg">
            <div className="flex items-end gap-x-4 justify-between">
              <span>1/10</span>
              <div className="flex items-center gap-x-3">
                <button className="border border-black rounded-md p-1 font-[400]">
                  <FaAngleLeft />
                </button>
                <button className="border border-black rounded-md p-1 font-[400]">
                  <FaAngleRight />
                </button>
              </div>
              <form className="flex items-center gap-2">
                <label htmlFor="goTo"> Go To</label>
                <input
                  type="text"
                  placeholder="1-20 pages"
                  className="border border-black rounded-md w-[100px] outline-none px-2 py-1 text-sm"
                />
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white mb-3 max-w-[600px] flex flex-col items-center justify-center mx-auto py-10 rounded-md px-6">
          <img
            width={320}
            height={320}
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1701240027/rocktea-product-website/assets/Empty_Bag_ccbshd.svg"
            alt="orders"
          />
          <h3 className="text-md text-center">
            You do not have any <br /> orders yet
          </h3>
          <Link to={`/dashboard?store=${store_id}`}>
            <button className="common p-3  font-medium rounded-md mt-5">
              Go to Dashboard
            </button>
          </Link>
        </div>
      )}

      {/*

<td className=" p-2">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className={`checkbox ${
                          index !== -1 ? "unchecked border-none" : "checked"
                        }`}
                        onChange={() => handleCheckboxChange(item.orderId)}
                      />
                    </div>
                  </td>
<article className="mt-5  py-5 rounded-md w-full">
        <div className="overflow-x-auto ">
          <table className=" ">
            <thead className="">
              <tr className="mt-5 bg-white">
                <th className="py-2 px-4">Status</th>
                <th className="text-sm px-4  whitespace-nowrap py-2 ">
                  Client Name
                </th>
                <th className="text-sm px-4   whitespace-nowrap py-2">
                  Tracking Id
                </th>
                <th className="text-sm px-4  whitespace-nowrap py-2">Cost</th>
                <th className="text-sm px-4  whitespace-nowrap py-2">
                  Payment Status
                </th>
                <th className="text-sm px-4  whitespace-nowrap py-2">
                  Order Date
                </th>
                <th className="text-sm px-4  whitespace-nowrap py-2">
                  Delivery Status
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {fakeData.map((item, index) => (
                <tr key={index} className="table bg-white w-full">
                  <td className=" p-2">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className={`checkbox ${
                          index !== -1 ? "unchecked border-none" : "checked"
                        }`}
                        onChange={() => handleCheckboxChange(item.orderId)}
                      />
                    </div>
                  </td>

                  <td className="text-center p-2 text-sm md:text-[1rem] ">
                    {item.client}
                  </td>
                  <td className="text-center p-2 text-sm md:text-[1rem]">
                    #{item.tracking}
                  </td>
                  <td className="text-center p-2 text-sm md:text-[1rem]">
                    ${item.price.toFixed(2)}
                  </td>
                  <td
                    className={`text-center border-2 border-solid w-[100px] capitalize rounded-lg p-2 text-sm md:text-[1rem] flex items-center justify-center mx-auto gap-5  ${
                      item.status === "Pending"
                        ? " border-red-500 my-2"
                        : " border-green-700 my-2"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="text-center p-2 text-sm md:text-[1rem]">
                    {item.date}
                  </td>

                  <td
                    className={`text-center border-2 border-solid w-[100px] capitalize rounded-lg p-2 text-sm md:text-[1rem] flex items-center justify-center mx-auto gap-5  ${
                      item.deliveryStatus === "pending"
                        ? " border-red-500 my-2"
                        : item.deliveryStatus === "enroute"
                        ? " border-yellow-400 my-2"
                        : " border-green-700 my-2"
                    }`}
                  >
                    {item.deliveryStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

*/}
    </section>
  );
}

export default Orders;
