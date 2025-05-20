import dayjs from "dayjs";

/**
 * 유효한(존재하는) 월(月)인지 체크
*/
function isValidMonth(mm) {
    var m = parseInt(mm, 10);
    return (m >= 1 && m <= 12);
}

/**
 * 유효한(존재하는) 일(日)인지 체크
 */
function isValidDay(yyyy, mm, dd) {
    var m = parseInt(mm, 10) - 1;
    var d = parseInt(dd, 10);

    var end = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
        end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
}

/**
 * 유효한(존재하는) 시(時)인지 체크
 */
function isValidHour(hh) {
    var h = parseInt(hh, 10);
    return (h >= 1 && h <= 24);
}

/**
 * 유효한(존재하는) 분(分)인지 체크
 */
function isValidMin(mi) {
    var m = parseInt(mi, 10);
    return (m >= 1 && m <= 60);
}

/**
 * Time 형식인지 체크(느슨한 체크)
 */
function isValidTimeFormat(time) {
    return (!isNaN(time) && time.length == 12);
}

/**
 * 유효하는(존재하는) Time 인지 체크

 * ex) var time = form.time.value; //'200102310000'
 *     if (!isValidTime(time)) {
 *         alert("올바른 날짜가 아닙니다.");
 *     }
 */
function isValidTime(time) {
    var year = time.substring(0, 4);
    var month = time.substring(4, 6);
    var day = time.substring(6, 8);
    var hour = time.substring(8, 10);
    var min = time.substring(10, 12);

    if (parseInt(year, 10) >= 1900 && isValidMonth(month) &&
        isValidDay(year, month, day) && isValidHour(hour) &&
        isValidMin(min)) {
        return true;
    }
    return false;
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toTimeObject(time) { //parseTime(time)
    var year = time.substr(0, 4);
    var month = time.substr(4, 2) - 1; // 1월=0,12월=11
    var day = time.substr(6, 2);
    var hour = time.substr(8, 2);
    var min = time.substr(10, 2);

    return new Date(year, month, day, hour, min);
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toDateObject(time) { //parseTime(time)
    var year = time.substr(0, 4);
    var month = time.substr(4, 2) - 1; // 1월=0,12월=11
    var day = time.substr(6, 2);

    return new Date(year, month, day);
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toFormatString(time, dele) { //parseTime(time)
    var year = time.substr(0, 4);
    var month = time.substr(4, 2); // 1월=0,12월=11
    var day = time.substr(6, 2);

    return ("" + year + dele + month + dele + day)
}


/**
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toTimeString(date) { //formatTime(date)
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length == 1) { day = "0" + day; }
    if (("" + hour).length == 1) { hour = "0" + hour; }
    if (("" + min).length == 1) { min = "0" + min; }

    return ("" + year + month + day + hour + min)
}


/**
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toDateString(date) { //formatTime(date)
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length == 1) { day = "0" + day; }

    return ("" + year + month + day)
}

/**
 * Time이 현재시각 이후(미래)인지 체크
 */
function isFutureTime(time) {
    return (toTimeObject(time) > new Date());
}

/**
 * Time이 현재시각 이전(과거)인지 체크
 */
function isPastTime(time) {
    return (toTimeObject(time) < new Date());
}

/**
 * 주어진 Time 과 y년 m월 d일 차이나는 Time을 리턴

 * ex) var time = form.time.value; //'20000101'
 *     alert(shiftTime(time,0,0,-100));
 *     => 2000/01/01 00:00 으로부터 100일 전 Time
 */
function shiftDate(time, y, m, d) { //moveTime(time,y,m,d)
    var date = toDateObject(time);

    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함

    return toDateString(date);
}

/**
 * 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴

 * ex) var time = form.time.value; //'20000101000'
 *     alert(shiftTime(time,0,0,-100,0));
 *     => 2000/01/01 00:00 으로부터 100일 전 Time
 */
function shiftTime(time, y, m, d, h) { //moveTime(time,y,m,d,h)
    var date = toTimeObject(time);

    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함
    date.setHours(date.getHours() + h);       //h시를 더함

    return toTimeString(date);
}

/**
 * 두 Time이 몇 개월 차이나는지 구함

 * time1이 time2보다 크면(미래면) minus(-)
 */
function getMonthInterval(time1, time2) { //measureMonthInterval(time1,time2)
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);

    var years = date2.getFullYear() - date1.getFullYear();
    var months = date2.getMonth() - date1.getMonth();
    var days = date2.getDate() - date1.getDate();

    return (years * 12 + months + (days >= 0 ? 0 : -1));
}

/**
 * 두 Time이 며칠 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getDayInterval(time1, time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day = 1000 * 3600 * 24; //24시간

    return parseInt((date2 - date1) / day, 10);
}

/**
 * 두 Time이 몇 시간 차이나는지 구함

 * time1이 time2보다 크면(미래면) minus(-)
 */
function getHourInterval(time1, time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour = 1000 * 3600; //1시간

    return parseInt((date2 - date1) / hour, 10);
}

/*
  윤달 포함 달별 일수 Return
*/
function daysPerMonth() {
    var DOMonth = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
    var IDOMonth = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");

    if ((arguments[0] % 4) == 0) {
        if ((arguments[0] % 100) == 0 && (arguments[0] % 400) != 0)
            return DOMonth[arguments[1] - 1];
        return IDOMonth[arguments[1] - 1];
    }
    else
        return DOMonth[arguments[1] - 1];
}

/**
 * 현재 시각을 Date 형식으로 리턴

 */
function getCurrentDate() {
    //return toFormatString(toTimeString(new Date()));
    return toTimeString(new Date());
}

/**
 * 현재 시각을 Time 형식으로 리턴

 */
function getCurrentTime() {
    return toTimeString(new Date());
}

/**
 * 현재 시각과 y년 m월 d일 h시 차이나는 Time을 리턴
 */
function getRelativeTime(y, m, d, h) {
    /*
        var date = new Date();
    
        date.setFullYear(date.getFullYear() + y); //y년을 더함
        date.setMonth(date.getMonth() + m);       //m월을 더함
        date.setDate(date.getDate() + d);         //d일을 더함
        date.setHours(date.getHours() + h);       //h시를 더함
    
        return toTimeString(date);
    */
    return shiftTime(getCurrentTime(), y, m, d, h);
}

/**
 * 현재 年을 YYYY형식으로 리턴
 */
function getYear() {
    /*
        var now = new Date();
        return now.getFullYear();
    */
    return getCurrentTime().substr(0, 4);
}

/**
 * 현재 月을 MM형식으로 리턴
 */
function getMonth() {
    /*
        var now = new Date();
    
        var month = now.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
        if (("" + month).length == 1) { month = "0" + month; }
    
        return month;
    */
    return getCurrentTime().substr(4, 2);
}

/**
 * 현재 日을 DD형식으로 리턴

 */
function getDay() {
    /*
        var now = new Date();
    
        var day = now.getDate();
        if (("" + day).length == 1) { day = "0" + day; }
    
        return day;
    */
    return getCurrentTime().substr(6, 2);
}

/**
 * 현재 時를 HH형식으로 Return
 */
function getHour() {
    /*
        var now = new Date();
    
        var hour = now.getHours();
        if (("" + hour).length == 1) { hour = "0" + hour; }
    
        return hour;
    */
    return getCurrentTime().substr(8, 2);
}

/**
 * 현재 요일 Return
 */
function getDayOfWeek() {
    var now = new Date();

    var day = now.getDay(); // 0 ~ 6 (일요일 ~ 토요일)
    var week = new Array('일', '월', '화', '수', '목', '금', '토');

    return week[day];
}

/**
 * 날짜 포맷팅
 */
export function dateFormat(date_ , format = "YY.MM.DD") {
    if(!date_) return ""
    const date = dayjs(date_)
    return date.format(format)
}

/**
 * 현재 날짜
 */
export function getNowDate(format) {
    return dateFormat(new Date(), format)
}