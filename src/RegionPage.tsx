import { useEffect, useState } from "react";
import { client, getRegions } from "./sanity/sanity";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import Area from "./components/Hero/Area/Area";
import { Carousel } from "flowbite-react";
import RegionPersonalPage from "./components/RegionPersonalCard/RegionPersonalCard";

export default function RegionPage() {
  const RegName = useParams().RegionName;
  const [data, setData] = useState<any>([]);
  const [dataLen, setDataLen] = useState();
  useEffect(() => {
    const query = async () => {
      const Regions = await getRegions();
      const region = Regions.filter((item: any) => item.name === RegName);
      setData(region);
      console.log(region);
      setDataLen(region[0].Personal.length);
    };
    query();
  }, []);

  const [currantPage, setCurrantPage] = useState("1");

  const chunkArray = (arr: any, chunkSize: any) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const GroupedPortableText = ({ value, components }: any) => {
    const filteredValue = value
      .map((item: any) => {
        if (item._type === "block" && item.children) {
          item.children = item.children
            .map((child: any) => {
              if (typeof child.text === "string") {
                child.text = child.text
                  .replace(/<br\s*\/?>/gi, "")
                  .replace(/\n/g, "");
              }
              return child;
            })
            .filter((child: any) => child.text && child.text.trim() !== "");
        }

        return item;
      })
      .filter((item: any) => {
        if (item._type === "block") {
          return item.children.length > 0;
        }
        return true;
      });
    const groupedContent = chunkArray(filteredValue, 2);

    return (
      <div className="flex flex-col gap-10">
        {groupedContent.map((group, index) => (
          <div key={index} className="flex justify-between">
            {group.map((item: any, i: any) => (
              <PortableText
                key={i}
                value={item}
                components={{
                  ...components,
                  block: ({ children }) => {
                    if (
                      Array.isArray(children) &&
                      children.length === 1 &&
                      children[0] === ""
                    ) {
                      return null;
                    }
                    return (
                      <p className="max-[850px]:w-[30%] w-[50%] h-fit">
                        {children}
                      </p>
                    );
                  },
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex gap-2 w-full max-[1280px]:ml-0 ml-10 text-white max-[850px]:items-center flex-col max-[1580px]:items-center max-[1280px]:items-start max-[1008px]:items-center">
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
                  {item.Other !== null ? (
                    <Carousel
                      slide={false}
                      className="w-full max-w-[50rem] h-auto aspect-[880/720]"
                    >
                      {item.image && (
                        <img
                          key={index}
                          className="rounded-[30px] max-w-[55rem] aspect-[880/720] object-cover w-full"
                          src={item.image.asset.url}
                          style={{
                            borderRadius: "30px",
                          }}
                        ></img>
                      )}
                      {item.Other.map((item: any, index: number) => {
                        return (
                          <img
                            key={index}
                            className="rounded-[30px] w-full h-auto max-w-[55rem] aspect-[880/720] object-cover"
                            src={item.asset.url}
                            style={{
                              borderRadius: "30px",
                            }}
                          ></img>
                        );
                      })}
                    </Carousel>
                  ) : item.image ? (
                    <img
                      key={index}
                      className="rounded-[30px] w-full h-auto max-w-[55rem] aspect-[880/720] object-cover"
                      src={item.image.asset.url}
                      style={{
                        borderRadius: "30px",
                      }}
                    ></img>
                  ) : null}

                  <div className="font-inter flex flex-col mt-5 text-wrap w-full">
                    <div className="text-[25px] max-[850px]:text-[20px] leading-8 font-inter text-wrap self-center w-full flex flex-col">
                      <GroupedPortableText
                        value={item.info}
                        components={{
                          types: {
                            span: ({ value }: any) => (
                              <span className="w-full">{value}</span>
                            ),
                            p: ({ value }: any) => (
                              <p className="w-full">{value}</p>
                            ),
                            image: ({ value, isInline }: any) => (
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
                              <strong className="h-fit">{children}</strong>
                            ),
                          },
                        }}
                      />
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
      <div className="w-full uppercase border-white items-center justify-center mt-14 text-[32px] font-bold flex">
        Действующие имамы
      </div>
      <div className="grid grid-cols-3 max-[1751px]:grid-cols-3 max-[1280px]:grid-cols-2 max-[850px]:w-full max-[850px]:px-0 max-[1280px]:w-full max-[1008px]:flex max-[1008px]:px-24 max-[1008px]:w-[80%] max-[1580px]:w-[35rem] max-[1280px]:grid max-[1580px]:flex max-[1580px]:flex-col max-[1580px]:items-center max-[1580px]:justify-center gap-2 [&>div]:bg-white text-black text-[20px] mt-10">
        {data[0] &&
          data[0].Personal !== null &&
          data[0].Personal.map((item: any, index: any) => {
            if (
              index <= +currantPage * 12 - 1 &&
              index >= +currantPage * 12 - 12
            ) {
              return (
                <RegionPersonalPage
                  key={index}
                  name={item.Name}
                  birth={item.Birth}
                  image={item.Photo !== null ? item.Photo.asset.url : ""}
                  description={item.Description}
                />
              );
            }
          })}
      </div>
      {dataLen && Math.ceil(dataLen / 12) !== 1 && (
        <p className="text-[20px] mt-5 w-full flex text-center items-center justify-center uppercase">
          Страницы
        </p>
      )}
      <div className="w-full flex gap-10 cursor-pointer items-center justify-center mt-5">
        {dataLen &&
          Math.ceil(dataLen / 12) !== 1 &&
          Array.from({ length: Math.ceil(dataLen / 12) }).map((_, index) => {
            return (
              <p
                key={index}
                className="w-10 h-10 items-center justify-center flex hover:bg-[#109c6c] rounded-[15px]"
                onClick={() => setCurrantPage(`${index + 1}`)}
              >
                {index + 1}
              </p>
            );
          })}
      </div>
    </div>
  );
}
