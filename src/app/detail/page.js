'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { dateFormat } from "@/utils/DateUtil.js"
import Title from "@/components/Title";

export default function Home() {
  const images = [
    '/data/img/post_001_01.png',
    '/data/img/post_001_02.jpg',
    '/data/img/post_001_03.jpg'
  ];

  return (
    <>
      <main>
        <div className="max-w-xl mx-auto px-4 pb-8">
          {/* 제목 */}
          <Title
            head="행궁동 나들이~~"
            description={`${"수원"}  |  ${dateFormat("20250415")} ~ ${dateFormat("20250416")}`}
            headSize="md"
            isIndent={false}
          />

          {/* Swiper 슬라이더 */}
          <div className="relative my-6">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              className="rounded-lg overflow-hidden"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img src={src} alt={`슬라이드 ${idx + 1}`} className="w-full h-70 object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 본문 텍스트 */}
          <div className="text-sm text-gray-800 space-y-4">
            <p>
              이곳은 본문~~
            </p>
            <p>
              냠냠굿~
            </p>
          </div>

          {/* 좌우 아이콘 예시 (기능은 임의 설정 가능) */}
          <div className="flex justify-between items-center mt-8">
            <button className="text-2xl text-gray-600 hover:text-black">＋</button>
            <button className="text-2xl text-gray-600 hover:text-black">⚙️</button>
          </div>
        </div>
      </main>
    </>
  );
}