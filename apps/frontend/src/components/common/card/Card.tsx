import React from "react";

interface CardProp {
    children: JSX.Element;
    classes: string;
    clickHandler?: () => void;
}

const Card = (props: CardProp): JSX.Element => {
    return (
        <div
            className={`rounded-2xl p-5 bg-zinc-100 hover:cursor-pointer shadow-md ${props.classes}`}
            onClick={props.clickHandler}
        >
            {props.children}
        </div>
    );
};

export default Card;
