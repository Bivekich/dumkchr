export default function Hadis() {
  return (
    <div className="mt-60 w-full [&>img]:opacity-50">
      <img src="ornamentTop.png"></img>
      <div className="bg-white h-96 w-80 rounded-[30px] flex flex-col text-[#177245] p-4">
        <p className="text-[24px] font-bold">ХАДИС</p>
        <p className="flex flex-wrap w-[85%]">
          «Умен тот, кто требует у своей души отчета (то есть: следит за своей
          душой, не позволяя ей удовлетворять такие желания, которые могут
          оказаться пагубными для его религии) и совершает (праведные) дела ради
          того, что ожидает его после смерти. Слаб же тот, кто позволяет своей
          душе следовать ее страстям».(ат-Тирмизи)
        </p>
      </div>
      <img src="ornamentTop.png" className="rotate-180"></img>
    </div>
  );
}
