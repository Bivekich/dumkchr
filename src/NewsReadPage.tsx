import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { client, getNews } from "./sanity/sanity";
import Area from "./components/Hero/Area/Area";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

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
    <div className="flex gap-2 mb-52 w-full max-[1280px]:ml-0 ml-10 flex-col text-white">
      <ScrollToTop></ScrollToTop>
      {news && (
        <p className="font-bold text-[70px] max-[1280px]:text-[60px] max-[660px]:w-[90%] max-[660px]:text-[40px] text-wrap text-center mb-10">
          {news.Title}
        </p>
      )}

      <div className="relative w-full max-[660px]:w-[90%] font-inter text-white text-[20px] flex flex-col">
        <div className="relative flex w-full h-[37rem] justify-between">
          {news &&
            (format !== "mp4" &&
            format !== "mov" &&
            format !== "wmv" &&
            format !== "avi" &&
            format !== "webm" ? (
              <img
                className="object-cover w-[60%] rounded-[30px]"
                src={news.Image.asset.url}
              ></img>
            ) : (
              <video className="object-contain w-[59%]" controls={true}>
                <source src={news.Image.asset.url}></source>
              </video>
            ))}
          <div className="">
            <Area></Area>
          </div>
        </div>

        <div className="md:prose-lg lg:prose-xl font-inter flex flex-col mt-5 text-wrap">
          {news && (
            <div className="text-[20px] leading-8 font-inter text-wrap w-[90%]">
              <PortableText
                value={news.MainText}
                components={{
                  types: {
                    span: ({ value }: any) => <span>{value}</span>,
                    image: ({ value, isInline }) => (
                      <img
                        className="w-[50%]"
                        src={urlBuilder(client)
                          .image(value)
                          .width(isInline ? 1000 : 10000)
                          .fit("max")
                          .auto("format")
                          .url()}
                      />
                    ),
                  },
                  marks: {
                    strong: ({ children }: any) => <strong>{children}</strong>,
                  },
                }}
              ></PortableText>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
