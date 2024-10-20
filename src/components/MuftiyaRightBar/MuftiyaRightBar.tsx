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
    Description: string;
  };
}
export default function MuftiyaRightBar({ data }: dataInterface) {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px]">
      <Muftiya image={data.Image}></Muftiya>

      <div className="px-4 flex flex-col gap-5">
        <p className="text-[20px] font-bold">{data.Name}</p>
        <p>{data.Description}</p>
      </div>
    </div>
  );
}
