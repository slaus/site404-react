import React, {useState} from 'react';
import {TiChevronLeft, TiChevronRight} from "react-icons/ti";

const PaginationNav = ({itemsPerPage, totalItems, onPageChange, currentPage, setCurrentPage}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);
        onPageChange(currentPage + 1);
    };

    const handlePrevButton = () => {
        setCurrentPage(currentPage - 1);
        onPageChange(currentPage - 1);
    };

    const renderPaginationButtons = () => {
        const buttons = [];

        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`text-heading flex items-center justify-center rounded lg:p-4 lg:py-2 p-3 py-1 ${i === currentPage ? 'gradient text-white' : 'bg-main'}`}
                >
                    {i}
                </button>
            );
        }

        return buttons;
    };

    return (
        <div className="flex justify-center lg:gap-3 gap-2">
            <button onClick={handlePrevButton} className="text-heading bg-main flex items-center justify-center rounded p-2 py-1 lg:p-2" disabled={currentPage === 1}>
                <TiChevronLeft size={26}/>
            </button>
            <div className="pagination flex justify-center lg:gap-3 gap-2">
                {renderPaginationButtons()}
            </div>
            <button onClick={handleNextButton} className="text-heading bg-main flex items-center justify-center rounded p-2 py-1 lg:p-2" disabled={currentPage === totalPages}>
                <TiChevronRight size={26}/>
            </button>
        </div>
    );
};

export default PaginationNav;
