interface TimeProps {
  title: string;
  time: string;
}
export default function TimeRow({ title, time }: TimeProps) {
  return (
    <div className="w-full p-1 border-2 bg-[#177245] text-white rounded-full flex items-center px-2 justify-between">
      <p>{title}</p>
      <p className="font-bold">{time}</p>
    </div>
  );
}
