import React, { useState, useEffect } from "react";
import axios, { type AxiosResponse } from "axios";
import Card from "../common/card/Card";
import CardSlider from "../common/card/CardSlider";

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

const IndustryTypeSlider: React.FC = () => {
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
        <CardSlider>
            <>
                {industryType.map((item) => (
                    <Card
                        classes={`min-w-[220px] max-w-[240px] min-h-[100px] max-h-[110px] relative ${
                            selectedIndex === item._id
                                ? "border-[1px] border-black"
                                : ""
                        }`}
                        clickHandler={() => {
                            handleCardClick(item._id);
                        }}
                        key={item._id}
                    >
                        <>
                            <p className="text-xl font-bold">
                                {item.industryType}
                            </p>
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
                        </>
                    </Card>
                ))}
            </>
        </CardSlider>
    );
};

export default IndustryTypeSlider;
