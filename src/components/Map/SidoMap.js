import { useRef, useEffect, useCallback, useState } from "react";
import Tooltip from "@/components/Tooltip";

export default function SidoMap({ onSelect, onLoaded }) {
  const svgRef = useRef()
  const tooltipRef = useRef()
  const containerRef = useRef()

  const handleNode = useCallback(() => {
    const svg = svgRef.current?.contentDocument?.querySelector("svg")
    if (!svg) return;
    tooltipRef.current.hide()

    const paths = svg.querySelectorAll("path[id]")
    paths.forEach((path) => {
      path.style.cursor = "pointer";
      path.setAttribute("fill", "#d1d5dc")

      const korName = path.dataset.kor
      // 원래 fill 값을 저장
      const originalFill = path.getAttribute("fill") || "#d1d5dc"

      path.onmouseenter = (e) => {
        path.setAttribute("fill", "#3b82f6"); // Tailwind blue-500
        tooltipRef.current.show(korName)
      }
      path.onmouseleave = () => {
        path.setAttribute("fill", originalFill)
        tooltipRef.current.hide()
      }
      path.onclick = () => onSelect(path.id)
    });

    return true;
    // return () => {
    //     paths.forEach((p) => p.replaceWith(p.cloneNode(true)));
    // };
  }, [onSelect])

  useEffect(() => {
    const objectEl = svgRef.current

    const tryInit = () => {
      const isHandled = handleNode()
      if (isHandled) {
        onLoaded(true) // 실제 성공했을 때만 true 전달
      }
    };

    if (objectEl?.contentDocument?.readyState === "complete") {
      // 캐시된 경우도 강제로 재확인
      setTimeout(tryInit, 0)
    } else {
      objectEl?.addEventListener("load", tryInit)
    }

    return () => {
      objectEl?.removeEventListener("load", tryInit)
    };
  }, [handleNode]);

  const dataUrl = `/data/sido_with_data.svg?v=${process.env.NEXT_PUBLIC_BUILD_HASH}`
  return (
    <div className="relative h-[608px]" ref={containerRef}>
      <Tooltip ref={tooltipRef} />
      <object
        ref={svgRef}
        type="image/svg+xml"
        data={dataUrl}
        className="h-[608px]"
        onLoad={handleNode}
      />

    </div>
  );
}