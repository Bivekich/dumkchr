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
    <div className="flex-col p-8 max-[1751px]:p-4 max-[850px]:p-4 items-center flex gap-3 rounded-[10px] flex-shrink-0 max-[560px]:p-4 w-full text-[#177245] h-fit">
      {image !== "" ? (
        <div
          className="max-[1751px]:w-[100%] max-[900px]:w-[90%] max-[900px]:h-[40rem] max-[1751px]:h-[25rem] max-[1280px]:w-full max-[1280px]:h-[35rem] max-[560px]:h-[25rem] w-96 h-[30rem] max-[560px]:w-[95%] max-[850px]:h-[35rem] rounded-[30px] max-[560px]:flex-shrink flex-shrink-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ) : (
        ""
      )}

      <p className="max-w-80 text-center text-[24px] font-bold">{name}</p>
      <div className="w-full flex justify-between text-break">
        <p className="w-full text-center">{birth} г.р</p>
      </div>
      <div className="w-full flex justify-between text-break h-fit text-ellipsis overflow-hidden">
        <p className="text-start flex">{description}</p>
      </div>
    </div>
  );
}
