'use client';

import PlusButton from "@/components/Button/PlusButton";
import MapButton from "@/components/Button/MapButton";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }) {
  const pathname = usePathname();
  
  // 숨기고 싶은 경로 목록
  const hiddenPaths = ["/", "/write"];

  const shouldShowButton = !hiddenPaths.includes(pathname);

  return (
    <>
      <main className="flex flex-col md:flex-row px-4 py-6 gap-4">
        {/* 왼쪽 사이드바 */}
        <aside className="relative hidden md:block md:w-[150px] bg-white p-4">
          left side
        </aside>

        {/* 콘텐츠 영역 */}
        <section className="w-full md:flex-1 bg-white p-4">
          {children}
        </section>

        {/* 오른쪽 사이드바 */}
        <aside className="relative hidden md:block md:w-[150px] bg-white p-4">
          right side
        </aside>
      </main>

      {/* 버튼 위치 고정 */}
      {shouldShowButton && <PlusButton />}
      {shouldShowButton && <MapButton />}
    </>

  );
}
