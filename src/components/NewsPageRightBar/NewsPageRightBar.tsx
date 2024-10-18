import MainNewsCard from "../MainNews/MainNewsCard.tsx/MainNewsCard";

export default function NewsPageRightBar() {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px]">
      <div className="w-full rounded-[30px] bg-[#E3E3E3] mb-52">
        <div className="w-full h-16 bg-[#177245] rounded-tl-[30px] rounded-tr-[30px] flex items-center justify-center">
          <p className="text-white font-bold text-[24px]">НОВОСТИ</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((number) => {
            return <MainNewsCard NewsId={number} />;
          })}
        </div>
      </div>
    </div>
  );
}
