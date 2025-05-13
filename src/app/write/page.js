'use client';

import { Map } from "lucide-react";
import Button from "@/components/Button/Button"
import InputText from "@/components/Input/InputText"
import React, { useState } from "react";


export default function ListPage() {
  // TODO 데이터 작성 백엔드 연결
  // 포스트 id: post + 지역번호 5자리(ex.11100) + Timestamp 14자리(YYYYMMDDHHmmss)
  // 포스트 이미지명: img + 지역번호 5자리(ex.11100) + Timestamp 14자리(YYYYMMDDHHmmss) + 0~4 (우선 최대 5장)

  // const [product, setProduct] = React.useState("경기도")

  const onChange = e => {
    console.log(e.target.value)
    // setProduct(e.target.value)
  }

  return (
    <>
      <main>
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
          {/* <!-- 제목 --> */}
          <div>
            <InputText
              placeholder="제목을 입력하세요."
              value={""}
              onChange={onChange}
              error
            />
            <p className="h-5 text-sm mt-1 text-red-500">
              <span className={"visible"}>제목을 입력하세요.</span>
            </p>
          </div>

          {/* <!-- 버튼 영역 (지역 선택) --> */}
          <div>
            <div className="flex items-start gap-2">
              <InputText
                value={"경기도"}
                className="text-center"
                disabled
              />
              <InputText
                value={"수원시 영통구"}
                className="text-center"
                disabled />
              <Button
                state="secondary"
                width="none"
                onClick={() => { console.log("지역 선택 지도 버튼 클릭") }}>
                <Map size={24} />
              </Button>
            </div>
            <p className="h-5 text-sm mt-1 text-red-500">
              <span className={"invisible"}>지역을 선택하세요.</span>
            </p>
          </div>

          {/* <!-- 날짜 --> */}
          <div>
            <div className="flex items-start gap-2 mt-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">여행시작일</label>
                <input type="date" value="2025-08-17"
                  className="w-full h-[40px] p-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div className="w-1/2 opacity-50">
                <label className="block text-sm text-gray-600 mb-1">여행종료일</label>
                <input type="date" value="2025-08-17"
                  className="w-full h-[40px] p-2 border border-gray-300 rounded-md bg-gray-100" disabled />
              </div>
              <div className="flex flex-col items-center justify-end w-[40px] h-[64px]">
                <input type="checkbox" checked className="form-checkbox text-purple-600 mb-1" />
                <span className="text-sm text-gray-700">당일</span>
              </div>
            </div>
            <p className="h-5 text-sm mt-1 text-red-500">
              <span className={"visible"}>날짜를 선택하세요.</span>
            </p>
          </div>

          {/* 본문 */}
          <div>
            <textarea placeholder="내용을 입력하세요."
              className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          </div>

          {/* 이미지 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
            <div className="flex space-x-3">
              <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <img src="your-image-1.jpg" alt="이미지1" className="w-20 h-20 object-cover rounded-md" />
              <img src="your-image-2.jpg" alt="이미지2" className="w-20 h-20 object-cover rounded-md" />
              <img src="your-image-3.jpg" alt="이미지3" className="w-20 h-20 object-cover rounded-md" />
            </div>
          </div>

          <Button
            state="primary"
            width="full"
            fontWeigth="bold"
            onClick={() => { console.log("작성완료 버튼 클릭") }}>
            작성완료
          </Button>
        </div>
      </main>
    </>
  );
}
