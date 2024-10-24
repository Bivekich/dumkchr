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
    <div className="w-full text-white">
      <PersonIcon image={data.Image.asset.url}></PersonIcon>
      <p className="text-[20px] font-bold py-2">{data.Name}</p>
      <pre className="text-[20px] font-inter text-wrap">{data.Description}</pre>
    </div>
  );
}
