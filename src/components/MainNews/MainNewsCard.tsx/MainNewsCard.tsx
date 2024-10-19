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
  return (
    <div className="w-full flex flex-col p-9 text-[#177245] gap-3">
      <Link
        className="w-full max-[1200px]:w-64 max-[1440px]:w-72 max-[1920px]:w-full max-[1920px]:h-64 h-96 rounded-[30px] bg-[#177245] self-center"
        to={`/NewsPage/${NewsId}`}
      >
        <img
          src={image.asset.url}
          className="w-full max-[1200px]:w-64 max-[1440px]:w-72 max-[1920px]:w-full max-[1920px]:h-64 h-96 rounded-[30px] bg-[#177245] self-center"
        ></img>
      </Link>
      <p className="font-bold w-full text-[20px] max-[1200px]:text-[16px]">
        {title}
      </p>
      <div className="flex flex-col h-52 overflow-hidden gap-2 mb-5">
        <p className="w-full font-medium text-[18px]">{NewDate}</p>
        <div className="h-full w-full">
          <PortableText
            value={mainText[0].children[0]}
            components={myPortableTextComponents}
          ></PortableText>
        </div>
      </div>
    </div>
  );
}
