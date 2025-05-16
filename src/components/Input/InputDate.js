import clsx from "clsx";
import { getInputClassName } from "@/components/common/getInputClassName";

export default function InputDate({
    error = false,
    disabled = false,
    label,
    className = "",
    onClick,
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
        <>
            {label && <label className="block text-sm text-gray-600 mb-1">{label}</label>}
            <input
                type="date"
                disabled={disabled}
                className={getInputClassName({ error, disabled, className })}
                onClick={onClick}
                onChange={onChange}
                {...rest} />
        </>
    )
}