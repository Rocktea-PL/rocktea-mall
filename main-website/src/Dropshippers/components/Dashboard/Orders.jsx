import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import '../../../styles/Dashboard.css'
import ProfileCompletion from "./ProfileCompletion";
const fakeData = [
  {
    client: "Jane Doe",
    status: "Pending",
    tracking: 12222,
    price: 30.0,
    deliveryStatus: "Delivered",
    date: "10-Sep-2022",
  },
  {
    client: "Jane Doe",
    status: "Received",
    tracking: 12222,
    price: 30.0,
    deliveryStatus: "pending",
    date: "10-Sep-2022",
  },
  {
    client: "Jane Doe",
    status: "Pending",
    tracking: 12222,
    price: 30.0,
    deliveryStatus: "enroute",
    date: "10-Sep-2022",
  },
  {
    client: "Jane Doe",
    status: "Recieved",
    tracking: 12222,
    price: 30.0,
    deliveryStatus: "pending",
    date: "10-Sep-2022",
  },
  {
    client: "Jane Doe",
    status: "Pending",
    tracking: 12222,
    price: 30.0,
    deliveryStatus: "enroute",
    date: "10-Sep-2022",
  },
  {
    client: "Jane Doe",
    status: "Pending",
    tracking: 12222,
    price: 30.0,
    deliveryStatus: "deliverd",
    date: "10-Sep-2022",
  },
];
function OrderStatus() {
  /*const handleCheckboxChange = (orderId) => {
    // Handle checkbox change if needed
    console.log("Checkbox changed for order ID:", orderId);
  };*/
  return (
    <section className="mt-5 w-full  px-5">
        <ProfileCompletion />
     <div className="overflow-x-auto">

     
<table className="w-full border-spacing-7 border-collapse  ">
    <tr className="order-table   bg-white mt-5 h-10">
        <th>Name</th>
        <th>Tracking ID</th>
        <th>Cost</th>
        <th>Payment</th>
        <th>Date</th>
       <th> Delivery</th>
    </tr>
    <tbody className="">
        {fakeData.map((item) => (
            
            <tr key ={item.id} className="table-content   w-full bg-white">
 
      
      <td className="text-center  text-sm md:text-[1rem] ">
                    {item.client}
                  </td>
                  <td className="text-center  text-sm md:text-[1rem]">
                    #{item.tracking}
                  </td>
                  <td className="text-center  text-sm md:text-[1rem]">
                    N{item.price.toFixed(2)}
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
                    {item.date}
                  </td>

                  <td
                    className={`text-center font-semibold  w-[100px] capitalize rounded-lg p-2 text-sm md:text-[1rem] flex items-center justify-center mx-auto gap-5  ${
                      item.deliveryStatus === "pending"
                        ? " text-red-500 my-2"
                        : item.deliveryStatus === "enroute"
                        ? " text-yellow-400 my-2"
                        : " text-green-700 my-2"
                    }`}
                  >
                    {item.deliveryStatus}
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

export default OrderStatus;