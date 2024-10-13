import React, { useState, useRef } from "react";

interface CardSliderProps {
    children: JSX.Element;
}

export function CardSlider(props: CardSliderProps): JSX.Element {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

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
        <>
            <div className="py-5" />
            <div className="relative w-full py-5 px-8 bg-zinc-300 rounded-lg ">
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
                    {/* Render Cards here*/}
                    {props.children}
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
        </>
    );
}
