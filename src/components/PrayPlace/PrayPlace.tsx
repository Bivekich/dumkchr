import { FaRegCalendarAlt } from "react-icons/fa";

const date = new Date()
  .toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  .split(" ");
const today = new Date();
const gregorianYear = today.getFullYear();
const gregorianMonth = today.getMonth() + 1;
const gregorianDay = today.getDate();
function gregorianToHijri(gYear: any, gMonth: any, gDay: any) {
  const GREGORIAN_EPOCH = 1721425.5;
  const HIJRI_EPOCH = 1948439.5;

  function julianDay(year: any, month: any, day: any) {
    return (
      GREGORIAN_EPOCH -
      1 +
      365 * (year - 1) +
      Math.floor((year - 1) / 4) +
      -Math.floor((year - 1) / 100) +
      Math.floor((year - 1) / 400) +
      Math.floor(
        (367 * month - 362) / 12 +
          (month <= 2 ? 0 : isLeapGregorian(year) ? -1 : -2) +
          day
      )
    );
  }

  function isLeapGregorian(year: any) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  function hijriToJulian(hYear: any, hMonth: any, hDay: any) {
    return (
      hDay +
      Math.ceil(29.5 * (hMonth - 1)) +
      (hYear - 1) * 354 +
      Math.floor((3 + 11 * hYear) / 30) +
      HIJRI_EPOCH -
      1
    );
  }

  const jd = julianDay(gYear, gMonth, gDay);
  const hYear = Math.floor((30 * (jd - HIJRI_EPOCH) + 10646) / 10631);
  const hMonth = Math.min(
    12,
    Math.ceil((jd - (29 + hijriToJulian(hYear, 1, 1))) / 29.5) + 1
  );
  const hDay = jd - hijriToJulian(hYear, hMonth, 1) + 1;

  return { hYear, hMonth, hDay };
}
const hijriDate = gregorianToHijri(
  gregorianYear,
  gregorianMonth,
  gregorianDay + 1
);
const hijriMonth = [
  "Мухаррам",
  "Сафар",
  "Раби аль-авваль",
  "Раби-уль-ахир",
  "Джумада аль-уля",
  "Джумада аль-ахира",
  "Раджаб",
  "Шаабан",
  "Рамадан",
  "Шавваль",
  "Зулькада",
  "Зульхиджа",
];
export default function PrayPlace() {
  return (
    <div className="bg-[#E3E3E3] h-96 w-80 rounded-[30px] flex flex-col text-[#177245] max-[1440px]:w-full max-[1280px]:hidden">
      <div className="w-full h-14 bg-green-500 rounded-tl-[30px] rounded-tr-[30px] flex p-4 items-center">
        <p className="text-[24px] max-[1300px]:text-[22px] max-[1000px]:text-[20px] text-white font-bold">
          {hijriMonth[hijriDate.hMonth - 1]}
        </p>
      </div>
      <div className="flex items-center px-4">
        <div className="flex flex-col">
          <p className="text-[70px] font-bold flex h-20">{hijriDate.hDay}</p>
          <p className="text-[20px] font-bold px-1">{hijriDate.hYear}</p>
        </div>
        <img src="/islam.svg" className="ml-auto size-20"></img>
      </div>
      <div className="w-full h-14 bg-green-500 rounded-tl-[30px] rounded-tr-[30px] flex p-4 items-center mt-2">
        <p className="text-[24px] text-white font-bold max-[1300px]:text-[22px] max-[1000px]:text-[20px]">
          {date[1].slice(0, 1).toUpperCase() + date[1].slice(1, date[1].length)}
        </p>
      </div>
      <div className="flex items-center px-4">
        <div className="flex flex-col">
          <p className="text-[70px] font-bold flex h-20 mb-1">{date[0]}</p>
          <p className="text-[20px] font-bold px-1">{date[2]}</p>
        </div>
        <FaRegCalendarAlt className="ml-auto size-20 text-[#177245]" />
      </div>
    </div>
  );
}
