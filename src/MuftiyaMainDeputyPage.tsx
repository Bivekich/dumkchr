import { useEffect, useState } from "react";
import MuftiyaDeputyRightBar from "./components/MuftiyaDeputyRightBar/MuftiyaDeputyRightBar";
import { getLeaders } from "./sanity/sanity";

export default function MuftiyaDeputyMainPage() {
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
          return data.LeaderOf === "Zam";
        }
      );
      setData(DeputyData);
    };

    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full">
      {data.length > 0 && <MuftiyaDeputyRightBar data={data} />}
    </div>
  );
}
