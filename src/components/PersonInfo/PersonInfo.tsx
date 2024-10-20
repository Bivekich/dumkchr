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
    Description: string;
  };
}
export default function PersonInfo({ data }: dataInterface) {
  return (
    <div>
      <PersonIcon image={data.Image.asset.url}></PersonIcon>
      <p className="text-[20px] font-bold py-2">{data.Name}</p>
      <p>{data.Description}</p>
    </div>
  );
}
