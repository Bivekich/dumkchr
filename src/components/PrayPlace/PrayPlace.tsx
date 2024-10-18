import { FaRegCalendarAlt } from "react-icons/fa";

const date = new Date()
  .toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  .split(" ");
export default function PrayPlace() {
  return (
    <div className="bg-[#E3E3E3] h-96 w-80 rounded-[30px] flex flex-col text-[#177245] max-[1440px]:w-full">
      <div className="w-full h-14 bg-green-500 rounded-tl-[30px] rounded-tr-[30px] flex p-4 items-center">
        <p className="text-[24px] max-[1300px]:text-[22px] max-[1000px]:text-[20px] text-white font-bold">
          Раби-уль-ахир
        </p>
      </div>
      <div className="flex items-center px-4">
        <div className="flex flex-col">
          <p className="text-[70px] font-bold flex h-20">6</p>
          <p className="text-[20px] font-bold px-1">1446</p>
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
