import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PageChanger = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center gap-4 my-2">
            {/* Left arrow */}
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`p-2 rounded-md ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-myCardBg'} `}
            >
                <ChevronLeft />
            </button>

            {/* Page numbers */}
            <div className="flex items-center gap-2 text-base font-semibold">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded-md ${page === currentPage ? 'bg-myCardBg text-white' : 'bg-myBg2 text-myBlue2 hover:bg-myCardBg'}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Right arrow */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-myCardBg'} `}
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default PageChanger;
