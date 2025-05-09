'use client';

import MapContainer from "@/components/Map/MapContainer"
export default function HomeMap() {
  return (
    <MapContainer />
  )
}

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';
// import throttle from 'lodash.throttle';

// export default function SigMap() {
//   const containerRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [hovered, setHovered] = useState(null);

//   useEffect(() => {
//     const container = d3.select(containerRef.current);

//     d3.xml('/data/map_with_data.svg').then((data) => {
//       const svgNode = data.documentElement;
//       svgNode.setAttribute('width', '100%');
//       svgNode.setAttribute('height', '100%');
//       svgNode.setAttribute('viewBox', '0 0 1000 1000');

//       container.node().appendChild(svgNode);

//       const svg = d3.select(svgNode);
//       const g = svg.append('g');
//       g.node().append(...svg.selectAll('path').nodes());

//       // 줌 & 패닝
//       svg.call(d3.zoom().on('zoom', (e) => g.attr('transform', e.transform)));

//       // 툴팁 위치 업데이트 쓰로틀링
//       const updateTooltip = throttle((x, y) => {
//         const tooltip = tooltipRef.current;
//         if (tooltip) {
//           tooltip.style.top = `${y - 40}px`;
//           tooltip.style.left = `${x - 30}px`;
//         }
//       }, 16); // ~60fps

//       // 마우스 이동 시 처리
//       g.on('mousemove', (e) => {
//         const target = e.target;
//         if (target.tagName === 'path' && target.id) {
//           const name = target.getAttribute('data-kor') || target.id;
//           if (hovered !== name) setHovered(name);

//           updateTooltip(e.clientX, e.clientY);

//           // fill 변화 최소화 (이전 것만 reset)
//           d3.selectAll('path[fill="#3b82f6"]').attr('fill', "#ffffff");
//           d3.select(target).attr('fill', '#3b82f6');
//         }
//       });

//       g.on('mouseleave', () => {
//         d3.selectAll('path').attr('fill', "#ffffff");
//         setHovered(null);
//       });

//       g.on('click', (e) => {
//         const target = e.target;
//         if (target.tagName === 'path') {
//           alert(`${target.id} 클릭됨`);
//         }
//       });
//     });

//     // cleanup (메모리 누수 방지)
//     return () => {
//       d3.select(containerRef.current).selectAll('*').remove();
//     };
//   }, []);

//   return (
//     <div className="relative w-[640px] h-[608px] overflow-hidden border shadow">
//       <div ref={containerRef} className="w-full h-full" />
//       {hovered && (
//         <div
//           ref={tooltipRef}
//           className="absolute bg-white text-xs px-2 py-1 rounded shadow pointer-events-none z-50"
//         >
//           {hovered}
//         </div>
//       )}
//     </div>
//   );
// }
