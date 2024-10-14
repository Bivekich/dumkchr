import Area from "../Area/Area";
import News from "./News/News";

export default function Hero() {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 ">
      <News></News>
      <Area></Area>
    </div>
  );
}
