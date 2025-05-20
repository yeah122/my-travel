'use client';

import Button from "@/components/Button/Button";
import ErrorMessage from "@/components/ErrorMessage";
import ImageUploader from "@/components/ImageUploader";
import InputCheckbox from "@/components/Input/InputCheckbox";
import InputDate from "@/components/Input/InputDate";
import InputText from "@/components/Input/InputText";
import InputTextArea from "@/components/Input/InputTextArea";
import { dateFormat, getNowDate } from "@/utils/DateUtil";
import { getSidoName, getSigunguName } from "@/utils/MapDataUtil";
import { Map } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";


export default function WritePage() {
  // TODO 데이터 작성 백엔드 연결
  // 포스트 id: post + 지역번호 5자리(ex.11100) + Timestamp 14자리(YYYYMMDDHHmmss)
  // 포스트 이미지명: img + 지역번호 5자리(ex.11100) + Timestamp 14자리(YYYYMMDDHHmmss) + 0~4 (우선 최대 5장)

  const param = useSearchParams()

  const [formData, setFormData] = React.useState({
    title: "",
    content: "",
    sido: "",
    sigungu: "",
    startDate: getNowDate("YYYY-MM-DD"),
    endDate: getNowDate("YYYY-MM-DD"),
    isOneDay: false,
    image: []
  })
  const [errors, setErrors] = React.useState({
    title: false,
    content: false,
    sigungu: false,
    startDate: false,
    endDate: false,
    image: false
  });

  const handleChange = e => {
    const { value, valueAsDate, checked, name, type } = e.target
    const newValue = type === "checkbox"
      ? checked
      : type === "date"
        ? dateFormat(valueAsDate, "YYYY-MM-DD")
        : value;

    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: newValue
      }

      const shouldEnd2Start = (name === "startDate" && prev.isOneDay) || (name === "isOneDay" && newValue)
      if (shouldEnd2Start) updated.endDate = updated.startDate

      return updated

    })

    if (type !== "checkbox" && errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }))
    }
  }

  const imageClick = () => {
    if (errors.image) {
      setErrors(prev => ({ ...prev, image: false }))
    }
  }

  const imageChange = images => {
    if (images) {
      setFormData(prev => ({ ...prev, image: images }))
    }
  }

  const validation = () => {
    const requiredKeys = ["title", "content", "sigungu", "startDate", "endDate"];

    const newErrors = requiredKeys.reduce((acc, key) => {
      acc[key] = formData[key] === ""
      return acc
    }, { image: formData.image.length <= 0 })

    console.log(newErrors)
    setErrors(newErrors)

    return !Object.values(newErrors).includes(true)
  }

  const handleSubmit = () => {
    if (validation()) {
      console.log("작성완료")
    } else {
      console.log("입력 값 에러")
    }
  }

  React.useEffect(() => {
    const sigunguCode = param.get("sigungu")
    if (!sigunguCode) return;
    setFormData(prev => ({
      ...prev,
      sigungu: getSigunguName(sigunguCode),
      sido: getSidoName(sigunguCode.slice(0, 2))
    }))
  }, [])

  return (
    <main>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
        {/* <!-- 제목 --> */}
        <div>
          <InputText
            name="title"
            placeholder="제목을 입력하세요."
            value={formData.title}
            onChange={handleChange}
            error={errors.title}
          />
          <ErrorMessage
            error={errors.title}
            errorMessage="제목을 입력하세요."
          />
        </div>

        {/* <!-- 버튼 영역 (지역 선택) --> */}
        <div>
          <div className="flex items-start gap-2">
            <InputText
              name="sido"
              value={formData.sido}
              className="text-center"
              disabled
              error={errors.sigungu}
            />
            <InputText
              name="sigungu"
              value={formData.sigungu}
              className="text-center"
              disabled
              error={errors.sigungu}
            />
            <Button
              state="secondary"
              width="none"
              onClick={() => { console.log("지역 선택 지도 버튼 클릭") }}>
              <Map size={24} />
            </Button>
          </div>
          <ErrorMessage
            error={errors.sigungu}
            errorMessage="지역을 선택하세요."
          />
        </div>

        {/* <!-- 날짜 --> */}
        <div>
          <div className="flex items-start gap-2 mt-4">
            <div className="w-1/2">
              <InputDate
                name="startDate"
                label="여행시작일"
                value={formData.startDate}
                error={errors.startDate}
                onClick={e => { console.log("여행시작일 onClick", e.target.value) }}
                onChange={handleChange} />
            </div>
            <div className="w-1/2">
              <InputDate
                name="endDate"
                label="여행종료일"
                value={formData.endDate}
                disabled={formData.isOneDay}
                error={errors.endDate}
                onClick={e => { console.log("여행종료일 onClick", e.target.value) }}
                onChange={handleChange} />
            </div>
            <InputCheckbox
              name="isOneDay"
              checked={formData.isOneDay}
              label="당일"
              onChange={handleChange} />

          </div>
          <ErrorMessage
            error={errors.startDate || errors.endDate}
            errorMessage="날짜를 선택하세요."
          />
        </div>

        {/* 본문 */}
        <div>
          <InputTextArea
            name="content"
            placeholder="내용을 입력하세요"
            value={formData.content}
            error={errors.content}
            onChange={handleChange}
          />
          <ErrorMessage
            error={errors.content}
            errorMessage="내용을 입력하세요."
          />
        </div>

        {/* 이미지 */}
        <div>
          <ImageUploader
            error={errors.image}
            onClick={imageClick}
            onChange={imageChange}
          />
          <ErrorMessage
            error={errors.image}
            errorMessage="사진을 등록하세요."
          />
        </div>

        <Button
          state="primary"
          width="full"
          fontWeigth="bold"
          onClick={handleSubmit}>
          작성완료
        </Button>
      </div>
    </main>

  );
}
