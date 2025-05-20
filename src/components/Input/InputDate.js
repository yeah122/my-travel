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