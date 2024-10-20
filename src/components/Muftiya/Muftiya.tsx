import Area from "../Hero/Area/Area";
import MuftiyaCHR from "./MuftiyaCHR/MuftiyaCHR";
interface Props {
  image: {
    asset: {
      url: string;
    };
  };
}
export default function Muftiya({ image }: Props) {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
      <MuftiyaCHR image={image}></MuftiyaCHR>
      <Area></Area>
    </div>
  );
}
