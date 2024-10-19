import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../sanity/sanity";
import { PortableText } from "@portabletext/react";

export default function NewsReadPage() {
  const id = useParams().NewsId;
  const [news, setNews] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const News = await getNews();
      const pageNews = News[id === undefined ? 0 : id];
      setNews(pageNews);
    };
    query();
  }, []);
  useEffect(() => {
    console.log(news);
  }, [news]);
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
        <img
          className="bg-black rounded-[30px] h-[30rem] w-[50%] max-[2000px]:w-[75%] max-[1440px]:w-[80%] max-[1200px]:w-full"
          src={news.Image.asset.url}
        ></img>
        <div className="w-full flex">
          <PortableText
            value={news.MainText[0].children}
            components={myPortableTextComponents}
          ></PortableText>
        </div>
      </div>
    </div>
  );
}
