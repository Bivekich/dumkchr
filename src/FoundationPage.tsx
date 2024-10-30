import { PortableText } from "@portabletext/react";
import Area from "./components/Hero/Area/Area";
import { useEffect, useState } from "react";
import { client, getLeaders } from "./sanity/sanity";
import urlBuilder from "@sanity/image-url";

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
    <div className="flex gap-2 mb-52 w-full max-[1280px]:ml-0 ml-10  text-white max-[850px]:items-center flex-col">
      <div className="relative w-full max-[660px]:w-[90%] font-inter text-white text-[20px] flex flex-col">
        <div className="min-[850px]:hidden">
          <Area></Area>
        </div>
        <div className="relative flex w-full h-fit scale-103 mt-10">
          <div className="flex flex-col max-[850px]:mr-0 mr-10 gap-12">
            {data.map((item: any, index: any) => {
              return (
                <div
                  className="w-full max-[850px]:mr-0 flex flex-col items-center  h-fit max-[1800px]:mr-10"
                  key={index}
                >
                  <p className="font-bold text-[55px] max-[1700px]:text-[40px] max-[1440px]:text-[35px] max-[1280px]:text-[30px] max-[660px]:w-[100%] max-[660px]:text-[25px] text-wrap w-fit ">
                    {item.Name}
                  </p>
                  {item.Image !== undefined ? (
                    <img
                      src={item.Image.asset.url}
                      className="w-[55rem] max-h-[45rem] rounded-[30px] items-center"
                    ></img>
                  ) : (
                    <div className="w-[55rem] max-h-[45rem] rounded-[30px] items-center bg-green-700" />
                  )}

                  <div className="font-inter flex flex-col mt-5 text-wrap w-full">
                    <div className="text-[25px] leading-8 font-inter text-wrap self-center w-full flex">
                      <PortableText
                        value={item.Description}
                        components={{
                          types: {
                            span: ({ value }: any) => <span>{value}</span>,
                            p: ({ value }: any) => <p>{value}</p>,
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
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-[850px]:hidden ml-auto">
            <Area></Area>
          </div>
        </div>
      </div>
    </div>
  );
}
