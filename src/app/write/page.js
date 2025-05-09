'use client';

import Image from "next/image";
import { dateFormat } from "@/utils/DateUtil.js"


export default function ListPage() {
// TODO 데이터 작성 백엔드 연결
// 포스트 id: post + 지역번호 5자리(ex.11100) + Timestamp 14자리(YYYYMMDDHHmmss)
// 포스트 이미지명: img + 지역번호 5자리(ex.11100) + Timestamp 14자리(YYYYMMDDHHmmss) + 0~4 (우선 최대 5장)

  return (
    <>
      <main>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">

          {/* <!-- 제목 --> */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">제목</label>
            <input type="text" placeholder="제목을 입력하세요."
              className="mt-1 w-full border border-red-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <p className="h-5 text-sm mt-1 text-red-500">
              <span className={"visible"}>제목을 입력하세요.</span>
            </p>
          </div>

          {/* <!-- 버튼 영역 (지역 선택) --> */}
          <div>
            <div className="flex items-start gap-2">
              <button className="w-1/2 bg-gray-100 text-gray-600 rounded-md py-2">경기</button>
              <button className="w-1/2 bg-gray-100 text-gray-600 rounded-md py-2">수원</button>
              <button className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 rounded-md">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.954L9 2m0 18l6-3m-6 3v-18m6 15l5.447 2.724A2 2 0 0021 18.382V8.618a2 2 0 00-1.553-1.954L15 6m0 12V6m0 0L9 3" />
                </svg>
              </button>
            </div>
            <p className="h-5 text-sm mt-1 text-red-500">
              <span className={"visible"}>지역을 선택하세요.</span>
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <img src="your-image-1.jpg" alt="이미지1" className="w-20 h-20 object-cover rounded-md" />
              <img src="your-image-2.jpg" alt="이미지2" className="w-20 h-20 object-cover rounded-md" />
              <img src="your-image-3.jpg" alt="이미지3" className="w-20 h-20 object-cover rounded-md" />
            </div>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800">
            작성완료
          </button>
        </div>

        {/* <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
          <div>
            <input type="text" placeholder="제목을 입력하세요."
              className="mt-1 w-full border border-red-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <p className="h-5 text-sm mt-1 text-red-500">
              에러 없을 땐 className="invisible"로 교체
              <span className="pl-2 visible">제목을 입력하세요.</span>
            </p>

          </div>

          <div className="flex space-x-2">
            <button className="p-2 bg-gray-200 rounded-md" onClick={() => console.log("click map button")}>
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.954L9 2m0 18l6-3m-6 3v-18m6 15l5.447 2.724A2 2 0 0021 18.382V8.618a2 2 0 00-1.553-1.954L15 6m0 12V6m0 0L9 3" />
              </svg>
            </button>
            <button className="flex-1 bg-gray-100 text-gray-500 rounded-md py-2">경기</button>
            <button className="flex-1 bg-gray-100 text-gray-500 rounded-md py-2">수원</button>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center justify-center h-[64px]">
              <input type="checkbox" checked={false} className="form-checkbox text-purple-600 mb-1" />
              <span className="text-sm text-gray-700">당일</span>
            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">여행시작일</label>
              <input type="date" value="2025-08-17"
                className="w-full h-[40px] p-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="flex-1 opacity-50">
              <label className="block text-sm text-gray-600 mb-1">여행종료일</label>
              <input type="date" value="2025-08-17"
                className="w-full h-[40px] p-2 border border-gray-300 rounded-md bg-gray-100" disabled />
            </div>
          </div>


          <div>
            <textarea placeholder="내용을 입력하세요."
              className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
            <div className="flex space-x-3">
              <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <img src="your-image-1.jpg" alt="이미지1" className="w-20 h-20 object-cover rounded-md" />
              <img src="your-image-2.jpg" alt="이미지2" className="w-20 h-20 object-cover rounded-md" />
              <img src="your-image-3.jpg" alt="이미지3" className="w-20 h-20 object-cover rounded-md" />
            </div>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800">
            작성완료
          </button>
        </div> */}

      </main>
    </>
  );
}
