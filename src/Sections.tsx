import { useEffect, useState } from "react";
import { client, getSections } from "./sanity/sanity";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import Area from "./components/Hero/Area/Area";
import { Carousel } from "flowbite-react";

export default function SectionsPage() {
  const param = useParams().Section;
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const Sections = await getSections();
      const section = Sections.filter((sec: any) => {
        return sec.sectionType === param;
      });
      setData(section);
      console.log(section);
    };
    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full max-[1280px]:ml-0 ml-10  text-white max-[850px]:items-center flex-col">
      <div className="relative w-full max-[660px]:w-[90%] font-inter text-white text-[20px] flex flex-col">
        <div className="min-[850px]:hidden">
          <Area></Area>
        </div>
        <div className="relative flex w-full h-fit scale-103 mt-10 ">
          <div className="flex max-[850px]:mr-0 mr-10 gap-12 w-full">
            {data.map((item: any, index: any) => {
              return (
                <div
                  className="w-full max-[850px]:mr-0 h-fit max-[1800px]:mr-10 flex flex-row-reverse"
                  key={index}
                >
                  <div className="w-full max-[850px]:mr-0 flex-col items-center h-fit max-[1800px]:mr-10 ">
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
                  </div>
                  <div className="font-inter flex flex-col mt-5 text-wrap w-full">
                    <div className="text-[25px] leading-8 font-inter text-wrap self-center w-full flex flex-col">
                      <PortableText
                        value={item.info}
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
