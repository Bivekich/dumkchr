import LeftBar from "../LeftBar/LeftBar";
import Area from "./Area/Area";
import News from "./News/News";

export default function Hero({ news }: any) {
  return (
    <div className="w-full h-[37rem] max-[1280px]:h-fit rounded-[30px] max-[640px]:flex-col flex gap-2 overflow-hidden ">
      <div className="min-[1280px]:hidden">
        <LeftBar></LeftBar>
      </div>

      {news && <News news={news}></News>}
      <Area></Area>
    </div>
  );
}
