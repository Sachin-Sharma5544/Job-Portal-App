import React, { useState } from "react";
import CardSlider from "../components/company/IndustryTypeSlider";
import CompanyList from "../components/company/CompanyList";

interface SelectedCard {
    _id: string | null;
    industryType: string | null;
}

export const CompanyPage = (): JSX.Element => {
    const [selectedCard, setSelectedCard] = useState<SelectedCard>({
        _id: null,
        industryType: null,
    });

    const handleCardClick = ({ _id, industryType }: SelectedCard): void => {
        setSelectedCard({ _id, industryType });
    };

    return (
        <>
            <CardSlider
                handleCardClick={handleCardClick}
                selectedCard={selectedCard}
            />
            <CompanyList industryType={selectedCard.industryType} />
        </>
    );
};
