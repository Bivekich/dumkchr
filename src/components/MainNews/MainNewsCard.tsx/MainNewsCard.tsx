import { Link } from "react-router-dom";

export default function MainNewsCard({
  NewsId,
  title,
  date,
  image,
  mainText,
}: any) {
  const NewDate = new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const format = image?.asset.url.split(".")[3];
  console.log(format);
  return (
    <div className="w-full flex flex-col p-7 text-[#177245] gap-3">
      <Link
        className="w-full max-[1300px]:w-64 max-[1300px]:h-fit max-[1440px]:w-80 max-[1920px]:w-full max-[1700px]:w-[20rem] max-[1700px]:h-fit max-[1920px]:h-96 max-[1440px]:h-fit h-fit rounded-[30px] border-none self-center"
        to={`/NewsPage/${NewsId}`}
      >
        {image !== null ? (
          format !== "mp4" &&
          format !== "mov" &&
          format !== "wmv" &&
          format !== "avi" &&
          format !== "webm" ? (
            <img
              src={image.asset.url}
              className="w-full max-[1700px]:w-full max-[1700px]:h-[20rem] max-[1300px]:w-64 max-[1300px]:h-[15rem] max-[1440px]:w-80 max-[1920px]:w-full max-[1920px]:h-96 max-[1440px]:h-[20rem] h-[25rem] rounded-[30px] self-center"
            ></img>
          ) : (
            <video
              className="w-full max-[1700px]:w-full max-[1700px]:h-[20rem] max-[1300px]:w-64 max-[1300px]:h-[15rem] max-[1440px]:w-80 max-[1920px]:w-full max-[1920px]:h-96 max-[1440px]:h-[20rem] h-[25rem] rounded-[30px] self-center object-fill"
              poster={image.asset.url}
            >
              <source src={image.asset.url}></source>
            </video>
          )
        ) : (
          <img className="w-full max-[1200px]:w-64 max-[1440px]:w-72 max-[1920px]:w-full max-[1920px]:h-64 h-96 rounded-[30px] bg-[#177245] self-center"></img>
        )}
      </Link>
      <div>
        <p className="font-bold w-fit text-[20px] max-[1200px]:text-[16px]">
          {title}
        </p>
        <p className="w-full font-medium text-[18px]">{NewDate}</p>
      </div>

      {mainText?.length > 0 && (
        <div className="flex flex-col h-[19rem] overflow-hidden gap-2 mb-5">
          <div className="flex flex-col h-full w-full text-[20px] font-medium overflow-hidden">
            <pre className="text-wrap text-ellipsis font-inter text-[20px] font-medium whitespace-nowrap">
              {mainText}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
