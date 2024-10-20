import Area from "../Hero/Area/Area";
import MuftiyaCHRSupport from "./MuftiyaCHRSupport/MuftiyaCHRSupport";
interface imageProps {
  image: string;
}
export default function MuftiyaSupport({ image }: imageProps) {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
      <MuftiyaCHRSupport image={image} />
      <Area></Area>
    </div>
  );
}
