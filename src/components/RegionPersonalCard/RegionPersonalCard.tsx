interface RegionPersonInterface {
  name: string;
  birth: string;
  description: string;
  image: string;
}
export default function RegionPersonalPage({
  name,
  birth,
  description,
  image,
}: RegionPersonInterface) {
  return (
    <div className="flex-col p-8 items-center flex gap-3 rounded-[10px] flex-shrink-0  max-[560px]:p-4 w-full text-[#177245]">
      <div
        className="max-[1751px]:w-[30rem] max-[1751px]:h-[35rem] w-96 h-[30rem] max-[560px]:w-[95%] max-[560px]:h-full bg-black rounded-[30px] max-[560px]:flex-shrink flex-shrink-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="max-w-80 text-center text-[24px] font-bold">{name}</p>
      <div className="w-full flex justify-between text-break">
        <p className="w-full text-center">{birth} г.р</p>
      </div>
      <div className="w-full flex justify-between text-break h-full text-ellipsis overflow-hidden">
        <p className="text-start flex">{description}</p>
      </div>
    </div>
  );
}
