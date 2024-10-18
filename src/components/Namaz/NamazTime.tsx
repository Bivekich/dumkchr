import TimeRow from "./TimeRow";
interface NamazProps {
  time: { Title: string; Time: string }[];
}
export default function NamazTime({ time }: NamazProps) {
  /*const Namaz: Array<{ title: string; time: string }> = [
    { title: "ФАДЖР", time: "04:25" },
    { title: "ВОСХОД", time: "05:53" },
    { title: "ЗУХР", time: "11:42" },
    { title: "АСР", time: "14:48" },
    { title: "МАГРИБ", time: "17:23" },
    { title: "ИША", time: "18:36" },
  ];*/
  return (
    <div className="bg-[#E3E3E3] w-80 rounded-[30px] flex flex-col p-4 max-[1440px]:w-full text-[#177245]  ">
      <p className="font-bold text-[24px]">ВРЕМЯ НАМАЗА</p>
      <div className="w-full p-1 rounded-full px-2 flex items-center border mb-10 text-[#177245] border-[#177245]">
        <p>ЧЕРКЕССК</p>
      </div>
      <div className="flex flex-col gap-1">
        {time.map((item, index) => {
          return (
            <TimeRow key={index} title={item.Title} time={item.Time}></TimeRow>
          );
        })}
      </div>
    </div>
  );
}
