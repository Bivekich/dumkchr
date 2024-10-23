import { useEffect, useState } from "react";
import { getLeaders } from "./sanity/sanity";

export default function Kadie() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const data = await getLeaders();
      const MyftiyaData = data.filter(
        (data: {
          Image: { asset: { url: string } };
          Name: string;
          LeaderOf: string;
          Description: string;
        }) => {
          return data.LeaderOf === "Kadi";
        }
      );
      setData(MyftiyaData);
    };

    query();
  }, []);

  return (
    <div className="flex gap-2 mb-52 w-full ">
      <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white">
        <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden ">
          <div className="flex max-[1800px]:w-[80%] w-[70%] h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
            {data && data?.Image === undefined ? (
              <div className="w-full rounded-[30px] bg-[#004B2D]"></div>
            ) : (
              <img
                className="w-full rounded-[30px] bg-[#004B2D]"
                src={data.Image.asset.url}
              ></img>
            )}
          </div>
        </div>
        {data && (
          <pre className="text-[20px] font-bold w-[65%] font-inter text-wrap">
            {data.Description}
          </pre>
        )}
      </div>
    </div>
  );
}
