import { useEffect, useState } from "react";
import MainNewsCard from "../MainNews/MainNewsCard.tsx/MainNewsCard";
import { getNews } from "../../../sanity/sanity";

export default function NewsPageRightBar() {
  const [news, setNews] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const News = await getNews();
      setNews(News);
    };
    query();
  }, []);
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px]">
      <div className="w-full rounded-[30px] bg-[#E3E3E3] mb-52">
        <div className="w-full h-16 bg-[#177245] rounded-tl-[30px] rounded-tr-[30px] flex items-center justify-center">
          <p className="text-white font-bold text-[24px]">НОВОСТИ</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full">
          {news.map((item: any, index: number) => {
            return (
              <MainNewsCard
                key={index}
                NewsId={index}
                title={item.Title}
                date={item.Date}
                image={item.Image}
                mainText={item.MainText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
