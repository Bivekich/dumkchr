import { Link } from "react-router-dom";
interface NewsIdProps {
  NewsId: number;
}
export default function MainNewsCard({ NewsId }: NewsIdProps) {
  return (
    <div className="w-full h-[42rem] flex flex-col p-9 text-[#177245] gap-3">
      <Link
        className="w-full max-[1920px]:h-64 h-80 rounded-[30px] bg-[#177245] self-center"
        to={`/NewsPage/${NewsId}`}
      ></Link>
      <p className="font-bold w-full text-[15px]">
        «Умен тот, кто требует у своей души отчета (то есть: следит за своей
        душой, не позволяя ей удовлетворять
      </p>
      <p className="w-full">7 октября 2024г. в 11:00</p>
      <p className="flex overflow-hidden">
        «Умен тот, кто требует у своей души отчета (то есть: следит за своей
        душой, не позволяя ей удовлетворять такие желания, которые могут
        оказаться пагубными для его религии) и совершает (праведные) дела ради
        того, что ожидает его после смерти. Слаб же тот, кто позволяет своей
        душе следовать ее страстям».(ат-Тирмизи)
      </p>
    </div>
  );
}
