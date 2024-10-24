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
export default function MuftiyaCHRDeputy({ data }: dataInterface) {
  return (
    <div className="flex max-[1800px]:w-[80%] w-[70%] h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
      {data && (
        <img
          className="w-full rounded-[30px] "
          src={data[0].Image.asset.url}
        ></img>
      )}
    </div>
  );
}
