import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import MainNews from "../MainNews/MainNews";
import { getNews } from "../../sanity/sanity";

export default function RightBar() {
  const [news, setNews] = useState();
  useEffect(() => {
    const query = async () => {
      const News = await getNews();
      setNews(News);
    };
    query();
  }, []);

  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden ">
      {news && <Hero news={news}></Hero>}
      {news && <MainNews></MainNews>}
    </div>
  );
}
