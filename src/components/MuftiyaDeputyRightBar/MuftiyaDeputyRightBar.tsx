import { PortableText } from "@portabletext/react";
import MuftiyaDeputy from "../MuftiyaDeputy/MuftiyaDeputy";
import PersonInfo from "../PersonInfo/PersonInfo";
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
  }[];
}
export default function MuftiyaDeputyRightBar({ data }: dataInterface) {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px]">
      <div className="min-[850px]:hidden">
        <Area></Area>
      </div>
      <div className="flex max-[850px]:flex-col">
        <div className="w-full flex flex-col pr-7">
          {data && <MuftiyaDeputy data={data}></MuftiyaDeputy>}
          <div className="px-4 flex flex-col gap-5">
            <div className="font-inter text-wrap">
              <p className="font-bold">{data[0].Name}</p>
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
          </div>
        </div>
        <div className="max-[850px]:hidden">
          <Area></Area>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {data.map((item, index) => {
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
