import { FaRegCalendarAlt } from "react-icons/fa";

export default function PrayPlace() {
  return (
    <div className="bg-white h-96 w-80 rounded-[30px] flex flex-col text-[#177245]">
      <div className="w-full h-14 bg-green-500 rounded-tl-[30px] rounded-tr-[30px] flex p-4 items-center">
        <p className="text-[24px] text-white font-bold">Раби-уль-ахир</p>
      </div>
      <div className="flex items-center px-4">
        <div className="flex flex-col">
          <p className="text-[70px] font-bold flex h-20">6</p>
          <p className="text-[20px] font-bold px-1">1446</p>
        </div>
        <img src="/islam.svg" className="ml-auto size-20"></img>
      </div>
      <div className="w-full h-14 bg-green-500 rounded-tl-[30px] rounded-tr-[30px] flex p-4 items-center mt-2">
        <p className="text-[24px] text-white font-bold">Октябрь</p>
      </div>
      <div className="flex items-center px-4">
        <div className="flex flex-col">
          <p className="text-[70px] font-bold flex h-20">9</p>
          <p className="text-[20px] font-bold px-1">2024</p>
        </div>
        <FaRegCalendarAlt className="ml-auto size-20 text-[#177245]" />;
      </div>
    </div>
  );
}
