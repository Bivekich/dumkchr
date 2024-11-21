import { useEffect, useState } from "react";
import { getHadis } from "../../sanity/sanity";

export default function Hadis() {
  const [text, setText] = useState<string>();
  const [title, setTitle] = useState<string>();
  useEffect(() => {
    const query = async () => {
      const Hadis = await getHadis();
      setText(Hadis[0].text);
      setTitle(Hadis[0].hadisName);
    };
    query();
  }, []);
  return (
    <div className="max-[1280px]:text-center max-[1280px]:mt-0 min-[1281px]:mt-36 w-fit [&>img]:opacity-50 max-[1280px]:flex text-wrap">
      <img src="/ornamentTop.png" className="max-[1280px]:hidden"></img>
      {text && (
        <div className="bg-[#E3E3E3] rounded-[30px] flex flex-col text-[#177245] p-4 min-[1200px]:w-full min-[900px]:max-w-[400px]">
          <p className="text-[24px] font-bold">{title}</p>
          <p className="flex flex-wrap max-[1200px]:w-full break-words text-wrap font-inter text-[18px]">
            {text}
          </p>
        </div>
      )}
      <img
        src="/ornamentTop.png"
        className="rotate-180 max-[1280px]:hidden"
      ></img>
    </div>
  );
}
