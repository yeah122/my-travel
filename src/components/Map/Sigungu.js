import { useRef, useEffect } from "react";
import Tooltip from "@/components/Tooltip";

export default function SigunguMap({ ctpCode, data, onLoaded }) {
    const svgRef = useRef()
    const tooltipRef = useRef()
    const containerRef = useRef()

    useEffect(() => {
        const objectElement = svgRef.current

        const handleLoad = () => {
            if (!ctpCode || !data) return

            const svg = objectElement?.contentDocument?.querySelector("svg")
            if (!svg) return;
            tooltipRef.current.hide()

            const allPaths = svg.querySelectorAll("path[id]")
            allPaths.forEach((p) => {
                if (!data.districts.find((d) => d.SIG_CD === p.id)) {
                    p.style.display = "none" // 해당 시도의 시군구 외 나머지 숨김
                } else {
                    p.style.cursor = "pointer";
                    p.setAttribute("fill", "#d1d5db") // Tailwind gray-300

                    const korName = p.dataset.kor
                    // 원래 fill 값을 저장
                    const originalFill = p.getAttribute("fill") || "#d1d5dc";

                    p.onmouseenter = () => {
                        const samePaths = svg.querySelectorAll(`path[id="${p.id}"]`)
                        samePaths.forEach((path) => path.setAttribute("fill", "#3b82f6")) // Tailwind blue-500
                        tooltipRef.current.show(korName); 
                    }
                    p.onmouseleave = () => {
                        const samePaths = svg.querySelectorAll(`path[id="${p.id}"]`)
                        samePaths.forEach((path) => path.setAttribute("fill", originalFill))
                        tooltipRef.current.hide();
                    }
                    p.onclick = () => {
                        console.log(ctpCode, p.id, data.CTP_KOR_NM, p.dataset.kor)
                    };
                }
            });

            // 확대 (뷰박스 설정 or transform)
            svg.setAttribute("viewBox", getViewBoxForCtp(ctpCode));

            // 준비 완료 후 표시
            onLoaded(true);
        };

        objectElement?.addEventListener("load", handleLoad);

        return () => {
            objectElement?.removeEventListener("load", handleLoad);
        };
    }, [ctpCode, data]);

    // 지역별 viewBox 설정 (샘플)
    const getViewBoxForCtp = (code) => {
        const viewBoxes = {
            "11": "297 167 61 49",
            "26": "571 586 74 91",
            "27": "515 415 75 131",
            "28": "0 114 300 193",
            "29": "280 610 57 37",
            "30": "363 384 43 57",
            "31": "600 525 67 71",
            "36": "346 341 38 59",
            "41": "243 60 202 252",
            "43": "367 246 189 226",
            "44": "128 281 289 197",
            "46": "64 568 389 276",
            "47": "438 193 561 360",
            "48": "408 491 226 255",
            "50": "211 836 113 163",
            "51": "342 0 312 288",
            "52": "186 446 267 155"
        };
        console.log("viewBoxes[code]", viewBoxes[code])
        return viewBoxes[code] || "0 0 1000 1000";
    };

    const dataUrl = `/data/sigungu_with_data.svg?v=${process.env.NEXT_PUBLIC_BUILD_HASH}`
    return (
        <div className="relative h-[608px]" ref={containerRef}>
            <Tooltip ref={tooltipRef} />
            <object
                ref={svgRef}
                type="image/svg+xml"
                data={dataUrl}
                className="h-[608px]"
            />
        </div>
    );
}
