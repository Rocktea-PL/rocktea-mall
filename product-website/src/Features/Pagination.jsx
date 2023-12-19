//mport { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import '../styles/pagination.css'

export default function Pagination({pageCount, handlePageClick}) {
   
  return (
    <div className="bg-white flex items-center justify-center py-5  mt-5 p-5 rounded-lg">
           
    <ReactPaginate
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      activeClassName={"active"}
      previousLabel={<FaAngleLeft />}
      nextLabel={<FaAngleRight />}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
    />
    </div>
  )
}
