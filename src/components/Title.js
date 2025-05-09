export default function Title({
    head,
    subText,
    description,
    headSize = "md",
    isIndent = true // 들여쓰기 여부
}) {

    const sizeMap = {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-3xl",
    };

    return (
        <div className={`relative inline-block ${!!isIndent ? "pl-6" : ""}`}>
            <div className="flex justify-between items-end mb-1">
                <h1 className={`font-bold pr-3 ${sizeMap[headSize]}`}>
                    {head}
                </h1>
                {subText && (
                    <span className="text-sm text-gray-500">
                        {subText}
                    </span>
                )}
            </div>
            {description && (
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
        </div>
    )
}