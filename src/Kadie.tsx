import { useEffect, useState } from "react";
import { getLeaders } from "./sanity/sanity";
import Area from "./components/Hero/Area/Area";
import { PortableText } from "@portabletext/react";

export default function Kadie() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const data = await getLeaders();
      const MyftiyaData = data.filter(
        (data: {
          Image: { asset: { url: string } };
          Name: string;
          LeaderOf: string;
          Description: string;
        }) => {
          return data.LeaderOf === "Kadi";
        }
      );
      setData(MyftiyaData);
    };

    query();
  }, []);

  return (
    <div className="flex gap-2 mb-52 w-full ">
      <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white">
        <div className="flex w-full max-[800px]:flex-col">
          <div className="max-[800px]:ml-0 ml-3 max-[800px]:w-full max-[800px]:mb-10 min-[800px]:hidden">
            <Area></Area>
          </div>
          <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
            <div className="flex w-full h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
              {data && data?.Image === undefined ? (
                <div className="w-full rounded-[30px] bg-[#004B2D]"></div>
              ) : (
                <img
                  className="w-full rounded-[30px] bg-[#004B2D]"
                  src={data.Image.asset.url}
                ></img>
              )}
            </div>
          </div>
          <div className="max-[800px]:ml-0 ml-3 max-[800px]:w-full max-[800px]:mt-10 max-[800px]:hidden">
            <Area></Area>
          </div>
        </div>
        {data && (
          <div className="font-inter text-wrap">
            <PortableText
              value={data.Description}
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
  );
}
