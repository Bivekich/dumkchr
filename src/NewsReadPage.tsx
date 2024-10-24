import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "./sanity/sanity";

export default function NewsReadPage() {
  const id = useParams().NewsId;
  const [news, setNews] = useState<any>(null);
  const [format, setFormat] = useState("");
  useEffect(() => {
    const query = async () => {
      const News = await getNews();
      const pageNews = News[id === undefined ? 0 : id];
      const form = pageNews.Image.asset.url.split(".")[3];
      setFormat(form);
      setNews(pageNews);
    };
    query();
  }, []);

  return (
    <div className="flex gap-2 mb-52 w-full">
      <div className="w-full font-inter text-white text-[20px] flex flex-col">
        {news &&
          (format !== "mp4" &&
          format !== "mov" &&
          format !== "wmv" &&
          format !== "avi" &&
          format !== "webm" ? (
            <img
              className="bg-black rounded-[30px] h-[30rem] w-[40%] max-[2000px]:w-[60%] max-[1440px]:w-[80%] max-[1200px]:w-full border-[15px] "
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
              {news.MainText}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
