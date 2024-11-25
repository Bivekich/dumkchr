import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { client, getNews } from "./sanity/sanity";
import Area from "./components/Hero/Area/Area";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

import { Carousel } from "flowbite-react";

export default function NewsReadPage() {
  const id = useParams().NewsId;
  const videoRef = useRef<HTMLVideoElement | null>(null);
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
  const onFullScreenChange = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        videoRef.current.style.objectFit = "contain";
      } else {
        videoRef.current.style.objectFit = "cover";
      }
    }
  };
  useEffect(() => {
    document.addEventListener("fullscreenchange", onFullScreenChange);
    document.addEventListener("webkitfullscreenchange", onFullScreenChange);
    document.addEventListener("mozfullscreenchange", onFullScreenChange);
    document.addEventListener("MSFullscreenChange", onFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullScreenChange
      );
      document.removeEventListener("mozfullscreenchange", onFullScreenChange);
      document.removeEventListener("MSFullscreenChange", onFullScreenChange);
    };
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full max-[1280px]:ml-0 ml-10  text-white max-[850px]:items-center flex-col">
      <ScrollToTop></ScrollToTop>

      <div className="relative w-full max-[660px]:w-[90%] font-inter text-white text-[20px] flex flex-col">
        <div className="min-[850px]:hidden">
          <Area></Area>
        </div>
        <div className="relative flex w-full h-fit scale-103 mt-10">
          {news && (
            <div className="w-full max-[850px]:mr-0 flex flex-col items-center h-fit max-[1800px]:mr-10">
              {news && (
                <p className="font-bold text-[55px] max-[1700px]:text-[40px] max-[1440px]:text-[35px] max-[1280px]:text-[30px] max-[660px]:w-[100%] max-[660px]:text-[25px] text-wrap text-center mb-10 w-[100%]">
                  {news.Title}
                </p>
              )}
              {news.Other !== null ? (
                <Carousel
                  slide={false}
                  className="w-full max-w-[60rem] h-[55rem] max-[800px]:h-[20rem]"
                >
                  {format === "jpg" ||
                  format === "png" ||
                  format === "webp" ||
                  format === "jpeg" ? (
                    <div className="w-full max-w-[60rem] h-fit">
                      <img
                        src={news.Image.asset.url}
                        className="rounded-[30px] w-full h-full max-w-[90rem] max-h-[60rem] object-contain"
                      ></img>
                    </div>
                  ) : (
                    <div className="w-full max-w-[60rem] h-fit">
                      <video
                        ref={videoRef}
                        controls={true}
                        className="rounded-[30px] w-full h-full max-w-[90rem] max-h-[60rem] object-cover"
                      >
                        <source src={news.Image.asset.url} />
                      </video>
                    </div>
                  )}
                  {news.Other.map((item: any) => {
                    const format = item.asset.url.split(".")[3];

                    return format === "jpg" ||
                      format === "png" ||
                      format === "webp" ||
                      format === "jpeg" ? (
                      <div className="w-full max-w-[60rem] h-fit">
                        <img
                          src={item.asset.url}
                          className="rounded-[30px] w-full h-full max-w-[90rem] max-h-[60rem]"
                        ></img>
                      </div>
                    ) : (
                      <div className="w-full max-w-[60rem] h-fit">
                        <video
                          ref={videoRef}
                          controls={true}
                          className="rounded-[30px] w-full h-full max-w-[90rem] max-h-[60rem] object-cover"
                        >
                          <source src={item.asset.url} />
                        </video>
                      </div>
                    );
                  })}
                </Carousel>
              ) : format === "jpg" ||
                format === "png" ||
                format === "webp" ||
                format === "jpeg" ? (
                <div className="w-full max-w-[60rem] h-fit">
                  <img
                    src={news.Image.asset.url}
                    className="rounded-[30px] w-full h-full max-w-[90rem] max-h-[60rem] object-contain"
                  ></img>
                </div>
              ) : (
                <div className="w-full max-w-[60rem] h-fit">
                  <video
                    ref={videoRef}
                    controls={true}
                    className="rounded-[30px] w-full h-full max-w-[90rem] max-h-[60rem] object-cover"
                  >
                    <source src={news.Image.asset.url} />
                  </video>
                </div>
              )}
              <div className="font-inter flex flex-col mt-5 text-wrap items-center">
                {news && (
                  <div className="text-[25px] leading-8 font-inter text-wrap min-[2559px]:w-[100%] min-[1900px]:w-[90%] min-[1920px]:w-[90%] min-[1960px]:w-[82%] max-[850px]:w-[90%] self-center">
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
                          strong: ({ children }: any) => (
                            <strong>{children}</strong>
                          ),
                        },
                      }}
                    ></PortableText>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="max-[850px]:hidden">
            <Area></Area>
          </div>
        </div>
      </div>
    </div>
  );
}
