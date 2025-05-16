'use client';

import Button from "@/components/Button/Button";
import ImageUploader from "@/components/ImageUploader";
import InputDate from "@/components/Input/InputDate";
import InputText from "@/components/Input/InputText";
import InputTextArea from "@/components/Input/InputTextArea";
import { Map } from "lucide-react";


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
              <InputDate
                label="여행시작일"
                value="2025-08-17"
                onClick={e => { console.log(e.target.value) }}
                onChange={e => { console.log(e.target.value) }} />
            </div>
            <div className="w-1/2">
              <InputDate
                label="여행종료일"
                value="2025-08-17"
                disabled
                onClick={e => { console.log(e.target.value) }}
                onChange={e => { console.log(e.target.value) }} />
            </div>
            <div className="flex flex-col items-center justify-end w-[40px] h-[64px]">
              <input
                type="checkbox"
                checked={true}
                className="form-checkbox text-purple-600 mb-1"
                onChange={e => console.log(e.target.checked)} />
              <span className="text-sm text-gray-700">당일</span>
            </div>
          </div>
          <p className="h-5 text-sm mt-1 text-red-500">
            <span className={"visible"}>날짜를 선택하세요.</span>
          </p>
        </div>

        {/* 본문 */}
        <div>
          <InputTextArea
            placeholder="내용을 입력하세요"
            onChange={e => console.log(e.target.value)}
          />
        </div>

        {/* 이미지 */}
        <ImageUploader />

        <Button
          state="primary"
          width="full"
          fontWeigth="bold"
          onClick={() => { console.log("작성완료 버튼 클릭") }}>
          작성완료
        </Button>
      </div>
    </main>

  );
}
