import { PortableText } from "@portabletext/react";
export default function News({ news }: any) {
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => <img src={value.imageUrl} />,
      span: ({ value }: any) => <span>{value.text}</span>,
    },

    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>,
    },
  };
  return (
    <div className="flex max-[1800px]:w-[80%] w-[70%] bg-[#E3E3E3] p-4 rounded-[30px] text-white">
      <img
        className="max-[1800px]:w-[90%]  max-[2560px]:w-[90%] max-[1920px]:w-[90%] h-full rounded-[30px] bg-[#004B2D] object-center w-[90%] "
        src={news[news.length - 1].Image.asset.url}
      ></img>
      <div className="w-[27rem] h-full max-[2560px]:w-[35rem] rounded-[30px] bg-[#177245] p-4 flex flex-col max-[1800px]:w-[20rem] max-[1920px]:w-[40%] ">
        <p className="font-bold text-[24px]">{news[news.length - 1].Title}</p>
        <div>
          {news ? (
            <PortableText
              value={news[news.length - 1].MainText[0].children}
              components={myPortableTextComponents}
            ></PortableText>
          ) : (
            <div>hello world</div>
          )}
        </div>

        <button className="w-full mt-auto border rounded-full h-7 max-[1800px]:h-12 ">
          ЧИТАТЬ ПОЛНОСТЬЮ
        </button>
      </div>
    </div>
  );
}
