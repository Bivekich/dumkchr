import { PortableText } from "@portabletext/react";
import PersonIcon from "../PersonIcon/PersonIcon";
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
export default function PersonInfo({ data }: dataInterface) {
  return (
    <div className="w-full text-white">
      <PersonIcon image={data.Image.asset.url}></PersonIcon>
      <p className="text-[20px] font-bold py-2 px-4">{data.Name}</p>
      <div className="text-[20px] font-inter text-wrap px-4 ">
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
  );
}
