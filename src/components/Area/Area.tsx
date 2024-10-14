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
    <div className="bg-white w-full h-[37rem] rounded-[30px] px-4 flex flex-col flex-shrink">
      <p className="text-[24px] font-bold w-10 py-4 text-[#177245]">РАЙОНЫ</p>
      <div className="flex flex-col gap-3 ">
        {regions.map((region) => {
          return <AreaRow name={region}></AreaRow>;
        })}
      </div>
    </div>
  );
}
