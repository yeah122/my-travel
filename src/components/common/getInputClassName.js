import clsx from "clsx";

export function getInputClassName({ error = false, disabled = false, className = "", height = "h-[40px]" }) {
  const baseStyle = `w-full p-2 text-base rounded-md border box-border focus:outline-none focus:ring-2 ${height}`;

  const dynamicStyle = clsx(
    {
      "bg-white text-black focus:ring-blue-500": !disabled,
      "bg-gray-100 text-gray-600 opacity-70": disabled,
    },
    {
      "border-gray-300": !error,
      "border-red-400": error
    },
    className
  );

  return `${baseStyle} ${dynamicStyle}`;
}