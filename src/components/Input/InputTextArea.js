import React from "react";
import clsx from "clsx";
import { getInputClassName } from "@/components/common/getInputClassName";

export default function InputTextArea({
    error = false,
    disabled = false,
    placeholder = "",
    className = "",
    onChange,
    ...rest }) {

    return (
        <textarea
            placeholder="내용을 입력하세요."
            disabled={disabled}
            className={getInputClassName({error, disabled, className: clsx("resize-none", className), height: "h-40"})}
            onChange={onChange}
            {...rest}>
        </textarea>
    );
}
