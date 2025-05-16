'use client';

import Title from "@/components/Title";
import { dateFormat } from "@/utils/DateUtil.js";
import { useParams } from "next/navigation";
import jsonData from "public/data/post_data.json";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  const param = useParams()
  // TODO 백엔드 연동
  const postData = jsonData.find(el=>el.id === param.id)

  return (
    <>
      <main>
        <div className="max-w-xl mx-auto px-4 pb-8">
          {/* 제목 */}
          <Title
            head={postData?.title}
            description={`${postData?.sigungu_name}  |  ${dateFormat(postData?.start_date)} ~ ${dateFormat(postData?.end_date)}`}
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
              {postData.images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img src={src} alt={`슬라이드 ${idx + 1}`} className="w-full h-70 object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 본문 텍스트 */}
          <div className="whitespace-pre-wrap text-sm text-gray-800 space-y-4">
            {postData.body}
          </div>
        </div>
      </main>
    </>
  );
}