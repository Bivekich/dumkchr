import { Link } from "react-router-dom";
export default function News({ news }: any) {
  const mainIndex = news.findIndex((news: any) => news.isMain === true);
  const mainNews = news[mainIndex];
  console.log(news[mainIndex]);
  return (
    <div className="flex max-[1800px]:w-[80%] w-[70%] bg-[#E3E3E3] p-4 rounded-[30px] text-white">
      {mainNews.Image !== null ? (
        <img
          className="max-[1800px]:w-[90%]  max-[2560px]:w-[90%] max-[1920px]:w-[90%] h-full rounded-[30px] bg-[#004B2D] object-center w-[90%] "
          src={mainNews.Image.asset.url}
        ></img>
      ) : (
        <img className="max-[1800px]:w-[90%]  max-[2560px]:w-[90%] max-[1920px]:w-[90%] h-full rounded-[30px] bg-[#004B2D] object-center w-[90%] "></img>
      )}
      <div className="w-[27rem] h-full max-[2560px]:w-[35rem] rounded-[30px] bg-[#177245] p-4 flex flex-col max-[1800px]:w-[20rem] max-[1920px]:w-[40%] ">
        <p className="font-bold text-[24px]">{mainNews.Title}</p>
        <div className="flex flex-col overflow-hidden text-ellipsis h-[69%] text-[20px]">
          {mainNews ? (
            <pre className="text-[20px] font-inter text-wrap">
              {mainNews.MainText}
            </pre>
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
