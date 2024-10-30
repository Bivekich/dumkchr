import { Link } from "react-router-dom";

interface AreaRowProps {
  name: string;
}
export default function AreaRow({ name }: AreaRowProps) {
  return (
    <Link
      className="text-wrap text-ellipsis w-full text-[17.5px] max-[1920px]:text-[17px] max-[1800px]:text-[16px] max-[860px]:text-[14px] max-[690px]:text-[13px] max-[640px]:text-[15px] max-[1440px]:p-1 p-4 rounded-full flex items-center justify-between h-10 bg-[#177245] text-white max-[1800px]:text-center max-[1800px]:justify-center"
      to={`/Regions/${name}`}
    >
      <p>{name}</p>
    </Link>
  );
}
