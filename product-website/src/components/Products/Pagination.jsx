import { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 125;

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const spread = 2; // Number of pages to spread on each side of the current page
    const maxButtons = 5; // Maximum number of buttons to show
    const pageNumbers = [];

    let start = Math.max(currentPage - spread, 1);
    let end = Math.min(start + maxButtons - 1, totalPages);

    if (end - start < maxButtons - 1) {
      start = Math.max(end - maxButtons + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-3 mt-5 mb-7">
      <button
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-sm ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[var(--orange)] text-black hover:bg-[var(--orange)]'
        }`}
      >
        Previous
      </button>
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={`px-4 py-2 rounded-sm ${
            pageNumber === currentPage
              ? 'bg-[var(--orange)] text-black'
              : 'border border-solid border-[var(--orange)] text-gray-700 hover:bg-[var(--orange)] hover:text-black'
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <span className="text-gray-600  bg-[var(--product-bg)] px-4 py-3 rounded-sm whitespace-nowrap text-sm">---</span>
      <button
        onClick={() => setCurrentPage(totalPages)}
        className={`px-4 py-2 rounded-sm ${
          currentPage === totalPages
            ? 'border border-solid border-[var(--orange)] text-black cursor-not-allowed'
            : 'border border-solid border-[var(--orange)] text-black hover:bg-[var(--orange)]'
        }`}
      >
        {totalPages}
      </button>
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-sm ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[var(--orange)] text-black hover:bg-[var(--orange)]'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
