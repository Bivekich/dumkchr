import { Link } from "react-router-dom";

interface AreaRowProps {
  name: string;
}
export default function AreaRow({ name }: AreaRowProps) {
  return (
    <Link
      className="text-wrap text-ellipsis w-full max-[1280px]:text-[10px] max-[1100px]:text-[9.5px] max-[1550px]:text-[10px] max-[1650px]:text-[12px] max-[1440px]:text-[12px] max-[1800px]:text-[14.5px] max-[1440px]:p-1 p-4 rounded-full flex items-center justify-between h-10 bg-[#177245] text-white max-[1800px]:text-center max-[1800px]:justify-center max-[900px]:text-[10px] max-[640px]:text-[14px]"
      to={`/Regions/${name}`}
    >
      <p>{name}</p>
    </Link>
  );
}
