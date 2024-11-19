import React from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

const PaginationNav = ({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="pagination flex justify-center gap-2 lg:gap-3">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="text-heading bg-main flex items-center justify-center rounded p-2 py-1 lg:p-2"
      >
        <TiChevronLeft size={26} />
      </button>
      <div className="pagination flex justify-center lg:gap-3 gap-2">
        <button
          onClick={() => paginate(1)}
          className={`text-heading flex items-center justify-center rounded lg:p-4 lg:py-2 p-3 py-1 ${currentPage === 1 ? 'gradient text-white' : 'bg-main'}`}
        >
          1
        </button>

        {currentPage > 3 && <span>...</span>}

        {currentPage > 2 && currentPage !== 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className="text-heading flex items-center justify-center rounded lg:p-4 lg:py-2 p-3 py-1 bg-main"
          >
            {currentPage - 1}
          </button>
        )}

        {currentPage !== 1 && currentPage !== totalPages && (
          <button className="text-heading flex items-center justify-center rounded lg:p-4 lg:py-2 p-3 py-1 gradient text-white">{currentPage}</button>
        )}

        {currentPage < totalPages - 1 && currentPage !== totalPages && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="text-heading flex items-center justify-center rounded lg:p-4 lg:py-2 p-3 py-1 bg-main"
          >
            {currentPage + 1}
          </button>
        )}

        {currentPage < totalPages - 2 && <span>...</span>}

        {totalPages > 1 && (
          <button
            onClick={() => paginate(totalPages)}
            className={`text-heading flex items-center justify-center rounded lg:p-4 lg:py-2 p-3 py-1 ${currentPage === totalPages ? 'gradient text-white' : 'bg-main'}`}
          >
            {totalPages}
          </button>
        )}
      </div>

      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className="text-heading bg-main flex items-center justify-center rounded p-2 py-1 lg:p-2"
      >
        <TiChevronRight size={26} />
      </button>
    </div>
  );
};

export default PaginationNav;
