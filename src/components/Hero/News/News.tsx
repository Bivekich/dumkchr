import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";

export default function News({ news }: any) {
  const filtredNews = news.sort(
    (a: any, b: any) => new Date(b.Date).valueOf() - new Date(a.Date).valueOf()
  );
  const mainIndex = filtredNews.findIndex((news: any) => news.isMain === true);
  const mainNews = filtredNews[mainIndex];
  return (
    <div className="flex max-[1800px]:w-[70%] w-full max-[1280px]:w-[45rem] max-[640px]:w-full max-[1280px]:h-[45rem] bg-[#E3E3E3] p-4 rounded-[30px] text-white max-[1280px]:flex-col">
      {mainNews.Image !== null ? (
        <img
          className="firefox-specific w-[60%] max-[1650px]:w-[65%] max-[1280px]:w-full max-[1280px]:h-[20rem] max-[1280px]:rounded-tr-[30px] max-[1280px]:rounded-tl-[30px] min-[1281px]:rounded-[30px] select-none"
          src={mainNews.Image.asset.url}
        ></img>
      ) : (
        <img className="max-[1800px]:w-[90%] max-[2560px]:w-[90%] max-[1920px]:w-[90%] h-full rounded-[30px] bg-[#004B2D] object-center w-[90%] max-[1280px]:hidden"></img>
      )}
      <div className="w-[30%] max-[1650px]:w-[35%] h-full max-[1280px]:h-[23rem] text-ellipsis max-[2560px]:w-[35rem] min-[1280px]:rounded-[30px] bg-[#177245] p-4 flex flex-col max-[1800px]:w-[20rem] max-[1920px]:w-[40%] max-[1280px]:w-full max-[1280px]:rounded-bl-[30px] max-[1280px]:rounded-br-[30px] mt-1">
        <p className="font-bold text-[24px] text-wrap w-full max-[1280px]:text-[20px] text-ellipsis  line-clamp-3 max-[1280px]:h-[10rem]">
          {mainNews.Title}
        </p>
        <div className="flex flex-col overflow-hidden text-ellipsis h-[69%] text-[20px]">
          {mainNews ? (
            <div className="text-[20px] font-inter text-wrap text-ellipsis line-clamp-6 max-[1280px]:text-[14px] max-[1280px]:mt-3">
              <PortableText
                value={mainNews.MainText}
                components={{
                  types: {
                    span: ({ value }: any) => <span>{value}</span>,
                  },
                  marks: {
                    strong: ({ children }: any) => <strong>{children}</strong>,
                  },
                }}
              ></PortableText>
            </div>
          ) : (
            <div>hello world</div>
          )}
        </div>
        <Link className="mt-auto" to={`/NewsPage/${mainIndex}`}>
          <button className="w-full mt-auto border rounded-full h-7 max-[1800px]:h-12 ">
            ЧИТАТЬ ПОЛНОСТЬЮ
          </button>
        </Link>
      </div>
    </div>
  );
}
