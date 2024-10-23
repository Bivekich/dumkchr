import { useEffect, useState } from "react";
import { getHadis } from "../../sanity/sanity";

export default function Hadis() {
  const [text, setText] = useState<string>();
  useEffect(() => {
    const query = async () => {
      const Hadis = await getHadis();
      setText(Hadis[0].text);
    };
    query();
  }, []);
  return (
    <div className="mt-60 w-full [&>img]:opacity-50">
      <img src="ornamentTop.png"></img>
      {text && (
        <div className="bg-[#E3E3E3] rounded-[30px] flex flex-col text-[#177245] p-4">
          <p className="text-[24px] font-bold">ХАДИС</p>
          <pre className="flex flex-wrap w-[85%] text-wrap font-inter text-[18px]">
            {text}
          </pre>
        </div>
      )}
      <img src="ornamentTop.png" className="rotate-180"></img>
    </div>
  );
}
