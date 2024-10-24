import MuftiyaDeputy from "../MuftiyaDeputy/MuftiyaDeputy";
import PersonInfo from "../PersonInfo/PersonInfo";
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
export default function MuftiyaDeputyRightBar({ data }: dataInterface) {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px]">
      {data && <MuftiyaDeputy data={data}></MuftiyaDeputy>}
      <div className="px-4 flex flex-col gap-5">
        <pre className="text-[20px] font-inter text-wrap w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem fugit autem iusto nulla, rem adipisci explicabo a
          dolorum eaque facere ipsum! Obcaecati quae officia ullam at,
          cupiditate amet quod totam.
        </pre>
      </div>
      <div className="flex flex-col gap-10 px-4">
        {data.map((item, index) => {
          return <PersonInfo key={index} data={item}></PersonInfo>;
        })}
      </div>
    </div>
  );
}
