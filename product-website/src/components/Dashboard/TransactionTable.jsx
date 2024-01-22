//import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../styles/Dashboard.css";
import "../../styles/pagination.css";
import { LuCalendarRange } from "react-icons/lu";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
//import ReactPaginate from "react-paginate";
import { useState } from "react";
import { paginateData } from "../../Helpers/Paginations";
import Pagination from "../../Features/Pagination";
import { FaAngleDown } from "react-icons/fa";
import Cookies from "js-cookie";
export default function TransactionTable() {
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
  return (
    <section className="mt-5 w-full  -ml-1">
      <div className="flex items-center justify-between bg-white p-5 shadow-md rounded-md mb-8">
        <h3 className="text-[1.3rem] font-medium text-blue">
          Transaction History
        </h3>
        <div className="flex items-center gap-3 ">
          <span className="flex items-center gap-1 text-blue text-[1.2rem]">
            All
            <FaAngleDown />
          </span>
          <span className="flex items-center gap-1 text-blue text-[1.3rem]">
            <LuCalendarRange />
            <FaAngleDown />
          </span>
        </div>
      </div>
      {currentOrders?.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-spacing-7 border-collapse  ">
              <tr className="order-table   bg-white mt-5 h-10">
                <th>Name</th>
                <th>Date</th>
                <th>Invoice</th>
                <th>Amount</th>
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

                    <td className="text-center p-2 text-sm md:text-[1rem]">
                      {item.created_at}
                    </td>
                    <td className="text-center  text-sm md:text-[1rem]">
                      ₦ {item.total_price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </>
      ) : (
        <div className="bg-white mb-3 max-w-full flex flex-col items-center justify-center mx-auto py-10 rounded-md px-6">
          <img
            width={320}
            height={320}
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1701240027/rocktea-product-website/assets/Empty_Bag_ccbshd.svg"
            alt="orders"
          />
          <h3 className="text-md text-center text-blue leading-tight">
            You do not have any <br />
            Transaction History yet
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
