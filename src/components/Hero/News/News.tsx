import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";

export default function News({ news }: any) {
  const filtredNews = news.sort(
    (a: any, b: any) => new Date(b.Date).valueOf() - new Date(a.Date).valueOf()
  );
  const mainIndex = filtredNews.findIndex((news: any) => news.isMain === true);
  const mainNews = filtredNews[mainIndex];
  return (
    <div className="flex w-full max-[850px]:w-full max-[850px]:h-[50rem] max-[1280px]:h-[45rem] bg-[#E3E3E3] p-4 rounded-[30px] text-white max-[1280px]:flex-col">
      {mainNews.Image !== null ? (
        mainNews.Image.asset.url.split(".")[3] === "png" ||
        mainNews.Image.asset.url.split(".")[3] === "jpeg" ||
        mainNews.Image.asset.url.split(".")[3] === "webp" ? (
          <div className="w-[65%] flex-none max-[1280px]:w-full">
            <img
              src={mainNews.preview.asset.url}
              className="firefox-specific w-full h-full max-w-[880px] max-h-[720px] max-[1280px]:h-[20rem] max-[850px]:h-[26rem] max-[650px]:h-[20rem] max-[1280px]:rounded-tr-[30px] max-[1280px]:rounded-tl-[30px] min-[1281px]:rounded-[30px] select-none max-[850px]:object-center object-center"
            ></img>
          </div>
        ) : (
          <div className="w-[65%] max-[1280px]:w-full  flex-none">
            <img
              src={mainNews.preview.asset.url}
              className="firefox-specific max-w-[880px] max-h-[720px] w-full h-full max-[1280px]:h-[20rem] max-[850px]:h-[26rem] max-[650px]:h-[20rem] max-[1280px]:rounded-tr-[30px] max-[1280px]:rounded-tl-[30px] min-[1281px]:rounded-[30px] select-none max-[850px]:object-center object-center"
            />
          </div>
        )
      ) : (
        <div className="w-[65%] flex-none max-[1280px]:w-full">
          <img className="rounded-[30px] bg-[#004B2D] h-full w-full object-center max-[1280px]:hidden"></img>
        </div>
      )}
      <div className="flex-grow w-[35%] h-full max-[1280px]:w-full max-[1280px]:h-[60%] min-[1280px]:rounded-[30px] bg-[#177245] p-4 flex flex-col max-[1280px]:rounded-bl-[30px] max-[1280px]:rounded-br-[30px] mt-1">
        <p className="font-bold text-[24px] text-wrap w-full max-[1280px]:text-[20px] text-ellipsis line-clamp-3 max-[1280px]:h-28 max-[850px]:h-28 max-[650px]:h-24">
          {mainNews.Title}
        </p>
        <div className="flex flex-col overflow-hidden text-ellipsis text-[20px]">
          {mainNews ? (
            <div className="text-[20px] font-inter text-wrap text-ellipsis max-[850px]:line-clamp-6 max-[1280px]:line-clamp-3 line-clamp-4 max-[1280px]:text-[14px] max-[1280px]:mt-3">
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
