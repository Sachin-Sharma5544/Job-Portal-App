import React, { useState, useEffect } from "react";
import axios, { type AxiosResponse } from "axios";
import { Card, CardSlider } from "@repo/ui";
import { PORT } from "@repo/constants";

interface Industry {
    _id: string | null;
    companyCount: number | null;
    industryType: string | null;
}

type SelectedCard = Omit<Industry, "companyCount">;

interface IndustryType {
    industryType: Industry[];
}

interface ResData extends AxiosResponse {
    data: IndustryType;
}

interface IndustryTypeSliderProps {
    selectedCard: SelectedCard;
    handleCardClick: (a: Industry) => void;
}

const IndustryTypeSlider = (props: IndustryTypeSliderProps): JSX.Element => {
    const [industryType, setIndustryType] = useState<Industry[]>([]);
    const { selectedCard, handleCardClick } = props;

    useEffect(() => {
        const fetchIndustryData = async (): Promise<void> => {
            try {
                const { data }: ResData = await axios.get(
                    `http://localhost:${PORT}/api/industry-type`
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
    }, []);

    const showCardCount = (count: number | null): string => {
        if (!count) return "";
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
                            selectedCard._id === item._id
                                ? "border-[1px] border-black"
                                : ""
                        }`}
                        clickHandler={() => {
                            handleCardClick(item);
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

                            {selectedCard._id === item._id ? (
                                <input
                                    checked={item._id === selectedCard._id}
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
