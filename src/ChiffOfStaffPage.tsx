import { useEffect, useState } from "react";
import Area from "./components/Hero/Area/Area";
import { client, getLeaders } from "./sanity/sanity";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

export default function ChiffOfStaffPage() {
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
          return data.LeaderOf === "Manager";
        }
      );
      console.log(MyftiyaData);
      setData(MyftiyaData[0]);
    };

    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full max-[1280px]:ml-0 ml-10  text-white max-[850px]:items-center flex-col">
      <div className="relative w-full max-[660px]:w-[90%] font-inter text-white text-[20px] flex flex-col">
        <div className="min-[850px]:hidden">
          <Area></Area>
        </div>
        <div className="relative flex w-full h-fit scale-103 mt-10">
          {data && (
            <div className="w-full max-[850px]:mr-0 flex flex-col h-fit max-[1800px]:mr-10">
              <div className="flex items-center flex-col">
                {data && (
                  <p className="font-bold text-[55px] max-[1700px]:text-[40px] max-[1440px]:text-[35px] max-[1280px]:text-[30px] max-[660px]:w-[100%] max-[660px]:text-[25px] text-wrap text-center mb-10 w-[100%]">
                    {data.Name}
                  </p>
                )}
                {data &&
                  (data.Image !== undefined ? (
                    <img
                      src={data.Image.asset.url}
                      className="w-[55rem] max-h-[45rem] rounded-[30px] items-center"
                    ></img>
                  ) : (
                    <div className="w-[55rem] max-h-[45rem] rounded-[30px] items-center bg-green-500" />
                  ))}
              </div>
              <div className="font-inter flex flex-col mt-5 text-wrap">
                {data && (
                  <div className="text-[25px] leading-8 font-inter text-wrap min-[2559px]:w-[100%] min-[1900px]:w-[90%] min-[1920px]:w-[90%] min-[1960px]:w-[82%] max-[850px]:w-[90%]">
                    <PortableText
                      value={data.Description}
                      components={{
                        types: {
                          span: ({ value }: any) => <span>{value}</span>,
                          image: ({ value, isInline }) => (
                            <img
                              className="w-[50%]"
                              src={urlBuilder(client)
                                .image(value)
                                .width(isInline ? 1000 : 10000)
                                .fit("max")
                                .auto("format")
                                .url()}
                            />
                          ),
                        },
                        marks: {
                          strong: ({ children }: any) => (
                            <strong>{children}</strong>
                          ),
                        },
                      }}
                    ></PortableText>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="max-[850px]:hidden">
            <Area></Area>
          </div>
        </div>
      </div>
    </div>
  );
}
