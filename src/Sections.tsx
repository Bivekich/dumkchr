import { useEffect, useState } from "react";
import { getSections } from "./sanity/sanity";

export default function SectionsPage() {
  const [data, setData] = useState<
    {
      info: string;
      image: { asset: { url: string } };
    }[]
  >([]);
  useEffect(() => {
    const query = async () => {
      const Sections = await getSections();
      setData(Sections);
    };
    query();
  }, []);
  return (
    <div className="flex gap-20 mb-52 w-full flex-col">
      {data.map((info, index) => {
        return (
          <div
            key={index}
            className="w-full h-[30rem] flex justify-between overflow-hidden max-[1650px]:h-[20rem]"
          >
            <pre className="text-white font-inter text-[20px] w-[50%] text-wrap">
              {info.info}
            </pre>
            <img
              className="w-[30rem] h-full rounded-[30px] bg-[#162e24] max-[1650px]:w-[20rem] "
              src={info.image.asset.url}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
