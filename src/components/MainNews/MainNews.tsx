import MainNewsCard from "./MainNewsCard.tsx/MainNewsCard";

export default function MainNews() {
  return (
    <div className="w-full rounded-[30px] bg-[#E3E3E3] mb-52">
      <div className="w-full h-16 bg-[#177245] rounded-tl-[30px] rounded-tr-[30px] flex items-center justify-center">
        <p className="text-white font-bold text-[24px]">НОВОСТИ</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full h-full">
        <MainNewsCard />
        <MainNewsCard />
        <MainNewsCard />
        <MainNewsCard />
        <MainNewsCard />
        <MainNewsCard />
      </div>
    </div>
  );
}
