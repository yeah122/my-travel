import React from "react";
import clsx from "clsx";

export default function InputText({
    error = false,
    disabled = false,
    className = "",
    onChange,
    ...rest }) {

    const baseStyle =
        "w-full h-[40px] p-2 text-base rounded-md border box-border border-gray-100 focus:outline-none focus:ring-2";

    const dynamicStyle = clsx(
        {
            "bg-white text-black border-gray-300 focus:ring-blue-500": !error && !disabled, // default
            "bg-gray-100 text-gray-600 opacity-70": disabled, // disabled
            "bg-white text-black border-red-400": error && !disabled, // error
        },
        className
    );

    return (
        <input
            type="text"
            disabled={disabled}
            className={clsx(baseStyle, dynamicStyle)}
            onChange={onChange}
            {...rest}
        />
    );
}
