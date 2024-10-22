import { PortableText } from "@portabletext/react";
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
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => <img src={value.imageUrl} />,
      span: ({ value }: any) => <span>{value.text}</span>,
    },
    marks: {
      strong: ({ children }: any) => (
        <div className="font-bold">{children}</div>
      ),
    },
  };
  const format = image.asset.url.split(".")[3];
  return (
    <div className="w-full flex flex-col p-9 text-[#177245] gap-3">
      <Link
        className="w-full max-[1300px]:w-64 max-[1300px]:h-fit max-[1440px]:w-80 max-[1920px]:w-full max-[1700px]:w-[20rem] max-[1700px]:h-fit max-[1920px]:h-96 max-[1440px]:h-fit h-fit rounded-[30px] bg-[#177245] self-center"
        to={`/NewsPage/${NewsId}`}
      >
        {image !== null ? (
          format !== "mp4" ? (
            <img
              src={image.asset.url}
              className="w-full max-[1700px]:w-full max-[1700px]:h-[20rem] max-[1300px]:w-64 max-[1300px]:h-[15rem] max-[1440px]:w-80 max-[1920px]:w-full max-[1920px]:h-96 max-[1440px]:h-[20rem] h-[30rem] rounded-[30px] bg-[#177245] self-center"
            ></img>
          ) : (
            <video className="w-full max-[1700px]:w-full max-[1700px]:h-[20rem] max-[1300px]:w-64 max-[1300px]:h-[15rem] max-[1440px]:w-80 max-[1920px]:w-full  max-[1920px]:h-96 max-[1440px]:h-[20rem] h-[30rem] rounded-[30px] bg-[#177245] self-center object-fill">
              <source src={image.asset.url}></source>
            </video>
          )
        ) : (
          <img className="w-full max-[1200px]:w-64 max-[1440px]:w-72 max-[1920px]:w-full max-[1920px]:h-64 h-96 rounded-[30px] bg-[#177245] self-center"></img>
        )}
      </Link>
      <div>
        <p className="font-bold w-full text-[20px] max-[1200px]:text-[16px]">
          {title}
        </p>
      </div>

      {mainText.length > 0 && (
        <div className="flex flex-col h-[19rem] overflow-hidden gap-2 mb-5">
          <p className="w-full font-medium text-[18px]">{NewDate}</p>
          <div className="flex flex-col h-full w-full text-[20px] font-medium overflow-hidden">
            {mainText.map((item: any) => {
              return (
                <PortableText
                  value={item.children}
                  components={myPortableTextComponents}
                ></PortableText>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
