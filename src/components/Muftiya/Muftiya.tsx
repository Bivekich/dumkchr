import Area from "../Hero/Area/Area";
import MuftiyaCHR from "./MuftiyaCHR/MuftiyaCHR";

export default function Muftiya() {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
      <MuftiyaCHR></MuftiyaCHR>
      <Area></Area>
    </div>
  );
}
