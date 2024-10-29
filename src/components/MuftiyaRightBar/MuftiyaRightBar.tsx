import { PortableText } from "@portabletext/react";
import Area from "../Hero/Area/Area";
import Muftiya from "../Muftiya/Muftiya";
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
export default function MuftiyaRightBar({ data }: dataInterface) {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px] ">
      <div className="flex max-[850px]:flex-col">
        <Muftiya image={data.Image}></Muftiya>
        <div className="max-[850px]:ml-0 ml-3 max-[850px]:mt-5 max-[850px]:w-full items-center justify-center">
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
