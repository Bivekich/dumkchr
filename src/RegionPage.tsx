import { useEffect, useState } from "react";
import { getRegions } from "./sanity/sanity";
import { useParams } from "react-router-dom";

export default function RegionPage() {
  const RegName = useParams().RegionName;
  const [data, setData] = useState<
    {
      info: string;
      image: { asset: { url: string } };
    }[]
  >([]);
  useEffect(() => {
    const query = async () => {
      const Regions = await getRegions();
      const region = Regions.filter((item: any) => item.name === RegName);
      setData(region);
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
