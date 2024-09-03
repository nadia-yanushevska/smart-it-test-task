import React from "react";
import { ButtonProp } from "../../helpers/custom-types";
import s from './Button.module.css'
import clsx from "clsx";

function Button({ text, onClick }: ButtonProp): React.ReactNode {
    const className = text.toLocaleLowerCase() === 'delete'? clsx(s.red, s.button) : s.button
    return (
        <button className={className} type="button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
