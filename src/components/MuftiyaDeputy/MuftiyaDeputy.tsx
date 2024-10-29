import MuftiyaCHRDeputy from "./MuftiyaCHRDeputy/MuftiyaCHRDeputy";
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
  }[];
}
export default function MuftiyaDeputy({ data }: dataInterface) {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
      {data && <MuftiyaCHRDeputy data={data} />}
    </div>
  );
}
