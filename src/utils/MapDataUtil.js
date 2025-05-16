import mapData from "public/data/map_info.json";

/**
 * 시도 한글명 찾기
 */
export function getSidoName(sidoCode) {
    if(!sidoCode) return ""
    return mapData[sidoCode]?.CTP_KOR_NM
}

/**
 * 시도 영문명 찾기
 */
export function getSidoEngName(sidoCode) {
    if(!sidoCode) return ""
    return mapData[sidoCode]?.CTP_ENG_NM
}

/**
 * 시군구 한글명 찾기
 */
export function getSigunguName(sigunguCode = "") {
    if(!sigunguCode) return ""
    const sidoCode = sigunguCode.slice(0,2)
    if(!sidoCode) return ""
    return mapData[sidoCode]?.districts?.find(el => el.SIG_CD === sigunguCode)?.SIG_KOR_NM
}

/**
 * 시군구 영문명 찾기
 */
export function getSigunguEngName(sigunguCode = "") {
    if(!sigunguCode) return ""
    const sidoCode = sigunguCode.slice(0,2)
    if(!sidoCode) return ""
    return mapData[sidoCode]?.districts?.find(el => el.SIG_CD === sigunguCode)?.SIG_ENG_NM
}