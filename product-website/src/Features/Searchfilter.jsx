//import React from 'react'

import { FaAngleDown } from "react-icons/fa";

export default function Searchfilter() {
  return (
    <div className="flex items-center justify-between">
        <div className="bg-white shadow-lg rounded-md mt-5">
            <h3 className="flex items-center justify-between w-[200px] rounded-md bg-white p-2 py-3">Show Filter <FaAngleDown /></h3>
        </div>
        <div>
            <h3  className="flex items-center gap-3 justify-between  bg-white shadow-md mt-5 px-4 rounded-md py-3">Sort By <FaAngleDown /></h3>
        </div>
    </div>
  )
}
