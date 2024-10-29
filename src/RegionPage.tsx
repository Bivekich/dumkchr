import { useEffect, useState } from "react";
import { client, getRegions } from "./sanity/sanity";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

export default function RegionPage() {
  const RegName = useParams().RegionName;
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const Regions = await getRegions();
      const region = Regions.filter((item: any) => item.name === RegName);
      setData(region);
    };
    query();
  }, []);
  return (
    <div className="flex gap-20 mb-52 w-full flex-col">
      {data.map((info: any, index: number) => {
        return (
          <div
            key={index}
            className="w-full min-h-[30rem] flex justify-between max-[1280px]:flex-col-reverse overflow-hidden"
          >
            <div className="text-white font-inter text-[20px] max-[1280px]:w-full w-[50%] text-wrap overflow-hidden">
              <PortableText
                value={info.info}
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
                    strong: ({ children }: any) => <strong>{children}</strong>,
                  },
                }}
              ></PortableText>
            </div>
            <img
              className="w-[30rem] h-[20rem] min-[1650px]:w-[35rem] min-[1650px]:h-[25rem] rounded-[30px] bg-[#162e24] flex-shrink-0 "
              src={info.image.asset.url}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
