import { useEffect, useState } from "react";
import MuftiyaSupportRightBar from "./components/MuftiyaSupportRightBar/MuftiyaSupportRightBar";
import { getLeaders } from "./sanity/sanity";

export default function MuftiyaMainSupportPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = async () => {
      const data = await getLeaders();
      const DeputyData = data.filter(
        (data: {
          Image: { asset: { url: string } };
          Name: string;
          LeaderOf: string;
          Description: string;
        }) => {
          return data.LeaderOf === "Support";
        }
      );
      setData(DeputyData);
    };
    query();
  }, []);

  return (
    <div className="flex gap-2 mb-52 w-full">
      {data.length > 0 && (
        <MuftiyaSupportRightBar data={data[0]}></MuftiyaSupportRightBar>
      )}
    </div>
  );
}
