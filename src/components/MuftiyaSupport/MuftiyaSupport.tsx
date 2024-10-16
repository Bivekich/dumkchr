import Area from "../Hero/Area/Area";
import MuftiyaCHRSupport from "./MuftiyaCHRSupport/MuftiyaCHRSupport";

export default function MuftiyaSupport() {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
      <MuftiyaCHRSupport />
      <Area></Area>
    </div>
  );
}
