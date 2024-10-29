import { PortableText } from "@portabletext/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MainNewsCard({
  NewsId,
  title,
  date,
  image,
  mainText,
  preview,
}: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const NewDate = new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 15;
      }
    };

    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "loadedmetadata",

          handleLoadedMetadata
        );
      }
    };
  }, []);
  const format = image?.asset.url.split(".")[3];
  return (
    <div className="w-full flex flex-col p-7 text-[#177245] gap-3">
      <Link
        className="w-full h-[25rem] p-2 flex items-center justify-center"
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
              className="w-full max-w-[30rem] h-full rounded-[30px] object-cover"
            ></img>
          ) : preview !== null ? (
            <img
              src={preview.asset.url}
              className="w-full max-w-[30rem] h-full rounded-[30px] object-cover"
            ></img>
          ) : (
            <div className="w-full max-w-[30rem] h-full rounded-[30px] object-cover bg-black"></div>
          )
        ) : (
          <img className="w-full rounded-[30px] self-center max-[1280px]:h-[15rem] max-[1920px]:h-[20rem]"></img>
        )}
      </Link>
      <div>
        <p className="font-bold w-fit text-[20px] max-[1200px]:text-[16px] text-ellipsis line-clamp-3">
          {title}
        </p>
        <p className="w-full font-medium text-[18px]">{NewDate}</p>
      </div>

      {mainText?.length > 0 && (
        <div className="flex flex-col h-[19rem] overflow-hidden gap-2 mb-5">
          <div className="flex flex-col h-full w-full text-[20px] font-medium overflow-hidden">
            <div className="text-wrap text-ellipsis font-inter text-[20px] font-medium whitespace-nowrap line-clamp-[8]">
              <PortableText
                value={mainText}
                components={{
                  types: {
                    span: ({ value }: any) => <span>{value}</span>,
                  },
                  marks: {
                    strong: ({ children }) => <strong>{children}</strong>,
                  },
                }}
              ></PortableText>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
