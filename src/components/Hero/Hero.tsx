import Area from "./Area/Area";
import News from "./News/News";

export default function Hero({ news }: any) {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
      {news && <News news={news}></News>}
      <Area></Area>
    </div>
  );
}
