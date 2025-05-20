import clsx from "clsx";

export default function InputCheckbox({
    name = "",
    checked = false,
    label = "",
    direction = "vertical",
    width = "w-[40px]",
    height = "h-[64px]",
    onChange }) {

    const style = clsx(
        {
            "flex-col items-center justify-end": direction === "vertical",
            "flex-row items-center gap-2": direction === "horizontal"
        }
    )

    return (
        <div
            className={clsx(`flex ${width} ${height}`, style)}
        >
            <input
                name={name}
                type="checkbox"
                checked={checked}
                className={"form-checkbox mb-1"}
                onChange={onChange} />
            <span className="text-sm text-gray-700">{label}</span>
        </div>
    )
}