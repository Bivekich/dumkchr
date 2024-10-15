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
    <div className="bg-[#E3E3E3] w-[30%] py-2 rounded-[30px] px-4 flex flex-col max-[1800px]:w-[25%] max-[1300px]:px-1">
      <p className="text-[24px]  font-bold w-10 py-4 text-[#177245] max-[1300px]:w-full max-[1300px]:justify-center flex">
        РАЙОНЫ
      </p>
      <div className="flex flex-col gap-3 ">
        {regions.map((region) => {
          return <AreaRow name={region}></AreaRow>;
        })}
      </div>
    </div>
  );
}
