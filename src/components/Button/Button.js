'use client'

export default function Button({
  children,
  onClick,
  width = "mid",
  state = "default",
  round = "default",
  fontWeigth = "default",
  disabled = false }) {

  const widthStyle = {
    "mid": "w-1/2",
    "full": "w-full",
    "none": ""
  }

  const stateStyle = {
    "primary": `h-[40px] bg-gray-500 text-white ${disabled ? "opacity-70" : "hover:bg-gray-600"}`,
    "secondary": `h-[40px] bg-whtie border border-gray-300 box-border text-gray-600 ${disabled ? "opacity-70" : "hover:bg-gray-200 hover:border-gray-200"}`,
    "submit": `h-[40px] bg-black text-white ${disabled ? "opacity-70" : "hover:bg-gray-700"}`,
    "shadow": `h-[40px] bg-white text-base text-black shadow-md ${disabled ? "opacity-70" : "hover:bg-gray-200"}`
  }

  const roundStyle = {
    "default": "rounded-md",
    "full": "rounded-full"
  }

  const fontWeightStyle = {
    "default": "font-normal",
    "light": "font-light",
    "bold": "font-semibold"
  }


  // 보류
  // const fontSizeStyle = {
  //     "default": "text-base",
  //     "xs": "text-xs",
  //     "lg": "text-lg",
  //     "xl": "text-xl"
  // }

  return (
    <button
      className={`p-2 ${widthStyle[width] ?? ""} ${stateStyle[state]} ${roundStyle[round]} ${fontWeightStyle[fontWeigth]}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}