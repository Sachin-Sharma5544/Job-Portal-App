import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const CardSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        axios
            .post("http://localhost:5002/api/industry-type", {
                industryType: "",
            })
            .then((data) => {
                console.log("data ", data);
            })
            .catch((err) => {
                console.log("data ", err);
            });
    }, []);

    const handleScroll = (direction: "next" | "prev"): void => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth; // Scroll by one full viewport width
            const newScrollPosition =
                direction === "next"
                    ? scrollPosition + scrollAmount
                    : scrollPosition - scrollAmount;

            sliderRef.current.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
            });

            setScrollPosition(newScrollPosition);
        }
    };

    return (
        <div className="relative w-full py-20">
            {/* Previous Button */}
            <button
                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-lg"
                onClick={() => {
                    handleScroll("prev");
                }}
                type="button"
            >
                &lt;
            </button>

            {/* Card Slider */}
            <div
                className="flex overflow-x-scroll scrollbar-hide gap-4 w-full"
                ref={sliderRef}
                style={{ scrollBehavior: "smooth" }}
            >
                {/* Render Cards */}
                {Array.from({ length: 30 }).map((_, index) => (
                    <div
                        className="min-w-[180px] max-w-[200px] min-h-[90px] max-h-[100px] bg-gray-300 rounded-lg shadow-md p-4 flex items-center justify-center"
                        key={`${index}`}
                    >
                        <p>Card {index + 1}</p>
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <button
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-lg"
                onClick={() => {
                    handleScroll("next");
                }}
                type="button"
            >
                &gt;
            </button>
        </div>
    );
};

export default CardSlider;
