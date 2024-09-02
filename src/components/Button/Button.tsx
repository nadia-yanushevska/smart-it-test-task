import React from "react";
import { ButtonProp } from "../../helpers/custom-types";

function Button({ text, onClick }: ButtonProp): React.ReactNode {
    return (
        <button type="button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
