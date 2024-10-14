import TimeRow from "./TimeRow";

export default function NamazTime() {
  const Namaz: Array<{ title: string; time: string }> = [
    { title: "ФАДЖР", time: "04:25" },
    { title: "ВОСХОД", time: "05:53" },
    { title: "ЗУХР", time: "11:42" },
    { title: "АСР", time: "14:48" },
    { title: "МАГРИБ", time: "17:23" },
    { title: "ИША", time: "18:36" },
  ];
  return (
    <div className="bg-white h-96 w-80 rounded-[30px] flex flex-col p-4">
      <p className="font-bold text-[24px]">ВРЕМЯ НАМАЗА</p>
      <div className="w-full p-1 rounded-full px-2 flex items-center border-2 mb-10">
        <p>ЧЕРКЕССК</p>
      </div>
      <div className="flex flex-col gap-1">
        {Namaz.map((item) => {
          return <TimeRow title={item.title} time={item.time}></TimeRow>;
        })}
      </div>
    </div>
  );
}
