//import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../styles/Dashboard.css";
import "../../styles/pagination.css";
import ProfileCompletion from "./ProfileCompletion";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
//import ReactPaginate from "react-paginate";
import { useState } from "react";
import { paginateData } from "../../Helpers/Paginations";
import Pagination from "../../Features/Pagination";
import Cookies from "js-cookie";
function OrderStatus() {
  const [currentPage, setCurrentPage] = useState(0);
  //const [currentPage, setCurrentPage] = useState(0);

  const store_id = Cookies.get("storeId");
  const fetchStoreOrders = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/mall/store_order?store=${store_id}`,
    );
    console.log(response.data);
    return response.data;
  };
  //const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery(["order", store_id], fetchStoreOrders);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading product count</p>;
  }

  /*const ordersPerPage = 10;
  const pageCount = Math.ceil(orders.length / ordersPerPage);*/

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const { currentOrders, pageCount } = paginateData(orders, currentPage);

  /*const indexOfLastOrder = (currentPage + 1) * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);*/
  //console.log(currentOrders)
  return (
    <section className="mt-5 w-full  -ml-1">
      <ProfileCompletion />
      {currentOrders?.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-spacing-7 border-collapse  ">
              <tr className="order-table   bg-white mt-5 h-10">
                <th>Buyer</th>
                <th>Tracking ID</th>
                <th>Cost</th>
                <th>Payment</th>
                <th> Delivery</th>
                <th>Date</th>
              </tr>
              <tbody className="">
                {currentOrders.map((item) => (
                  <tr key={item.id} className="table-content   w-full bg-white">
                    <td className="text-center capitalize  text-sm md:text-[1rem] ">
                      {item.buyer.name}
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

          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
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
          <Link to={`/dashboard/home?store=${store_id}`}>
            <button className="common p-3  font-medium rounded-md mt-5">
              Go to Dashboard
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default OrderStatus;
