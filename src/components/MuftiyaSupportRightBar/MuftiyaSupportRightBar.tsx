import { PortableText } from "@portabletext/react";
import MuftiyaSupport from "../MuftiyaSupport/MuftiyaSupport";
import Area from "../Hero/Area/Area";
interface dataInterface {
  data: {
    Image: {
      asset: {
        url: string;
      };
    };
    Name: string;
    LeaderOf: string;
    Description: any;
  };
}
export default function MuftiyaSupportRightBar({ data }: dataInterface) {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px]">
      <div className="flex max-[850px]:flex-col">
        <div className="max-[850px]:ml-0 ml-3 max-[850px]:mt-5 max-[850px]:w-full items-center justify-center mb-10 min-[850px]:hidden">
          <Area></Area>
        </div>
        <MuftiyaSupport image={data.Image.asset.url} />
        <div className="max-[850px]:ml-0 ml-3 max-[850px]:mt-5 max-[850px]:w-full items-center justify-center max-[850px]:hidden">
          <Area></Area>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-5">
        <p className="text-[20px] font-bold">{data.Name}</p>
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
      </div>
    </div>
  );
}
