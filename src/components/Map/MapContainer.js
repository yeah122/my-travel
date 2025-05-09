import React, { useEffect, useState } from "react";
import SidoMap from "@/components/Map/SidoMap";
import Dialog from "@/components/Dialog";
import SigunguMap from "@/components/Map/Sigungu";
import provinceData from "public/data/map_info.json";
import { Home } from "lucide-react"; // 아이콘 예시 (shadcn/lucide 사용)

export default function MapContainer() {
  const [selectedCtpCode, setSelectedCtpCode] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleLoad = (isLoad) => {
    console.log("isLoad", isLoad)
    setIsMapLoaded(isLoad)
  }

  useEffect(()=>{
    setIsMapLoaded(false)
  }, [selectedCtpCode])

  return (
    <div className="relative w-[800px] h-[650px] bg-gray-50 rounded-lg shadow-lg mx-auto flex items-center justify-center">
      <Dialog visible={!isMapLoaded}/>

      {/* Home 버튼 */}
      {selectedCtpCode && (
        <button
          className="absolute top-4 left-4 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow"
          onClick={() => setSelectedCtpCode(null)}
          aria-label="홈으로"
        >
          <Home size={20} />
        </button>
      )}

      {/* 지도 표시 */}
      <div className="w-[640px] h-[608px] flex items-center justify-center">
        {!selectedCtpCode ? (
          <SidoMap onSelect={(ctpCode) => setSelectedCtpCode(ctpCode)} onLoaded={handleLoad} />
        ) : (
          <SigunguMap ctpCode={selectedCtpCode} data={provinceData[selectedCtpCode]} onLoaded={handleLoad} />
        )}
      </div>
    </div>
  );
}
