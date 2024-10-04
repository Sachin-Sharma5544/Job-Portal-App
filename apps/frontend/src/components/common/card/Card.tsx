import React from "react";

interface CardProp {
    children: JSX.Element;
    classes: string;
    clickHandler?: () => void;
}

const Card = (props: CardProp): JSX.Element => {
    return (
        <div className={props.classes} onClick={props.clickHandler}>
            {props.children}
        </div>
    );
};

export default Card;
