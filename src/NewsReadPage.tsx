import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { client, getNews } from "./sanity/sanity";
import Area from "./components/Hero/Area/Area";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

import { Carousel } from "flowbite-react";

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
  const swiperWrapperClasses = "relative flex w-full h-[37rem]";
  return (
    <div className="flex gap-2 mb-52 w-full max-[1280px]:ml-0 ml-10 flex-col text-white max-[850px]:items-center">
      <ScrollToTop></ScrollToTop>
      {news && (
        <p className="font-bold text-[70px] max-[1280px]:text-[60px] max-[660px]:w-[90%] max-[660px]:text-[40px] text-wrap text-center mb-10">
          {news.Title}
        </p>
      )}

      <div className="relative w-full max-[660px]:w-[90%] font-inter text-white text-[20px] flex flex-col">
        <div className="min-[850px]:hidden">
          <Area></Area>
        </div>
        <div className={swiperWrapperClasses}>
          {news && (
            <div className="w-full max-[850px]:mr-5  ">
              {news.Other !== null ? (
                <Carousel slide={false} leftControl=" " rightControl=" ">
                  {format === "jpg" || format === "png" || format === "webp" ? (
                    <img
                      className="max-w-[50rem] w-[40rem] max-h-[35rem] rounded-[30px] items-center"
                      src={news.Image.asset.url}
                    ></img>
                  ) : (
                    <video
                      controls={true}
                      className="rounded-[30px] object-fill "
                    >
                      <source src={news.Image.asset.url} />
                    </video>
                  )}
                  {news.Other.map((item: any) => {
                    const format = item.asset.url.split(".")[3];
                    return format === "jpg" ||
                      format === "png" ||
                      format === "webp" ? (
                      <img
                        src={item.asset.url}
                        className="max-w-[50rem] max-[800px]:w-full max-[850px]:w-full w-[40rem] max-h-[35rem] rounded-[30px] items-center"
                      ></img>
                    ) : (
                      <div></div>
                    );
                  })}
                </Carousel>
              ) : format === "jpg" || format === "png" || format === "webp" ? (
                <img
                  src={news.Image.asset.url}
                  className="max-w-[50rem] w-[40rem] max-h-[35rem] rounded-[30px] items-center"
                ></img>
              ) : (
                <video controls={true} className="rounded-[30px]">
                  <source src={news.Image.asset.url} />
                </video>
              )}
            </div>
          )}
          <div className="max-[850px]:hidden">
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
