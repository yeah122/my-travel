'use client';

import { dateFormat } from "@/utils/DateUtil.js"
import CardGrid from "@/components/CardGrid"
import Title from "@/components/Title"


export default function ListPage() {
  // TODO 백엔드 연동
  const contents = jsonData.map(post => {
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

  const onClickEvent = (e) => {
    console.log(e)
    // TODO detail 화면으로 이동
  }

  return (
    <main>
      <div className="max-w-screen-lg mx-auto px-4">
        <Title
          head="수원시 영통구"
          subText="경기"
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

// TODO 백엔드 연동
// sigungu_code를 기준으로, start date 최신순으로 검색
const jsonData = [
  {
    "id": "post_001",
    "title": "행궁동 나들이~~",
    "start_date": "2025-04-20T00:00:00.000Z",
    "end_date": "2025-04-20T00:00:00.000Z",
    "is_one_day": true,
    "body": "따뜻한 봄날, 수원 행궁동에서 먹고 걷고 쉬었던 하루 :)",
    "sido_code": "41",
    "sigungu_code": "41115",
    "sido_name": "경기",
    "sigungu_name": "수원시 영통구",
    "images": [
      "/data/img/post_001_01.png",
      "/data/img/post_001_02.jpg",
      "/data/img/post_001_03.jpg"
    ],
    "created_at": "2025-04-21T08:30:00.000Z",
    "updated_at": "2025-04-21T08:30:00.000Z",
    "deleted_at": null,
    "is_published": true,
    "view_count": 42,
    "like_count": 5,
    "tags": [
      "데이트",
      "맛집",
      "산책"
    ],
    "mood": "편안",
    "companion": "친구",
    "cost": 38000,
    "transportation": "지하철"
  },
  {
    "id": "post_002",
    "title": "이것은 갈비인가 통닭인가",
    "start_date": "2025-04-20T00:00:00.000Z",
    "end_date": "2025-04-25T00:00:00.000Z",
    "is_one_day": false,
    "body": "냠냠굿~!",
    "sido_code": "41",
    "sigungu_code": "41115",
    "sido_name": "경기",
    "sigungu_name": "수원시 영통구",
    "images": [
      "/data/img/post_002_01.jpg"
    ],
    "created_at": "2025-04-26T08:30:00.000Z",
    "updated_at": "2025-04-26T08:30:00.000Z",
    "deleted_at": null,
    "is_published": true,
    "view_count": 42,
    "like_count": 5,
    "tags": [
      "데이트",
      "맛집",
      "산책"
    ],
    "mood": "편안",
    "companion": "친구",
    "cost": 38000,
    "transportation": "지하철"
  },

  {
    "id": "post_003",
    "title": "행궁동 나들이~~",
    "start_date": "2025-04-20T00:00:00.000Z",
    "end_date": "2025-04-20T00:00:00.000Z",
    "is_one_day": true,
    "body": "따뜻한 봄날, 수원 행궁동에서 먹고 걷고 쉬었던 하루 :)",
    "sido_code": "41",
    "sigungu_code": "41115",
    "sido_name": "경기",
    "sigungu_name": "수원시 영통구",
    "images": [
      "/data/img/post_001_01.png",
      "/data/img/post_001_02.jpg",
      "/data/img/post_001_03.jpg"
    ],
    "created_at": "2025-04-21T08:30:00.000Z",
    "updated_at": "2025-04-21T08:30:00.000Z",
    "deleted_at": null,
    "is_published": true,
    "view_count": 42,
    "like_count": 5,
    "tags": [
      "데이트",
      "맛집",
      "산책"
    ],
    "mood": "편안",
    "companion": "친구",
    "cost": 38000,
    "transportation": "지하철"
  },
  {
    "id": "post_004",
    "title": "이것은 갈비인가 통닭인가",
    "start_date": "2025-04-20T00:00:00.000Z",
    "end_date": "2025-04-25T00:00:00.000Z",
    "is_one_day": false,
    "body": "냠냠굿~!",
    "sido_code": "41",
    "sigungu_code": "41115",
    "sido_name": "경기",
    "sigungu_name": "수원시 영통구",
    "images": [
      "/data/img/post_002_01.jpg"
    ],
    "created_at": "2025-04-26T08:30:00.000Z",
    "updated_at": "2025-04-26T08:30:00.000Z",
    "deleted_at": null,
    "is_published": true,
    "view_count": 42,
    "like_count": 5,
    "tags": [
      "데이트",
      "맛집",
      "산책"
    ],
    "mood": "편안",
    "companion": "친구",
    "cost": 38000,
    "transportation": "지하철"
  },

  {
    "id": "post_005",
    "title": "행궁동 나들이~~",
    "start_date": "2025-04-20T00:00:00.000Z",
    "end_date": "2025-04-20T00:00:00.000Z",
    "is_one_day": true,
    "body": "따뜻한 봄날, 수원 행궁동에서 먹고 걷고 쉬었던 하루 :)",
    "sido_code": "41",
    "sigungu_code": "41115",
    "sido_name": "경기",
    "sigungu_name": "수원시 영통구",
    "images": [
      "/data/img/post_001_01.png",
      "/data/img/post_001_02.jpg",
      "/data/img/post_001_03.jpg"
    ],
    "created_at": "2025-04-21T08:30:00.000Z",
    "updated_at": "2025-04-21T08:30:00.000Z",
    "deleted_at": null,
    "is_published": true,
    "view_count": 42,
    "like_count": 5,
    "tags": [
      "데이트",
      "맛집",
      "산책"
    ],
    "mood": "편안",
    "companion": "친구",
    "cost": 38000,
    "transportation": "지하철"
  }
]