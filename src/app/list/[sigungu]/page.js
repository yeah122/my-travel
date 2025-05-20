'use client';

import CardGrid from "@/components/CardGrid";
import Title from "@/components/Title";
import { dateFormat } from "@/utils/DateUtil.js";
import { getSidoName, getSigunguName } from "@/utils/MapDataUtil";
import { useParams, useRouter } from "next/navigation";
import jsonData from "public/data/post_data.json";
import React from "react";


export default function ListPage() {
  const param = useParams()
  const router = useRouter()
  const [contents, setContents] = React.useState([])

  const head = React.useMemo(() => getSigunguName(param.sigungu), [param.sigungu])
  const subText = React.useMemo(() => getSidoName(param.sigungu.slice(0, 2)), [param.sigungu])

  const fetch = async () => {
    // 로딩중~
    // TODO 백엔드 연동 - 데이터 연결 필요
    try {
      const data = jsonData.map(post => {
        return {
          id: post.id,
          title: post.title,
          imgSrc: post.images[0], // 첫번째 사진이 썸네일
          imgName: post.images[0].split("/").pop(), // 첫번째 사진의 파일명 
          date:
            !!post.is_one_day ?
              dateFormat(post.start_date)
              : `${dateFormat(post.start_date)} ~ ${dateFormat(post.end_date)}`
        }
      })

      // post 영통구 데이터 임시 처리
      param.sigungu === "41117" ? setContents(data) : setContents([])
    } catch (e) {
      return
    }
  }

  const onClickEvent = val => {
    console.log(val)
    // TODO post 화면으로 이동
    router.push(`/post/${val.id}`)
  }

  React.useEffect(() => {
    fetch()
  }, [])

  return (
    <main>
      <div className="max-w-screen-lg mx-auto px-4">
        <Title
          head={head}
          subText={subText}
          headSize="lg"
        />
        {(!!contents && contents.length > 0)
          ?
          <CardGrid
            contents={contents}
            onClickEvent={onClickEvent}
          />
          :
          <div id="emptyMessage" className="text-gray-400 text-m text-center mt-10">
            아직 기록된 추억이 없어요 😢
          </div>
        }
      </div>
    </main>
  );
}