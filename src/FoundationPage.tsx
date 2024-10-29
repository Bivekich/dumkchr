import { PortableText } from "@portabletext/react";
import Area from "./components/Hero/Area/Area";
import { useEffect, useState } from "react";
import { getLeaders } from "./sanity/sanity";
import PersonInfo from "./components/PersonInfo/PersonInfo";

export default function FoundationPage() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const data = await getLeaders();
      const MyftiyaData = data.filter(
        (data: {
          Image: { asset: { url: string } };
          Name: string;
          LeaderOf: string;
          Description: any;
        }) => {
          return data.LeaderOf === "Foundation";
        }
      );
      setData(MyftiyaData);
    };
    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full flex-col">
      <div className="flex gap-2 w-full flex-col ">
        <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white">
          <div className="flex w-full max-[800px]:flex-col">
            <div className="max-[800px]:ml-0 ml-3 max-[800px]:w-full max-[800px]:mb-10 min-[800px]:hidden">
              <Area></Area>
            </div>
            <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
              <div className="flex w-full h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
                {data.length > 0 ? (
                  <img
                    className="w-full rounded-[30px] bg-[#004B2D]"
                    src={data[0].Image.asset.url}
                  ></img>
                ) : (
                  <div className="w-full rounded-[30px] bg-[#004B2D]"></div>
                )}
              </div>
            </div>
            <div className="max-[800px]:ml-0 ml-3 max-[800px]:w-full max-[800px]:mt-10 max-[800px]:hidden">
              <Area></Area>
            </div>
          </div>
          {data.length > 0 && (
            <div className="font-inter text-wrap w-full text-[20px] px-4">
              <p className="text-[20px] font-bold py-2 h-10">{data[0].Name}</p>
              <PortableText
                value={data[0].Description}
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
          )}
        </div>
      </div>
      <div className="w-full min-h-full text-white">
        {data.map((item: any, index: number) => {
          return index === 0 ? (
            ""
          ) : (
            <PersonInfo key={index} data={item}></PersonInfo>
          );
        })}
      </div>
    </div>
  );
}
