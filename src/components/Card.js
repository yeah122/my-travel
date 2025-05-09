'use client';

/** 
 * content
 *     * title: 제목 (required)
 *     * imgSrc: 이미지경로 (required)
 *     * imgName: 이미지이름(alt) (required)
 *     date: 날짜
*/
export default function Card({ content = {}, onClickEvent }) {

    const data = content
    data.isDate = !!data.date
    // console.log("[ Card Component's data ]", data)

    return (
        <div onClick={() => onClickEvent(content)} className="w-[200px] cursor-pointer flex flex-col items-center hover:scale-105 transition-transform">
            <img src={data.imgSrc} alt={data.imgName} className="w-full h-36 object-cover rounded-xl shadow-sm" />
            <p className="mt-2 text-sm font-medium">{data.title}</p>
            {data.isDate && <p className="text-xs text-gray-500">{data.date}</p>}
        </div>
    )
}