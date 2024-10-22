import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "./sanity/sanity";
import { PortableText } from "@portabletext/react";

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
      console.log(form);
    };
    query();
  }, []);
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => <img src={value.imageUrl} />,
      span: ({ value }: any) => <span>{value.text}</span>,
    },

    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>,
    },
  };
  return (
    <div className="flex gap-2 mb-52 w-full">
      <div className="w-full font-inter text-white text-[20px] flex flex-col">
        {news &&
          (format !== "mp4" ? (
            <img
              className="bg-black rounded-[30px] h-[30rem] w-[45%] max-[2000px]:w-[75%] max-[1440px]:w-[80%] max-[1200px]:w-full"
              src={news.Image.asset.url}
            ></img>
          ) : (
            <video
              className="bg-black rounded-[30px] h-[30rem] w-[45%] max-[2000px]:w-[75%] max-[1440px]:w-[80%] max-[1200px]:w-full object-cover"
              controls={true}
            >
              <source src={news.Image.asset.url}></source>
            </video>
          ))}
        <div className="w-full flex text-[25px] flex-col gap-3 mt-5">
          {news &&
            news.MainText.map((item: any) => {
              return (
                <PortableText
                  value={item.children}
                  components={myPortableTextComponents}
                ></PortableText>
              );
            })}
        </div>
      </div>
    </div>
  );
}
