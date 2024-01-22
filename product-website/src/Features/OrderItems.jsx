//mport React from 'react'

import { useEffect } from "react";
import { useState } from "react";
//import { useProductPrices } from "../Hooks/UseProductPrices";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
function OrderItems() {
  const targetRef = useRef();
  const [orderItems, setOrderItems] = useState();

  useEffect(() => {
    const storedOrderItems = sessionStorage.getItem("orders");
    const initialOrderItems = storedOrderItems
      ? JSON.parse(storedOrderItems)
      : [];
    setOrderItems(initialOrderItems);
  }, []);
  console.log(orderItems);
  return (
    <section className="mt-24 max-md:mt-36">
      <div className="lg:flex gap-12">
        <aside className="lg:w-1/3 bg-white h-auto lg:h-screen flex flex-col items-center justify-center  rounded-md p-5">
          <div className="bg-[#313033] w-full h-auto lg:h-[95vh]  m-auto p-3 rounded-md text-white">
            <h3 className="text-lg mt-5">Order Receipt</h3>
            <p></p>
            <button
              onClick={() => generatePDF(targetRef, { filename: "order.pdf" })}
              className="flex items-center gap-x-3 my-4 text-[1.2rem]"
            >
              Download PDF{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_4981_8473)">
                  <path
                    d="M19 6.05157e-08H10.83C10.0343 -0.000159602 9.27102 0.315624 8.708 0.87795L2.878 6.70795C2.31562 7.27096 1.99982 8.03423 2 8.83V21C2.00087 21.7954 2.31722 22.5579 2.87964 23.1204C3.44206 23.6828 4.20462 23.9991 5 24H19C19.7954 23.9991 20.5579 23.6828 21.1204 23.1204C21.6828 22.5579 21.9991 21.7954 22 21V3C21.9991 2.20462 21.6828 1.44206 21.1204 0.879644C20.5579 0.317225 19.7954 0.00087354 19 6.05157e-08ZM16.7071 13.7071L12.7071 17.7071C12.6142 17.7999 12.504 17.8736 12.3827 17.9239C12.2613 17.9741 12.1313 18 12 18C11.8687 18 11.7387 17.9741 11.6173 17.9239C11.496 17.8736 11.3858 17.7999 11.2929 17.7071L7.29295 13.7071C7.19816 13.6146 7.12266 13.5043 7.07084 13.3825C7.01902 13.2607 6.9919 13.1298 6.99106 12.9974C6.99022 12.865 7.01568 12.7338 7.06595 12.6113C7.11623 12.4888 7.19032 12.3775 7.28393 12.2839C7.37754 12.1903 7.48881 12.1162 7.61128 12.066C7.73376 12.0157 7.86499 11.9902 7.99738 11.9911C8.12976 11.9919 8.26066 12.019 8.38249 12.0708C8.50431 12.1227 8.61463 12.1982 8.70705 12.2929L11 14.5857V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V14.5857L15.2929 12.2929C15.3854 12.1982 15.4957 12.1227 15.6175 12.0708C15.7393 12.019 15.8702 11.9919 16.0026 11.9911C16.135 11.9902 16.2662 12.0157 16.3887 12.066C16.5112 12.1162 16.6225 12.1903 16.7161 12.2839C16.8097 12.3775 16.8838 12.4888 16.934 12.6113C16.9843 12.7338 17.0098 12.865 17.0089 12.9974C17.0081 13.1298 16.981 13.2607 16.9292 13.3825C16.8773 13.5043 16.8018 13.6146 16.7071 13.7071Z"
                    fill="#F44336"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4981_8473">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </aside>
        <article
          ref={targetRef}
          className="lg:w-2/3 bg-white rounded-md p-4 max-md:pb-36 max-md:mt-5"
        >
          <h3 className="text-md">Hello, {orderItems?.buyer}</h3>
          <p className="text-[1.2rem]">Thanks for your order!</p>
          <h3 className="text-md font-semibold leading-tight mt-5">
            Deliver To <br />{" "}
            <span className="text-sm leading-tight font-normal">
              {" "}
              Benson Wang Yu <br />
              123, butwise avenue, killermore Estate, Ikoyi, Lagos state.{" "}
            </span>
          </h3>
          <div>
            <span className="flex items-center justify-between mt-5 py-3">
              <h3 className=" whitespace-nowrap md:text-md font-semibold">
                Order details
              </h3>
              <p className=" text-[0.8rem] sm:text-sm">
                {orderItems?.created_at}
              </p>
            </span>
            <hr className="border-[1.2px] " />
            <div className="flex flex-col md:flex-row md:items-start items-center justify-between my-3">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/raw/upload/iphone11promax_wff1v1.jpg"
                alt="product"
                className="w-[90%] lg:w-[100px] lg:h-[100px] rounded-md object-cover"
              />
              {orderItems?.order_items?.length > 0 &&
                orderItems.order_items.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col md:flex-row items-center justify-between gap-10"
                    >
                      <>
                        {item?.product?.length > 0 &&
                          item?.product?.map((data) => (
                            <div key={data?.sku}>
                              <h3 className="text-md font-semibold truncate">
                                {data?.name}
                              </h3>
                              <div className="flex items-center justify-between gap-5 mt-3">
                                <p className="text-center">
                                  QTY <br /> {item?.quantity}{" "}
                                </p>
                                <p>
                                  Size <br />1
                                </p>
                                <p className="lg:hidden">
                                  Price <br /> N {orderItems?.total_price}
                                </p>
                              </div>
                            </div>
                          ))}
                      </>
                    </div>
                  );
                })}

              <span className="hidden lg:flex flex-col gap-y-5">
                <p className="text-[1.2rem] font-semibold">Price</p>
                <p>N{orderItems?.total_price}</p>
              </span>
            </div>
          </div>
          <hr />
          <div className="float-right mt-3">
            <p className="flex items-start gap-x-4 my-2 font-semibold">
              SubTotal{" "}
              <span className="font-normal">N {orderItems?.total_price}</span>
            </p>
            <p className="flex items-start gap-x-4 my-2 font-semibold">
              {" "}
              Shipping <span className="font-normal">Free</span>
            </p>
            <hr className="border-[1.5px] mb-3" />
            <p className="flex items-start gap-x-5 my-2 font-semibold">
              Total{" "}
              <span className="font-normal">N {orderItems?.total_price}</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default OrderItems;
