import AreaRow from "./AreaRow/AreaRow";
const regions: string[] = [
  "Абазинский район",
  "Адыге-Хабльский район",
  "Зеленчукский район",
  "Карачаевский район",
  "Малокарачаевский район",
  "Ногайский район",
  "Прикубанский район",
  "Урупский район",
  "Усть-Джегутинский район",
  "Хабезский район",
];
export default function Area() {
  return (
    <div className="bg-[#E3E3E3] max-[640px]:w-full max-[850px]:w-full max-[1280px]:w-[24rem] max-[1280px]:h-fit w-[23rem] py-2 max-[1280px]:py-4 rounded-[30px] px-4 flex flex-col max-[1300px]:px-1">
      <p className="text-[20px] font-bold w-10 py-4 text-[#177245] max-[1300px]:w-full max-[1300px]:justify-center flex">
        РАЙОНЫ
      </p>
      <div className="flex flex-col gap-3 ">
        {regions.map((region, index) => {
          return <AreaRow key={index} name={region}></AreaRow>;
        })}
      </div>
    </div>
  );
}
