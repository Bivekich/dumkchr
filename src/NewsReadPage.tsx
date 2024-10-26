import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getNews } from "./sanity/sanity";

export default function NewsReadPage() {
  const id = useParams().NewsId;
  const [news, setNews] = useState<any>(null);
  const [format, setFormat] = useState("");
  useEffect(() => {
    const query = async () => {
      const News = await getNews();
      const filtredNews = News.sort(
        (a: any, b: any) =>
          new Date(b.Date).valueOf() - new Date(a.Date).valueOf()
      );
      const pageNews = filtredNews[id === undefined ? 0 : id];
      const form = pageNews.Image.asset.url.split(".")[3];
      setFormat(form);
      setNews(pageNews);
    };
    query();
  }, []);
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div className="flex gap-2 mb-52 w-full">
      <ScrollToTop></ScrollToTop>
      <div className="w-full font-inter text-white text-[20px] flex flex-col">
        {news &&
          (format !== "mp4" &&
          format !== "mov" &&
          format !== "wmv" &&
          format !== "avi" &&
          format !== "webm" ? (
            <img
              className="bg-black rounded-[30px] h-[40rem] w-[40rem] max-[1650px]:h-[35rem] max-[1650px]:w-[35rem] max-[1440px]:h-[30rem] max-[1440px]:w-[30rem] max-[1280px]:h-[25rem] max-[1280px]:h-[25rem] border-[15px] "
              src={news.Image.asset.url}
            ></img>
          ) : (
            <video
              className="bg-black rounded-[30px] h-[30rem] w-[40%] max-[2000px]:w-[60%] max-[1440px]:w-[80%] max-[1200px]:w-full object-cover"
              controls={true}
            >
              <source src={news.Image.asset.url}></source>
            </video>
          ))}
        <div className="w-full flex text-[25px] flex-col gap-3 mt-5">
          {news && (
            <pre className="text-[25px] font-inter text-wrap w-[69%]">
              {news.MainText.trim()}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
