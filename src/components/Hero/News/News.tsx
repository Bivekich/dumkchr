export default function News() {
  return (
    <div className="flex w-[75%] h-full bg-white p-4 rounded-[30px] text-white justify-center items-center">
      <div className="max-[1800px]:w-[20rem] max-[2560px]:w-[55rem] max-[1920px]:w-[40rem]  h-full rounded-[30px] bg-[#004B2D] w-[40rem]"></div>
      <div className="w-[27rem] h-full max-[2560px]:w-[35rem] rounded-[30px] bg-[#177245] p-4 flex flex-col max-[1800px]:w-[20rem]">
        <p className="font-bold text-[24px]"> ЗАГОЛОВОК НОВОСТИ</p>
        <p className="flex flex-wrap w-64 text-[17px]">
          «Умен тот, кто требует у своей души отчета (то есть: следит за своей
          душой, не позволяя ей удовлетворять такие желания, которые могут
          оказаться пагубными для его религии) и совершает (праведные) дела ради
          того, что ожидает его после смерти. Слаб же тот, кто позволяет своей
          душе следовать ее страстям».(ат-Тирмизи)
        </p>
        <button className="w-full mt-auto border rounded-full h-7">
          ЧИТАТЬ ПОЛНОСТЬЮ
        </button>
      </div>
    </div>
  );
}
