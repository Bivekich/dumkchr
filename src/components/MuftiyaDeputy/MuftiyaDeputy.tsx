import Area from "../Hero/Area/Area";
import MuftiyaCHRDeputy from "./MuftiyaCHRDeputy/MuftiyaCHRDeputy";

export default function MuftiyaDeputy() {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
      <MuftiyaCHRDeputy />
      <Area></Area>
    </div>
  );
}
