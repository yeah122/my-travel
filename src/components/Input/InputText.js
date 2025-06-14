import React from "react";
import clsx from "clsx";
import { getInputClassName } from "@/components/common/getInputClassName";

export default function InputText({
    error = false,
    disabled = false,
    className = "",
    onChange,
    ...rest }) {

    return (
        <input
            type="text"
            disabled={disabled}
            className={getInputClassName({ error, disabled, className })}
            onChange={onChange}
            {...rest}
        />
    );
}
