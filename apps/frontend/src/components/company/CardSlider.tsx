import React, { useState, useRef, useEffect } from "react";
import axios, { type AxiosResponse } from "axios";

interface Industry {
    _id: string;
    companyCount: number;
    industryType: string;
}

interface IndustryType {
    industryType: Industry[];
}

interface ResData extends AxiosResponse {
    data: IndustryType;
}

const CardSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [industryType, setIndustryType] = useState<Industry[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<string | null>(null);

    useEffect(() => {
        const fetchIndustryData = async (): Promise<void> => {
            try {
                const { data }: ResData = await axios.get(
                    `http://localhost:5002/api/industry-type/${selectedIndex}`
                );

                setIndustryType(data.industryType);
            } catch (err) {
                setIndustryType([]);
            }
        };

        void fetchIndustryData();

        return () => {
            setIndustryType([]);
        };
    }, [selectedIndex]);

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

    const handleCardClick = (id: string): void => {
        setSelectedIndex(id);
    };

    const showCardCount = (count: number): string => {
        if (count === 1) return `${count} Company >`;
        if (count < 1000) return `${count} Companies >`;
        const result = (count / 1000).toFixed(3);
        const formattedResult = parseFloat(result).toFixed(1);

        if (parseFloat(result) % 1 !== 0) {
            return `${formattedResult}K+ Companies >`;
        }
        return `${formattedResult}K Companies >`;
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
                {industryType.map((item) => (
                    <button
                        className={`min-w-[220px] max-w-[240px] min-h-[100px] max-h-[110px] bg-zinc-100 rounded-xl shadow-md p-4 hover:cursor-pointer relative ${
                            selectedIndex === item._id
                                ? "border-[1px] border-black"
                                : ""
                        }`}
                        key={item._id}
                        onClick={() => {
                            handleCardClick(item._id);
                        }}
                        type="button"
                    >
                        <p className="text-xl font-bold">{item.industryType}</p>
                        <p className="pt-2 text-blue-600">
                            {showCardCount(item.companyCount)}
                        </p>

                        {selectedIndex !== null &&
                        selectedIndex === item._id ? (
                            <input
                                checked={item._id === selectedIndex}
                                className="appearance-none w-3 h-3 text-black rounded-full absolute right-3 top-3 checked:bg-black checked:border-none"
                                type="checkbox"
                            />
                        ) : null}
                    </button>
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
