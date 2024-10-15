export default function News() {
  return (
    <div className="flex max-[1800px]:w-[80%] w-[70%] h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
      <div className="max-[1800px]:w-[40rem] max-[2560px]:w-[55rem] max-[1920px]:w-[57rem] h-full rounded-[30px] bg-[#004B2D] w-[40rem]"></div>
      <div className="w-[27rem] h-full max-[2560px]:w-[35rem] rounded-[30px] bg-[#177245] p-4 flex flex-col max-[1800px]:w-[20rem] ">
        <p className="font-bold text-[24px]"> ЗАГОЛОВОК НОВОСТИ</p>
        <p className="flex flex-wrap text-[17px] max-[1800px]:text-[14px] ">
          «Умен тот, кто требует у своей души отчета (то есть: следит за своей
          душой, не позволяя ей удовлетворять такие желания, которые могут
          оказаться пагубными для его религии) и совершает (праведные) дела ради
          того, что ожидает его после смерти. Слаб же тот, кто позволяет своей
          душе следовать ее страстям».(ат-Тирмизи)
        </p>
        <button className="w-full mt-auto border rounded-full h-7 max-[1800px]:h-12 ">
          ЧИТАТЬ ПОЛНОСТЬЮ
        </button>
      </div>
    </div>
  );
}
