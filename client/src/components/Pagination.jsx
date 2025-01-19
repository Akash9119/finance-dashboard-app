import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage, handlePageClick }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
